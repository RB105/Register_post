const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        default: null,
        required : true, // without this server will not work
    },

    last_name: {
        type: String,
        default: null
    },

    phone_number: {
        type: String,
        default: null,
        required : true,
    }
});

module.exports = mongoose.model('user',user);