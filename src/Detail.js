import { useEffect, useState } from "react";
import { Navigate, Redirect, useNavigate } from "react-router-dom";
import "./Detail.css";



function Detail({user}){
  const item = ["./image/image1.jpeg","./image/image2.jpeg","./image/image3.jpeg","./image/image4.jpeg","./image/image5.jpeg","./image/image6.jpeg","./image/image7.jpeg","./image/image8.jpeg","./image/image9.jpeg","./image/image10.jpeg"];
  const [item2,setItem2] = useState(["./image/image1.jpeg","./image/image2.jpeg","./image/image3.jpeg","./image/image4.jpeg"]);
  const [skip,setSkip] = useState(0);
  const [wishlist,setWishlist] = useState("./image/Add to wishlist.svg");
  let show = 4;
let arr = [];
const navigate = useNavigate();
console.log(user);
useEffect(()=>{
  if(user === false){
    navigate("/login");
    alert("Nice try :)");
  }
},[])


  function addToWishlist(){
    if(wishlist==="./image/Add to wishlist.svg"){
     setWishlist("./image/Added to wishlist.svg");
    }
    else{
      setWishlist("./image/Add to wishlist.svg");
    }
  }

  function itemChange(skip){
    let x = skip*show;
    console.log(`item length-x ${item.length-x} show ${show} skip ${skip} x ${x}`);
    arr = [];
    for(let i =x;i<x+show;i++ ){
      if(item[i] != undefined){
      arr.push(item[i]);
      }
    } 
  console.log(arr);
    setItem2(arr);
  }

  function next(){
    console.log(`item length ${item.length}`)
    if(skip<(item.length/show)-1){
    console.log("running next")
    itemChange(skip+1);
    setSkip(skip+1);
    }
    // console.log(item2);
  }

  function prev(){
    console.log("running prev")
    if(skip>0){
    itemChange(skip-1);
    setSkip(skip-1);
    }
    else{
      itemChange(0);
      setSkip(0);
    }
    // console.log(skip);
  }
  

    return(
        <>
        <header className="header">
        <div className="header-left">
         <img id="logo" src="./image/Logo.svg" alt="" />
          <span className="link">Movies</span>
          <span className="link">Series</span>
          <span className="link">Podcast</span>
          <span className="link">Radio</span>
          </div>
          <div className="header-right">
              <img className="profile-pic" src="./image/image1.jpeg" alt="" />
            <span id="name">Joan Doe</span>
          </div>
        </header>
        <div className="container">
          <div className="upper-div">
          <div className="poster">
          <img id="poster" src="./image/AreaQ.jpeg" alt="" />
          </div>
          <div className="details">
          <h1>Area Q</h1>
          <p>Aria Q</p>
          <span>1 Hour 30 Minutes |</span>
          <span className="about-movie">2017  </span>
          <span className="about-movie">4+  </span>
          <span className="about-movie">Story  </span>
          <span className="about-movie">Animals  </span>
          <p id="description-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam voluptatem ad ex tempore inventore provident magni est accusamus reprehenderit fugiat nisi, laudantium libero architecto, vero cumque in. Aut expedita eos ipsa illum, mollitia vero modi reiciendis itaque, minima, asperiores excepturi libero! Fugit, ex! Non, amet. Deserunt corrupti impedit architecto nostrum voluptate, adipisci recusandae ipsa molestias, et animi similique reiciendis!</p>
          <div className="button-div">
          <button id="watch-now-btn">Watch Now</button>
          <img onClick={addToWishlist} src={wishlist} alt="" />
          </div>
          </div>
          </div>
          <div className="lower-div">
           <p id="realted-content-heading">Related Content</p>
           <button id="prev-btn" onClick={prev}><img src="./image/Left Arrow.svg" alt="" /></button>
           <div className="content-related">
           
           <div className="content">
             {item2.map((data)=>{
               return (<>
                      <div><img className="content-items" src={data} alt="image not found" /></div>
                      </>)
             })}
           </div>
           </div>
           <button id="next-btn" onClick={next}><img src="./image/Right Arrow.svg" alt="" /></button>
          </div>
          </div>
        </>
    )
}


export default Detail;