
/*
    component for displaying a codeforce user
    problem solving states, rating changes graph,
     solved problem link and others states
*/
import React, { Component } from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import "./UserDetails.css"
import Chart from "react-google-charts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class UserDetails extends React.Component {
  state={
      userSubmission:[],
      ratArr:[]
  }
  /*
      function that returns a codeforces user contest data
  */
  getUserRatingData(){
    let ratURL="https://codeforces.com/api/user.rating?handle=";
    ratURL=ratURL+this.props.name;
    console.log("It works");
    axios.get(ratURL)
      .then(response=>{
      this.setState({
        ratArr:response.data.result
      })
    })
  }
  componentDidMount() {
    /*
        get submission of the specified user
    */
      let subURL="https://codeforces.com/api/user.status?handle=";
      subURL=subURL+this.props.name;

      axios.get(subURL)//get a particcular user all submission data 
      .then(response=>{
      this.setState({
        userSubmission:response.data.result
      })
    })
    this.getUserRatingData();
  }
  getURL(prbUrl){
    return(prbUrl);
  }
  render() {
      const {userSubmission}=this.state
      const {ratArr}=this.state
      const {userHandle}=this.props
      console.log(userSubmission)
      let myData=[['lang aa','totcount']];
      let userRatingData=[['ContesNo','Rating']];
      let prbIndexCountData=[["Index","Total Solved"]];
      let numbers=["1538-A","dd","dd","d","ss","dd","dd","fsdd","dsfg","dsse","d","ss","dd","dd","fsdd","dsfg","dsse","1538-A","dd","dd","d","ss","dd","dd","fsdd","dsfg","dsse","d","ss","dd","dd","fsdd","dsfg","dsse","1538-A","dd","dd","d","ss","dd","dd","fsdd","dsfg","dsse","d","ss","dd","dd","fsdd","dsfg","dsse","1538-A","dd","dd","d","ss","dd","dd","fsdd","dsfg","dsse","d","ss","dd","dd","fsdd","dsfg","dsse"];
      /*
      Create a array of object to store
      each solved problem contestId and index to get problem url next
      */
      let urlObjId=[];
      let urlObjIndx=[];
      let totSolve=0;
      let mp=new Map();//to count total solved problem
      let langCount=new Map();//to count frequency of each languages
      let prblembIndexCount=new Map();
      console.log(typeof(userSubmission));
      for (var i =0;i<userSubmission.length;i++){
        let unId=userSubmission[i].contestId+userSubmission[i].problem.name;
        let pTag="";
        for (let j=0;j<userSubmission[j].problem.tags.length;j++){
          if(j!==0){
            pTag=pTag+'-';
            pTag+=userSubmission[i].problem.tags[j];
          }
          else{
            pTag+=userSubmission[i].problem.tags[j];
          }
        }

        console.log(pTag)
        if(mp.has(unId)===false && userSubmission[i].verdict==="OK"){
          mp.set(unId,"ac");
          totSolve++;
          urlObjId.push(userSubmission[i].problem.contestId);
          urlObjIndx.push(userSubmission[i].problem.index);
          /*
           count number of problems solved by each language
          */
          let prbLanguage=(userSubmission[i].programmingLanguage);
          if(langCount.has(prbLanguage)){
            langCount.set(prbLanguage,langCount.get(prbLanguage)+1);
          }
          else{
            langCount.set(prbLanguage,1);
          }
          //frequency counts ends here
          if(prblembIndexCount.has(userSubmission[i].problem.index)){
            prblembIndexCount.set(userSubmission[i].problem.index,prblembIndexCount.get(userSubmission[i].problem.index)+1);
          }
          else{
            prblembIndexCount.set(userSubmission[i].problem.index,1);
          }
          /*
          push those problems id and index which has been accepted
          */
          //urlObj.push({contestID:userSubmission[i].contestId,problemIndex:userSubmission[i].problem.index});
          
        }
      }
      console.log("url object is idx"+urlObjIndx);
      console.log("url object is Id "+urlObjId);
      for (let [k, v] of langCount) {
        myData.push([k,v]);
     }
      console.log("Total solve "+totSolve);
      console.log(userSubmission)
      console.log(ratArr);
      for (let [k, v] of prblembIndexCount) {
        console.log("Key: " + k);
        console.log("Value: " + v);
        prbIndexCountData.push([k,v]);
    }
      //console.log(userSubmission.length/totSolve);
      let avgAttempt;
      if(totSolve!==undefined && userSubmission.length!==undefined){
         avgAttempt=(userSubmission.length/totSolve).toPrecision(5);
      }
      /*
        Calculate maxUp ,down, max rating,minRating in codeforces
      */
        var maxUp=0;
        var maxDown=0;
        var maxRat=-999999;
        var minRat=99999999;
        let bestRank=999999;
        let worstRank=1;
        let dif=0;
        //let avgAttempt=(userSubmission.length/totSolve);
        for(let i=1;i<ratArr.length;i++){
          let curRat=ratArr[i].newRating;
          let oldRat=ratArr[i].oldRating;
          let bRank=ratArr[i].rank;
          dif=(curRat-oldRat);
          console.log("Dif : "+dif);
          if(dif>=0 && dif>maxUp){
            maxUp=Math.abs(dif);
          }
          else{
            if(Math.abs(dif)>maxDown){
              maxDown=Math.abs(dif);
            }
          }
          if(curRat>maxRat){
            maxRat=curRat;
          }
          else if(curRat<minRat){
            minRat=curRat;
          }
          if(bRank<bestRank){
            bestRank=bRank;
          }
          if(bRank>worstRank){
            worstRank=bRank;
          }

      //console.log("check rat datatype "+typeof(ratArr));
      /*
      store user rating data in userRatingData array
      */
      for(let i=0;i<ratArr.length;i++){
        let nRating=ratArr[i].newRating;
        userRatingData.push([i,nRating]);
       }
     }
     console.log("max "+maxRat+" min "+minRat+" maxUp "+maxUp+" maxdown "+maxDown);
     /*
     Solved problem pagination calculation
     */
     let totalPage=totSolve/20;
       console.log("Total page : "+totalPage);
        if(ratArr.length!==0 && userSubmission.length!==0){
          return(
            <div className="detailsContainer">
               <div className="flex-container1">
          {/* for displaying User Solved statistics*/}
               <div>
                  <ListGroup as="ul">
                  <ListGroup.Item as="li" active  style={{backgroundColor:'#111f52',}} >
                  <h6>{this.props.name} Statistics</h6>
                  </ListGroup.Item>
                  <ListGroup.Item  as="li">Total Solve :           <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{totSolve}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li">Max Rating :             <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{maxRat}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li">Min rating :             <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{minRat}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li">MaxUp Rating  :          <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{maxUp}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li">MaxDown Rating :         <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">-{maxDown}</Badge>{' '}</ListGroup.Item>
                  </ListGroup>
               </div>
               {/*for displaying User contest statistics*/ }
              <div>
                  <ListGroup as="ul">
                  <ListGroup.Item as="li" active  style={{backgroundColor:'#111f52',}} >
                  Contest States of {this.props.name}
                  </ListGroup.Item>
                  <ListGroup.Item  as="li" style={{fontSize:'12px'}}>Total Contest :           <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52', justifyContent: 'flex-end'}} variant="danger">{ratArr.length}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li" style={{fontSize:'12px'}}>Best rank:             <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{bestRank}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li" style={{fontSize:'12px'}}>Worst Rank             <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{worstRank}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li" style={{fontSize:'12px'}}>MaxUp Rating  :          <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">{maxUp}</Badge>{' '}</ListGroup.Item>
                  <ListGroup.Item as="li" style={{fontSize:'12px'}}>MaxDown Rating :         <Badge style={{float:'right',marginRight:'50px',backgroundColor:'#111f52',} } variant="danger">-{maxDown}</Badge>{' '}</ListGroup.Item>
                  </ListGroup>
              </div>
              <div>
                  <ListGroup.Item as="li" active  style={{backgroundColor:'#111f52',}} >
                  <h6>{this.props.name} Submission Chart</h6>
                  </ListGroup.Item>
                  <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={myData}

                  options={{
                    title: 'Used Languages ',
                    colors: ['#003F5C', '#FB0007', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                    chartArea: {width: 300, height: 3000},
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </div>  
              {/*User codeforces rating graph*/}
            <div>
                <ListGroup.Item as="li" active  style={{backgroundColor:'#111f52',}} >
                <h6>{userHandle} Rating Graph</h6>
                </ListGroup.Item>
                  <Chart
                  width={'600px'}
                  height={'300px'}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={userRatingData}
                  options={{
                    hAxis: {
                      title: 'Time',
                    },
                    vAxis: {
                      title: 'Rating',
                    
                    },
                    colors: ["red"],
                    chart: {
                      title: 'User Rating Graph',
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                  />
             </div>
             {/*Count of each type of problem solved by a user like using bar chart*/}
             <div>
              <ListGroup.Item as="li" active  style={{backgroundColor:'#111f52',}} >
              <h6>{this.props.name} Count Solve of Each Type</h6>
              </ListGroup.Item>
              <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={prbIndexCountData}
                  options={{
                    // Material design options
                    chart: {
                      title: 'User Solved History',
                    },
                    colors: ["#11123d"],
                  }}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                  />
            </div>
            </div>
            {/*User solved problem Linked */}
            <div>
                <p style={{textAlign:'center',color:'seagreen'}}>{this.props.name} Solved Problems</p>
                <div className="solvedPrbDetails">
                  
                  {urlObjId.map((per,index)=> (
                  <div key={per.toString()} >
                  <div> 
                  <a href={this.getURL(("https://codeforces.com/problemset/problem/"+urlObjId[index]+'/'+urlObjIndx[index]))} key={per.toString()}>{per}-{urlObjIndx[index]} </a>
                  </div>
                  </div>
              ))}
                </div>
                </div>
                </div>
                  );
                }
                else{
                  /*
                      If no data is rendered the show loading....
                  */
                  return(
                    <div >
                      <h6  style={{textAlign:'center',marginTop:'200px'}}><Spinner animation="border" variant="danger" /></h6>
                      <h1 style={{color:'red',textAlign:'center',}}>
                        Loading.....
                      </h1>
                    </div>
          );
        }
        
  }
}

  export default UserDetails;