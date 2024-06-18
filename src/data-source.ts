import "reflect-metadata";
import { DataSource } from "typeorm";
import { Color } from "./entities/Color";
import { config } from "./config";
import { Part } from "./entities/Part";
import { InventoryPart } from "./entities/InventoryPart";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: config.DATABASE_PATH,
  synchronize: false,
  logging: false,
  entities: [
    Color,
    Part,
    InventoryPart
  ],
  migrations: [],
  subscribers: [],
});
