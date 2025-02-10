const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');

const productschema=mongoose.Schema(
    {
       
        name:{
           type:String,
           required:true
        },
        // quantity:{
        //     type:Number,
        //     required:false,
        //     default:0
        // },
        price:{
            type:Number,
            required:true
        }
        // image:{
        //     type:String,
        //     required:false
        // }, 

    },
    {
        timestamps:true
    }
)

const product=mongoose.model('product',productschema);

module.exports=product;
