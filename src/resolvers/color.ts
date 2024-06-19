import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";
import { InventoryPart } from "../entities/InventoryPart";
import { Element } from "../entities/Element";

export const ColorResolver = {
  inventoryParts: async (color: Color) => {
    return await AppDataSource.manager.find(
      InventoryPart, {
      where: {
        color: { id: color.id } },
      relations: ["part", "color"],
     }
    );
  },
  elements: async (color: Color) => {
    return await AppDataSource.manager.find(
      Element, {
      where: {
        color: { id: color.id } 
      },
      relations: ["color", "part"],
    });
  },
};
