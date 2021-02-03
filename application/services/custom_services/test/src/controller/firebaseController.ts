import { Request, Response } from 'express';
import { firebaseService } from '../service/firebaseService';
import { CustomLogger } from '../config/Logger'
let firebase = new firebaseService();

export class firebaseController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
firebase.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into firebaseController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from firebaseController.ts: GpDelete');
    })}
public GpUpdate(req: Request, res: Response) {
firebase.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into firebaseController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from firebaseController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
firebase.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into firebaseController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from firebaseController.ts: GpCreate');
    })}


}