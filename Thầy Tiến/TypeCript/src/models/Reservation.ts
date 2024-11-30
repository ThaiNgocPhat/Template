import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript'
import {Customer} from './Customer'
import {Room} from './Room'
@Table({
    tableName: 'reservation'
})

export class Reservation extends Model<Reservation> {
    @Column({primaryKey: true, autoIncrement: true})
    r_id!: number;

    @Column(DataType.INTEGER)
    cus_id!: number;

    @Column(DataType.DATE)
    booking_date!: Date;

    @Column(DataType.DATE)
    start_date!: Date;

    @Column(DataType.DATE)
    end_date!: Date;

    @Column(DataType.FLOAT)
    amount!: number;

    @ForeignKey(() => Customer)
    @Column
    cust_id!: number;

    @BelongsTo(() => Customer)
    customer!: Customer;

    @ForeignKey(() => Room)
    @Column
    room_id!: number;

    @BelongsTo(() => Room)
    room!: Room;
}
