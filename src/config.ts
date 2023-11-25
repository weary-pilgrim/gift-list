import { cosmiconfig } from "cosmiconfig"
import { ConfigSchema } from "./types.js";

const moduleName = 'gift-list-'

const explorer = cosmiconfig(moduleName);
const result = await explorer.search();
export const config = ConfigSchema.parse(result?.config)