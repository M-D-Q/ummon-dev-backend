import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { InventoryPart } from "./InventoryPart";
import { PartCategory } from "./PartCategory";
import { Element } from "./Element";
import { PartRelationship } from "./PartRelationship";


@Entity({ name: "parts" })
export class Part {
  @PrimaryColumn({ type: "varchar", length: 20, name: "part_num" })
  partNum: string;

  @Column({ type: "varchar", length: 250, name: "name" })
  name: string;

  @Column({ type: "integer", name: "part_cat_id" })
  partCatId: number;

  @Column({ type: "varchar", length: 250, name: "part_material" })
  partMaterial: string;

  @OneToMany(() => InventoryPart, (inventoryPart) => inventoryPart.part)
  inventoryParts: InventoryPart[];

  @ManyToOne(() => PartCategory, (category) => category.parts)
  @JoinColumn({ name: "part_cat_id" })
  partCategory: PartCategory;

  @OneToMany(() => Element, (element) => element.part)
  elements: Element[];

  @OneToMany(() => PartRelationship, (relationship) => relationship.childPart)
  childRelationships: PartRelationship[];
 
  @OneToMany(() => PartRelationship, (relationship) => relationship.parentPart)
  parentRelationships: PartRelationship[];
}
