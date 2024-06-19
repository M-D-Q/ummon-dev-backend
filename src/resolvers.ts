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
import { ElementResolver } from "./resolvers/element";
import  { InventoryResolver } from "./resolvers/inventory";
import { PartCategoryResolver } from "./resolvers/partCategory";



export const resolvers = {
  Void: VoidResolver,
  JSON: JSONResolver,
  Color: ColorResolver,
  Part: PartResolver,
  Element: ElementResolver,
  Inventory: InventoryResolver,
  PartCategory: PartCategoryResolver,


  Query: {
    colors,
    color,
    parts,
    part,
    inventoryPartsByColorAndPart, 
    //totalQuantityByColor: ColorResolver.Query.totalQuantityByColor,
  },
  Mutation: {
    updateColorName,
    createColor,
    deleteColor,
  },
};
