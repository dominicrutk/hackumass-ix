import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { WaterFountain } from "./WaterFountain";

@Entity()
export class Building {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @OneToMany(() => WaterFountain, wf => wf.building)
    waterFountains: WaterFountain;
}