import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { InventoryPart } from "./InventoryPart";

@Entity({ name: "inventories" })
export class Inventory {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "version", type: "integer" })
  version: number;

  @Column({ name: "set_num", type: "varchar", length: 20 })
  setNum: string;

  @OneToMany(() => InventoryPart, (inventoryPart) => inventoryPart.inventory)
  inventoryParts: InventoryPart[];
}
