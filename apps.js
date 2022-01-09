const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
var path = require('path');

require("dotenv").config();

const atuhRouter = require("./routers");

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
router.use('/sekolah', atuhRouter);
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
