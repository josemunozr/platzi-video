const express = require('express');

const app = express();

app.get('*', (req, res) => {
  console.log(req.url);
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>platzi video</title>
    </head>
    <body>
      <div id="home-container">${req.url}</div>
      <div id="modal-container"></div>
      <script src="http://localhost:9000/js/app.js" charset="utf-8"></script>
    </body>
    </html>  
  `);
  res.end();
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000');
});
