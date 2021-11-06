import "reflect-metadata";
import {createConnection} from "typeorm";
import { Building } from "./entity/Building";
import { WaterFountain } from "./entity/WaterFountain";

import express from 'express';
import bodyParser from "body-parser";

import waterFountain from './routes/waterFountain';

const PORT = 8080;


createConnection().then(connection => {

    // connection.query("CREATE DATABASE hackumassix");
    // console.log("created database hackumassix");

    // console.log("Inserting a new water fountain into the database...");
    // const waterFountain = new WaterFountain();
    // waterFountain.latitude = 100;
    // waterFountain.longitude = 100;
    // waterFountain.status = "RED";
    
    // const building = new Building();
    // building.name = "ILC";
    // building.latitude = 100;
    // building.longitude = 100;
    
    // waterFountain.building = building;

    // connection.manager.save(building);
    // connection.manager.save(waterFountain);
    // console.log("Added a new water fountain with a new building");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    
    const app = express();

    app.get('/', (req, res) => {
        console.log('req at /');
        res.send("hello");
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/waterFountain', waterFountain);
    

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
    

}).catch(error => console.log(error));
