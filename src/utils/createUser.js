import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function createUser(email, password) {
  
  // TODO: Add password criteria validation. E.g. Capital, lowercase, symbol, etc.
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
