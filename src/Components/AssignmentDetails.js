import React ,{useEffect,useState,Component}from "react";
import { NavLink ,Link} from "react-router-dom";
import UserDetails from "./UserDetails";
import './AssignmentDetails.css'
import DemoComponent from './DemoComponent';
import axios from 'axios'
/*
    Component for assigning new problem solving 
    assignment based on the class topic
    from uva online judge and codeforces
*/
   class AssignmentDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        book: {}
      };
    }
    componentDidMount(){
      console.log("Print id: " + this.props.match.params.id);
      axios
      .get('http://localhost:5000/api/v1/Assignment/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
        console.log(err.response.data)
      })
    }
    /*
        function to slice problem id and index
        that takes problms id and problemIndex as string
        and returnes a array containing the problems finding
        url part from codeforces
    */
    getProblems(id,problemIndex){
      console.log("Hey Ist me")
      console.log("Id Is : "+id)
      let arr=[]
      let index=[]
      let tmp1=""
      for(let i=0;i<problemIndex.length;i++){
        if(problemIndex.length===1){
          index.push(problemIndex)
        }
        else if(i===0){
          tmp1=tmp1+problemIndex[i];
        }
        else if(i===problemIndex.length-1){
          tmp1=tmp1+problemIndex[i]
          index.push(tmp1)
        }
        else if(problemIndex[i]==='-'&& tmp1!==""){
          index.push(tmp1);
          tmp1="";
        }
        else{
          tmp1=tmp1+problemIndex[i]
        }
      }
      console.log("Index : "+index)
      let tmp="";
      let j=0
      for(let i=0;i<id.length;i++){
        if(i===0){
          tmp=tmp+id[i];
        }
        else if(i===id.length-1 && tmp!==""){
          tmp=tmp+id[i]
          arr.push(tmp+'/'+index[j])
          j++;
        }
        else if(id[i]==='-'&& tmp!==""){
          arr.push(tmp+'/'+index[j]);
          j++;
          tmp="";
        }
        else{
          tmp=tmp+id[i]
        }
      }
      console.log(arr)
      return(arr)
      
    }
    render(){
      let probURL="https://codeforces.com/problemset/problem/"
      const book = this.state.book;
      console.log("Data: : "+book.topic)
      let p=[]
      let pSerial=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
      if(book.problemId!==undefined && book.problemIndex!==undefined){
        p=this.getProblems(book.problemId,book.problemIndex);
      }
      return(
        <div className="mainDiv">
          {/*Rendering top navigation start */}
          <DemoComponent/>
          {/*Rendering top navigation end */}
          <div className="child">
          <h6 style={{textAlign:"center"}}>Assignment problem on topic {book.topic}</h6>
          <p>
            All are requested to solve the practice problem on topic <span style={{color:'red'}}>{book.topic}  </span>
            before <span style={{color:'red'}}>{book.lastDate}  </span>.If you get stuck get some one help or read the editorial
          </p>
          <p>Date : {book.date}</p>
          <p>Submission Date : {book.topic}</p>
          <p>Problems Id : {p}</p>
          </div>
          {/* Displaying assignment problem in UI start*/}
          <div className="problemContainer">
            <div className="wrapper">
            {p.map((per,index)=> (
             <div>
               <h6 style={{marginLeft:'30px'}}>Problem   {pSerial[index]}</h6><span><p key={per.toString()}  style={{float:"right"}}>
                <a href={"https://codeforces.com/problemset/problem/"+per} key={per.toString()} style={{paddingRight:"20px", textDecoration: 'none',color:'#ffffff'}}><p style={{width:"150px",height:"60px",backgroundColor:'#1ba94c',color:'#ffffff',textAlign:'center',borderRadius:'3px'}}>Solve</p></a>
               </p></span>
               <p style={{color:"red"}}>Codeforces</p>
               <p>Tags : <span style={{color:'#e58784',fontSize:'15px'}} >{book.topic}</span></p>
              </div>
          ))}
            </div>
          </div>
          {/* Displaying assignment problem in UI End*/}
        </div>
      )
    }
  }
  export default AssignmentDetails;