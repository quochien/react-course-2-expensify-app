import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB4IfMSYuX3hyOL-pAsXCsNYwPubr3Bcdo",
  authDomain: "expensify-54808.firebaseapp.com",
  databaseURL: "https://expensify-54808.firebaseio.com",
  projectId: "expensify-54808",
  storageBucket: "",
  messagingSenderId: "283775877136",
  appId: "1:283775877136:web:3c2fededc798f553"
};

firebase.initializeApp(config);

const database = firebase.database();

database
  .ref("expenses")
  .once("value")
  .then(snapshot => {
    const expenses = [];

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref("notes/-LnuSNcrGlSmUuPKHoNX").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job}`);
// });

// const onValueChange = database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// }, (e)=>{
//   console.log('Error with data fetching', e)
// });

// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref("age").set(40);
// }, 3500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("error", e);
//   });
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(e => {
//     console.log("Did not remove data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Hien Nguyen",
//     age: 39,
//     isSingle: false,
//     location: {
//       city: "Nha Trang",
//       country: "Vietnam"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed", e);
//   });

// database.ref().update({
//   name: "Hien",
//   age: 40,
//   job: "Software Engineer",
//   isSingle: null,
//   "location/city": "London"
// });

// database.ref().set("This is my data.");

// database.ref("age").set(40);
// database.ref("location/city").set("Dalat");
// database
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 150
//   })
//   .then(() => {
//     console.log("second set call worked!");
//   })
//   .catch(e => {
//     console.log("error: ", e);
//   });

// database.ref("isSingle").set(null);
