const express = require('express');
const request = require('request-promise');
const cors = require('cors');
const path = require('path');

const app = express();

const tv = '192.168.1.80';
const port = process.env.PORT || 3000;
const staticPath = path.resolve('../ui/dist/roku');
const staticFile = path.join(staticPath, 'index.html');

console.log(staticPath);

app.use(cors());

app.post('/api/:key', async (req, res) => {
  request.post(
    `http://${tv}:8060/keypress/${req.params.key}`,
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

app.use('/', express.static(staticPath));

app.get('*', (req, res) => res.sendFile(staticFile));

app.listen(port, () => {
  console.log(`Successfully listening on port ${port}.`)
});