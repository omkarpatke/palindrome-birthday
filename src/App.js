import React ,{useState} from 'react';
import loadImg from './images/loadImg.gif';
import './App.css';


var date;
var newoutput="";
var datesInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

var setThemeFlag=0;

const App = ()=>{
const [outputDiv , setOutputDiv] = useState('');

function clickHandler(){
  if(date){
    setOutputDiv(<img src={loadImg} style={{height:'13vh',width:'10vw' ,marginTop:'1rem'}}></img>)
    setTimeout(() =>{
      cheakPalindrome();

    },3000)
  }else{
    setOutputDiv(<p>Please fill date feild</p>)
  }
}

function cheakPalindrome(){
  setOutputDiv(<p>This is the output</p>)
}


  return(
    <div class="container">
      <h2 class="heading">Enter your birthdate and we will tell you if your birthdate is a palindrome</h2>
      <p class="para1">This app checks your birthdate in 4 formats yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy, m-dd-yyyy</p>
      <p class="para2">e.g. if your birthdate is 01 Aug 1995, then app will check for 19950801, 01081995, 080195, 1081995</p>
      <input type="date" class="input" onChange={(e)=> {date = e.target.value; }}></input>
        <button class="cheakbtn" onClick={clickHandler}>Cheak</button>
        <div class="output">{outputDiv}</div>
          <div class="footer"><ul><li><a target="_blank" href="https://www.linkedin.com/in/omkar-patke-a61b221ab/">Linkedin</a>
          </li>
          
          <li><a target="_blank" href="https://twitter.com/Omkar80315186">Twitter</a></li>
          <li><a target="_blank" href="https://omkar-patke.netlify.app/">Portfolio</a></li>
          <li><a target="_blank" href="https://github.com/omkarpatke">Github</a></li></ul>
          <div class="footer-text">  © | 2020 | OmkarPatke</div>
          </div>
          </div>
  )
}

export default App;