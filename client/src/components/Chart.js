import { useEffect } from "react";
const Chart = ({ iter }) => {
  const prepareChart = (iter) => {
    const dataArray = [];

    for (let index = 0; index < iter.waveform.wf_values.length; index++) {
      const element = iter.waveform.wf_values[index];

      const time = iter.waveform.timestamp; //;
      const date = new Date(time);

      var off = date.getTimezoneOffset();
      var waveFormData = [
        date.getTime() - off * 60 * 1000 + iter.waveform.dt * index,
        element,
      ];
      
      dataArray.push(waveFormData);
    }

    //eslint-disable-next-line no-undef
    Highcharts.chart(iter.name, {
      title: {
        text: null,
      },

      yAxis: {
        title: {
          text: "Data Acceleration",
        },
      },

      xAxis: {
        tickInterval: 60,
        type: "datetime",
        title: {
          text: "Time",
          style: {
            color: "#E0E0E3",
            fontSize: "20px",
          },
        },
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },
      series: [
        {
          name: iter.name + " MAX : " + iter.max,
          data: dataArray,
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  };

  useEffect(() => {
    prepareChart(iter);
  }, []);

  return (
    <div>
      <figure className="highcharts-figure" key={iter.name}>
        <div id={iter.name}>{iter.name}</div>
      </figure>
    </div>
  );
};

export default Chart;
