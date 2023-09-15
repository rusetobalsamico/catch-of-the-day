import Rebase from 're-base';
import firebase from 'firebase'; // official pacakage

// configure application
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxRnBmlcDAp9rHD5SZtjjdP0s8nxPKcJo",
    authDomain: "catch-of-the-day---alejo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---alejo-default-rtdb.firebaseio.com",
  });

  // database() function that will return the actual database
  // rebase binding
const base = Rebase.createClass(firebaseApp.database());  

// his is a named export
export {firebaseApp}
// this is a default export - THE MAIN FUNCTION
export default base;