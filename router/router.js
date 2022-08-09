const { Router } = require("express")
const express = require ("express")
const route = express.Router()
const {timePage,time} = require ("../controller/time")

route.get('/',timePage)
route.post('/',time)


module.exports = route