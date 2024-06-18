import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function updateColorName(_parent: undefined, args: { id: number, name: string }) {
  const color = await AppDataSource.manager.findOne(Color, { where: { id: args.id } });
  if (!color) {
    throw new Error("Color not found");
  }
  color.name = args.name;
  await AppDataSource.manager.save(color);
  return color;
}
