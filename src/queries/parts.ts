import { AppDataSource } from "../data-source";
import { Part } from "../entities/Part";

export async function parts(
  _parent: undefined,
  _variables: {}
) {
  return (
      await AppDataSource.manager.find(Part)
    );
  }