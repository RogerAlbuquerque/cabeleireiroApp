import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function deleteScheduleClient(req: Request, res:Response){
  try{

    const Schedclient = await SchedClient.findByIdAndDelete(req.params.schedClient);
    res.status(200).json(Schedclient);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}
