const express = require('express');

const app = express();

app.use(express.static('dist'));
app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port ', server.address().port);
});
