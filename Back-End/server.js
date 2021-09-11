/*
    File Name  : Sever.js file
    created on : 3-4-2020
    @author    : jaminur rashid
*/
const express=require('express')
var cors = require('cors')
const app=express()
const port=5000||3000
//const dbUrl='mongodb+srv://jaminur:jaminurrashid16034@cluster0.qoupk.mongodb.net/Final-Year-Project-Database?retryWrites=true&w=majority';

console.log("Before")
/*
    connecting back end with mongodb atlas
*/
require('./../db/connection');

app.use(express.json());
app.use(cors())

/*
    import authentication router here
*/
app.use(require('./../router/authentication'));
/*
    import classSchedule router here
*/
app.use(require('./../router/classSchedule'));

/*
    import newContestPerformence router here
*/
app.use(require('./../router/contestPerformence'));
/*import classAssignment*/
app.use(require('./../router/classAssignment'));
/*
    import InterviewExperience router here
*/
app.use(require('../router/InterviewExperience'));
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
