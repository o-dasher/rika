import { MakeGroupCommand } from "../../utils/commands";

const name = "osu";
const description = "osu! related commands.";

export const MakeOsuCommand = (target: any) => {
	MakeGroupCommand({ name, description })(target);
};

@MakeOsuCommand
export abstract class OsuCommand {
}