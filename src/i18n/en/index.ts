import type { BaseTranslation } from "../i18n-types.js";

const en: BaseTranslation = {
	commands: {
		user: {
			avatar: {
				not_found: "I couldn't find {user:string}'s avatar...",
				view_avatar: "View avatar on your browser"
			}
		},
		dice: {
			roll: "{user:string} rolled the dice... got {rolled:number}!"
		}
	}
};

export default en;
