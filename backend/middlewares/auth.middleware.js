import jwt from 'jsonwebtoken'
const auth =(req,res,next)=>{
   const token= req.cookies.token|| req.headers.authorization?.split(" ")[1];
    if(!token){
      return res.status(401).json({message:"unauthorized access please login"})
    }
     try {
    const decodedToken= jwt.verify(token,process.env.JWT_SECRET)
   /*  if(decodedToken){
      req.user = { id: decodedToken.id };
    } */
    if(!decodedToken){
      return res.status(401).json({message:"unauthorized access please login"})
    }
    next()
}catch(error){
    res.json({success:false,message:error.message})
   
}
}
export default auth