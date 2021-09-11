import React from 'react'
import DemoComponent from './DemoComponent'
import './LandingPage.css'
import 'font-awesome/css/font-awesome.min.css';
import shareIcon from './../assets/share.png';
import rank from './../assets/Rank.png';
import calender from './../assets/calendar.png';
import data from './../assets/Data.png';
import blog from './../assets/blog.png';
import coding from './../assets/coding.png';
import acm from './../assets/Acm.PNG';
import acm1 from './../assets/Coding1.png';
import programming from './../assets/programming.jpg';

const LandingPage=()=>{
    return(
        <div>
           <DemoComponent/>
           {/*backgroundImage: `url(${programming})`,*/}
           <div className="mainSection">
            <div>
            <img src={acm1} alt="Logo" style={{width:'100%',height:'300px'}} /> 
            </div>
            <div>
            <h3 style={{color:'#003366',marginTop:'20%'}}>MBSTU Programming Community</h3>
            <h6>A Platform For The Students</h6>
            </div>
           </div>
           
           <div className="landingFlexContainer">
               <div>
               <img src={rank} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>Show Programming Leaderbored</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                   Programming Leaderbored  based  on the 
                   rating    of codeforces contest in descending 
                   order of the contest rating.User hanle color 
                   based on the rating.
               </p>
               </div>
               <div>
               <img src={data} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>View User Programming Details</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                     Display user problem solving details, rating graphs,
                      contest data, solved problems links etc. using
                      Google React charts

              </p>
               </div>
               <div>
               <img src={calender} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>View Class Update</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                    Juniors can get programing class updates in 
                    one place.Will make the camp more productive  
               </p>
                </div>
               <div>
               <img src={coding} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>Find Programming Assignment</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                     Assign Problems assignment based on the class
                     topic from Uva Online Judge 
               </p>
               </div>
               <div>
               <img src={shareIcon} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>Share Interview Experience</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                    Share your Interview Experience as a 
                    blog to give the juniors idea 
               </p>

               </div>
               <div>
               <img src={blog} alt="Logo"  style={{color:'#003366',marginLeft:'20%'}}/>
               <h1 style={{color:'#273044',fontSize:'100%',fontWeight:'bold'}}>Write Blog</h1> 
               <p style={{color:'#273044',fontSize:'90%'}}>
                    Write educative blog for the 
                    students of MBSTU CSE.
                </p>
               </div>
           </div>
        </div>
    );
}
export default LandingPage;