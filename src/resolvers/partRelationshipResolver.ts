import { AppDataSource } from "../data-source";
import { PartRelationship } from "../entities/PartRelationship";
import { Part } from "../entities/Part";

export const PartRelationshipResolver = {
  childPart: async (relationship: PartRelationship) => {
    return await AppDataSource.manager.findOne(Part, {
      where: { partNum: relationship.childPartNum },
    });
  },
  parentPart: async (relationship: PartRelationship) => {
    return await AppDataSource.manager.findOne(Part, {
      where: { partNum: relationship.parentPartNum },
    });
  },
};
