import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAuGXthmfXI8A8t5JL99svxvMHEGK_t5pI',
  authDomain: 'react-ecommerce-app-8ae3d.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-app-8ae3d.firebaseio.com',
  projectId: 'react-ecommerce-app-8ae3d',
  storageBucket: 'react-ecommerce-app-8ae3d.appspot.com',
  messagingSenderId: '487865473659',
  appId: '1:487865473659:web:3a6bb0f7b56941982b20de',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export function signInWithGoogle() {
  return auth.signInWithPopup(provider)
}

export default firebase
