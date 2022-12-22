import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCYllUSofg6OcDcs8eLCL6_X1mhOcehUQ",
  authDomain: "listatarefas-c0a67.firebaseapp.com",
  projectId: "listatarefas-c0a67",
  storageBucket: "listatarefas-c0a67.appspot.com",
  messagingSenderId: "778775688890",
  appId: "1:778775688890:web:4f7d172b770b9fff6fb483",
  measurementId: "G-9KSXSDHEDW"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };