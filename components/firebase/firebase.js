import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyACEXSvnmqcs0E8PVYF-Z05G4vpsyekagA",
  authDomain: "project-gym-react.firebaseapp.com",
  databaseURL: "https://project-gym-react.firebaseio.com",
  projectId: "project-gym-react",
  storageBucket: "project-gym-react.appspot.com",
  messagingSenderId: "894847978097",
  appId: "1:894847978097:web:427193ef0a903b1025a9d0",
  measurementId: "G-L13MCVBHV9"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseDB = firebase.database();
const firebaseBanner = firebaseDB.ref("index");
const firebaseBlog = firebaseDB.ref("blog");
const firebaseCourse = firebaseDB.ref("course");
const firebaseSchedule = firebaseDB.ref("schedule");
const firebaseTrainer = firebaseDB.ref("trainer");
const firebaseStory = firebaseDB.ref("story");

export {
  firebase,
  firebaseBanner,
  firebaseBlog,
  firebaseCourse,
  firebaseSchedule,
  firebaseTrainer,
  firebaseStory
};
// let firebaseBanner = firebase.firestore().collection("banner-index");
// let firebaseCourse = firebase.firestore().collection("course");
// export default {firebaseBanner , firebaseCourse};
