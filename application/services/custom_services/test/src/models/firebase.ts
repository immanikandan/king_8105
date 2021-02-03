
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const firebaseSchema = new Schema({
   name: String,
   place: String
})

const firebaseModel = mongoose.model('firebase', firebaseSchema, 'firebase');
export default firebaseModel;
