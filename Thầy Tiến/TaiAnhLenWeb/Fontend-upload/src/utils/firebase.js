import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA8sKtXOBjIxNrVGzqM3FLYmFVg2gJIA4Q",
    authDomain: "ecommerce-be54a.firebaseapp.com",
    projectId: "ecommerce-be54a",
    storageBucket: "ecommerce-be54a.appspot.com",
    messagingSenderId: "991672929103",
    appId: "1:991672929103:web:631c861daf97be1bd9133a",
    measurementId: "G-0X6J60HYFF"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };