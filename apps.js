const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

var path = require('path');

require("dotenv").config();

const {sekolahRouter,siswaRouter} = require("./routes");

const router = express.Router();
var app = express();

app.use(cors());
app.use(express.json());

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: "8mb",
}));

router.use(function (req, res, next) {
  next();
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api kita berkarya',
      version: '1.0.0',
      desctiption:'yuk bisa yuk'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      }
    ],
  },
  apis: ['./routes/*'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/', sekolahRouter);
router.use('/', siswaRouter);


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));
app.use(process.env.PREFIX, router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next();
});
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

// error handler

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running books service");
});
