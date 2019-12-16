const express = require('express');
const request = require('request-promise');
const cors = require('cors');

const app = express();

app.use(cors());

app.post('/api/:key', async (req, res) => {
  request.post(
    `http://192.168.1.80:8060/keypress/${req.params.key}`,
    {},
    (apiErr, apiRes, apiBody) => {
      if (apiErr) {
        res.error(apiError);
      } else {
        res.json(apiRes)
      }
    }
  );
});

app.listen(3000);