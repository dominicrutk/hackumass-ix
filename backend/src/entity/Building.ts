import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { WaterFountain } from "./WaterFountain";

@Entity()
export class Building {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "float" })
    longitude: number;

    @Column({ type: "float" })
    latitude: number;

    @OneToMany(() => WaterFountain, wf => wf.building)
    waterFountains: WaterFountain;
}