import { Request, Response, NextFunction } from "express";
import { firebaseController } from '../controller/firebaseController';


export class Routes {
    private firebase: firebaseController = new firebaseController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/firebase/:id').delete(this.firebase.GpDelete);
app.route('/firebase').put(this.firebase.GpUpdate);
app.route('/firebase').post(this.firebase.GpCreate);
     }

}