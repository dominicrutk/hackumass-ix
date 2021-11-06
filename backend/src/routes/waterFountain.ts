import express from 'express';
// import { connect } from 'http2';
const router = express.Router();

import { Connection, getConnection, Repository } from "typeorm";
import { Building } from '../entity/Building';
import { WaterFountain } from '../entity/WaterFountain';
// const connection = getConnection();
let connection: Connection = null;
// const wfRepo = connection.getRepository(WaterFountain);
let wfRepo: Repository<WaterFountain> = null;
let buildingRepo: Repository<Building> = null;

router.use((req, res, next) => {
    connection = getConnection();
    wfRepo = connection.getRepository(WaterFountain);
    buildingRepo = connection.getRepository(Building);
    next();
});

router.get('/', async (req, res) => {
    // const ILC = new Building();
    // ILC.latitude = 100;
    // ILC.longitude = 100;
    // ILC.name = "ILC";
    
    // await connection.manager.save(ILC);

    // const wf = new WaterFountain();
    // wf.building = ILC;
    // wf.latitude = 100;
    // wf.longitude = 100;
    // wf.lastUpdated = Date.now() + "";
    // wf.status = "YELLOW";

    // await connection.manager.save(wf);
    

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

    const building = await buildingRepo.findOne({
        where: {
            id: data.buildingId
        }
    });

    wf.building = building;

    connection.manager.save(wf);

    res.send(200);
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

    await wfRepo.save(wf);
    
    res.send(200);

});


export default router;