module.exports = () => {
  const express = require('express');
  const router = express.Router();

  /**** Routes ****/
  router.get('/hello', async (req, res) => {
    res.json({ msg: 'Hello, world!' });
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  app.post('/stored', (req, res) => {
    console.log(req.body);
    db.collection('quotes').insertOne(req.body, (err, data) => {
      if (err) return console.log(err);
      res.send('saved to db: ' + data);
    });
  });
  return router;
};
