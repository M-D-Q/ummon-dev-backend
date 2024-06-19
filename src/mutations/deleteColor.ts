import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function deleteColor(
    _parent: undefined, 
    args: {id: number }
) {
  const color = await AppDataSource.manager.findOne(
    Color, 
    { where: 
        { id: args.id }
    }
    );
  if (!color) {
    throw new Error("Color not found");
  }
  await AppDataSource.manager.remove(color);
  return color;
}
