import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { InventoryPart } from "./InventoryPart";

@Entity({ name: "parts" })
export class Part {
  @PrimaryColumn({ type: "varchar", length: 20, name: "part_num" })
  partNum: string;

  @Column({ type: "varchar", length: 250, name: "name" })
  name: string;

  @Column({ type: "integer", name: "part_cat_id" })
  partCatId: number;

  @OneToMany(() => InventoryPart, (inventoryPart) => inventoryPart.part)
  inventoryParts: InventoryPart[];
}
