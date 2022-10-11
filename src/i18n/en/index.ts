import type { BaseTranslation } from "../i18n-types.js";
import { DiscordEmotes } from "../../utils/emotes";

const { GameDie } = DiscordEmotes;

const en: BaseTranslation = {
	ROLL_DICE: `${GameDie} | {member:string} rolled the dice... got {rolled:number}!`
};

export default en;
