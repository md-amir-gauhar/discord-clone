import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBOOmZsCwfsmy4VNXWvoirye-_Ol6TOBw4',
  authDomain: 'discord-clone-4b000.firebaseapp.com',
  databaseURL: 'https://discord-clone-4b000.firebaseio.com',
  projectId: 'discord-clone-4b000',
  storageBucket: 'discord-clone-4b000.appspot.com',
  messagingSenderId: '30707145790',
  appId: '1:30707145790:web:039a48a0b29a759062056f',
  measurementId: 'G-XXME2PDHF8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;