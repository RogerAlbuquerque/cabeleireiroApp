import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import bcrypt from 'bcryptjs';

interface userInfo{
  clientName?: string,
  email?:string,
  clientPassword?:string
}

export async function updateClientInfo(req: Request, res:Response){

  const clientId = req.headers.userId;
  const infos:userInfo = req.body;



  const clientExist = await Client.findById(req.headers.userId);


  if(!clientExist){
    res.status(500).json('Client does not exist');
  }
  else{
    if(infos.clientPassword != clientExist.clientPassword){
      try{
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(infos.clientPassword!, salt, async (error, hash) => {

            infos.clientPassword = hash;

            await Client.findByIdAndUpdate(clientId, infos).then(()=>{
              res.status(200).json(infos);

            }).catch((err)=>{
              console.log(err);
              res.status(500).json({error:'Internal Server Error!'});
            });

          });
        });
      }
      catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server Error!'});
      }
    }else{
      try{ await Client.findByIdAndUpdate(clientId, infos);
        res.status(200).json(infos);
      }
      catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server Error!'});
      }
    }
  }
}



