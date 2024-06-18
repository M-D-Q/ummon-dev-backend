import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";

export async function part(_parent: undefined, args: { partNum: string }) {
    return await AppDataSource.manager.findOne(Part, {
      where: { partNum: args.partNum },
      relations: ["inventoryParts", "inventoryParts.color"],
    });
  }
