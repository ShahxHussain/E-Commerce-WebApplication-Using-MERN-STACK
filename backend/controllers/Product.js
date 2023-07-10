import ProductModel from "../models/Product.js";

export const addProduct =async( req , res) =>{
    const{productName, productVariant ,productGeneration , price ,image}= req.body;
    try{
        const newProduct = new ProductModel({
            productName,
            productVariant,
            productGeneration,
            price,
            image: req.file.path,
        });

        const savedProduct = await newProduct.save();

        console.log(savedProduct);

        res.json({Response:true , message:'Product Added Successfully '});
        console.log("Product added successfully");

    }
    catch(error){
        console.error(error);
    }
}

export const getProduct = async (req, res) =>{

    try{
        const productData =await ProductModel.find();
        res.json(productData);
        console.log(productData);
    } catch(error){
        console.log("DATA NOT FOUND");
    }

}

export const getProductById = async (req , res) =>{
    try{
        const prId = req.params.productId;
        const product = await ProductModel.findById(prId);
        console.log(product);
        if(!product){
            return res.status(404).json({message:'Product Not found'});
        }
        res.json(product);
    }catch(error){
        console.log('Error retriving product details:',error );
        res.status(500).json({message:'Internal server error'});
}};


export const deleteProduct = async (req , res) => {
    try{
        const{ productId } = req.params;
        await ProductModel.findByIdAndDelete(productId);
        res.json({ message: 'Delete Successfully' });
    }catch (error) {
        res.status(500).json({error:'Internal Server Errror'});
}
};

export const updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const { productName, productVariant, productGeneration, price, image } = req.body;
  
      const updatedProduct = {
        productName,
        productVariant,
        productGeneration,
        price,
        image: req.file ? req.file.path : undefined,
      };
  
      const product = await ProductModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product updated successfully', product });
    } catch (error) {
      console.log('Error updating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };