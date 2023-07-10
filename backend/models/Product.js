import mongoose from "mongoose";

const ProductStructure = mongoose.Schema({
    productName:String,
    productVariant:String,
    productGeneration:String,
    price:Number,

    image:{
       type:String,
    }
})

const ProductModel = mongoose.model ("Productdeatil",ProductStructure);
export default ProductModel;