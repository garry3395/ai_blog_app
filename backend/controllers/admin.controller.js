import jwt from 'jsonwebtoken'



export const adminLogin=async(req,res)=>{
   try {
    const {email,password}=req.body;
    if(email!==process.env.ADMIN_EMAIL||password!==process.env.ADMIN_PASSWORD){
        return res.status(400).json({success:false,message:"please check your email or password for admin login"})
    
    }
        const token = jwt.sign({email},process.env.JWT_SECRET, {expiresIn:'1d'})
        return res.status(200).json({success:true,token,message:"welcome admin"})
   } 
   
   
   catch (error) {
     res.json({success:false,message:"admin login failed"})
     console.log("problem in admin controller")
   }
 
}