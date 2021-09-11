import React from 'react'
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './DemoComponent.css';
import 'font-awesome/css/font-awesome.min.css';

class DemoComponent extends Component {
  render() {
  return (
    <div>
<div className="navigation">
  <Link>MBSTU CSE LOGO</Link>
  <Link to='/'><i className="fa fa-fw fa-home" style={{color:'#003366'}}></i>Home</Link>
  <Link to='/classData'><i className="fa fa-fw fa-envelope" style={{color:'#003366'}}></i>Classes</Link>
  <Link to='leaderboared'><i className="fa fa-fw fa-envelope" style={{color:'#003366'}}></i>Leaderboard</Link>
  <Link to='/dassign'> <i className="far fa-clock" style={{color:'#003366'}}></i>Assignments</Link>
  <Link to='/alumni'> <i className="far fa-clock" style={{color:'#003366'}}></i>Alumni</Link>
  <Link to='/dashboared'> <i className="fa fa-fw fa-home" style={{color:'#003366',textDecoration:'none'}}></i>Dashboared</Link>
  <Link to="/data" ><i className="fa fa-fw fa-envelope" style={{color:'#003366'}}></i>Assignment</Link>
  <Link to='/contestData'><i className="fas fa-database" style={{color:'#003366'}}></i>Performences</Link>
  <Link to='landingPage'><i className="fas fa-database" style={{color:'#003366'}}></i>Landing</Link>
  
  <div className="dropdownclass">
    <button className="dropbtn">Academics
    </button>
    <div className="dropdown-content">

      <div className="row">
        <div className="column">
          <h3>Undergraduate</h3>
          <Link to='bsc'>Bsc Program</Link>
          <Link to='msc'>Msc Program</Link>
        </div>
        <div className="column">
          <h3>Postgraduate</h3>
          <Link to='msc'>Msc Program</Link>
          <Link to='link2'>Link2</Link>
        </div>
        <div className="column">
          <h3>Category 3</h3>
          <Link to='link1'>Link1</Link>
          <Link to='link2'>Link2</Link>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default  DemoComponent;