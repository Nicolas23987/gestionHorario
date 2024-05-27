// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, ref, uploadBytes, getDownloadURL } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdTPj3SLcXsJtrqWN1CrsR2S5OFqwBdxE",
  authDomain: "gestionhorario-f867e.firebaseapp.com",
  projectId: "gestionhorario-f867e",
  storageBucket: "gestionhorario-f867e.appspot.com",
  messagingSenderId: "68448586969",
  appId: "1:68448586969:web:6cce4e9bfe447cd40dc2c8",
  measurementId: "G-L789ZGM9S6"
};


const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

export async function UploadFile(img){
    const storageRef = ref(storage, v4() );
    // uploadBytes(storageRef, img).then(snapshot => {
    //     console.log(snapshot)
    // }) 
    await uploadBytes(storageRef, img)
    const url = await  getDownloadURL(storageRef) 
    return url
  }


const analytics = getAnalytics(app);