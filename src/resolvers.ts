import { VoidResolver, JSONResolver } from "graphql-scalars";
import { colors } from "./queries/colors";
import { color } from "./queries/color";
import { parts } from "./queries/parts";
import { part } from "./queries/part";
import { inventoryPartsByColorAndPart } from "./queries/inventoryPartsByColorAndPart"
import { updateColorName } from "./mutations/updateColorName";
import { createColor } from "./mutations/createColor";
import { deleteColor } from "./mutations/deleteColor";
import { ColorResolver } from "./resolvers/color";
import { PartResolver } from "./resolvers/part";



export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Part: PartResolver,

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