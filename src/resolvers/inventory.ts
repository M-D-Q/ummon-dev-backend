import { AppDataSource } from "../data-source";
import { Inventory } from "../entities/Inventory";
import { InventoryPart } from "../entities/InventoryPart";

export const InventoryResolver = {
  inventoryParts: async (inventory: Inventory) => {
    return await AppDataSource.manager.find(InventoryPart, {
      where: { inventory: { id: inventory.id } },
      relations: ["part", "color", "inventory"],
    });
  },
};