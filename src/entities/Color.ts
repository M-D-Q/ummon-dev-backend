import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { InventoryPart } from "./InventoryPart";

@Entity({ name: "colors" })
export class Color {
  @PrimaryColumn("integer", { name: "id" })
  id: number;

  @Column({ name: "name", type: "varchar", length: 200 })
  name: string;

  @Column({ name: "rgb", type: "varchar", length: 6 })
  rgb: string;

  @Column({ name: "is_trans", type: "boolean", default: false })
  isTransparent: boolean;

  @OneToMany(() => InventoryPart, (inventoryPart) => inventoryPart.color)
  inventoryParts: InventoryPart[];
}
