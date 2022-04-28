import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'screenshot',
            aliases: ['ss', 'ssweb'],
            description: 'Gives you the screenshot of the given url. ',
            category: 'utils',
            usage: `${client.config.prefix}screenshot [url]`,
            baseXp: 50
        })
    }
    
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Provide the url, Baka!`))
        const chitoge = joined.trim()
        return void M.reply( await request.buffer(`https://shot.screenshotapi.net/screenshot?&url=${chitoge}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`),
        MessageType.image,
                    undefined,
                    undefined,
                    `🌟 Here you go.\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later. ${reason}`))
    }
}
