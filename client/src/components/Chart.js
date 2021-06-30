import { useEffect } from "react";
const Chart = ({ iter }) => {
  const prepareChart = (datax) => {
    const dataArray = [];
    const timeStamp = [];
    for (let index = 0; index < datax.waveform.wf_values.length; index++) {
      const element = datax.waveform.wf_values[index];
      const time = datax.waveform.timestamp + datax.waveform.dt * index;

      new Date(time).getTime();

      dataArray.push(element);
      timeStamp.push(time);
    }
    console.log(timeStamp);
    //eslint-disable-next-line no-undef
    Highcharts.chart(datax.name, {
      title: {
        text: null,
      },

      yAxis: {
        title: {
          text: "Veri Ivmesi",
        },
      },

      xAxis: {
        title: {
          text: "Time",
        },
        labels: {
          format: "{value:%M-%S}",
          rotation: 45,
          align: "left",
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
          name: datax.name,
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
