

import { Table, Column, Model } from "sequelize-typescript";

@Table
export class UserModel extends Model<UserModel> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        allowNull: false,
        validate: {
            min: 6,
            max: 20
        }
    })
    password: string;
}