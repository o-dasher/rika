import type { BaseTranslation } from "../i18n-types.js";
import { DiscordEmotes } from "../../utils/emotes";
import { emotify, error } from "../../utils/text";

const { GameDie } = DiscordEmotes;

const ptBR: BaseTranslation = {
	commands: {
		dice: {
			roll: emotify(GameDie, "{member:string} rolou um dado... tirou um {rolled:number}!"),
			smallDifference: error("A diferença entre o valor mínimo e o valor máximo é muito pequena.")
		}
	}
};

export default ptBR;
