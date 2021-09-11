import React ,{useEffect,useState,Component}from "react";
import { NavLink ,Link} from "react-router-dom";
import UserDetails from "./UserDetails";
import './UpcomingContest.css'
import axios from 'axios'

   class UpcomingContest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contestData: []
      };
    }
    componentDidMount(){
     // console.log("Print id: " + this.props.match.params.id);

      axios
      .get('https://codeforces.com/api/contest.list?gym=false')
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
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
    getProblems(id,problemIndex){
      
      
    }
    render(){
        const {contestData}=this.state
      if(contestData.length!==0){
        console.log("Contest Data : "+contestData.result[0].id)
        console.log("Contest Data : "+contestData.result[0].name)
      }
      return(
        <div className="mainDiv">
          <div className="child">
              <h6>Codeforces contest schedule</h6>
          </div>
        </div>
      )
    }
  }
  export default UpcomingContest;
  /*
  {p.map((per,index)=> (
             <p key={per.toString()} >
                 <a href={"https://codeforces.com/problemset/problem/"+per} key={per.toString()}>Link</a>
             </p>
          ))}
  */