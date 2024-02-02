const express = require('express')
const bodyParser = require('body-parser')
const LoginUser = require('../controller/login.controller')
const CreateUserController = require('../controller/createUser.controller')
const cors=require('cors')
const CreateEvent = require('../controller/createEvent.controller')
const GetEvent = require('../controller/getEvent.controller')
const GetUpcomingEvent = require('../controller/UpcomingEvent.controller')
const GetCompletedEvent = require('../controller/getCompletedEvent.controller')
const GetParticipatedEventController = require('../controller/getParticipatedEvent')
const RegisterEventController = require('../controller/register.controller')
const eventRouter=express.Router()

eventRouter.use(bodyParser.urlencoded({ extended: false }))
eventRouter.use(bodyParser.json())

eventRouter.get('/getEvent',cors(), GetEvent) 
eventRouter.get('/getCompletedEvent',cors(), GetCompletedEvent) 
eventRouter.get('/getUpcomingEvent',cors(), GetUpcomingEvent) 
eventRouter.post('/createEvent',cors(), CreateEvent) 
eventRouter.post('/register/:userId',cors(), RegisterEventController) 
eventRouter.get('/participatedEvent/:userId',cors(), GetParticipatedEventController) 

module.exports=eventRouter