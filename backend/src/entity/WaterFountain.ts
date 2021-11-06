import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Building } from "./Building";

@Entity()
export class WaterFountain {

    @PrimaryGeneratedColumn()
    id: number;

    // "RED" | "YELLOW" | "GREEN"
    @Column()
    status: string;

    @Column()
    lastUpdated: string;

    @Column({ type: "float" })
    longitude: number;

    @Column({ type: "float" })
    latitude: number;

    @ManyToOne(() => Building, building => building.waterFountains)
    @JoinColumn()
    building: Building;

    @Column({ nullable: true })
    note: string;

}
