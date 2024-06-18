import { AppDataSource } from "../data-source";
import { InventoryPart } from "../entities/InventoryPart";

export async function inventoryPartsByColorAndPart(
  _parent: undefined,
  args: {
    colorId: number,
    partNum: string 
  }
) {
  return await AppDataSource.manager.find(
    InventoryPart,
    {
    where: {
      color: { id: args.colorId },
      part: { partNum: args.partNum }
    },
    relations: ["part", "color"],
    }
  );
}
