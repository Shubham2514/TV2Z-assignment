import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


function Login(prop){
    const navigate = useNavigate();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [passwordType,setPasswordType] = useState("password");
    const [eyeImage,setEyeImage] = useState("./image/Eye-off.svg");
    const regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   function regChecker(){
       if(regEmail.test(username) && regPassword.test(password)){
           return true;
       }
       else{
           alert("wrong credentials");
       }
   }

   function eyeHandler(){
       if(passwordType === "password"){
       setPasswordType("text");
       setEyeImage("./image/Eye-on.svg");
       }
       else{
           setPasswordType("password");
           setEyeImage("./image/Eye-off.svg");
       }
   }

   useEffect(()=>{
     if(localStorage.getItem("email") && localStorage.getItem("password")){
        setUsername(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
     }
   },[])

   function check(){
    let x = regChecker();
       if(x){
           localStorage.setItem("email",username);
           localStorage.setItem("password",password);
         prop.auth();
         navigate("/detail");
       }
   }

    return(<>
    <header className="header">
        <div className="header-left">
         <img id="logo" src="./image/Logo.svg" alt="" />
          </div>
          <div className="header-right">
            <span id="name">LOG IN</span>
          </div>
        </header>
    <div className="main-div">
    <div id="login-div">
    <h2>LOG IN</h2>
    <p>Enter your credentials to login to TV2Z</p>
    <div className="input-div">
    <input id="email" type="email" placeholder="Email" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <div className="password-div">
    <input type={passwordType} name="" placeholder="Password"  id="password" value={password} onChange={((e)=>setPassword(e.target.value)) }/>
    <img src={eyeImage} id="eye" onClick={eyeHandler} alt="" />
    </div>
    </div>
    <div className="text-div">
    <span>Forget password?</span>
    <span className="bold-span">Click here!</span>
    </div>
    <div className="text-div">
        <span>By clicking on 'Log in' button,you are hereby agreeing to our </span>
        <span className="bold-span">Privacy Policy </span>
        <span>and</span>
        <span className="bold-span"> Terms & Conditions</span>
    </div>
    <button id="login-btn" onClick={check}>LOG IN</button>
    <div className="text-div">
        <span>Don't have an account?</span>
        <span className="bold-span">Sign up!</span>
    </div>
    </div>
    </div>
    </>)
}

export default Login;
