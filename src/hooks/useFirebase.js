import { useEffect, useState } from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../firebase.init'

const auth = getAuth(app)

const useFirebase = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const unSubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({})
    })
    return () => {
      unSubscribeFromAuth()
    }
  }, [])

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).catch((error) => console.log(error.message))
  }

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error.message))
  }

  return { user, signInWithGoogle, handleSignOut }
}

export default useFirebase
