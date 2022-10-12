import type { BaseTranslation } from "../i18n-types.js";

const en: BaseTranslation = {
	commands: {
		invite: {
			title: "Do it plz...",
			description: "I am rika, a discord bot which aims to do some stuff.",
			button: "Invite me!"
		},
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
