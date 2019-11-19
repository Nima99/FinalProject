const path = require("path");
const router = require("express").Router();
const db = require("../models");


// const apiRoutes = require("./api");

// API Routes
router.get("/api/vehicleInfo", function(req, res){
   console.log(req.query);
    db.VehicleInfo.findOne(req.query).then(function(data){
res.json(data);
    })
   });

router.get("/api/vehicleData", function(req, res){
     
//

    db.VehicleInfo
    .create({
        make:"TOYOTA",
        model:"TUNDRA",
        year:2014,
        rating:3
    }).then(function(){
        res.send("created");
    })
});


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
