

import { Table, Column, Model } from "sequelize-typescript";

@Table
export class FileModel extends Model<FileModel> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({
        allowNull: false,
        unique: true
    })
    name: string;

    @Column({
        allowNull: false,
        type: 'text',
    })
    metaData: string;
}