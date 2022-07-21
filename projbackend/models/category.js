const mongoose =  reqire("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlenght: 32,
        unique: true
    }
},
{timestamp: true}); //records the time of entry

module.exports = mongoose.model("Category", categorySchema);//Object