import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCxqpR8RDnzKXDZTm3u9zIY3cFMYxoE4xM",
  authDomain: "books-online-ch.firebaseapp.com",
  projectId: "books-online-ch",
  storageBucket: "books-online-ch.appspot.com",
  messagingSenderId: "135002544176",
  appId: "1:135002544176:web:460a54b6c1ad5f89f0f5f5",
});
/* const firebaseConfig = {
  apiKey: "AIzaSyCxqpR8RDnzKXDZTm3u9zIY3cFMYxoE4xM",
  authDomain: "books-online-ch.firebaseapp.com",
  projectId: "books-online-ch",
  storageBucket: "books-online-ch.appspot.com",
  messagingSenderId: "135002544176",
  appId: "1:135002544176:web:460a54b6c1ad5f89f0f5f5"
};
const app = initializeApp(firebaseConfig); */

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)