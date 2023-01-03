const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SpecieSchema = new Schema({
    name: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
    }
})

module.exports = mongoose.model('specie', SpecieSchema);
