import { z } from "zod";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {FIREBASE_AUTH} from '@/config/firebase';


  export const schema = z.object({
    Email: z.string().min(1, { message: 'Required' }),
        Password: z.string().min(1, { message: 'Required' }),
                PhoneNumber: z.string().min(1, { message: 'Required' }),


  });


 export const AuthGoogle = async(porps)=>{
    
    await createUserWithEmailAndPassword(FIREBASE_AUTH, porps.Email, porps.Password,porps.Phone)
    .then((userCredential) => {
      const user = userCredential.user;
          console.log("user:")
  
      console.log(user)
  
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      console.log(errorCode)
      
    });
}