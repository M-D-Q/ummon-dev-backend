import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Inventory } from "./Inventory";
import { Part } from "./Part";
import { Color } from "./Color";

// This entity/table does not have its own primary key but it uses a composite key by fetching inventory_id, part_num and color_id from other entities.

@Entity({ name: "inventory_parts" })
export class InventoryPart {
  @PrimaryColumn({ type: "integer", name: "inventory_id" })
  inventoryId: number;

  @PrimaryColumn({ type: "varchar", length: 20, name: "part_num" })
  partNum: string;

  @PrimaryColumn({ type: "integer", name: "color_id" })
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

  @Column({name: "img_url", nullable: true  })
  imgURL: string;

}
