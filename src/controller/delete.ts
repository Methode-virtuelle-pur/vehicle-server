import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {}

  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const temp ={id:parseInt(req.params.id)};
    await  this.vehicleStore.deleteVehicle(temp);
    res.status(200).send();
  }
}


