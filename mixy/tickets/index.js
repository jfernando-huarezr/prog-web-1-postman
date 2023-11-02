"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var show_1 = require("./routes/show");
var app = (0, express_1["default"])();
app.use((0, body_parser_1.json)());
app.use(show_1.showTicketRouter);
app.listen(3000, function () {
    console.log('microservice is up running on port 3000');
});
