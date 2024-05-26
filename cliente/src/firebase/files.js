import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes} from 'firebase/storage'
import { SNAPSHOT } from "sequelize/lib/table-hints";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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
const storage = getStorage(app);

export function UploadFile(img){
    const storageRef = ref(storage);
    uploadBytes(storageRef, img).then(snapshot => {
        console.log(snapshot)
    }) 
}

const analytics = getAnalytics(app);