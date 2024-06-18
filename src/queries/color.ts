import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function color(
    _parent: undefined,
     args: { id: number }
    ) {
  return await AppDataSource.manager.findOne(
    Color,
    { where: { id: args.id } }
);
}
