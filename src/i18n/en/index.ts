import type { BaseTranslation } from "../i18n-types.js";
import { DiscordEmotes } from "../../utils/emotes";
import { emotify, error } from "../../utils/text";

const { GameDie } = DiscordEmotes;

const en: BaseTranslation = {
	commands: {
		dice: {
			roll: emotify(GameDie, "{member:string} rolled the dice... got {rolled:number}!"),
		}
	}
};

export default en;
