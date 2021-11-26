import { useEffect, useState } from "react";


import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import initializeFirebase from "../components/login/firebase/firebase.init";


initializeFirebase();
const useFirebase = () => {
const [user,setUser] =useState({})
 const [isLoading, setIsLoading] = useState(true);
 const [authError,setAuthError] = useState('');
// const [admin,setAdmin] = useState(false);

const auth = getAuth();
// const provider = new GoogleAuthProvider();

// email and password registration 
const registerUser = (email,password) => {
     setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     setAuthError('');
     const newUser = {email, displayName:name}
     setUser(newUser);
 saveUser(email,name,'POST');

     updateProfile(auth.currentUser, {
       displayName:name
    })
     .then(() => {

     })
     .catch((error) => {

     });


    // history.replace('/');
        
      })
      .catch((error) => {
     
    
      })
      .finally(()=>setIsLoading(false))
     
    
 
}

const loginUser = (email,password,location,history) => {
    // setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
         const destination = location?.state?.from || '/';
         history.replace(destination);
        
    
        // setAuthError('');
      })
      .catch((error) => {
        
        // setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false))
}

// const signInWithGoogle = (location,history) => {
//   setIsLoading(true);
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const user = result.user;
//     saveUser(user.email,user.displayName,'PUT')
//     setAuthError('');
    
//   }).catch((error) => {
   
//     setAuthError(error.message);
    
//   })
//   .finally(()=>setIsLoading(false));
// }

// manage user
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({})
        }
        setIsLoading(false);
      });

      {
        const user = {email,displayName};
        fetch('https://fast-reaches-25590.herokuapp.com/users', {
        method:method,
        headers: {
          'content-type':'application/json'
        
        },
        body:JSON.stringify(user)
        
        })
        .then()
        }


      return () => unsubscribe;

},[])

// useEffect(()=>{
// fetch(`https://fast-reaches-25590.herokuapp.com/users/${user.email}`)
// .then(res=>res.json())
// .then(data=>setAdmin(data.admin))
// },[user.email])


// logout 
const logOut = () => {
  setIsLoading(true);
    signOut(auth)
    .then(() => {
        
      })
      .catch((error) => {
        
      })
      .finally(()=>setIsLoading(false))
     
      
}

// const saveUser = (email, displayName,method) => {
// const user = {email,displayName};
// fetch('https://fast-reaches-25590.herokuapp.com/users', {
// method:method,
// headers: {
//   'content-type':'application/json'

// },
// body:JSON.stringify(user)

// })
// .then()
// }

return{
user,
registerUser,
logOut,
loginUser,
isLoading,
}

}
export default useFirebase;