import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyADXAuFpCzb4ta2alMDlF0i_lxk-XozDa4",
    authDomain: "demoreact-44867.firebaseapp.com",
    databaseURL: "https://demoreact-44867-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "demoreact-44867",
    storageBucket: "demoreact-44867.appspot.com",
    messagingSenderId: "778563756634",
    appId: "1:778563756634:web:c45a65e26ea7f317d3ae63",
    measurementId: "G-4XM5H0S00T"
  };
const connect = initializeApp(firebaseConfig);
const db = getDatabase();
const database = ref(db,'note/');
export const dataNote = database;