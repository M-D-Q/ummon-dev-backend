import { VoidResolver, JSONResolver } from "graphql-scalars";
//import { ColorResolver } from "./resolvers/color"
//import { PartResolver } from "./resolvers/part";
import { colors } from "./queries/colors";
import { color } from "./queries/color";
import { parts } from "./queries/parts";
import { part } from "./queries/part";
import { inventoryPartsByColorAndPart } from "./queries/inventoryPartsByColorAndPart"
import { updateColorName } from "./mutations/updateColorName";
import { createColor } from "./mutations/createColor";
import { deleteColor } from "./mutations/deleteColor";

export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
 // Color: ColorResolver,
 // Part: PartResolver,
  Query: {
    colors,
    color,
    parts,
    part,
    inventoryPartsByColorAndPart, 
  },
  Mutation: {
    updateColorName,
    createColor,
    deleteColor,
  },
};
