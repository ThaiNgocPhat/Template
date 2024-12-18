import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    tableName: 'room_status'
})

export class Room_Status extends Model<Room_Status> {
    @Column({primaryKey: true, autoIncrement: true})
    status_id!: number;

    @Column(DataType.STRING(20))
    availability!: string;
}