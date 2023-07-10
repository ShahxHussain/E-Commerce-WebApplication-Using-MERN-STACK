import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const SignupStructure = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    pass:String,
    confirmpass:String
});

SignupStructure.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY );
        jwt.verify(token, process.env.SECRET_KEY);
        return token;
    } catch(error){
        console.log("Error:"+error);
    }
}

const SignupModel =mongoose.model('Signup',SignupStructure);

export default SignupModel;