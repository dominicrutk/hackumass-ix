import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Building } from "./Building";

@Entity()
export class WaterFountain {

    @PrimaryGeneratedColumn()
    id: number;

    // "RED" | "YELLOW" | "GREEN"
    @Column()
    status: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @OneToOne(() => Building)
    @JoinColumn()
    building: Building;

}
