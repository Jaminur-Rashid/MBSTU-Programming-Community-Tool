import React ,{useEffect,useState,Component}from "react";
import { NavLink ,Link} from "react-router-dom";
import UserDetails from "./UserDetails";
import './ContestPerformenceDetails.css'
import DemoComponent from './DemoComponent';
import axios from 'axios'
/*
    Component for showing details of any contest performence data
    in the User Interface

*/
   class ContestPerformenceDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contestData: {}
      };
    }
    /*
        fetching a single contest performence data based 
        on the _id from the server and showing it in UI
    */
    componentDidMount(){
      console.log("Print id: " + this.props.match.params.id);
      axios
      .get('http://localhost:5000/api/v1/contestPerformences/'+this.props.match.params.id)
      .then(res => {
         console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          contestData: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
        console.log(err.response.data)
      })
    }
    /*
        function to slice problem id and index
    */
    
    render(){
      const contestData=this.state.contestData
      if(contestData.length>0){
          console.log("Contest Performrnce Data : "+contestData.contestName)
      }
      return(
        <div className="conPerWrapper">
          <DemoComponent/>
          <div className="child">
          <h5 style={{textAlign:'center'}}>{contestData.contestName} Contest details</h5>
          <p>We are informing that we had perticipated at  : <span style={{color:'red'}}>{contestData.contestName}</span></p>
          <p>Our hounarable coach was Coach Name : <span style={{color:'red'}}>{contestData.coachName} </span>sir </p>
          <p>Among all the teams we managed to secure : <span style={{color:'red'}}>{contestData.contestRank}th position </span></p>
          <p>Contesttent One Name : <span style={{color:'red'}}>{contestData.contesttentOne}</span></p>
          <p>Contesttent Two Name : <span style={{color:'red'}}>{contestData.contesttentTwo}</span></p>
          <p>Contesttent Three Name : <span style={{color:'red'}}>{contestData.contesttentThree}</span></p>
          </div>
        </div>
      )
    }
  }
  export default ContestPerformenceDetails;