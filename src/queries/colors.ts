import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function colors(
  _parent: undefined,
  _variables: {}
) {
  return (
    await AppDataSource.manager.find(Color)
  );
}

