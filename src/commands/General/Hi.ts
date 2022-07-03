/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const shelby =
			"https://c.tenor.com/j8o99zAkHxcAAAPo/thomas-shelby.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: shelby },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `I don't have time to have a conversation with someone like you. Use something from *${this.client.config.prefix}help* list if you want anything. \n`,
			}
		);
	};
}
