const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price:{
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category:{
        type: ObjectId,
        ref: "Category", //calling object from category.js
        required: true
    },
    stock:{
        type: Number
    },
    sold:{
        type: Number,
        default: 0
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    size:{
        type: Number,
        maxlength: 10
    }
},
{timestamps: true});

module.exports = mongoose.model("Product", productSchema);