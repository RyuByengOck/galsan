const express = require('express');
const path = require('path');
const router = require('./routes/router');
const morgan = require('morgan'); //http 로그를 확인할 수 있도록 morgan 설정

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));

app.use('/', router);

app.use(morgan('combined'));

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});

