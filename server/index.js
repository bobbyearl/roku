const express = require('express');
const request = require('request-promise');
const cors = require('cors');
const path = require('path');

const app = express();

const tvs = [
  {
    name: 'Living Room',
    value: '192.168.4.44'
  },
  {
    name: 'Carport',
    value: '192.168.4.78'
  },
  {
    name: 'Reeves',
    value: '192.168.4.77'
  },
  {
    name: 'William',
    value: '192.168.4.23'
  }
].map((tv, idx) => {
  tv.id = idx;
  return tv;
});

const port = process.env.PORT || 80;
const staticPath = path.resolve(__dirname, '../ui/dist/roku');
const staticFile = path.join(staticPath, 'index.html');

app.use(cors());

app.get('/api/tvs', (req, res) => res.json(tvs));

app.post('/api/tvs/:id/keypress/:key', async (req, res) => {
  if (!tvs[req.params.id]) {
    return res.json({
      error: 'TV ID is invalid'
    });
  }

  request.post(
    `http://${tvs[req.params.id].value}:8060/keypress/${req.params.key}`,
    {},
    (apiErr, apiRes) => res.json(apiErr ? { error: apiErr.message } : apiRes)
  );
});

app.use('/', express.static(staticPath));

app.get('*', (req, res) => res.sendFile(staticFile));

app.listen(port, () => {
  console.log(`Successfully listening on port ${port}.`)
});
