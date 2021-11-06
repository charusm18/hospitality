module.exports = () => {
  const express = require('express');
  const router = express.Router();
  var MongoClient = require('mongodb').MongoClient;
  const dbConfig = require('../config/database.config');

  /**** Routes ****/
  router.get('/showrequests', async (req, res) => {
    console.log('showing', dbConfig.url);
    MongoClient.connect(
      dbConfig.url,
      { useNewUrlParser: true },
      function (err, db) {
        if (err) throw err;
        var dbo = db.db('dashboardInfo');
        dbo
          .collection('customerRequests')
          .find({})
          .toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
          });
      }
    );
  });

  router.post('/insert', function (req, res) {
    console.log('requesrtion', req.body);
    var myData = new entry(req.body);
    MongoClient.connect(
      dbConfig.url,
      { useNewUrlParser: true },
      function (err, db) {
        if (err) throw err;
        var dbo = db.db('dashboardInfo');
        dbo
          .collection('customerRequests')
          .insertOne(myData, function (err, res) {
            console.log(myData);
            if (err) throw err;
            console.log('1 document inserted');
            db.close();
          });
      }
    );
  });

  return router;
};
