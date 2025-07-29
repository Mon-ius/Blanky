// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function updateWaitlist(loc, email, $db) {
  // const data = { loc, email, timestamp: serverTimestamp() }
  // return addDoc(collection($db, 'waitlist'), data)
  console.log('Waitlist signup:', { loc, email })
  return Promise.resolve()
}

function addChallenge(email, $db) {
  // const data = { email, timestamp: serverTimestamp() }
  // return addDoc(collection($db, 'challenge'), data)
  console.log('Challenge signup:', { email })
  return Promise.resolve()
}

export { updateWaitlist, addChallenge }
