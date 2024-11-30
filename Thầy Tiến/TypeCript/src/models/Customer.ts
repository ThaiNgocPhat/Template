import {Table, Model, DataType, Column} from 'sequelize-typescript';

@Table({
    tableName: 'customer'
})

export class Customer extends Model<Customer> {
    @Column({primaryKey: true, autoIncrement: true})
    cust_id!: number;

    @Column(DataType.STRING(20))
    cust_name!: string;

    @Column(DataType.STRING(30))
    cust_email!: string;

    @Column(DataType.INTEGER)
    cust_phone!: number;

    @Column(DataType.STRING(256))
    cust_password!: string;

    @Column(DataType.STRING(100))
    cust_address!: string;
}