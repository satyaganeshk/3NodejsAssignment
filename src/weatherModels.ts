import { DataTypes, Model } from 'sequelize';
import sequelize from './db';

class Weather extends Model {
  public id!: number;
  public city!: string;
  public country!: string;
  public weather!: string;
  public latitude!: number;
  public longitude!: number;
  public createdAt!: Date;
}

Weather.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    city: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    weather: { type: DataTypes.STRING, allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    sequelize,
    tableName: 'weather_data',
    timestamps: true,
  }
);

export default Weather;
