import type { BaseTranslation } from "../i18n-types.js";

const ptBR: BaseTranslation = {
	commands: {
		math: {
			calc: {
				bad: "{expression:string} não é uma expressão matemática valida.",
				result: "Hai! {expression:string} resulta em {result:string}."
			}
		},
		invite: {
			title: "Me convida pu favo...",
			description: "Eu sou a rika, uma bot de discord que faz coisas.",
			button: "Mim convida ai"
		},
		user: {
			avatar: {
				view_avatar: "Ver avatar no seu browser"
			}
		},
		dice: {
			roll: "{mention:string} rolou um dado... tirou um {rolled:number}!"
		}
	}
};

export default ptBR;
