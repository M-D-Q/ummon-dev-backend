import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";
import { InventoryPart } from "../entities/InventoryPart";
import { Element } from "../entities/Element";
import { PartRelationship } from "../entities/PartRelationship";

export const PartResolver = {
  inventoryParts: async (part: Part) => {
    return await AppDataSource.manager.find(InventoryPart, {
      where: { part: { partNum: part.partNum } },
      relations: ["part", "color"],
    });
  },
  elements: async (part: Part) => {
    return await AppDataSource.manager.find(Element, {
      where: { part: { partNum: part.partNum } },
      relations: ["part", "color"],
    });
  },
  childRelationships: async (part: Part) => {
    return await AppDataSource.manager.find(PartRelationship, {
      where: { parentPart: { partNum: part.partNum } },
      relations: ["childPart", "parentPart"],
    });
  },
  parentRelationships: async (part: Part) => {
    return await AppDataSource.manager.find(PartRelationship, {
      where: { childPart: { partNum: part.partNum } },
      relations: ["childPart", "parentPart"],
    });
  },
};
