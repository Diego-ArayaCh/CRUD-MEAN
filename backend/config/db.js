const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const conectarDB = async () => {

    try {
        
        await mongoose.connect('mongodb+srv://user:user123456@cruddb.hfs55.mongodb.net/crudDB?retryWrites=true&w=majority', {

            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        console.log('DB connected');


    } catch (error) {
        console.error(error);
        process.exit(1); //stop execution
    }

};

module.exports = conectarDB;