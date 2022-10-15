import type { BaseTranslation } from "../i18n-types.js";

const en: BaseTranslation = {
	commands: {
		math: {
			calc: {
				bad: "{expression:string} is not a valid mathematical expression!",
				result: "Hai! {expression:string} results to {result:string}."
			}
		},
		invite: {
			title: "Do it plz...",
			description: "I am rika, a discord bot which aims to do some stuff.",
			button: "Invite me!"
		},
		user: {
			avatar: {
				not_found: "I couldn't find {username:string}'s avatar...",
				view_avatar: "View avatar on your browser"
			}
		},
		dice: {
			roll: "{mention:string} rolled the dice... got {rolled:number}!"
		}
	}
};

export default en;
