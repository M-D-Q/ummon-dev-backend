import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Inventory } from "./Inventory";
import { Part } from "./Part";
import { Color } from "./Color";

// This entity/table does not have its own primary key but it uses a composite key by fetching inventory_id, part_num and color_id from other entities.
// Edit 1 : Actually it seemed to need a composite key, but turns out there are many duplicates in the table.
// Edit 2 : I added a generated, incrementing primary key to the entity, so we avoid modifying the database.

@Entity({ name: "inventory_parts" })
export class InventoryPart {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column({ type: "integer", name: "inventory_id" })
  inventoryId: number;

  @Column({ type: "varchar", length: 20, name: "part_num" })
  partNum: string;

  @Column({ type: "integer", name: "color_id" })
  colorId: number;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventoryParts)
  @JoinColumn({ name: "inventory_id" })
  inventory: Inventory;

  @ManyToOne(() => Part, (part) => part.inventoryParts)
  @JoinColumn({ name: "part_num" })
  part: Part;

  @ManyToOne(() => Color, (color) => color.inventoryParts)
  @JoinColumn({ name: "color_id" })
  color: Color;

  @Column({ type: "integer", name: "quantity" })
  quantity: number;

  @Column({ type: "boolean", name: "is_spare" })
  isSpare: boolean;

  @Column({ name: "img_url", nullable: true })
  imgURL: string;
}