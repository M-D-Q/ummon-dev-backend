import { AppDataSource } from "../data-source";
import { Color } from "../entities/Color";

export async function createColor(
    _parent: undefined, 
    args: { 
        name: string, 
        rgb: string, 
        isTransparent: boolean 
    }) {
  const color = new Color();
  color.name = args.name;
  color.rgb = args.rgb;
  color.isTransparent = args.isTransparent;
  await AppDataSource.manager.save(color);
  return color;
}
