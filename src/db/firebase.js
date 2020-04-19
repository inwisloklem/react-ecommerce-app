import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAuGXthmfXI8A8t5JL99svxvMHEGK_t5pI',
  appId: '1:487865473659:web:3a6bb0f7b56941982b20de',
  authDomain: 'react-ecommerce-app-8ae3d.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-app-8ae3d.firebaseio.com',
  messagingSenderId: '487865473659',
  projectId: 'react-ecommerce-app-8ae3d',
  storageBucket: 'react-ecommerce-app-8ae3d.appspot.com',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const store = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export async function createUserProfileDocument(user) {
  if (!user) {
    return
  }

  const userRef = store.collection('users').doc(user.uid)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const {displayName, email} = user

    try {
      await userRef.set({
        createdAt: new Date(),
        displayName,
        email,
      })
    }
    catch (error) {
      console.error(error.message)
    }
  }

  return userRef
}

export function signInWithGoogle() {
  return auth.signInWithPopup(provider)
}

export default firebase
