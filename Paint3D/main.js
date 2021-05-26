//STart up
console.log('loading...')
const RPC = require('discord-rpc')
const rpc = new RPC.Client({transport: 'ipc'})
const Discord = require('discord.js')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter
EventEmitter.defaultMaxListeners = 50
const config = JSON.parse(fs.readFileSync('config.json' , 'utf8'))
const client = new Discord.Client({partials: ['MESSAGE','CHANNEL','REACTION']})
const welcome = require('./welcome')
const goodbye = require('./goodbye')
const music = require('./music')
const kickban = require('./kickban')
const rolesemitter = require('./roles')
const help = require('./help')
const rrrols = require('./reactionroles')
const signup = require('./anmeldung')
const wiki = require('./wiki')
const avatar = require('./avatar')
const clear = require('./clear')
const github = require('./github')
const ts = require ('./translate')
const tictactoe = require ('./tiktakto')
const alerts = require ('./alerts')
const rolesadd = require('./rolesaddremove')
const bondhelp = require('./channelbond')
const email = require('./email')
const teamroles = require('./teams')
const rolegive = require ('./giveroles')
const level = require ('./level')
const publisher = require('./autobublish')
const prefix = require('./prefix')
const memes = require('./memes')
const money = require('./balace')
const newmoney = require('./add-balance')
const paymoney = require('./pay')






client.on('ready' , async () => {

  console.log('bot logged in as ' + client.user.tag + '!')
  console.log('the bot is on ' + client.guilds.cache.size + ' servers!')
  
  setInterval(() => {const prefixconfig = JSON.parse(fs.readFileSync('prefix.json', 'utf8'))

    let pref = prefixconfig.prefixs[prefixconfig.prefixs.length -1]
    let prefixid =  pref.prefix1
    const activities_list = [
      "Hackerton 2021", 
      `Current prefix: ${prefixid}`,
      "Coded by TheChxice", 
      `${prefixid}help for help`
      ]
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1)
    client.user.setActivity(activities_list[index], { type: 'STREAMING'})
}, 10000)

welcome(client)
goodbye(client)
music(client)
kickban(client)
rolesemitter(client)
help(client)
rrrols(client)
signup(client)
wiki(client)
avatar(client)
clear(client)
github(client)
ts(client)
tictactoe(client)
alerts(client)
rolesadd(client)
bondhelp(client)
email(client)
teamroles(client)
rolegive(client)
level(client)
publisher(client)
prefix(client)
memes(client)
money(client)
newmoney(client)
paymoney(client)
})








//Token
client.login(config.Token)