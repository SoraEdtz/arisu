/*
HAI NAMAKU ZAINUDIN ANGGARA
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const figlet = require('figlet')
const fs = require('fs')
const { color } = require('../lib/color')

const xinz = new WAConnection()
exports.xinz = xinz

exports.connect = async() => {
    let authofile = './zainudin.json'
    xinz.version = [2, 2119, 6]
	xinz.logger.level = 'warn'
	console.log(color(figlet.textSync('ARISU SENPAI', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ BOT BY ARISU SENPAI]'))
	xinz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[ARISU]', 'yellow'), color('Scan Qr'))
    })
    /*
	xinz.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && xinz.loadAuthInfo(authofile)
	xinz.on('connecting', () => {
		console.log(color('[ARISU]', 'yellow'), color('Connecting...'))
	})
	xinz.on('open', () => {
		console.log(color('[ARISU]', 'yellow'), color('Connect'))
	})
	await xinz.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
    console.log(color(' ===================================================='))
	console.log(color('│ + DI RECODE IZAYOI '))
	console.log(color('│ + BASE ORI BY AQUL '))
	console.log(color(' ===================================================='))
	return xinz
}