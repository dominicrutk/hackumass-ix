import express from 'express';
const router = express.Router();

import { Connection, getConnection, Repository } from "typeorm";
import { Building } from '../entity/Building';
import { WaterFountain } from '../entity/WaterFountain';

let connection: Connection = null;
let wfRepo: Repository<WaterFountain> = null;
let buildingRepo: Repository<Building> = null;

router.use((req, res, next) => {
    connection = getConnection();
    wfRepo = connection.getRepository(WaterFountain);
    buildingRepo = connection.getRepository(Building);
    next();
});

router.get('/', async (req, res) => {
    const fountains = await wfRepo.find({
        relations: ["building"]
    });
    res.json(fountains);

});

router.post('/', async (req, res) => {
    console.log(req.body);

    const data = req.body;

    const wf = new WaterFountain();
    wf.status = data.status;
    wf.longitude = data.longitude;
    wf.latitude = data.latitude;
    wf.lastUpdated = Date.now() + "";
    wf.note = data.note;

    const building = await buildingRepo.findOne({
        where: {
            id: data.buildingId
        }
    });

    wf.building = building;

    const row = await connection.manager.save(wf);

    res.json(row);
});

router.put('/', async (req, res) => {
    console.log(req.body);

    const data = req.body;

    const wf = await wfRepo.findOne({
        where: {
            id: data.id
        }
    });

    wf.lastUpdated = Date.now() + "";
    wf.status = data.status;

    const row = await wfRepo.save(wf);
    
    res.json(row);

});


export default router;