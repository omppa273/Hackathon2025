const Product = require('../Module/ProductModel');

const putproduct = async (req, res) => {
    try {
        const { name } = req.params;

        // Check if '_id' is in the request body and remove it if it exists
        if (req.body._id) {
            delete req.body._id;  // Remove _id if it exists in the request body
        }

        // Log the request body to ensure '_id' is not included
        console.log('Request Body:', req.body);

        // Perform the update
        const product = await Product.findOneAndUpdate({ name }, req.body, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Return the updated product
        return res.status(200).json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        if (!res.headersSent) {
            return res.status(500).json({ message: error.message });
        }
    }
};


    
 const postproduct=async(req,res)=>
    {
        try{
           const product= await Product.create(req.body);
            res.status(201).json(product);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    }
    const getproduct=async(req,res)=>
        {
            try{
                 const products=await Product.find({});
                 res.status(201).json(products);
            }
            catch(error){
               res.status(500).json({meessage:error.message});
            }
        }
    const getbyid=async(req,res)=>
        {
            try{
                 const {id}=req.params
                 console.log(id);
                 console.log(req.params.id);  //it will gives the id  that  client req for
                 const product=await Product.findById(id);
                 res.status(201).json(product);
            }
            catch(error){
            res.status(500).json({message:error.message})
        
            }
        } 
    const getbyname=async (req, res) => {
        try {
            const { name } = req.params; // Extract name from the route parameter
            const product = await Product.findOne({ name }); // Query using name
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }  
    const getbyitemquery=async(req,res)=>{
        try{
             const products=await Product.find(req.query);
             res.status(200).json(products);
        }
        catch(error){
        res.status(500).json({message:error.message})
        }
    }  
    
    const deleteitem=async(req,res)=>{
        try{
               const{id}=req.params;
               const product=await Product.findByIdAndDelete(id,req.body);
               if(!product)
               {
                   res.status(404).json({message:'Product not found'});
               }
             const deleteddata=await Product.findById(id);
             res.status(200).json(deleteddata);
        }
        catch(error){
          res.status(404).json({message:error.message});
        }
   }

  
    module.exports={
        putproduct,postproduct,getproduct,getbyid,getbyname,getbyitemquery,deleteitem
    }