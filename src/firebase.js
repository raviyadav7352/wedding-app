
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAoFdqgSwOCiJNiqf7Ntb9bShxWxEKHjtI",
    authDomain: "wedding-decor-planner-66135.firebaseapp.com",
    projectId: "wedding-decor-planner-66135",
    storageBucket: "wedding-decor-planner-66135.appspot.com",
    messagingSenderId: "886943274783",
    appId: "1:886943274783:web:953ec97ffe5ff8ce75c22a"
  };
  
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  
  export { storage, app };
