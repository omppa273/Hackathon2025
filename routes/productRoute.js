 const express=require('express');
  // Assuming this is the correct pathAA
 const router=express.Router();
 const controller=require('../controller/productController')
//we can also do like this
// const {getproduct}=require('../controller/productController')






//update the data##########################################################################################
router.put('/update-items/:name',controller.putproduct)

router.post('/add-items',controller.postproduct)


router.get('/get-items',controller.getproduct)


router.get('/get-byid/:id',controller.getbyid)



//we can fetch the data using another field also
router.get('/get-by-name/:name', controller.getbyname);



//How would you design an API endpoint to fetch multiple products instead of just one?
router.get('/get-itemsby-query',controller.getbyitemquery)




//************************************************************************************************************************ */
router.delete('/item-delete/:id',controller.deleteitem)
module.exports=router;




















// POST route to add a product
// app.post('/add-items', (req, res) => {
//     // Creating a new product instance
//     const newProduct = new product({
//         name: 'om',  // You can replace 'om' with dynamic data from req.body
//         quantity: 15,
//         price: 100
//     });

//     // Saving the product to the databaseA
//     newProduct.save()
//         .then(product => {
//             res.status(201).json({
//                 message: 'Product successfully added!',
//                 product: product
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 message: 'Error saving product!',
//                 error: err.message
//             });
//         });
// });