import './App.css';
import FirstPage from './component/sitepage1/FirstPage';
import ForthPage from './component/sitepage2/ForthPage';
import SevenPage from './component/sitepage7/SevenPage';
import EightPage from './component/sitepage8/EightPage';
import NinthPage from './component/sitepage9/NinthPage';
import SecondPage from './component/sitepage2/SecondPage';
import SiteFooter from './component/sitepage7/header/SiteFooter';
import FifthPage from './component/sitepage5/FifthPage';
import SixthPage from './component/sitepage6/SixthPage';
import ThirdPage from './component/sitepage3/ThirrdPage';
import DecorDesign from './component/designnav/DecorDesign';
import TestoMonial from './component/testomonial/TestoMonial';
import { useState } from "react";
import { ref, getStorage, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import StyleCard from './component/bodycomponent/StyleCard';
import SiteHeader from './component/sitepage1/SiteHeader';

function App() {
  const [progress , setProgress]= useState(0)
 const formHandler = (e) =>{
  e.preventDefault();
  const file = e.target[0].files[0]
  uploadFiles(file)
 };
 const uploadFiles =(file) =>{
  if(!file) return;
  const storageRef =ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef,file);
  uploadTask.on("state_changed", (snapshot)=>{
    const prog = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    setProgress(prog)
  },
  (err)=>console.log(err),
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((url)=>console.log(url));
  }
  )
 }


// Create a reference to the file we want to download
const storage = getStorage();
const starsRef = ref(storage, 'images/flower6.jpg');

// Get the download URL
let imagedata='cxvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv';
getDownloadURL(starsRef)
  .then((url) => {
    // Insert url into an <img> tag to "download"
    // console.log(url)
    imagedata=url
    // console.log(imagedata)
  })
  .catch((error) => {
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
   const real = setTimeout(() => {
    // console.log(imagedata)
  },2000)
  
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      {/* <DecorDesign></DecorDesign>
      <TestoMonial></TestoMonial> */}
      <ThirdPage></ThirdPage>
      <ForthPage></ForthPage>
      {/* <StyleCard></StyleCard> */}
      <FifthPage></FifthPage>
      <SixthPage></SixthPage>
      <SevenPage></SevenPage>
      <EightPage></EightPage>
      <NinthPage></NinthPage>
      <SiteFooter></SiteFooter>
    </div>
    // <div className='App container m-5 '>
    //   <form className="form-control d-flex gap-2" onSubmit={formHandler}>
    //     <input type='file' className="form-control"/>
    //     <button className="btn btn-primary"  type="submit">submit</button>
       
    //   </form>
    //   <img src={"https://firebasestorage.googleapis.com/v0/b/wedding-decor-planner-66135.appspot.com/o/images%2Fflower6.jpg?alt=media&token=be2f8fda-514c-42cd-8ea6-052577fe33e0"} height="100px" width="100px"/>
    //   <img src={"https://firebasestorage.googleapis.com/v0/b/wedding-decor-planner-66135.appspot.com/o/images%2Fflower2.jpg?alt=media&token=be2f8fda-514c-42cd-8ea6-052577fe33e0"} height="100px" width="100px"/>
    //   <img src={"https://firebasestorage.googleapis.com/v0/b/wedding-decor-planner-66135.appspot.com/o/images%2Fflower3.jpg?alt=media&token=be2f8fda-514c-42cd-8ea6-052577fe33e0"} height="100px" width="100px"/>
    //   <img src={"https://upload.wikimedia.org/wikipedia/commons/0/00/Joseph_Wright_of_Derby_-_Cavern%2C_near_Naples_-_Google_Art_Project.jpg"} height="100px" width="100px"/>
      
    //   <br/>
    //   <h3>uploaded {progress}%</h3>
    // </div>
  )
}

export default App;
