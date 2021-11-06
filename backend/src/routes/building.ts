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
  const buildings = await buildingRepo.find({
    relations: ['waterFountains']
  });

  res.json(buildings);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const data = req.body;

  const building = new Building();
  building.latitude = data.latitude;
  building.longitude = data.longitude;
  building.name = data.name;

  const row = await connection.manager.save(building);

  res.json(row);
});

router.put('/', async (req, res) => {
  console.log(req.body);
  const data = req.body;

  const building = await buildingRepo.findOne({
    where: {
      id: data.id
    }
  });

  building.name = data.name;
  building.longitude = data.longitude;
  building.latitude = data.latitude;
  
  const row = await buildingRepo.save(building);

  res.json(row);
});


export default router;