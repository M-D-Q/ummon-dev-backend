import { AppDataSource } from "../data-source";
import { PartCategory } from "../entities/PartCategory";
import { Part } from "../entities/Part";

export const PartCategoryResolver = {
  parts: async (category: PartCategory) => {
    return await AppDataSource.manager.find(Part, {
      where: { partCatId: category.id },
      relations: ["inventoryParts", "elements"],
    });
  },
};
