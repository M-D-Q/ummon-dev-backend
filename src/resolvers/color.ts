import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";
import { InventoryPart } from "../entities/InventoryPart";

export const ColorResolver = {
  inventoryParts: async (color: Color, _variables: {}) => {
    return await AppDataSource.manager.find(InventoryPart, {
      where: { color: { id: color.id } },
      relations: ["part", "color"],
    });
  },
};
