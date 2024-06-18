import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Part } from "./Part";

@Entity({ name: "part_relationships" })
export class PartRelationship {
  @PrimaryColumn({ type: "varchar", length: 1, name: "rel_type" })
  relType: string;

  @PrimaryColumn({ type: "varchar", length: 20, name: "child_part_num" })
  childPartNum: string;

  @PrimaryColumn({ type: "varchar", length: 20, name: "parent_part_num" })
  parentPartNum: string;

  @ManyToOne(() => Part, (part) => part.childRelationships)
  @JoinColumn({ name: "child_part_num" })
  childPart: Part;

  @ManyToOne(() => Part, (part) => part.parentRelationships)
  @JoinColumn({ name: "parent_part_num" })
  parentPart: Part;
}
