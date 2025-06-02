import jwt from 'jsonwebtoken'

//doctor  authentication middleware
const authDoctor = async (req,res,next) =>{
    try{
        
        //const {token} =req.headers
        const dtoken = req.headers['token']

        if(!dtoken){
            return res.json({success:false, message:"Not Authorized Login Again"})

        }
        const token_decode =jwt.verify(dtoken,process.env.JWT_SECRET)

        //req.body.docId = token_decode.id
        req.user ={docId:token_decode.id}

        // if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        //     return res.json({success:false, message:"Not Authorized Login Again"})

        // }

        next()

    }catch(error){
        console.error( error)
        res.json({success:false, message:error.message})
    }
}

export default authDoctor