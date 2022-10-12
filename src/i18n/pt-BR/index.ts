import type { BaseTranslation } from "../i18n-types.js";

const ptBR: BaseTranslation = {
	commands: {
		invite: {
			title: "Me convida pu favo...",
			description: "Eu sou a rika, uma bot de discord que faz coisas.",
			button: "Mim convida ai"
		},
		user: {
			avatar: {
				not_found: "Não consegui achar o avatar do {user:string}...",
				view_avatar: "Ver avatar no seu browser"
			}
		},
		dice: {
			roll: "{user:string} rolou um dado... tirou um {rolled:number}!"
		}
	}
};

export default ptBR;
