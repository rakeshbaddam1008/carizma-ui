//  To get Make --> Get Request, URI -->    2022
const VechilesResponse = ["Toyota", "Honda", "Acqura", "Toyoto"];

// To get Model --> Get Request,  URI -->/carizma/vehicle-info/model?year=2022&make=Toyota
// Sample response
const modelData = ["RAV4", "4Runner"];

// To get Trim --> Get Request, URI --> /carizma/vehicle-info/trim?year=2022&make=Toyota&model=RAV4
const trimData = ["LE", "XLE"];
const cors = require("cors");

var express = require("express");
var app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.get(
  "/carizma/consumer-api/MOHAMAD-LPDHNQA4M/:state/:registerationNumber",
  function (req, res) {
    res.send({
      error: false,
      query_time: "0.0012s",
      code: 200,
      message: "API OWNED AND CREATED BY LICENSEPLATEDATA.COM",
      requestIP: "2603:6080:4104:4216:18da:541c:81e1:16b2",
      query: "NJNT01:FL",
      request_left: 4980,
      licensePlateLookup: {
        vin: "2T2ZZMCA9KC134213",
        year: "2019",
        make: "Lexus",
        model: "RX",
        trim: "350",
        name: "2019 Lexus RX",
        engine: "3.5L V6 DOHC 24V",
        style: "SUV",
        transmission: "Automatic",
        driveType: "FWD",
        fuel: "Gasoline",
        color: { name: "Silver", abbreviation: "SIL" },
        image: { imageFound: false, url: null },
      },
    });
  }
);

//  To get Make --> Get Request, URI --> /carizma/vehicle-info/make?year=2022
app.get("/carizma/vehicle-info/make/:year", (req, res) => {
  return res.send(Object.values(VechilesResponse));
});
//  To get Make --> Get Request, URI --> /carizma/vehicle-info/make?year=2022
app.get("/carizma/vehicle-info/make", (req, res) => {
  return res.send(Object.values(VechilesResponse));
});

//  To get Make --> Get Request, URI --> /carizma/vehicle-info/make?year=2022
app.get("/carizma/vehicle-info/make", (req, res) => {
  return res.send(Object.values(VechilesResponse));
});

// To get Model --> Get Request,  URI -->/carizma/vehicle-info/model?year=2022&make=Toyota
app.get("/carizma/vehicle-info/model/:year/:make", (req, res) => {
  const query = req.query; // query = {sex:"female"}
  console.log(query);
  const params = req.params; //params = {id:"000000"}
  console.log(params);

  return res.send(modelData);
});

// To get Model --> Get Request,  URI -->/carizma/vehicle-info/model?year=2022&make=Toyota
app.get("/carizma/vehicle-info/model", (req, res) => {
  const query = req.query; // query = {sex:"female"}
  console.log(query);
  const params = req.params; //params = {id:"000000"}
  console.log(params);

  return res.send(modelData);
});

// To get Trim --> Get Request, URI --> /carizma/vehicle-info/trim?year=2022&make=Toyota&model=RAV4
app.get("/carizma/vehicle-info/trim/:year/:make/:model", (req, res) => {
  return res.send(modelData);
});
// To get Trim --> Get Request, URI --> /carizma/vehicle-info/trim?year=2022&make=Toyota&model=RAV4
app.get("/carizma/vehicle-info/trim", (req, res) => {
  return res.send(modelData);
});

app.get("/carizma/us-states-region", (req, res) => {
  return res.send([
    {
      code: "AS",
      name: "American Samoa",
      region: null,
    },
    {
      code: "DC",
      name: "District of Columbia",
      region: null,
    },
    {
      code: "FM",
      name: "Federated States of Micronesia",
      region: null,
    },
    {
      code: "GU",
      name: "Guam",
      region: null,
    },
  ]);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
