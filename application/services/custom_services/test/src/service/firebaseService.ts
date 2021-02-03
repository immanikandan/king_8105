import { Request, Response } from 'express';
import {firebaseDao} from '../dao/firebaseDao';
import { CustomLogger } from '../config/Logger'
let firebase = new firebaseDao();

export class firebaseService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into firebaseService.ts: GpDelete')
     const  firebaseId = req.params.id;
     firebase.GpDelete(firebaseId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from firebaseService.ts: GpDelete')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into firebaseService.ts: GpUpdate')
     const  firebaseData = req.body;
     firebase.GpUpdate(firebaseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from firebaseService.ts: GpUpdate')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into firebaseService.ts: GpCreate')
     const  firebaseData = req.body;
     firebase.GpCreate(firebaseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from firebaseService.ts: GpCreate')
         callback(response);
         });
    }


}