import mongoose from "mongoose";

const sellerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
    displayName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePicture:{
        type:String,
        default:""
    }
},{timestamps:true});

const Seller=mongoose.model("Seller",sellerSchema);
export default Seller;