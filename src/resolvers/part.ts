import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";
import { InventoryPart } from "../entities/InventoryPart";

export const PartResolver = {
  inventoryParts: async (part: Part, _variables: {}) => {
    return await AppDataSource.manager.find(InventoryPart, {
      where: { part: { partNum: part.partNum } },
      relations: ["color", "part"],
    });
  },
};
