import { writable } from 'svelte/store';

// Firebase imports
import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyB15p3EEpBfzKg9p3TP7wW71Fu0vjVu3OU",
    authDomain: "cs-pr-383805.firebaseapp.com",
    projectId: "cs-pr-383805",
    storageBucket: "cs-pr-383805.appspot.com",
    messagingSenderId: "341767156528",
    appId: "1:341767156528:web:c849be289b33e456994ef5"
  };
  
// Initialize Firebase - spaghetti code currently
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// USER RELATED FUNCTIONS
export function resetUser() { // Resets user and sidebar - returns user to homepage
    user.set({
        name:undefined, 
        email:undefined, 
        loggedIn: false, 
        confirmed: false,
        grade: undefined,
        elections: undefined,
        pageOn: undefined,
        officerOn: undefined
    });
    sidebar_width_em.set({
        width: 15,
        display: "none"
    });
}
// user object
export let user = writable({
    confirmed: false,
    name:undefined, 
    email:undefined, 
    loggedIn: false,
    grade: undefined,
    elections: undefined,
    pageOn: undefined,
    officerOn: undefined
});

/*  Need to sumbsribe confirmedValue to the value of the user's, 
    since $user.confirmed doesn't work in JS files :|
    Must be destroyed in a svelte file, so it's exported and destroye in App.svelte
*/
let confirmedValue;
export const unsubscribe = user.subscribe(value => {
    confirmedValue = value.confirmed;
});

// Updating visibility of sidebar based on the window size
let windowHeight= 0;
let windowWidth = 0;

export function updateSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    if (confirmedValue) {
        if (windowWidth < 800){ // Hide sidebar if 
            sidebar_width_em.set({
                width: 0,
                display: "none"
            });
        } else {
            sidebar_width_em.set({
                width: 15,
                display: "block"
            });
        }
    }
}
window.addEventListener("resize", updateSize);
export let sidebar_width_em = writable({
    width: 15,
    display: "none"
});

// constants
export const title_size_em = 3;
export const subtitle_size_em = 1.5;
export const yellow_color = "rgba(255, 218, 26, 1)";
export const red_color = "rgb(248, 72, 72)";
export const green_color = "rgb(101, 255, 144)"
export const outline_width_em = 0.3;
export const outline_style = "outline-color:"  + yellow_color + ";" +
                             "outline-width: " + outline_width_em+"em;"+
                             "outline-style: solid;";