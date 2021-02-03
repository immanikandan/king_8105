import * as mongoose from 'mongoose';
import firebaseModel from '../models/firebase';
import { CustomLogger } from '../config/Logger'


export class firebaseDao {
    private firebase = firebaseModel;
    constructor() { }
public GpDelete(firebaseId, callback){
new CustomLogger().showLogger('info', 'Enter into firebaseDao.ts: GpDelete')

this.firebase.findByIdAndRemove(firebaseId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from firebaseDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(firebaseData, callback){
new CustomLogger().showLogger('info', 'Enter into firebaseDao.ts: GpUpdate')

this.firebase.findOneAndUpdate({ _id: firebaseData._id }, firebaseData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from firebaseDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(firebaseData, callback){
new CustomLogger().showLogger('info', 'Enter into firebaseDao.ts: GpCreate')
let temp = new firebaseModel(firebaseData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from firebaseDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}