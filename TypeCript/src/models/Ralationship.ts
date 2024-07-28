import {Admin} from './Admin'
import { Customer } from './Customer'
import { Facilities } from './Facilities'
import {Hotel} from './Hotel'
import { Reservation } from './Reservation'
import { Room } from './Room'
import { Room_Status } from './Room_Status'
import { RoomType } from './Room-Type'
import {Servents} from './Servents'

Admin.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
})

Servents.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
})

Room.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
})

Room.belongsTo(Room_Status, {
    foreignKey: 'status_id'
})

Room.belongsTo(Facilities, {
    foreignKey: 'facility_id'
})

Room.belongsTo(RoomType, {
    foreignKey: 'type_id'
})

Reservation.belongsTo(Room, {
    foreignKey: 'room_id'
})

Reservation.belongsTo(Customer, {
    foreignKey: 'cust_id'
})