import mongoose from 'mongoose';

try {
    await mongoose.connect('mongodb://mymongo/mydb')
} catch(error) {
    console.log(error);
}