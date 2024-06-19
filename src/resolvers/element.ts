import { AppDataSource } from "../data-source";
import { Element } from "../entities/Element";
import { Color } from "../entities/Color";
import { Part } from "../entities/Part";

export const ElementResolver = {
  color: async (element: Element) => {
    return await AppDataSource.manager.findOne(Color, {
      where: { id: element.color.id },
    });
  },
  part: async (element: Element) => {
    return await AppDataSource.manager.findOne(Part, {
      where: { partNum: element.part.partNum },
    });
  },
};
