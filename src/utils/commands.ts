import { ClassDecoratorEx, Discord, NotEmpty, SlashGroup, SlashGroupOptions, VerifyName } from "discordx";

export const MakeGroupCommand =
	             <T extends string, TD extends string, TR extends string>
	             (options: SlashGroupOptions<VerifyName<T>, NotEmpty<TD>, VerifyName<TR>>): ClassDecoratorEx =>
		             (target: any) => {
			             Discord()(target);
			             SlashGroup(options)(target);
			             SlashGroup(options.name)(target);
		             };