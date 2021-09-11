/*
  app.js file
  containes all the components route
*/
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from'./Components/Footer'
import Slideshow from './Components/Slideshow'
import Home from './Components/Home';
import Peoples from './Components/Peoples';
import Staff from './Components/Staff';
import Contact from './Components/Contact'
import About from './Components/Leaderboared';
import Gallery from './Components/Gallery';
import { Component } from 'react';
import DemoComponent from './Components/DemoComponent';
import Leaderboared from './Components/Leaderboared';
import Alumni from './Components/Alumni';
import BscProgram from './Components/BscProgram';
import PropsEx from './Components/PropsEx1';
import PeopleDetails from './Components/PeoplesDetails';
import MscProgram from './Components/MscProgram';
import SignIn from './Components/SignIn';
import PeoplesDetails from './Components/PeoplesDetails';
import UserDetails from './Components/UserDetails';
import Check from './Components/Check';
import AddClass from './Components/AddClass';
import AddContest from './Components/AddContest'
import AddAssignment from './Components/AddAssignment';
import DisplayAssignment from './Components/DisplayAssignment'
import AssignmentDetails from './Components/AssignmentDetails'
import DisplayingAssignment from './Components/AssignmentDetails'
import  Data from './Components/Data'
import UpcomingContest from './Components/UpcomingContest'
import ContestPerformenceDetails from './Components/ContestPerformenceDetails'
import Dashboared from './Components/Dashboared'
import InterviewExperience from './Components/InterviewExperience';
import LandingPage from './Components/LandingPage';
import ContestData from './Components/ContestData';
import ClassData from './Components/ClassData'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
     {/*  <DemoComponent/>*/}
      <Switch>
      <Route  path="/" exact component={Home}/>
      <Route path="/peoples" exact component={Peoples}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/contact-us" component={Contact}/>
      <Route exact path="/leaderboared" component={Leaderboared}/>
      <Route exact path="/staff" component={Staff}/>
      <Route exact path="/alumni" component={Alumni}/>
      <Route exact path="/bsc" component={BscProgram}/>
      <Route exact path="/msc" component={MscProgram}/>
      <Route exact path="/detail" component={PeoplesDetails }/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/example1" component={PropsEx}/>
      <Route exact path="/userdetailss" component={UserDetails}/>
      <Route exact path="/check" component={Check}/>
      <Route exact path="/addNewClass" component={AddClass}/>
      <Route exact path="/addContest" component={AddContest}/>
      <Route exact path="/data" component={Data}/>
      <Route exact path="/assignment" component={AddAssignment}/>
      
      <Route exact path="/singleAssignment" component={DisplayAssignment}/>
      {/*<Route exact path="/myAssignment" component={AssignmentDetails}/>*/}
      <Route exact path="/dassign" component={DisplayingAssignment}/>
      <Route path='/show-book/:id' component={AssignmentDetails} />
      <Route path='/upcomingContest' component={UpcomingContest} />
      <Route path='/show-contest-data/:id' component={ContestPerformenceDetails}/>
      <Route exact path="/dashboared" component={Dashboared}/>
      <Route exact path="/interviewExperience" component={InterviewExperience}/>
      <Route exact path="/landingPage" component={LandingPage}/>
      <Route exact path="/contestData" component={ContestData}/>
      {/*Route for ClassData Component*/}
      <Route exact path="/classData" component={ClassData}/>
      <Route
          path="/route2"
          component={() => {
            var link = document.createElement("a");
            link.href = "https://www.google.com";
            document.body.appendChild(link);

            link.click();
            return null;
          }}
        />
     </Switch>
     <Footer/>
    </Router>

  );
}

export default App;
