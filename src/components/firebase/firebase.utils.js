import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCEsPYP6MQB83d8tVSKOaSBWNZHsZ3nHY0',
	authDomain: 'crwn-db-d2962.firebaseapp.com',
	projectId: 'crwn-db-d2962',
	storageBucket: 'crwn-db-d2962.appspot.com',
	messagingSenderId: '431856694355',
	appId: '1:431856694355:web:a6b1ba841a35daa80d02a6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
