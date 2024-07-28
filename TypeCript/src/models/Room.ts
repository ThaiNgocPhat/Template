import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {RoomType} from './Room-Type'
import {Hotel} from './Hotel'
import {Facilities} from './Facilities'
import {Room_Status} from './Room_Status'
@Table ({
    tableName: 'room'
})

export class Room extends Model<Room> {
    @Column({primaryKey: true, autoIncrement: true})
    room_id!: number;

    @Column(DataType.STRING(3000))
    image!: string;

    @ForeignKey(() => Room_Status)
    @Column
    status_id!: number;

    @BelongsTo(() => Room_Status)
    room_status!: Room_Status;

    @ForeignKey(() => Hotel)
    @Column
    hotel_id!: number;

    @BelongsTo(() => Hotel)
    hotel!: Hotel;

    @ForeignKey(() => Facilities)
    @Column
    facility_id!: number;

    @BelongsTo(() => Facilities)
    facility!: Facilities;

    @ForeignKey(() => RoomType)
    @Column
    type_id!: number;

    @BelongsTo(() => RoomType)
    roomtype!: RoomType;
}