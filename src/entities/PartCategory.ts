import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Part } from "./Part";

@Entity({ name: "part_categories" })
export class PartCategory {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ type: "varchar", length: 200, name: "name" })
  name: string;

  @OneToMany(() => Part, (part) => part.partCatId)
  parts: Part[];
}
