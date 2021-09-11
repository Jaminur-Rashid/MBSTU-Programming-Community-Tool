import React, { useState } from 'react';
import {GiTrophyCup} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import { SidebarData } from './SidebarData';
import sidebarData from '../data/SidebarData';
import './Dashboared.css';
import { IconContext } from 'react-icons';
import AddAssignment from './AddAssignment';
import AddClass from './AddClass';
import AssignmentNotice  from './Data';
import AddContest from './AddContest';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import InterviewExperience from './InterviewExperience';
/*
    component for the dashbored of the application
    not fully completed
*/
function Dashboared() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
        <div className="sidebar">
            <Link to="/addNewClass">About</Link>
            <a class="active" href="/"><i  id="chk" className="fa fa-fw fa-home" style={{color:'#003366',marginRight:'15px'}}></i>Home</a>
            <a href="/addContest" ><i className="fas fa-trophy" style={{color:'#003366',marginRight:'15px'}}></i>Add Contest</a>
            <a href="/data"><i className="fas fa-table" style={{color:'#003366',marginRight:'15px'}}></i >Contest Data</a>
            <a href="/addNewClass"><i className="fas fa-align-justify"style={{color:'#003366',marginRight:'15px'}}></i >Add Class</a>
            <a href="/assignment"><i className="fas fa-code" style={{color:'#003366',marginRight:'15px'}}></i>Assignment</a>
            <a href="/addContest"> <i className="fab fa-blogger" style={{color:'#003366',marginRight:'15px'}}></i> Add Blog</a>
            <a href="/interviewExperience"><i className="fal fa-trophy"  style={{color:'#003366',marginRight:'15px'}}></i>Interview Experience</a>
            <a href="/addContest"><i className="fal fa-trophy-alt"  style={{color:'#003366',marginRight:'15px'}}></i>Add Contest</a>
            <a href="/addContest"><i className="fas fa-code" style={{color:'#003366',marginRight:'15px'}}></i>User</a>
            <a href="/addContest"><i className="fas fa-graduation-cap" style={{color:'#003366',marginRight:'15px'}}></i>Alumni</a>
            <a href="/addContest"><i className="fas fa-code" style={{color:'#003366',marginRight:'15px'}}></i>Add Contest</a>
            <a href="/assignment">Add Assignment</a>
         </div>
    <div className="content">
        <div style={{backgroundColor:"#003366",width:'100%',height:'80px',position:'fixed'}}>
            <i className="fa fa-bars"  style={{color:'white',marginLeft:'20px',marginTop:'20px'}}></i>  <span><i className="far fa-user-circle" style={{color:'white',marginLeft:'600px',marginTop:'20px'}}></i> </span> <span style={{color:'white'}}>Jaminur Rashid</span>
            </div>
            <h2>Responsive Sidebar Example</h2>
          
            <Router>
              <Switch>
              <Route exact path="/addNewClass" component={AddClass}/>
              <Route exact path="/addContest" component={AddContest}/>
              <Route exact path="/data" component={AssignmentNotice}/>
              <Route exact path="/assignment" component={AddAssignment}/>
              <Route exact path="/interviewExperience" component={InterviewExperience}/>
              </Switch>
          </Router>
            <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
            <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
            <h3>Resize the browser window to see the effect.</h3>

            <div className="dataContainer" style={{backgroundColor:'#ffffff',height:'1000px'}}>
              Container
            </div>
      </div>
              <Switch>
              <Route exact path="/addNewClass">
               <AddClass/>
              </Route>
              </Switch>
   </div>
  );
}

export default Dashboared;