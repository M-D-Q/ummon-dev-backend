import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Part } from "./Part";
import { Color } from "./Color";

@Entity({ name: "inventory_parts" })
export class InventoryPart {
  @PrimaryGeneratedColumn({ type: "integer", name: "inventory_id" })
  inventoryId: number;

  @ManyToOne(() => Part, (part) => part.inventoryParts)
  @JoinColumn({ name: "part_num" })
  part: Part;

  @ManyToOne(() => Color, (color) => color.inventoryParts, { nullable: false })
  @JoinColumn({ name: "color_id" })
  color: Color;

  @Column({ type: "integer", name: "quantity" })
  quantity: number;

  
  @Column({ type: "boolean", name: "is_spare" })
  isSpare: boolean;


  @Column({name: "img_url", nullable: true  })
  imgURL: string;
}
