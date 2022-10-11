import type { BaseTranslation } from "../i18n-types.js";
import { DiscordEmotes } from "../../utils/emotes";

const { GameDie } = DiscordEmotes;

const ptBR: BaseTranslation = {
	ROLL_DICE: `${GameDie} | {member:string} rolou um dado... tirou um {rolled:number}!`
};

export default ptBR;
