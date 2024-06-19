import "reflect-metadata";
import { DataSource } from "typeorm";
import { Color } from "./entities/Color";
import { config } from "./config";
import { Part } from "./entities/Part";
import { InventoryPart } from "./entities/InventoryPart";
import { Inventory } from "./entities/Inventory";
import { PartCategory } from "./entities/PartCategory";
import { PartRelationship } from "./entities/PartRelationship";
import { Element } from "./entities/Element";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: config.DATABASE_PATH,
  synchronize: true,
  logging: false,
  entities: [
    Color,
    Part,
    InventoryPart,
    Element,
    PartCategory,
    PartRelationship,
    Inventory
  ],
  migrations: [],
  subscribers: [],
});
