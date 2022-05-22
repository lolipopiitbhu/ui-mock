//'use strict';
import {saveDataApi} from './save-data-api.js';
import express from 'express';

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! This is ui get route');
});

app.post('/', (req, res) => {
  saveDataApi(req.body)
  res.json({result: 'data save requested from ui'});
})

app.listen(PORT, HOST);
console.log(`UI is Running on http://${HOST}:${PORT}`);