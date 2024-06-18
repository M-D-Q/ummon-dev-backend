import { Entity, ManyToOne, PrimaryColumn, JoinColumn, Column } from "typeorm";
import { Part } from "./Part";
import { Color } from "./Color";

@Entity({ name: "elements" })
export class Element {
  @PrimaryColumn({ type: "varchar", length: 10, name: "element_id" })
  elementId: string;

  @ManyToOne(() => Part, (part) => part.partNum)
  @JoinColumn({ name: "part_num" })
  part: Part;

  @ManyToOne(() => Color, (color) => color.id)
  @JoinColumn({ name: "color_id" })
  color: Color;

  @Column({ type: "integer", name: "design_id", nullable: true  })
  designId: number;
}
