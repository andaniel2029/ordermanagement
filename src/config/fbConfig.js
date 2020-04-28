import * as firebase from "firebase";

let config = {
    apiKey: "AIzaSyD93TJDKm4de1tid8ywJ33gQDrYAsl7Vfs",
    authDomain: "ordermanagement-93919.firebaseapp.com",
    databaseURL: "https://ordermanagement-93919.firebaseio.com",
    projectId: "ordermanagement-93919",
    storageBucket: "",
    messagingSenderId: "502841400653"
};
if (console.clear) {
    console.clear();
}

firebase.initializeApp(config);
