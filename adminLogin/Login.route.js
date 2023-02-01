const {Router} = require("express");
const AdminModel = require("./Login.model");


const authRouter = Router()


authRouter.post("/signup", async(req, res) => {
    console.log(req.body)
    AdminModel.findOne({"email":req.body.email},function(err,result){
        if(result){
            res.send({message:"you are registered with this email"})
        }
        else{
            const admin = new AdminModel(req.body)
            admin.save((err, success) => {
            if(err){
                res.status(500).send({message : "Error occurred"})
            }
        return res.status(201).send({message : "Sign up success",data:admin.name})
    }); 
        }
})
})

authRouter.post("/login", async (req, res) => {
    console.log(req.body.email) 
    try {
        
        AdminModel.findOne({"email":req.body.email},function(err,result){
            if(!result){
                res.send({message:"wrong email"})
            }
            else{        
                // const match=result.checkPassword(req.body.password)            
                // if(!match){
                //     res.send({message:"wrong password"})
                // }
                // else{
                //     const token=createToken(result)
                    res.send({message:"login successfull",data:result.name})
                // } 

            }
        })
        
        

    } catch (e) {

        res.status(500).send("invalid")
    }  
})

module.exports = authRouter;