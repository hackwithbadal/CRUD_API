const { boolean } = require('webidl-conversions');

mongoose  = require('mongoose');

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    payment:{
        type: Boolean,
        // require:true,
        default:false
    }
})
module.exports = mongoose.model('item',itemSchema);