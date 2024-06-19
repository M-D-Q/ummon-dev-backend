import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { InventoryPart } from "./InventoryPart";
import { Element } from "./Element";


@Entity({ name: "colors" })
export class Color {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "name", type: "varchar", length: 200 })
  name: string;

  @Column({ name: "rgb", type: "varchar", length: 6 })
  rgb: string;

  @Column({ name: "is_trans", type: "boolean", default: false })
  isTransparent: boolean;

  @OneToMany(() => InventoryPart, (inventoryPart) => inventoryPart.color)
  inventoryParts: InventoryPart[];

  @OneToMany(() => Element, (element) => element.color)
  elements: Element[];
}
