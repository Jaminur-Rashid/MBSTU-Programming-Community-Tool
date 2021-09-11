import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Component } from 'react';
import './Home.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import CardComponent from '../Components/CardComponent';
import Slideshow from '../Components/Slideshow';
import Welcome from '../Components/Welcome';
import Messages from '../Components/Messages';
import DemoComponent from './DemoComponent';
function Home() {
    return(
        <div>
            <DemoComponent/>
            <Slideshow/>
            <Welcome/>
            <Messages/>
        </div>
   );
}
export default Home;