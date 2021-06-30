const express = require("express");
const data = require('../data/data.json');

const router = express.Router();

//@router       GET api/data
//desc          Get information of wave data from json file
//access        public
router.get("/", (req, res) => {
  if (data) 
  {
    res.json(data);
  }
  else {
    res.json({"Message :" : " Error while fetching data from datasource"})
  }
 
});


module.exports = router;
