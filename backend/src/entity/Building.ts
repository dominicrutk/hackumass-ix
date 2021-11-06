import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
}