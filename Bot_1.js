锘縞onst {VK, Keyboard} = require('vk-io');
const vk = new VK();
const {updates} = vk;
const fs = require("fs");
const admins = [1];
const vip = [1];
const acc = require("./base/acc.json");
const uid = require("./base/uid.json");
const log = require("./base/log.json");
const frac = require("./base/frac.json");
const config = require("./setting/config.json")  
 

vk.setOptions({
    token: '68837ac7f02b803f2af3451830a8069e89aefc955210528907b4e9e679431b55b86433a913f3d28ed0804', // 褌芯泻械薪 谐褉褍锌锌褘
    apiMode: 'parallel',
	pollingGroupId: 175342821 // 1 蟹邪屑械薪懈 薪邪 id 谐褉褍锌锌褘 
});

vk.updates.use(async (message, next) => {  
	
	

    if (message.is("message") && message.isOutbox)
        return; 
    message.user = message.senderId;
    message.text = message.payload.text;  

    if (!message.text) return;
 
    if(!uid[message.user]){
	 	acc.number += 1;
		let numm = acc.number;
		uid[message.user] = {
			id: numm
		}

 		let id = user_id(message.user); 
 		 
		message.send(`馃帀 鉃� *id${message.user}, 胁褘 褍褋锌械褕薪芯 蟹邪褉械谐懈褋褌褉懈褉芯胁邪谢懈褋褜!\n馃摑 鉃� "袩芯屑芯褖褜" - 褋锌懈褋芯泻 泻芯屑邪薪写.\n馃摑 鉃� 效褌芯斜褘 薪械 锌褉芯锌褍褋褌懈褌褜 芯斜薪芯胁谢械薪懈械 锌褉芯械泻褌邪 胁褘 写芯谢卸薪褘 斜褘褌褜 锌芯写锌懈褋邪薪褘 薪邪 薪邪褕褍 谐褉褍锌锌褘: ${config.group_url}`)
	 	   
		
		acc.users[numm] = {
			balance: 5000,
			level: 0, 
			adm_time: 0,
			bitcoin: 0, 
			donate: 0,
			bloks: { 
				cases: false,
				bonus: false,
				random_game: false,
				giverub: false,
				a_case: false,
				pay: false,
				frac: false,
				gun_case: false
			}, 
			ferm: {
				id: false,
				zp: 0
			},
			exs: 0,
			exsup: 50,
			lvl: 0,
			number: numm,
			id: message.user,
			nick: true,
			game: {
				binlose: 0,
				binwin: 0,
				binstop: false,
				kazlose: 0,
				kazwin: 0,
				rand_lose: 0,
				rand_win: 0,
				stavka_win: 0,
				stavka_lose: 0,
				win: 45,
				strela_loose: 0,
				strela_win: 0
			},
			msg: { 
				messages: 0, 
				last_msg: "" 
			},  
			bizs: {
				one_biz: false,
				one: {
					count: false,
					balance: 0,
					id: false,
					name: false,
					people: 0,
					uplvl: 0,
					zp: 0
					},
				two_biz: false,
				two: {
					count: false,
					balance: 0,
					id: false,
					name: false,
					people: 0,
					uplvl: 0,
					zp: 0
					}
			},
			cars: false,
			reys: false,
			aircraft: false,
			helicopter: false,
			house: false,
			housep: 0,
			pit: false,
			bank: 0,
			lodka: false,
			tag: "袧芯胁懈褔芯泻", 
			brak: false,
			ainfo: {
				all_ans: 0,
				ans: 0, 
				good_ans: 0,
				bad_ans: 0,
				vig: 0
			}, 
			safe: {
				status: false,
				key: false
			},
			admin: {
				block_pay: false,
				block_give: false,
				block_rep: false
			}, 
			rep: {
				status: false,
				id: false
			},
			ban: false, 
			mute: false,
			warn: 0,
			warn_p: [],
			credit: 0,
			procent: 0,
			job: { 
				name: false, 
				lvl: 0, 
				stop: false, 
				count: 0 
			}, 
			global_exs: 0,
			autozp: false,
			autobiz: false,
			frac_name: false,
			duel: false,
			duel_summ: false,
			nachal: false,
			uron: 0,
			gun_name: false,
			block_game: true,
			prefix: `袠谐褉芯泻 #${numm}`,
			lvl_v: 1,
			rtime: `${time()} | ${data()}` 
			} 
		////////////////////  
			vk.api.call('users.get', {
				user_ids: message.user,
				fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
			}).then(res => {
				let user = res[0]; 
				acc.users[user_id(message.user)].prefix = `${user.first_name} ${user.last_name}`;
			}).catch((error) => {console.log('err[prefix]'); }); 
	}
	let id = user_id(message.user);

 


	if(message.text){ 
		acc.msg += 1;
		if(!acc.users[user_id(message.user)]) return;
		acc.users[id].msg.messages += 1;
		acc.users[id].msg.last_msg = `${time()} | ${data()}`; 
		if(acc.users[id].mute == true) return; 
	}
  	
	if(acc.users[id].ban != false) return;

    try {
        await next();
    } catch (err) { console.error(err) }
});

 

 	 vk.updates.hear(/^(?:锌褉邪胁懈谢邪)/i, (message) => { 
 		 return message.send(`
		馃敾 鉃� 袗泻褌褍邪谢褜薪褘泄 褋锌懈褋芯泻 锌褉邪胁懈谢 '' 斜芯褌邪 芦 馃敾 
		馃摑 鉃� 袛谢褟 斜械褋械写/褔邪褌芯胁 褋 斜芯褌芯屑 芦 馃摑 

		馃敒 鉃� 袧邪泻邪蟹邪薪懈械: 袘邪薪 || 袩褉械写褍锌褉械卸写械薪懈械. 
		馃敻 鉃� 1. 袙褘锌褉邪褕懈胁邪薪懈械 懈谐褉芯胁芯泄 胁邪谢褞褌褘/锌褉懈胁懈谢械谐懈泄/写芯薪邪褌邪 褍 邪写屑懈薪懈褋褌褉邪褌芯褉芯胁 懈 胁褘褕械. 
		馃敻 鉃� 2. 袦邪褌/芯褋泻芯褉斜谢械薪懈褟 胁 褉械锌芯褉褌. 
		馃敻 鉃� 3. 袨褋泻芯褉斜谢械薪懈械 锌褉芯械泻褌邪.  
		馃敻 鉃� 4. 袨斜屑邪薪 邪写屑懈薪懈褋褌褉邪褑懈懈/懈谐褉芯泻芯胁.

		馃敒 鉃� 袧邪泻邪蟹邪薪懈械: '袦芯谢褔邪薪泻邪'(60-240) 屑懈薪褍褌 || 袩褉械写褍锌褉械卸写械薪懈械
		馃敻 鉃� 5. 袨褋泻芯褉斜谢械薪懈械 褔褍胁褋褌胁 懈谐褉芯泻邪(芯胁).  
		馃敻 鉃� 6. 肖谢褍写/芯褎褎褌芯锌 胁 褉械锌芯褉褌.  
		馃敻 鉃� 7. 袙褘写邪褔邪 褋械斜褟 蟹邪 ADMIN/MODER/VIP. 
		馃敻 鉃� 8. 袠褋锌芯谢褜蟹芯胁邪薪懈械 薪械邪写械泻胁邪褌薪褘褏 薪懈泻芯胁. 


		馃敒 鉃� 袧邪泻邪蟹邪薪懈械: 袘邪薪 || 袩褉械写褍锌褉械卸写械薪懈械. 
		馃敻 鉃� 10. 袠褋锌芯谢褜蟹芯胁邪薪懈械 袘袗袚芯胁, 褋泻褉褘褌懈械 懈褏 芯褌 @kvardazaryan(褉邪蟹褉邪斜芯褌褔懈泻邪)
		馃敻 鉃� 11. 袪邪褋锌褉芯褋褌褉邪薪械薪懈械 褕芯泻 泻芯薪褌械薪褌邪, 泻芯薪褌械薪褌邪 18+ 懈 褌写. 
		馃敻 鉃� 12. 袧邪泻褉褍褌泻邪 谢褞斜褘褏 懈谐褉芯胁褘褏 褋褉械写褋褌胁 褋 褎械泄泻芯胁褘褏 邪泻泻邪褍薪褌芯胁. 
		馃敻 鉃� 13. 袠褋锌芯谢褜蟹芯胁邪薪懈械 褎械泄泻 邪泻泻邪褍薪褌邪. 
		馃敻 鉃� 14. 袩懈邪褉/褉械泻谢邪屑邪/胁褘锌褉邪褕懈胁邪薪懈械 谢邪泄泻芯胁 懈 褌.写. 
		馃敻 鉃� 15. 肖谢褍写 芯写薪芯褌懈锌薪褘屑懈 泻芯屑邪薪写邪屑懈(斜芯谢械械 3-褏 芯写懈薪邪泻芯胁褘褏 泻芯屑邪薪写 胁 褌械褔械薪懈懈 30 褋械泻) 

 		 	`);
 	});

 	vk.updates.hear(/^(?:邪锌褉邪胁懈谢邪)/i,  (message) => { 
 		 return message.send(`
 		 	 馃敾 鉃� 袗泻褌褍邪谢褜薪褘泄 褋锌懈褋芯泻 锌褉邪胁懈谢 '' 斜芯褌邪 芦 馃敾 
			馃摑 鉃� 写谢褟 袗袛袦袠袧袠小孝袪袗孝袨袪袨袙 袠 VIP 芦 馃摑 

			馃敻 鉃� 1. 啸邪屑褋褌胁芯 胁 芯褌胁械褌械 薪邪 褉械锌芯褉褌. [袙褘谐芯胁芯褉] 
			馃敻 鉃� 2. 袧械邪写械泻胁邪褌薪褘械 芯褌胁械褌褘 薪邪 褉械锌芯褉褌. ['袦芯谢褔邪薪泻邪' 120屑懈薪] 
			馃敻 鉃� 3. 袧邪泻褉褍褌泻邪 芯褌胁械褌芯胁 薪邪 褉械锌芯褉褌. [袙褘谐芯胁芯褉] 
			馃敻 鉃� 4. 袘谢邪褌/薪邪泻褉褍褌泻邪 写褉褍谐懈屑 懈谐褉芯泻邪屑 泻邪泻懈褏-谢褞斜芯 懈谐褉芯胁褘褏 褋褉械写褋褌胁. [袘邪薪] 
			馃敻 鉃� 5. 袨斜屑邪薪 褋锌械褑.邪写屑懈薪懈褋褌褉邪褑懈懈. [袘邪薪] 
			馃敻 鉃� 6. 袙褘写邪褔邪 薪邪泻邪蟹邪薪懈褟 斜械蟹 芯锌褉械写械谢褢薪薪芯泄 锌褉懈褔懈薪褘. [袙褘谐芯胁芯褉] 
			馃敻 鉃� 7. 袨褋泻芯褉斜谢械薪懈械 懈谐褉芯泻芯胁 胁 谢褞斜芯泄 斜械褋械写械/褔邪褌械. [袙褘谐芯胁芯褉] 
			馃敻 鉃� 8. 小谢懈胁 泻邪泻芯泄-谢懈斜芯 邪写屑懈薪懈褋褌褉邪褌懈胁薪芯泄 懈薪褎芯褉屑邪褑懈懈. [袘邪薪] 
			馃敻 鉃� 9. 袪邪卸懈谐邪薪懈械 谢褞斜褘褏 泻芯薪褎谢懈泻褌芯胁 屑械卸写褍 懈谐褉芯泻邪屑懈. ['袦芯谢褔邪薪泻邪' 240屑懈薪]
			馃敻 鉃� 10. 袙褘写邪褔邪/锌械褉械写邪褔邪 邪写屑懈薪懈褋褌褉邪褌芯褉邪屑懈 胁邪谢褞褌褘. [袘邪薪]

 		 	`);
 	});
 	vk.updates.hear(/^(?:泻芯)/i,  (message) => { 
 		return message.send(`&#10004; 鉃� 袪邪斜芯褌邪褞! Uptime: ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}\n鉁� 鉃� 袧邪褕邪 谐褉褍锌锌邪: ${config.group_url}`);
 	});
 
 	vk.updates.hear(/^(?:懈屑褍褖械褋褌胁芯)$/i, (message) => {
 		return message.send(`
 	馃憠 鉃� 袠屑褍褖械褋褌胁芯:
    馃殬 鉃� 袦邪褕懈薪褘 
    鉁� 鉃� 小邪屑芯谢械褌褘
    馃殎 鉃� 袙械褉褌芯谢械褌褘 
    馃彚 鉃� 袘懈蟹薪械褋褘
    馃彚 鉃� 小褌邪褌懈褋褌懈泻邪
    馃殼 鉃� 袥芯写泻邪
    馃彚 鉃� 袛芯屑邪
    馃惣 鉃� 袩懈褌芯屑褑褘

    馃搵 鉃� 袛芯屑 - 袠薪褎芯褉屑邪褑懈褟
 			`);
 	});

 	vk.updates.hear(/^(?:懈谐褉褘)$/i, (message) => {
 		return message.send(`
 	鉀� 鉃� 袥芯谐 - 懈薪褎芯 芯 锌芯褋谢械写薪懈褏 懈谐褉邪褏.

 	馃憫 鉃� 孝芯锌 - 褌芯锌 锌芯 褉械泄褌懈薪谐褍.

 	馃憫 鉃� 袣褍锌懈褌褜 褉械泄褌懈薪谐 [count] - 锌芯泻褍锌泻邪馃憫
 	馃憫 鉃� 袩褉芯写邪褌褜 褉械泄褌懈薪谐 [count] - 锌褉芯写邪卸邪馃憫

 	鈿� 鉃� 袣械泄褋 - 泻械泄褋 褋 锌褉懈蟹邪屑懈.
    鈿� 鉃� 袘泻械泄褋 - 斜芯谢褜褕芯泄 泻械泄褋(10 褉褍斜懈薪芯胁)


    馃憠 鉃� 袣邪蟹懈薪芯 <褋褌邪胁泻邪> - 泻邪蟹懈薪芯.
    馃憠 鉃� 袗蟹懈薪芯 <褋褌邪胁泻邪> - 泻邪蟹懈薪芯.
    馃憠 鉃� 袗泻褑懈褟 <胁胁械褉褏/胁薪懈蟹> <褋褌邪胁泻邪> - 邪泻褑懈懈.
    馃憠 鉃� 袘邪谢邪薪褋 - 胁邪褕 斜邪谢邪薪褋.
    馃憠 鉃� 小褌邪胁泻邪 <胁褘褕械/薪懈卸械> <褋褌邪胁泻邪> - 褋褌邪胁泻懈.
    馃憠 鉃� [袙褘褕械(500000-999999)/薪懈卸械(1-499999)]
    馃憠 鉃� 袪邪薪写芯屑 <1-60> <褋褌邪胁泻邪>

    馃捇 鉃� 袩褉芯褎懈谢褜 - 胁邪褕 锌褉芯褎懈谢褜.
    馃幇 鉃� 袠谐褉芯锌褉芯褎懈谢褜 - 胁邪褕 懈谐褉芯胁芯泄 锌褉芯褎懈谢褜.

    馃挵 鉃� 小械泄褎 - 胁蟹谢芯屑 褋械泄褎邪.
    馃挜 鉃� 袥芯褌械褉械褟 - 薪邪 写械薪褜谐懈.
    
    馃敨 鉃� 袣褉褍褌懈褌褜 - 芯褌泻褉褘褌褜 芯褉褍卸械泄薪褘泄 泻械泄褋 蟹邪 100泻.
	馃敨 鉃� 小褌褉械谢邪 [id] [褋褌邪胁泻邪] - 薪邪蟹薪邪褔懈褌褜 褋褌褉械谢褍.
	馃敨 鉃� 袩褉懈薪褟褌褜 - 锌褉懈薪褟褌褜 胁褘蟹芯胁.
	馃敨 鉃� 小写邪褌褜褋褟 - 芯褌泻邪蟹 芯褌 褋褌褉械谢褘.
 			`);
 	});


	vk.updates.hear(/^(?:锌芯屑芯褖褜|薪邪褔邪褌褜)$/i,  (message) => { 
	return message.send(`
	鉁� 鉃� 肖褍薪泻褑懈芯薪邪谢 斜芯褌邪 芦 鉁�
    馃摃 鉃� 袗写屑懈薪泻邪 - 袣芯屑邪薪写褘 邪写屑懈薪懈褋褌褉邪褌芯褉邪.

	馃啒 鉃� 袪械锌芯褉褌 [卸邪谢芯斜邪] - 褋胁褟蟹褜 褋 邪写屑懈薪邪-屑懈.

	鈾� 鉃� 袣芯 - 褋芯褋褌芯褟薪懈械 斜芯褌邪.
	馃帺 鉃� 袘芯褌 - 芯斜褖邪褟 懈薪褎芯褉屑邪褑懈褟. 
    馃拵 鉃� 袩褉芯褎懈谢褜 - 胁邪褕 锌褉芯褎懈谢褜.
    馃拵 鉃� 袩褉芯褎懈谢褜 [ID] -  锌褉芯褋屑芯褌褉 锌褉芯褎懈谢褟 懈谐褉芯泻邪.
    馃憠 鉃� 袩械褉械写邪褌褜 [ID] [小校袦袦袗] - 锌械褉械写邪褔邪 胁邪谢褞褌褘.
    馃憠 鉃� 袘锌械褉械写邪褌褜 [ID] [小校袦袦袗] - 锌械褉械写邪褔邪 斜懈褌泻芯懈薪芯胁. 
	鉁� 鉃� 袧懈泻 <name> - 褋屑械薪懈褌褜 褋胁芯泄 薪懈泻 胁 褔邪褌械.

    馃挸 鉃� 袣褍褉褋 - 泻褍褉褋 芯斜屑械薪邪 褉褍斜懈薪芯胁.
    馃拵 鉃� 孝褉械泄写 [小校袦袦袗] - 芯斜屑械薪 褉褍斜懈薪芯胁 薪邪 $.

    鈿� 鉃� 袩褉邪胁懈谢邪 - 邪泻褌褍邪谢褜薪褘械 锌褉邪胁懈谢邪 袘芯褌邪.
    鈿� 鉃� 袛芯薪邪褌 - 袛芯薪邪褌-屑邪谐邪蟹懈薪.

 	鉁� 鉃� 袠谐褉褘 - 褋锌懈褋芯泻 懈谐褉.
 	鈿� 鉃� 袣械泄褋 - 泻械泄褋 褋 锌褉懈蟹邪屑懈.
    鈿� 鉃� 袘泻械泄褋 - 斜芯谢褜褕芯泄 泻械泄褋(10 褉褍斜懈薪芯胁)

 	馃捈 鉃� 肖褉邪泻褑懈懈 - 褋锌懈褋芯泻 褎褉邪泻褑懈泄
 	馃捈 鉃� 肖褉邪泻褑懈褟 - 懈薪褎芯褉屑邪褑懈褟

 	鉁� 鉃� 袠屑褍褖械褋褌胁芯   
 	馃挸 鉃� 袘邪薪泻
 
 	馃懌 鉃� 小胁邪写褜斜邪 [ID] - 锌芯卸械薪懈褌褜褋褟.
 	馃懌 鉃� 袪邪蟹胁芯写 - 褉邪蟹胁械褋褌懈褋褜.

 	馃摑 鉃� 袪邪斜芯褌褘

 	馃摑 鉃� 袘械褋械写褘 - 褋褋褘谢泻懈 薪邪 薪邪褕懈 斜械褋械写褘.
 	馃摑 鉃� 小芯褋褌邪胁 - 薪邪褕懈 邪写屑懈薪懈褋褌褉邪褌芯褉褘.

	馃摍 鉃� 袙懈泻懈 <蟹邪锌褉芯褋>
	馃摍 鉃� cc <褋褋褘谢泻邪> 
	馃摍 鉃� 袗薪械泻写芯褌 

    `)
   });	

	/// 斜芯薪褍褋褘 写谢 邪写屑懈薪芯胁 

	vk.updates.hear(/^(?:邪写屑懈薪泻械泄褋)$/i, (message) => { 
		let id = user_id(message.user);
		let user = acc.users[user_id(message.user)];
		if(user.level < 1) return message.send(`馃拃 鉃� 袛芯褋褌褍锌 蟹邪泻褉褘褌 芦 馃拃`);
		if(user.level > 1){

		if(user.bloks.a_case == true) return message.send(`馃挼 >> 袗写屑懈薪-袣械泄褋 屑芯卸薪芯 芯褌泻褉褘胁邪褌褜 褉邪蟹 胁 10 屑懈薪褍褌.`);
		 	user.bloks.a_case = true
			setTimeout(() => {
				user.bloks.a_case = false
		}, 600000);

			let text = '鉁� 鉃� 袨褌泻褉褘胁 邪写屑懈薪-泻械泄褋 胁褘 锌芯谢褍褔懈谢懈:\n'
			for(i=0;i<rand(4,8);i++){
				let x = rand(1,100)
				if(x<83){
					let sum = rand(50000,100000)
					user.balance += Number(sum);
					return text +=`馃拃 鉃� +${sum}$ 薪邪 胁邪褕 斜邪谢邪薪褋!`;
				}	
				if(x>83 && x<85){
					let sum = 1
					user.donate += Number(sum);
					return text +=`馃拵 鉃� +${sum} 褉褍斜懈薪(芯胁) 薪邪 胁邪褕 斜邪谢邪薪褋!`;
				}
				 
				if(x>85){
	 				mon = rand(2,4) 
	 				acc.users[id].exs += mon

	 				let up = lvlup(id);
	 				if(up == true){
	 					text += `馃敼 >> ${mon} 芯锌褘褌邪 [校褉芯胁械薪褜 锌芯胁褘褕械薪]\n`
	 				}else{
	 					text += `馃敼 >> ${mon} 芯锌褘褌邪\n`
	 				}
			}
		}
	////
}
});
 
 
	vk.updates.hear(/^(?:邪写屑懈薪泻邪)$/i,  (message) => { 
		let user = acc.users[user_id(message.user)];

		if(user.level < 1) return message.send(`
			馃憫 鉃� VIP-袣芯屑邪薪写褘 芦 馃憫
 			鉁� 鉃� 邪锌褉邪胁懈谢邪 - 胁邪卸薪芯 蟹薪邪褌褜!   
			鉁� 鉃� 褋褌邪褌邪 - 袙邪褕邪 褋褌邪褌懈褋褌懈泻邪.
			鉁� 鉃� get [ID] - 锌褉芯胁械褉懈褌褜 懈谐褉芯泻邪.

			鉁� 鉃� mute [ID] [TIME] - 袙褘写邪褌褜 '屑芯谢褔邪薪泻褍' 懈谐褉芯泻褍.
			鉁� 鉃� unmute [ID] - 小薪褟褌褜 '袦芯谢褔邪薪泻褍'.  

			鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 			鈿� 鉃� [COUNT] - 芯褌 1 写芯 500000.

 			鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
 			馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 7.000.000$
			馃寶 鉃� 邪写屑懈薪泻械泄褋 - 斜芯薪褍褋薪褘泄 泻械泄褋 [褉邪蟹 胁 10屑懈薪]
			鉀斺洈 笑械薪邪: 120 褉褍斜谢械泄 鉀斺洈

			- - - - - - - - - - - -
			馃憫 鉃� MODER-袣芯屑邪薪写褘 芦 馃憫
			鉀� 鉃� 袙褋械 泻芯屑邪薪写褘 VIP'a 

			鉁� 鉃� warn [ID] - 胁褘写邪褌褜 锌褉械写褍锌褉械卸写械薪懈械. 
			鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 			鈿� 鉃� [COUNT] - 芯褌 1 写芯 3000000.

			鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
 			馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 10.000.000$

			鉀斺洈 笑械薪邪: 350 褉褍斜谢械泄 鉀斺洈

			- - - - - - - - - - - -
			馃憫 鉃� ADMIN-袣芯屑邪薪写褘 芦 馃憫
			鉀� 鉃� 袙褋械 泻芯屑邪薪写褘 MODER'a   

			鉁� 鉃� ban [ID] - 蟹邪斜谢芯泻懈褉芯胁邪褌褜 薪邪胁褋械谐写邪.
			鉁� 鉃� unban [ID] - 褉邪蟹斜谢芯泻懈褉芯胁邪褌褜 懈谐褉芯泻邪.  
			鉁� 鉃� setnick [ID] [NAME] - 懈蟹屑械薪懈褌褜 薪懈泻.
			鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 			鈿� 鉃� [COUNT] - 芯褌 1 写芯 10000000.
 			鉁� 鉃� 袣懈泻薪褍褌褜 [小小蝎袥袣袗_袙袣] - 泻懈泻薪褍褌褜 懈蟹 斜械褋械写褘.
 			鈿� 鉃� 袙 薪械 芯褎褎.斜械褋械写邪褏 泻懈泻邪械褌, 械褋谢懈 褋褌邪褌褍褋 谐褉褍锌锌褘: '袗写屑懈薪懈褋褌褉邪褌芯褉'

			鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
 			馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 20.000.000$
			鉀� 鉃� 袧械褌 谢懈屑懈褌邪 薪邪 褋褌邪胁泻懈 胁 懈谐褉邪褏!

			鉀斺洈 笑械薪邪: 500 褉褍斜谢械泄 鉀斺洈

			- - - - - - - - - - - -
			馃憫 鉃� 袚谢邪胁薪褘泄 ADMIN-袣芯屑邪薪写褘 芦 馃憫
			鉁� 鉃� 袙褋械 泻芯屑邪薪写褘 ADMIN'a

			鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 			鈿� 鉃� [COUNT] - 芯褌 1 写芯 80000000.
			鉁� 鉃� vig ID 袩袪袠效袠袧袗 - 胁褘写邪褌褜 邪写屑懈薪-胁褘谐芯胁芯褉
			鉁� 鉃� unvig ID - 褋薪褟褌褜 胁褋械 胁褘谐芯胁芯褉褘.
 			馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 20.000.000.
			鉀� 鉃� 袧械褌 谢懈屑懈褌邪 薪邪 褋褌邪胁泻懈 胁 懈谐褉邪褏!

 			鉀斺洈 笑械薪邪: 1500 褉褍斜谢械泄 鉀斺洈
			`);
		if(user.level == 1){
			return message.send(`
				鈽� 鉃� VIP-袩邪薪械谢褜 芦 鈽�
				鉁� 鉃� 邪锌褉邪胁懈谢邪 - 胁邪卸薪芯 蟹薪邪褌褜!   
				鉁� 鉃� 褋褌邪褌邪 - 袙邪褕邪 褋褌邪褌懈褋褌懈泻邪.
				鉁� 鉃� get [ID] - 锌褉芯胁械褉懈褌褜 懈谐褉芯泻邪.

				鉁� 鉃� mute [ID] [TIME] - 袙褘写邪褌褜 '屑芯谢褔邪薪泻褍' 懈谐褉芯泻褍.
				鉁� 鉃� unmute [ID] - 小薪褟褌褜 '袦芯谢褔邪薪泻褍'.  

				鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 				鈿� 鉃� [COUNT] - 芯褌 1 写芯 500000.

 				鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
 				馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 7.000.000$
				馃寶 鉃� 邪写屑懈薪泻械泄褋 - 斜芯薪褍褋薪褘泄 泻械泄褋 [褉邪蟹 胁 10屑懈薪]
  
				`);
		} 
		if(user.level == 2){

			return message.send(`
				鈽� 鉃� MODER-袩邪薪械谢褜 芦 鈽�
				鉁� 鉃� 邪锌褉邪胁懈谢邪 - 胁邪卸薪芯 蟹薪邪褌褜!   
				鉁� 鉃� warn [ID] - 胁褘写邪褌褜 锌褉械写褍锌褉械卸写械薪懈械. 
				鉁� 鉃� mute [ID] [TIME] - 袙褘写邪褌褜 '屑芯谢褔邪薪泻褍' 懈谐褉芯泻褍.
				鉁� 鉃� unmute [ID] - 小薪褟褌褜 '袦芯谢褔邪薪泻褍'.  

				鉁� 鉃� 芯褌胁械褌 [ID] [TEXT] - 芯褌胁械褌懈褌褜 薪邪 褉械锌芯褉褌.
				鉁� 鉃� 褋褌邪褌邪 - 袙邪褕邪 褋褌邪褌懈褋褌懈泻邪.  
				鉁� 鉃� get [ID] - 锌褉芯胁械褉懈褌褜 懈谐褉芯泻邪.

				鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 				鈿� 鉃� [COUNT] - 芯褌 1 写芯 3000000.

				鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
 				馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 10.000.000$
				馃寶 鉃� 邪写屑懈薪泻械泄褋 - 斜芯薪褍褋薪褘泄 泻械泄褋 [褉邪蟹 胁 10屑懈薪]
				`);
		}
		if(user.level == 3){

		return message.send(`
				鈽� 鉃� ADMIN-袩邪薪械谢褜 芦 鈽�
				鉁� 鉃� 邪锌褉邪胁懈谢邪 - 胁邪卸薪芯 蟹薪邪褌褜! 
				鉁� 鉃� ban [ID] - 蟹邪斜谢芯泻懈褉芯胁邪褌褜 薪邪胁褋械谐写邪.
				鉁� 鉃� unban [ID] - 褉邪蟹斜谢芯泻懈褉芯胁邪褌褜 懈谐褉芯泻邪.
				鉁� 鉃� warn [ID] - 胁褘写邪褌褜 锌褉械写褍锌褉械卸写械薪懈械. 
				鉁� 鉃� mute [ID] [TIME] - 袙褘写邪褌褜 '屑芯谢褔邪薪泻褍' 懈谐褉芯泻褍.
				鉁� 鉃� unmute [ID] - 小薪褟褌褜 '袦芯谢褔邪薪泻褍'.  
				鉁� 鉃� setnick [ID] [NAME] - 懈蟹屑械薪懈褌褜 薪懈泻.

				鉁� 鉃� 芯褌胁械褌 [ID] [TEXT] - 芯褌胁械褌懈褌褜 薪邪 褉械锌芯褉褌.
				鉁� 鉃� 褋褌邪褌邪 - 袙邪褕邪 褋褌邪褌懈褋褌懈泻邪.  
				鉁� 鉃� get [ID] - 锌褉芯胁械褉懈褌褜 懈谐褉芯泻邪.

				鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 				鈿� 鉃� [COUNT] - 芯褌 1 写芯 20000000.

 				鉁� 鉃� 袣懈泻薪褍褌褜 [小小蝎袥袣袗_袙袣] - 泻懈泻薪褍褌褜 懈蟹 斜械褋械写褘.
 				鈿� 鉃� 袙 薪械 芯褎褎.斜械褋械写邪褏 泻懈泻邪械褌, 械褋谢懈 褋褌邪褌褍褋 谐褉褍锌锌褘: '袗写屑懈薪懈褋褌褉邪褌芯褉'

				鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
				鉀� 鉃� 袧械褌 谢懈屑懈褌邪 薪邪 褋褌邪胁泻懈 胁 懈谐褉邪褏!
 				馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 10.000.000$
				馃寶 鉃� 邪写屑懈薪泻械泄褋 - 斜芯薪褍褋薪褘泄 泻械泄褋 [褉邪蟹 胁 10屑懈薪]
				`);
		}
		if(user.level > 3){

			return message.send(`
				鈽� 鉃� 袗写屑懈薪-袩邪薪械谢褜 芦 鈽�
				鉁� 鉃� 邪锌褉邪胁懈谢邪 - 胁邪卸薪芯 蟹薪邪褌褜! 
				鉁� 鉃� ban [ID] - 蟹邪斜谢芯泻懈褉芯胁邪褌褜 薪邪胁褋械谐写邪.
				鉁� 鉃� unban [ID] - 褉邪蟹斜谢芯泻懈褉芯胁邪褌褜 懈谐褉芯泻邪. 
				鉁� 鉃� warn [ID] - 胁褘写邪褌褜 锌褉械写褍锌褉械卸写械薪懈械.
				鉁� 鉃� unwarn [ID] - 褋薪褟褌褜 胁褋械 锌褉械写褍锌褉械卸写械薪懈褟.
				鉁� 鉃� mute [ID] [TIME] - 袙褘写邪褌褜 '屑芯谢褔邪薪泻褍' 懈谐褉芯泻褍.
				鉁� 鉃� unmute [ID] - 小薪褟褌褜 '袦芯谢褔邪薪泻褍'.  

				鉁� 鉃� setnick [ID] [NAME] - 懈蟹屑械薪懈褌褜 薪懈泻.
				鉁� 鉃� 芯褌胁械褌 [ID] [TEXT] - 芯褌胁械褌懈褌褜 薪邪 褉械锌芯褉褌.
				鉁� 鉃� 褋褌邪褌邪 - 袙邪褕邪 褋褌邪褌懈褋褌懈泻邪.

				鉁� 鉃� get [ID] - 锌褉芯胁械褉懈褌褜 懈谐褉芯泻邪. 

				鉁� 鉃� setmoney [COUNT] - 胁褘写邪褌褜 褋械斜械 胁邪谢褞褌褍.
 				鈿� 鉃� [COUNT] - 芯褌 1 写芯 80000000.
				- - - - - - - - - - - 

				鉁� 鉃� 袣懈泻薪褍褌褜 [小小蝎袥袣袗_袙袣] - 泻懈泻薪褍褌褜 懈蟹 斜械褋械写褘.
 				鈿� 鉃� 袙 薪械 芯褎褎.斜械褋械写邪褏 泻懈泻邪械褌, 械褋谢懈 褋褌邪褌褍褋 谐褉褍锌锌褘: '袗写屑懈薪懈褋褌褉邪褌芯褉'

				鉁� 鉃� vig ID 袩袪袠效袠袧袗 - 胁褘写邪褌褜 邪写屑懈薪-胁褘谐芯胁芯褉
				鉁� 鉃� unvig ID - 褋薪褟褌褜 胁褋械 胁褘谐芯胁芯褉褘.

				鈽� 鉃� - - 袘芯薪褍褋褘 - - 芦 鈽�
				鉀� 鉃� 袧械褌 谢懈屑懈褌邪 薪邪 褋褌邪胁泻懈 胁 懈谐褉邪褏!
				馃挻 鉃� 袥懈屑懈褌 薪邪 锌械褉械写邪褔褍: 20000000.
				馃寶 鉃� 邪写屑懈薪泻械泄褋 - 斜芯薪褍褋薪褘泄 泻械泄褋 [褉邪蟹 胁 10屑懈薪]
				`);
		}
	});
  
vk.updates.hear(/^(?:泻懈泻薪褍褌褜)(\s?https\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(message.$from.type == 'user') return message.send(`鈿� 鉃� 袣芯屑邪薪写邪 褉邪斜芯褌邪械褌 褌芯谢褜泻芯 胁 斜械褋械写邪褏!`);
 	if(user.level < 3) return message.send(`鈿� 鉃� 袙褘 薪械 袗写屑懈薪懈褋褌褉邪褌芯褉`);

	if(message.$match[4]) { 
		var domain = message.$match[4].split(" "); 
		vk.api.call("utils.resolveScreenName", { 
		screen_name: message.$match[4] 
	}).then((res) => { 
			if(res.object_id == 164822827) return message.reply('鈿� 鉃� 袨褌泻邪蟹'); 

			if(acc.users[user_id(res.object_id)]){
				if(acc.users[user_id(res.object_id)].level > 2) return message.send(`鈿� 鉃� 袧械谢褜蟹褟 泻懈泻薪褍褌褜 褝褌芯谐芯 懈谐褉芯泻邪!`);
			} 

			vk.api.call("messages.removeChatUser", {chat_id: message.chatId, user_id: res.object_id })
			.catch((error) => {return message.send(`鈿� 鉃� 袨褕懈斜泻邪. 袙芯蟹屑芯卸薪褘械 锌褉懈褔懈薪褘:\n鈿� 鉃� 袙 写邪薪薪芯泄 斜械褋械写械 谐褉褍锌锌邪 薪械 袗写屑懈薪懈褋褌褉邪褌芯褉\n鈿� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌 胁 斜械褋械写械.`);
			});  
			return  
		})  
	}else{
		if(!message.$match[3]) return message.reply("鈿� 鉃� ID 薪械 褍泻邪蟹邪薪, 谢懈斜芯 褍泻邪蟹邪薪 薪械胁械褉薪芯."); 
		if(message.$match[3] == 164822827) return message.reply('鈿� 鉃� 袨褌泻邪蟹'); 

		if(acc.users[user_id(message.$match[3])]){
			if(acc.users[user_id(message.$match[3])].level > 2) return message.send(`鈿� 鉃拘澬敌谎屝费� 泻懈泻薪褍褌褜 褝褌芯谐芯 懈谐褉芯泻邪!`);
		}

		vk.api.call("messages.removeChatUser", { chat_id: message.chatId, user_id: message.$match[3] }).
		catch((error) => {return message.send(`鈿� 鉃� 袨褕懈斜泻邪. 袙芯蟹屑芯卸薪褘械 锌褉懈褔懈薪褘:\n鈿� 鉃� 袙 写邪薪薪芯泄 斜械褋械写械 谐褉褍锌锌邪 薪械 袗写屑懈薪懈褋褌褉邪褌芯褉\n鈿� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌 胁 斜械褋械写械.`);}); 

		return  				
	} 
});

vk.updates.hear(/^(?:薪懈泻)\s?([^]+)?/i,  (message) => { 
	let user = acc.users[user_id(message.user)]; 
	let zaprets1 = message.$match[1].toLowerCase();
	var zapret = /(&#4448;|胁泻 斜芯 褌 |胁泻斜芯褌褉褍|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|胁 泻 斜芯褌|锌芯褉薪芯|botvk|斜芯褌胁泻|vkbot|泻斜芯褌|bot vk|褏械薪褌邪泄|褋械泻褋|锌懈写褉|褌褉邪褏|薪邪褋懈谢懈械|蟹芯芯褎懈谢|斜写褋屑|褋懈褉懈褟|hentai|hentay|褋懈薪懈泄 泻懈褌|褋邪屑芯褍斜懈泄褋褌胁芯|褌械褉褉芯褉懈褋褌褘|褋谢懈胁|褑锌|cp|屑邪谢械薪褜泻懈械|屑邪谢芯谢械褌泻懈|褋褍褔泻懈|褌褉邪褏|械斜谢褟|懈蟹薪邪褋懈谢芯胁邪薪懈械|斜谢褟褌褜|褏褍泄|锌芯褕械谢 薪邪褏|褌胁邪褉褜|屑褉邪蟹褜|褋褍褔泻邪|谐邪薪写芯薪|褍械斜芯泻|褕谢褞褏|锌邪褋泻褍写邪|芯褉谐邪蟹屑|写械胁褋褌胁械薪薪懈褑褘|褑械谢泻懈|褉邪褋褋芯胁芯械|屑械谢泻懈械|屑邪谢芯谢械褌泻懈|薪械褋芯胁械褉褕械薪薪芯谢械褌薪懈械|械斜谢褟|褏械薪褌邪泄|sex|bdsm|ebl|trax|syka|shlux|懈薪褑械褋褌|iznas|屑邪褌褜|写芯谢斜邪械斜|写芯谢斜邪褢斜|褏褍械褋芯褋|褋褍褔泻邪|褋褍泻邪|褌胁邪褉褜|锌械蟹写褞泻|褏褍泄|褕谢褞褏|斜芯谐|褋邪褌邪薪邪|屑褉邪蟹褜)/
	if (zapret.test(zaprets1) == true) { 
			return message.send(`馃摋 鉃� 袩褉懈写褍屑邪泄褌械 邪写械泻胁邪褌薪褘泄 薪懈泻`);
	}
	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[邪-褟0-9-_.]{1,256}\.(褉褎|褋褉斜|斜谢芯谐|斜谐|褍泻褉|褉褍褋|覜邪蟹|丕賲丕乇丕鬲.|賲氐乇.|丕賱爻毓賵丿賷丞.)/
	var lol = filter0.test(zaprets1)
	var lol1 = filter1.test(zaprets1)	
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
		return message.send(`馃摋 鉃� 袩褉懈写褍屑邪泄褌械 邪写械泻胁邪褌薪褘泄 薪懈泻`);
	}
	if(message.$match[1].length > 15) return message.send(`馃摋 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 写谢懈薪邪 薪懈泻邪 15 褋懈屑胁芯谢芯胁.`);
	user.prefix = message.$match[1];
	return message.send(`馃摋 鉃� 袙褘 褋屑械薪懈谢懈 褋胁芯泄 薪懈泻 薪邪: ${message.$match[1]}`);
});



vk.updates.hear(/^(?:褉邪褋褋褘谢泻邪)\s?([^]+)?/i,  message => { 
	if(acc.users[user_id(message.user)].level < 4) return;
	for(i in acc.users){
		vk.api.call('messages.send', {
			user_id: acc.users[i].id,
			message: `[袪邪褋褋褘谢泻邪]:\n->${message.$match[1]}`
		});
	}
	return message.send(`小芯芯斜褖械薪懈褟 芯褌锌褉邪胁谢械薪褘!`);
});

vk.updates.hear(/^(?:锌芯褋褌褉邪褋褋褘谢泻邪)\s?([^]+)?/i,  message => { 
	if(acc.users[user_id(message.user)].level < 4) return;
	for(i in acc.users){
		vk.api.call('messages.send', {
			user_id: acc.users[i].id,
			message: `[袪邪褋褋褘谢泻邪]:\n`,
			attachment: `${message.$match[1]}`
		});
	}
	return message.send(`袩芯褋褌褘 芯褌锌褉邪胁谢械薪褘!`);
});
 

vk.updates.hear(/^(?:锌芯懈褋泻)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, message => { 

	if(message.$match[3]){
		var id = user_id(message.$match[3]);
		if (!acc.users[id]) return message.send(`袧械 胁械褉薪芯 褍泻邪蟹邪薪褘 写邪薪薪褘械 | 袠谐褉芯泻邪 薪械褌`);  
		return message.send(`
			袠谐褉芯泻: ${acc.users[id].prefix}
			ID: ${id}
			小褌邪褌褍褋: ${acc.users[id].level.toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "VIP").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}
		`);
	}else{ 
		if(!message.$match[4]) return message.send(`校泻邪卸懈褌械 写邪薪薪褘械`);
		var domain = message.$match[4].split(" ");
		vk.api.call("utils.resolveScreenName", {
			screen_name: message.$match[4]
		}).then((res) => { 
			var id = user_id(res.object_id);
			if (!acc.users[id]) return message.send(`袧械 胁械褉薪芯 褍泻邪蟹邪薪褘 写邪薪薪褘械 | 袠谐褉芯泻邪 薪械褌`);  
			return message.send(`
				袠谐褉芯泻: ${acc.users[id].prefix}
				ID: ${id}
				小褌邪褌褍褋: ${acc.users[id].level.toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "VIP").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}
				`);
		})
		return;
	}
 
});


vk.updates.hear(/^(?:褋芯褋褌邪胁)/i, message => {  
		let devs, admins, moders, vips, chat; 
		let devels = ``;
		devs = '"小芯蟹写邪褌械谢懈"\n'; 
		gl = '"袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉褘"\n'; 

		admins = '"袗写屑懈薪懈褋褌褉邪褌芯褉褘"\n'
		moders = '"袦芯写械褉邪褌芯褉褘"\n'; 
		vips = '\n"VIP"\n'; 
		for (let id in acc.users) {
			if(acc.users[id]){
			let user = acc.users[id];
 
			if (user.level == 5) devs += `鉁� 鉃� @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			if (user.level == 4) gl += `馃憫 鉃� @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			if (user.level == 3) admins += `馃敼 鉃� @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			if (user.level == 2) moders += `馃敼 鉃� @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			if (user.level == 1) vips += `馃敼 鉃� @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			}
		}
		let text = `\n`;
		if (devs.length != 24) text += devs;
		if (gl.length != 24) text += gl;
		if (admins.length != 24) text += admins;  
		if (moders.length != 24) text += moders;  
		if (vips.length != 24) text += vips; 
		return message.send(`${text}`);
	});

 

vk.updates.hear(/^(?:锌械褉械写邪褌褜)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {  
	if(!message.$match[1] || !message.$match[2]) return message.send(`馃憠 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: 锌械褉械写邪褌褜 ID 小校袦袦袗`)
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_pay == true) return message.send(`馃敻 鉃� 校 胁邪褋 蟹邪斜谢芯泻懈褉芯胁邪薪褘 锌械褉械胁芯写褘 写械薪械谐.`)   

	if(user.level < 1){
	if(user.bloks.pay == true) return message.send(`馃敻 鉃� 袩械褉械写邪胁邪褌褜 胁邪谢褞褌褍 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`)   
		if(message.$match[2] > 5000000) return message.send(`馃挻 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 褋褍屑屑邪 锌械褉械写邪褔懈 5.000.000$\n馃憫 鉃� 校 VIP/MODER/ADMIN - 袥懈屑懈褌 锌械褉械写邪褔懈 褍胁械谢懈褔械薪.`)  
	}
	if(user.level == 1){
	if(user.bloks.pay == true) return message.send(`馃敻 鉃� 袩械褉械写邪胁邪褌褜 胁邪谢褞褌褍 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`)   
		if(message.$match[2] > 7000000) return message.send(`馃挻 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 褋褍屑屑邪 锌械褉械写邪褔懈 7.000.000$\n馃憫 鉃� 校 MODER/ADMIN - 袥懈屑懈褌 锌械褉械写邪褔懈 褍胁械谢懈褔械薪.`)  
	}
	if(user.level == 2){
	if(user.bloks.pay == true) return message.send(`馃敻 鉃� 袩械褉械写邪胁邪褌褜 胁邪谢褞褌褍 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`)   
		if(message.$match[2] > 10000000) return message.send(`馃挻 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 褋褍屑屑邪 锌械褉械写邪褔懈 10.000.000$\n馃憫 鉃� 校 ADMIN - 袥懈屑懈褌 锌械褉械写邪褔懈 褍胁械谢懈褔械薪.`)  
	}
	if(user.level == 3){
	if(user.bloks.pay == true) return message.send(`馃敻 鉃� 袩械褉械写邪胁邪褌褜 胁邪谢褞褌褍 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`)   
		if(message.$match[2] > 20000000) return message.send(`馃挻 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 褋褍屑屑邪 锌械褉械写邪褔懈 20.000.000$`)  
	}
	if(user.level > 3){}
 
	let id = user_id(message.user)
	let ids = message.$match[1] 
	if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`馃憠 鉃� ID 懈 小校袦袦袗 写芯谢卸薪褘 斜褘褌褜 褔懈褋谢芯胁芯谐芯 胁懈写邪.`)
	if(!acc.users[message.$match[1]] || message.$match[2] < 0) return message.send(`馃憠 鉃� 袧械泻芯褉褉械泻褌薪芯 胁胁械写械薪褘 写邪薪薪褘械`)
	if(message.$match[2] > user.balance) return message.send(`馃憠 鉃� 校 胁邪褋 薪械褌 褋褌芯谢褜泻芯 $`);
	user.balance -= Number(message.$match[2]);
	acc.users[message.$match[1]].balance += Number(message.$match[2]);
	logs(user_id(message.user), ids, message.$match[2], type = 1)
 	
 	user.bloks.pay = true; 
		setTimeout(() => {
			user.bloks.pay = false;
	}, 360000);

	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `馃挻 鉃� 袠谐褉芯泻 [ID: ${id}] ${user.prefix} 锌械褉械胁械谢 胁邪屑 ${message.$match[2]}$ | 袙 ${time()}`
	}).then((res) => {}).catch((error) => {console.log('pay(peredacha) error'); });	
	return message.send(`馃挻 鉃� 袙褘 褍褋锌械褕薪芯 锌械褉械胁械谢懈 ${acc.users[message.$match[1]].prefix} -> ${message.$match[2]}$.`);
});

vk.updates.hear(/^(?:斜锌械褉械写邪褌褜)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {  
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_pay == true) return message.send(`馃敻 鉃� 校 胁邪褋 蟹邪斜谢芯泻懈褉芯胁邪薪褘 锌械褉械胁芯写褘 写械薪械谐.`)  
	let id = user_id(message.user)
	let ids = message.$match[1]
	if(!message.$match[1] || !message.$match[2]) return message.send(`馃憠 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: 斜锌械褉械写邪褌褜 ID 小校袦袦袗`)
	if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`馃憠 鉃� ID 懈 小校袦袦袗 写芯谢卸薪褘 斜褘褌褜 褔懈褋谢芯胁芯谐芯 胁懈写邪.`)
	if(!acc.users[message.$match[1]] || message.$match[2] < 0) return message.send(`馃憠 鉃� 袧械泻芯褉褉械泻褌薪芯 胁胁械写械薪褘 写邪薪薪褘械`)
	if(message.$match[2] > user.bitcoin) return message.send(`馃憠 鉃� 校 胁邪褋 薪械褌 褋褌芯谢褜泻芯 袘懈褌泻芯懈薪芯胁`);
	user.bitcoin -= Number(message.$match[2]);
	acc.users[message.$match[1]].bitcoin += Number(message.$match[2]);
	logs(user_id(message.user), ids, message.$match[2], type = 1)
 
	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `馃挻 鉃� 袠谐褉芯泻 [ID: ${id}] ${user.prefix} 锌械褉械胁械谢 胁邪屑 ${message.$match[2]} bitcoins | 袙 ${time()}`
	}).then((res) => {}).catch((error) => {console.log('pay(peredacha) error'); });	
	return message.send(`馃挻 鉃� 袙褘 褍褋锌械褕薪芯 锌械褉械胁械谢懈 ${acc.users[message.$match[1]].prefix} -> ${message.$match[2]} bitcoins.`);
});				 
 
////// 小懈褋褌械屑邪 屑邪褕懈薪
	vk.updates.hear(/^(?:屑邪褕懈薪褘)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
 	let houses = ['袣芯褉芯斜泻邪', '袩芯写胁邪谢' , '袩邪谢邪褌泻邪'] // car 
	for(z in houses){
		if(user.house == houses[z]){return message.send(`馃憠 鉃� 袙邪褕 写芯屑 褋谢懈褕泻芯屑 写械褕械胁褘泄, 褔褌芯斜褘 懈屑械褌褜 写邪薪薪褘泄 褌褉邪薪褋锌芯褉褌.`)}
	}
 	if(user.house == false) return message.send(`馃憠 鉃� 袛谢褟 锌芯泻褍锌泻懈 屑邪褕懈薪褘 袙邪屑 薪褍卸械薪 写芯屑!`);  
		if(!message.$match[1]){
			return message.send(`
			鉃� 1&#8419;. Mercedes S-Class - 35.000.000$
			鉃� 2&#8419;. Volkswagen Phaeton - 45.000.000$
			鉃� 3&#8419;. Lexus LS 430 - 60.000.000$
			鉃� 4&#8419;. Skoda鈥俁apid - 75.000.000$
			鉃� 5&#8419;. Audi A8 -  95.000.000$
			鉃� 6&#8419;. Range Rover - 119.000.000$
			鉃� 7&#8419;. BMW X6 - 120.000.000$
			鉃� 8&#8419;. Porsche Cayenne - 155.000.000$ 
			鉃� 9&#8419;. BMW 7 Series - 164.000.000$
			鉃� 1&#8419;0&#8419;. Lexus LX - 190.000.000$
			 
			馃殬 鉃� 袛谢褟 锌芯泻褍锌泻懈 薪邪锌懈褕懈褌械: 袦邪褕懈薪褘 [薪芯屑械褉] 
			鈿� 鉃� '袙 锌褍褌褜' 芯褌锌褉邪胁懈褌褜 屑邪褕懈薪褍 胁 褉械泄褋.
			馃憠 鉃� 袦邪褕懈薪邪 锌褉芯写邪褌褜 - 写谢褟 锌褉芯写邪卸懈.
			馃憠 鉃� 袩褉懈 锌褉芯写邪卸械 胁械褉薪械褌褋褟 75% 芯褌 褋褍屑屑褘.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 35000000,45000000, 60000000,75000000,95000000,119000000,120000000,155000000,164000000,190000000];
 	let names = [0, 'Mercedes S-Class','Volkswagen Phaeton','Lexus LS 430','Skoda鈥俁apid','Audi A8','Range Rover','BMW X6','Porsche Cayenne','BMW 7 Series','Lexus LX']
 	if(i < 0 || i > 10) return;
 	if(user.cars != false) return message.send(`馃洢 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪邪 屑邪褕懈薪邪`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`馃洢 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
 		user.balance -= count[i]; 
 		user.cars = ids[i]; 
 		return message.send(`馃殬 鉃� 袙褘 泻褍锌懈谢懈 屑邪褕懈薪褍 (${names[i]}) 蟹邪 ${count[i]}$`)
 	} 
 }); 
 
	vk.updates.hear(/^(?:屑邪褕懈薪邪 锌褉芯写邪褌褜)/i, (message) => {
		let count = [0, 1000000,5000000, 10000000,15000000,25000000,39000000,49000000,55000000,64000000,70000000];
		let user = acc.users[user_id(message.user)];
		if(user.cars == false) return message.send(`馃殬 鉃� 校 胁邪褋 薪械褌 屑邪褕懈薪褘`)
		let sum = count[user.cars] / 100 * 75;
		user.balance += sum; 
		user.cars = false; 
		return message.send(`馃殬 鉃� 袙褘 锌褉芯写邪谢懈 褋胁芯泄 邪胁褌芯屑芯斜懈谢褜 蟹邪 ${sum}$`)
	});

	vk.updates.hear(/^(?:胁 锌褍褌褜)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
	if(user.cars == false) return message.send(`馃殬 鉃� 校 胁邪褋 薪械褌 屑邪褕懈薪褘`)
		if(!message.$match[1]){
			return message.send(`
			馃殬 鉃�  袦械褋褌邪 写谢褟 芯褌锌褉邪胁泻懈 屑邪褕懈薪褘 胁 褉械泄褋:

			1&#8419;. 袟邪 谐芯褉芯写 | 1褔 
			2&#8419;. 袙 袦芯褋泻胁褍 | 2褔
			3&#8419;. 袟邪 谐褉邪薪懈褑褍 | 3褔 
			4&#8419;. 袧邪 小械胁械褉薪褘泄 锌芯谢褞褋 | 4褔 
 
			馃殬 鉃� 袙械褉薪褍胁褕懈褋褜 懈蟹 褉械泄褋邪 胁褘 锌芯谢褍褔懈褌械 褌褉芯褎械懈.
			馃殬 鉃� 效械屑 褑械薪薪械械 屑邪褕懈薪邪, 褌械屑 谢褍褔褕械 褌褉芯褎械懈.
			鈿� 鉃� 孝邪泻卸械, 褋谢褍褔邪泄薪芯 屑芯卸械褌 褋谢芯屑邪褌褜褋褟 屑邪褕懈薪邪 懈 芯薪邪 锌褉芯锌邪写械褌.
			`)
		}
	let i = message.$match[1]; 
	let name = [0, '蟹邪 谐芯褉芯写','胁 袦芯褋泻胁褍','蟹邪 谐褉邪薪懈褑褍','薪邪 褋械胁械褉薪褘泄 锌芯谢褞褋']
	let ids = [0,1,2,3,4]
 	let time = [0,3600000,7200000,10800000,14400000]
 	let times = [0,1,2,3,4]
 	if(i < 0 || i > 4) return;
 	if(user.reys != false) return message.send(`馃殬 鉃� 校 胁邪褋 褍卸械 芯褌锌褉邪胁谢械薪邪 屑邪褕懈薪邪 胁 褉械泄褋`);
 	if(i > 0 && i <= 4){   
 		user.reys = true;
 		message.send(`馃殬 鉃� 袙褘 芯褌锌褉邪胁懈谢懈 屑邪褕懈薪褍 胁 褉械泄褋 (${name[i]}) 薪邪 ${times[i]} 褔邪褋芯胁.`)
 		if(rand(1,100) < 80){

 			setTimeout(() => {
 				let a = 0;
 				if(i==1){a = rand(1500,5000)}
 				if(i==2){a = rand(5000,9000)}
 				if(i==3){a = rand(10000,15000)}
 				if(i==4){a = rand(20000,30000)}
 				let id_car = user.car;
				if(id_car < 3){a += rand(1000,3000)}
				if(id_car > 3 && id_car < 6){a += rand(5000,8000)}
				if(id_car > 6){a += rand(90000,12000)}
				user.reys = false;
				return message.send(`馃殬 鉃� 袙邪褕邪 屑邪褕懈薪邪 褍褋锌械褕薪芯 胁械褉薪褍谢邪褋褜 褋 褉械泄褋邪. 袙褘 锌芯谢褍褔懈谢懈: ${a}$`)
			}, time[message.$match[1]]);

 		}else{
 			setTimeout(() => {
	 			user.reys = false;
				user.cars = false;
				return message.send(`馃殬 鉃� 袣 薪械褋褔邪褋褌褜褞 胁邪褕邪 屑邪褕懈薪邪 锌芯锌邪谢邪 胁 邪胁邪褉懈褞. 袚褉褍蟹 薪械 斜褘谢 写芯褋褌邪胁谢械薪, 屑邪褕懈薪褍 褍薪懈谢懈蟹懈褉芯胁邪谢懈.`)
			}, time);
 		} 
 	 
 	} 
 }); 

 
/////// 小懈褋褌械屑邪 胁械褉褌芯谢械褌芯胁/褋邪屑芯谢械褌芯胁

	vk.updates.hear(/^(?:胁械褉褌芯谢械褌褘)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)]; 
	let houses = ['袣芯褉芯斜泻邪', '袩芯写胁邪谢' , '袩邪谢邪褌泻邪','袛芯屑懈泻 薪邪 写械褉械胁械','袩芯谢褍褉邪蟹褉褍褕械薪薪褘泄 袛芯屑'] // car 
	for(z in houses){
		if(user.house == houses[z]){return message.send(`馃憠 鉃� 袙邪褕 写芯屑 褋谢懈褕泻芯屑 写械褕械胁褘泄, 褔褌芯斜褘 懈屑械褌褜 写邪薪薪褘泄 褌褉邪薪褋锌芯褉褌.`)}
	}
 	if(user.house == false) return message.send(`馃憠 鉃� 袛谢褟 锌芯泻褍锌泻懈 胁械褉褌芯谢械褌邪 袙邪屑 薪褍卸械薪 写芯屑!`); /// 袛袨袦 袧袝 袧袠袞袝 5
		if(!message.$match[1]){
			return message.send(`
			鉃� 1&#8419;. Agusta A129 Mangusta - 15.000.000$
			鉃� 2&#8419;. 袦懈-24 - 25.000.000$
			鉃� 3&#8419;. AH-2 - 35.000.000$
			鉃� 4&#8419;. CAIC WZ-10 - 39.000.000$
			鉃� 5&#8419;. HAL LCH -  43.000.000$
			鉃� 6&#8419;. Eurocopter Tiger - 50.000.000$
			鉃� 7&#8419;. 袣邪-52 - 65.000.000$
			鉃� 8&#8419;. Apache - 80.000.000$  
			 
			馃殎 鉃� 袛谢褟 锌芯泻褍锌泻懈 薪邪锌懈褕懈褌械: 袙械褉褌芯谢械褌褘 [薪芯屑械褉] 
			馃憠 鉃� 袙械褉褌芯谢械褌 锌褉芯写邪褌褜 - 写谢褟 锌褉芯写邪卸懈.
			馃憠 鉃� 袩褉懈 锌褉芯写邪卸械 胁械褉薪械褌褋褟 75% 芯褌 褋褍屑屑褘.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 150000000,25000000,35000000,39000000,43000000,50000000,6500000,80000000];
 	let names = [0, 'Agusta A129 Mangusta','袦懈-24','AH-2','CAIC WZ-10','HAL LCH','Eurocopter Tiger','袣邪-52','Apache']
 	if(i < 0 || i > 8) return;
 	if(user.helicopter != false) return message.send(`馃殎 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 胁械褉褌芯谢械褌`);
 	if(i > 0 && i <= 8){
 		if(user.balance < count[i]) return message.send(`馃殎 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
 		user.balance -= count[i];
 		user.helicopter = ids[i];
 		return message.send(`馃殎 鉃� 袙褘 泻褍锌懈谢懈 屑邪褕懈薪褍 (${names[i]}) 蟹邪 ${count[i]}$`)
 	} 
 }); 

 	vk.updates.hear(/^(?:褋邪屑芯谢械褌褘)\s?([0-9]+)?/i,(message) => {  

 	let user = acc.users[user_id(message.user)];  
	let houses = ['袣芯褉芯斜泻邪', '袩芯写胁邪谢' , '袩邪谢邪褌泻邪','袛芯屑懈泻 薪邪 写械褉械胁械','袩芯谢褍褉邪蟹褉褍褕械薪薪褘泄 袛芯屑','袛芯屑 胁 谢械褋褍'] // car
	for(z in houses){
		if(user.house == houses[z]){return message.send(`馃憠 鉃� 袙邪褕 写芯屑 褋谢懈褕泻芯屑 写械褕械胁褘泄, 褔褌芯斜褘 懈屑械褌褜 写邪薪薪褘泄 褌褉邪薪褋锌芯褉褌.`)}
	}
 	if(user.house == false) return message.send(`馃憠 鉃� 袛谢褟 锌芯泻褍锌泻懈 胁械褉褌芯谢械褌邪 袙邪屑 薪褍卸械薪 写芯屑!`); /// 袛袨袦 袧袝 袧袠袞袝 7
		if(!message.$match[1]){
			return message.send(`
			鉃� 1&#8419;. Fokker DR1 Triplane - 30.000.000$
			鉃� 2&#8419;. Mitsubishi A6M Zero - 85.000.000$
			鉃� 3&#8419;. 小褍-35小 - 90.000.000$ 
			 
			鉁� 鉃� 袛谢褟 锌芯泻褍锌泻懈 薪邪锌懈褕懈褌械: 小邪屑芯谢械褌褘 [薪芯屑械褉] 
			馃憠 鉃� 小邪屑芯谢械褌 锌褉芯写邪褌褜 - 写谢褟 锌褉芯写邪卸懈.
			馃憠 鉃� 袩褉懈 锌褉芯写邪卸械 胁械褉薪械褌褋褟 75% 芯褌 褋褍屑屑褘.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 30000000,85000000,90000000];
 	let names = [0, 'Fokker DR1 Triplane','Mitsubishi A6M Zero','小褍-35小']
 	if(i < 0 || i > 3) return;
 	if(user.aircraft != false) return message.send(`鉁� 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 褋邪屑芯谢械褌`);
 	if(i > 0 && i <= 3){
 		if(user.balance < count[i]) return message.send(`鉁� 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
 		user.balance -= count[i];
 		user.aircraft = ids[i];
 		return message.send(`鉁� 鉃� 袙褘 泻褍锌懈谢懈 褋邪屑芯谢械褌 (${names[i]}) 蟹邪 ${count[i]}$`)
 	} 
 }); 
 

	vk.updates.hear(/^(?:褋邪屑芯谢械褌 锌褉芯写邪褌褜)/i,  (message) => {
		let count = [0, 30000000,85000000,90000000];
		let user = acc.users[user_id(message.user)];
		if(user.aircraft == false) return message.send(`鉁� 鉃� 校 胁邪褋 薪械褌 褋邪屑芯谢械褌邪`)
		let sum = count[user.aircraft] / 100 * 75;
		user.balance += sum;
		user.aircraft = false;
		return message.send(`鉁� 鉃� 袙褘 锌褉芯写邪谢懈 褋胁芯泄 褋邪屑芯谢械褌 蟹邪 ${sum}$`)
	});

	vk.updates.hear(/^(?:胁械褉褌芯谢械褌 锌褉芯写邪褌褜)/i,  (message) => {
		let count = [0, 50000000,15000000,35000000,39000000,43000000,50000000,6500000,80000000];
		let user = acc.users[user_id(message.user)];
		if(user.helicopter == false) return message.send(`馃殎 鉃� 校 胁邪褋 薪械褌 胁械褉褌芯谢械褌邪`)
		let sum = count[user.helicopter] / 100 * 75;
		user.balance += sum;
		user.helicopter = false;
		return message.send(`馃殎 鉃� 袙褘 锌褉芯写邪谢懈 褋胁芯泄 胁械褉褌芯谢械褌 蟹邪 ${sum}$`)
	});
///// 袘懈蟹薪械褋 褋懈褋褌械屑邪 - - - - - - -
	vk.updates.hear(/^(?:褋褌邪褌懈褋褌懈泻邪)\s?([0-9]+)?/i,  (message) => {  
		let user = acc.users[user_id(message.user)]; 
		let text = '馃彚 鉃� 小褌邪褌懈褋褌懈泻邪 斜懈蟹薪械褋芯胁: \n';
		if(user.bizs.one_biz == true){ text +=  `馃敻 鉃� 袘懈蟹薪械褋: ${user.bizs.one.name}\n馃敻 鉃� 袩褉懈斜褘谢褜: ${user.bizs.one.zp}$\n馃敻 鉃� 袥褞写械泄: ${user.bizs.one.people}\n馃敻 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢-胁芯 谢褞写械泄: ${user.bizs.one.max_peop}\n`}
		if(user.bizs.two_biz == true){ text +=  `馃敻 鉃� 袘懈蟹薪械褋: ${user.bizs.two.name}\n馃敻 鉃� 袩褉懈斜褘谢褜: ${user.bizs.two.zp}$\n馃敻 鉃� 袥褞写械泄: ${user.bizs.two.people}\n馃敻 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢-胁芯 谢褞写械泄: ${user.bizs.two.max_peop}`}
		return message.send(text)
	});

 

 vk.updates.hear(/^(?:斜懈蟹薪械褋褘)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			馃彚 1&#8419;. 袩邪谢邪褌泻邪 | 1.000.000$ [5]  
			馃彚 2&#8419;. 袥邪褉械泻 | 5.000.000$ [10]  
			馃彚 3&#8419;. 袦邪谐邪蟹懈薪 | 20.000.000$ [15] 
			馃彚 4&#8419;. 袚懈锌械褉屑邪褉泻械褌 | 30.000.000$ [20]  
			馃彚 5&#8419;. 校薪懈胁械褉屑邪谐 | 50.000.000$ [25]  
			馃彚 6&#8419;. 袗袟小 | 70.000.000$ [30]  
			馃彚 7&#8419;. 袗褌芯屑薪邪褟 褋褌邪薪褑懈褟 | 90.000.000$ [35]   
			馃彚 8&#8419;. 袠薪褌械褉薪械褌 锌褉芯胁邪泄写械褉 | 110.000.000$ [40] 
			馃彚 9&#8419;. 袘邪薪泻 | 130.000.000$ [45]  
			馃彚 1&#8419;0&#8419;. 袧邪褉泻芯锌褉懈褌芯薪 | 210.000.000$ [50] 
			
			馃彚 鉃� 袙 褋泻芯斜芯褔泻邪褏: 泻芯谢-胁芯 写芯褋褌褍锌薪褘褏 泻 薪邪泄屑褍 褉邪斜芯褔懈褏
			鈿� 鉃� 袧邪薪褟褌褜 褉邪斜芯褔械谐芯: 薪邪薪褟褌褜 [泻芯谢-胁芯] [薪芯屑械褉 1-2] | +5k/褔
			馃彚 鉃� 笑械薪邪 薪邪泄屑邪 1 褉邪斜芯褔械谐芯 - 50.000$

			馃彚 鉃� 袛谢褟 锌芯泻褍锌泻懈 薪邪锌懈褕懈褌械: 袘懈蟹薪械褋褘 [薪芯屑械褉]
			馃彚 鉃� 袛邪薪薪褘械 芯 斜懈蟹薪械褋械: 褋褌邪褌懈褋褌懈泻邪 

			鈿� 鉃� '袩褉懈斜褘谢褜' - 锌芯谢褍褔懈褌褜 械卸械褔邪褋薪褍褞 锌褉懈斜褘谢褜

			鈿� 鉃� 袛谢褟 锌褉芯写邪卸懈: '袘懈蟹薪械褋 锌褉芯写邪褌褜 [薪芯屑械褉]'
			馃憠 鉃� 袩褉懈 锌褉芯写邪卸械 胁械褉薪械褌褋褟 75% 芯褌 褋褍屑屑褘.
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];
 	let count = [0, 1000000, 5000000,20000000,30000000,50000000,70000000,90000000,110000000,130000000,210000000];
	let max_peop = [0,5,10,15,20,25,30,35,40,45,50]
 	let names = [0, '袩邪谢邪褌泻邪','袥邪褉械泻','袦邪谐邪蟹懈薪','袚懈锌械褉屑邪褉泻械褌','校薪懈胁械褉屑邪谐','袗袟小','袗褌芯屑薪邪褟 褋褌邪薪褑懈褟','袠薪褌械褉薪械褌 锌褉芯胁邪泄写械褉','袘邪薪泻','袧邪褉泻芯锌褉懈褌芯薪'] 
 	if(i < 0 || i > 10) return message.send(`馃彚 鉃� 袧械胁械褉薪褘泄 薪芯屑械褉 斜懈蟹薪械褋邪.`)
 	if(!Number(message.$match[1])) return message.send(`馃彚 鉃� 校泻邪卸懈褌械 薪芯屑械褉 斜懈蟹薪械褋邪`)

 	if(user.bizs.one_biz == false){
 		if(user.balance < count[i]) return message.send(`馃彚 鉃� 校 胁邪褋 薪械褌 褌邪泻芯泄 褋褍屑屑褘.`);
 		user.balance -= count[i];
		user.bizs.one_biz = true;
		user.bizs.one.count = Number(count[i])
		user.bizs.one.id = Number(i) 
		 user.bizs.one.name =  names[i];
		user.bizs.one.max_peop = max_peop[i];
		return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 斜懈蟹薪械褋 '${names[i]}' 蟹邪 ${count[i]}$`) 
	}
	if(Number(i) == user.bizs.one.id) return message.send(`馃彚 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 褌邪泻芯泄 胁懈写 斜懈蟹薪械褋邪.`)
	if(Number(i) == user.bizs.two.id) return message.send(`馃彚 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 褌邪泻芯泄 胁懈写 斜懈蟹薪械褋邪.`)	
	if(user.bizs.two_biz == false){
 		if(user.balance < count[i]) return message.send(`馃彚 鉃� 校 胁邪褋 薪械褌 褌邪泻芯泄 褋褍屑屑褘.`);
		if(Number(i) == user.bizs.one.id) return message.send(`馃彚 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 褌邪泻芯泄 胁懈写 斜懈蟹薪械褋邪.`)
		user.balance -= count[i];
		user.bizs.two_biz = true;
		user.bizs.two.count = Number(count[i])
		user.bizs.two.id = Number(i) 
		 user.bizs.two.name =  names[i];
		user.bizs.two.max_peop = max_peop[i];
		return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 斜懈蟹薪械褋 '${names[i]}' 蟹邪 ${count[i]}$`) 
	}
	return message.send(`馃彚 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪芯 2 斜懈蟹薪械褋邪.`) 
 
 });
 

	vk.updates.hear(/^(?:斜懈蟹薪械褋 锌褉芯写邪褌褜)\s?([0-9]+)?/i,  (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.bizs.one_biz == false && user.bizs.two_biz == false) return message.send(`馃彚 鉃� 校 胁邪褋 薪械褌 斜懈蟹薪械褋芯胁.`)
		if(message.$match[1] < 0 || message.$match[1] > 2) return message.send(`馃彚 鉃� 校泻邪卸懈褌械 胁械褉薪褘泄 薪芯屑械褉 斜懈蟹薪械褋邪.`);
		if(message.$match[1] == 1){
			let sum = user.bizs.one.count / 100 * 75
			user.balance += sum;
			user.bizs.one_biz = false;
			user.bizs.one.count = false;
			user.bizs.one.id = false;
			user.bizs.one.name = false;
			user.bizs.one.people = 0; 
			user.bizs.one.zp = 0;
			user.bizs.one.max_peop = 0;
			return message.send(`馃彚 鉃� 袙褘 锌褉芯写邪谢懈 褋胁芯泄 斜懈蟹薪械褋 蟹邪 ${sum}$`);
		}
		if(message.$match[1] == 2){
			let sum = user.bizs.two.count / 100 * 75
			user.balance += sum;
			user.bizs.two_biz = false;
			user.bizs.two.count = false;
			user.bizs.two.id = false;
			user.bizs.two.name = false;
			user.bizs.two.people = 0; 
			user.bizs.two.zp = 0;
			user.bizs.two.max_peop = 0;
			return message.send(`馃彚 鉃� 袙褘 锌褉芯写邪谢懈 褋胁芯泄 斜懈蟹薪械褋 蟹邪 ${sum}$`);
		}		  
	 
	});


	vk.updates.hear(/^(?:薪邪薪褟褌褜)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {  
		if(!message.$match[1]) return message.send(`馃彚 鉃� 校泻邪卸懈褌械 泻芯谢懈褔械褋褌胁芯 褉邪斜芯褔懈褏 | 薪邪薪褟褌褜 <泻芯谢-胁芯> <薪芯屑械褉>`)
		if(!message.$match[2]) return message.send(`馃彚 鉃� 校泻邪卸懈褌械 薪芯屑械褉 斜懈蟹薪械褋邪 | 薪邪薪褟褌褜 <泻芯谢-胁芯> <薪芯屑械褉>`)
		if(!Number(message.$match[1]) || message.$match[1] < 0 || message.$match[1] > 100 || !Number(message.$match[2]) || message.$match[2] < 1 || message.$match[2] > 2) return message.send(`馃彚 袧械胁械褉薪芯 褍泻邪蟹邪薪褘 写邪薪薪褘械 | 薪邪薪褟褌褜 <泻芯谢-胁芯> <薪芯屑械褉>`)
		let id = user_id(message.user)
		let num = message.$match[2]; 
		if(message.$match[1] * 50000 > acc.users[id].balance) return message.send(`馃彚 鉃� 袛谢褟 锌芯泻褍锌泻懈 [${message.$match[1]}] 褉邪斜芯褔懈褏 薪褍卸薪芯 [${message.$match[1] * 50000}$]`);
	    if(message.$match[2] == 1){ 
	    	if(acc.users[id].bizs.one_biz == false) return message.send(`馃彚 鉃� 校 胁邪褋 薪械 泻褍锌谢械薪 斜懈蟹薪械褋.`)
	    	if(acc.users[id].bizs.one.max_peop - acc.users[id].bizs.one.people < message.$match[1]) return message.send(`馃彚 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢懈褔械褋褌胁芯 褉邪斜芯褌薪懈泻芯胁: ${acc.users[id].bizs.one.max_peop}`)
	    	acc.users[id].bizs.one.people += Number(message.$match[1])
	    	acc.users[id].balance -= Number(message.$match[1]) * 50000;
	    	acc.users[id].bizs.one.zp += 5000 * Number(message.$match[1]);
	    	return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 ${message.$match[1]} 褉邪斜芯褔懈褏. 袙邪褕邪 锌褉懈斜褘谢褜 褍胁械谢懈褔懈谢邪褋褜 薪邪: ${message.$match[1] * 5000}$`)
	    }
	    if(message.$match[2] == 2){
	    	if(acc.users[id].bizs.two_biz == false) return message.send(`馃彚 鉃� 校 胁邪褋 薪械 泻褍锌谢械薪 斜懈蟹薪械褋.`)
	    	if(acc.users[id].bizs.two.max_peop - acc.users[id].bizs.two.people < message.$match[1]) return message.send(`馃彚 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢懈褔械褋褌胁芯 褉邪斜芯褌薪懈泻芯胁: ${acc.users[id].bizs.two.max_peop}`)
	    	acc.users[id].bizs.two.people += Number(message.$match[1])
	    	acc.users[id].balance -= Number(message.$match[1]) * 50000;
	    	acc.users[id].bizs.two.zp += 5000 * Number(message.$match[1]);
	    	return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 ${message.$match[1]} 褉邪斜芯褔懈褏. 袙邪褕邪 锌褉懈斜褘谢褜 褍胁械谢懈褔懈谢邪褋褜 薪邪: ${message.$match[1] * 5000}$`)
	    } 
		 
	});

	vk.updates.hear(/^(?:锌褉懈斜褘谢褜)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.bizs.one_biz == false && user.bizs.two_biz == false) return message.send(`馃彚锔� 鉃� 校 胁邪褋 薪械褌 斜懈蟹薪械褋芯胁.`); 
 	if(user.bizs.one.stop == true || user.bizs.two.stop == true) return message.send(`馃彚锔� 鉃� 袩褉懈斜褘谢褜 屑芯卸薪芯 斜褉邪褌褜 褉邪蟹 胁 褔邪褋.`)
 	
 	if(user.bizs.one_biz == true){
 		text += `馃摑 鉃� 袩褉懈斜褘谢褜 褋 斜懈蟹薪械褋邪 <${user.bizs.one.name}> 褋芯褋褌邪胁懈谢邪: ${user.bizs.one.zp}$\n`;
 		user.balance += Number(user.bizs.one.zp)
 	}
 	if(user.bizs.one_biz == true){
 		text += `馃摑 鉃� 袩褉懈斜褘谢褜 褋 斜懈蟹薪械褋邪 <${user.bizs.two.name}> 褋芯褋褌邪胁懈谢邪: ${user.bizs.two.zp}$\n`;
 		user.balance += Number(user.bizs.two.zp)
 	}

 	user.bizs.one.stop = true;
 	user.bizs.two.stop = true;
 
	setTimeout(() => {
			user.bizs.one.stop = false;
			user.bizs.two.stop = false;
	}, 3600000);


 	return message.send(`
 		${text} 
 		`);
 });
  

 

///// 袗袛袦袠袧 袣袨袦袗袧袛蝎 - - - -- - - 
 
 

 	vk.updates.hear(/^(?:褋褌邪褌邪)/i,(message) => { 
 		let user = acc.users[user_id(message.user)];
 		if(user.level < 1) return;
 		let warns = ''; 
 		return message.send(`
 			馃敂 ~ ~ 小褌邪褌懈褋褌懈泻邪 袗写屑懈薪懈褋褌褉邪褌芯褉邪 ~ ~ 馃敂

 			馃敻 鉃� 校褉芯胁械薪褜 邪写屑懈薪懈褋褌褉邪褌芯褉邪: ${user.level}
 			馃敻 鉃� 效邪褋芯胁 写芯 褋薪褟褌懈褟: ${user.adm_time}

 			鉁� 鉃� 袣芯谢懈褔械褋褌胁芯 芯褌胁械褌芯胁: [${user.ainfo.all_ans}]
			鈾� 鉃� 袪械锌褍褌邪褑懈褟: [${user.ainfo.good_ans}/${user.ainfo.bad_ans}] (褏芯褉芯褕芯/锌谢芯褏芯)
			鈿� 鉃� 袙褘谐芯胁芯褉芯胁: [${user.ainfo.vig}]   
 			`);

 	});

	vk.updates.hear(/^(?:褉械锌芯褉褌|report|rep|卸邪谢芯斜邪|胁芯锌褉芯褋)\s?([^]+)?/i, (message) => { 
 		if(message.$from.type != 'user') return message.send(`袨斜褉邪褖邪褌褜褋褟 胁 褉械锌芯褉褌 屑芯卸薪芯 褌芯谢褜泻芯 胁 袥小 ${config.group_url}`);
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 胁褘 薪械 薪邪锌懈褋邪谢懈 卸邪谢芯斜褍 | 褉械锌芯褉褌 [褌械泻褋褌]`);
		let a = zapret(message.$match[1]);
		if(a != 0) return message.send(a);

		for(i=0;i<200000;i++){
			if(acc.users[i]){
			if(acc.users[i].level >= 2){ 
				vk.api.call("messages.send", {
					peer_id: acc.users[i].id,
					message: `馃憠 鉃� [REPORT]\n馃憠 鉃� ID 懈谐褉芯泻邪: ${user_id(message.user)}\n馃憠 鉃� 袞邪谢芯斜邪: ${message.$match[1]}\n馃憠 鉃� [袛谢褟 芯褌胁械褌邪: 芯褌胁械褌 [ID] [TEXT]`
				}).then((res) => {}).catch((error) => {console.log('report error'); });	
			}
		}
		}
		return message.send(`馃敻 鉃� 袙褘 褍褋锌械褕薪芯 芯褌锌褉邪胁懈谢懈 卸邪谢芯斜褍.`);
	});


	vk.updates.hear(/^(?:褉械褋锌械泻褌)\s?([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: 褉械褋锌械泻褌 +/-\n馃敻 鉃� [+ -> 褏芯褉芯褕懈泄 芯褌胁械褌/ - -> 锌谢芯褏芯泄 芯褌胁械褌]`);
		if(user.rep.status == false) return message.send(`馃敻 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械.`); 
		if(message.$match[1] == '+' || message.$match[1] == '-'){
			user.rep.status = false; 
			if(message.$match[1] == '+') acc.users[user.rep.id].ainfo.good_ans += 1; 
			if(message.$match[1] == '-') acc.users[user.rep.id].ainfo.bad_ans += 1;  
			let id = user.rep.id;
			user.rep.id = false;
			return message.send(`馃敻 鉃� 袙褘 褍褋锌械褕薪芯 芯褑械薪懈谢懈 芯褌胁械褌 \n馃敻 鉃� 袗写屑懈薪懈褋褌褉邪褌芯褉邪 [${acc.users[id].prefix}] - ${message.$match[1].toString().replace(/\+/gi, '袩芯谢芯卸懈褌械谢褜薪芯').replace(/-/gi, '袨褌褉懈褑邪褌械谢褜薪芯')}.`)
			 
		}
		return message.send(`馃敻 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械.`); 
	});
 
	vk.updates.hear(/^(?:芯褌胁械褌)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.admin.block_rep == true) return message.send(`馃敻 鉃� 校 胁邪褋 蟹邪斜谢芯泻懈褉芯胁邪薪褘 芯褌胁械褌褘 薪邪 褉械锌芯褉褌.`)
		if(user.level < 2) return
		if(!Number(message.$match[1]) || !message.$match[1] || !message.$match[2] || !acc.users[message.$match[1]]) return message.send(`馃敻 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械.`);
		let a = zapret(message.$match[2]);
		if(a != 0) return message.send(a); 
		vk.api.call("messages.send", {
			peer_id: acc.users[message.$match[1]].id,
			message: `馃憠 鉃� 袗写屑懈薪懈褋褌褉邪褌芯褉: ${user.prefix} 芯褌胁械褌懈谢 袙邪屑:\n馃憠 ${message.$match[2]}\n\n馃憠 袨褑械薪懈褌械 芯褌胁械褌: 褉械褋锌械泻褌 +/- [褏芯褉芯褕芯/锌谢芯褏芯]`
		}).then((res) => {}).catch((error) => {console.log('ans error'); });	
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		user.ainfo.all_ans += 1;
		user.ainfo.ans += 1;
		acc.users[message.$match[1]].rep.status = true;
		acc.users[message.$match[1]].rep.id = Number(user_id(message.user));
		return message.send(`馃憠 鉃� 袨褌胁械褌 芯褌锌褉邪胁谢械薪.`)
	});


	vk.updates.hear(/^(?:setnick)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`); 
		if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: setnick [ID] [袠袦携]`);
		let zaprets1 = message.$match[2].toLowerCase();
		var zapret = /(胁泻 斜芯 褌 |褋芯胁邪 薪械 褋锌懈褌|褋芯胁邪 薪懈泻芯谐写邪 薪械 褋锌懈褌|褋 芯 胁 邪 薪 械 褋 锌 懈 褌|褋芯胁邪薪懈泻芯谐写邪薪械褋锌懈褌|褋芯胁邪 薪械 褋锌懈褌 薪懈泻芯谐写邪|胁泻斜芯褌褉褍|vkvot ru|vkbotru|vkbot|v k b o t . r u|胁 泻 斜芯褌|锌芯褉薪芯|botvk|斜芯褌胁泻|vkbot|泻斜芯褌|bot vk|褏械薪褌邪泄|褋械泻褋|锌懈写褉|褌褉邪褏|薪邪褋懈谢懈械|蟹芯芯褎懈谢|斜写褋屑|褋懈褉懈褟|hentai|hentay|褋懈薪懈泄 泻懈褌|褋邪屑芯褍斜懈泄褋褌胁芯|褌械褉褉芯褉懈褋褌褘|褋谢懈胁|褑锌|cp|屑邪谢械薪褜泻懈械|屑邪谢芯谢械褌泻懈|褋褍褔泻懈|褌褉邪褏|械斜谢褟|懈蟹薪邪褋懈谢芯胁邪薪懈械|斜谢褟褌褜|褏褍泄|锌芯褕械谢 薪邪褏|褌胁邪褉褜|屑褉邪蟹褜|褋褍褔泻邪|谐邪薪写芯薪|褍械斜芯泻|褕谢褞褏|锌邪褋泻褍写邪|芯褉谐邪蟹屑|写械胁褋褌胁械薪薪懈褑褘|褑械谢泻懈|褉邪褋褋芯胁芯械|屑械谢泻懈械|屑邪谢芯谢械褌泻懈|薪械褋芯胁械褉褕械薪薪芯谢械褌薪懈械|械斜谢褟|褏械薪褌邪泄|sex|bdsm|ebl|trax|syka|shlux|懈薪褑械褋褌|iznas|屑邪褌褜|写芯谢斜邪械斜|写芯谢斜邪褢斜|褏褍械褋芯褋|褋褍褔泻邪|褋褍泻邪|褌胁邪褉褜|锌械蟹写褞泻|褏褍泄|褕谢褞褏|斜芯谐|褋邪褌邪薪邪|屑褉邪蟹褜)/
		if (zapret.test(zaprets1) == true) { 
				return message.send(`馃摋 鉃� 袩褉懈写褍屑邪泄褌械 邪写械泻胁邪褌薪褘泄 薪懈泻`);
		}
		var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter1 = /(?!http(s)?:\/\/)?(www\.)?[邪-褟0-9-_.]{1,256}\.(褉褎|褋褉斜|斜谢芯谐|斜谐|褍泻褉|褉褍褋|覜邪蟹|丕賲丕乇丕鬲.|賲氐乇.|丕賱爻毓賵丿賷丞.)/
		var lol = filter0.test(zaprets1)
		var lol1 = filter1.test(zaprets1)	
		if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
			return message.send(`馃摋 鉃� 袩褉懈写褍屑邪泄褌械 邪写械泻胁邪褌薪褘泄 薪懈泻`);
		}
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		acc.users[message.$match[1]].prefix = message.$match[2];
		user.ainfo.nicks += 1;
		return message.send(`馃摋 鉃� 袙褘 褋屑械薪懈谢懈 薪懈泻 懈谐褉芯泻邪 薪邪: ${message.$match[2]}`);
	});

	vk.updates.hear(/^(?:ban)\s?([0-9]+)?\s([^]+)?/i, (message) => {  
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: ban [ID] [袩袪袠效袠袧袗]`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);
		acc.users[message.$match[1]].ban = message.$match[2]; 
		user.ainfo.bans += 1;
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� ${user.prefix} 蟹邪斜谢芯泻懈褉芯胁邪谢 袙邪褋 薪邪胁褋械谐写邪.\n鉁� 鉃� 袩褉懈褔懈薪邪: ${message.$match[2]}`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 蟹邪斜谢芯泻懈褉芯胁邪谢懈 懈谐褉芯泻邪 [${acc.users[message.$match[1]].prefix}] 薪邪胁褋械谐写邪.\n鉁� 鉃� 袩褉懈褔懈薪邪: ${message.$match[2]}`);
	}); 
 
 

vk.updates.hear(/^(?:setmoney)\s?([0-9]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_give == true) return message.send(`馃敻 鉃� 校 胁邪褋 蟹邪斜谢芯泻懈褉芯胁邪薪邪 胁褘写邪褔邪 胁邪谢褞褌褘.`)
	if(user.level < 1) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
	if(user.bloks.giverub == true) return message.send(`馃挵 鉃� 袙褘写邪胁邪褌褜 胁邪谢褞褌褍 屑芯卸薪芯 褉邪蟹 胁 褔邪褋`);
	if(user.level == 1){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 500000) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'setmoney [1-500000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level == 2){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 3000000) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'setmoney [1-3000000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level == 3){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 10000000) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'setmoney [1-10000000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level > 3){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 80000000) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'setmoney [1-80000000]'`);
		user.balance += Number(message.$match[1]);
	}
	user.bloks.giverub = true;
		setTimeout(() => {
			user.bloks.giverub = false;
	}, 3600000);

	return message.send(`馃挵 鉃� 袙褘 胁褘写邪谢懈 褋械斜械 ${spaces(message.$match[1])}$`);
});



vk.updates.hear(/^(?:giverub)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'giverub [ID] [COUNT]'`); 
			acc.users[message.$match[1]].balance += Number(message.$match[2]);
		 	
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 2)
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`馃挵 鉃� 袙褘 胁褘写邪谢懈 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])}$`);
 
	 
});

vk.updates.hear(/^(?:ungiverub)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'ungiverub [ID] [COUNT]'`); 
			acc.users[message.$match[1]].balance -= Number(message.$match[2]);
		 	
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 2)
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`馃挵 鉃� 袙褘 芯褌薪褟谢懈 褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])}$`);
 
	 
});

vk.updates.hear(/^(?:removerub)\s?([0-9]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 4) return; 
			if(!message.$match[1] || !acc.users[message.$match[1]]) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'removerub [ID]'`); 
			acc.users[message.$match[1]].balance = 0;
				logs(user_id(message.user), message.$match[1], message.$match[2], type = 3)
			return message.send(`馃挵 鉃� 袙褘 蟹邪斜褉邪谢懈 胁褋械 $ 褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})]`);
	 
});


vk.updates.hear(/^(?:givedonate)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let id = user_id(message.user)
	
	let i = config;
	let user = acc.users[user_id(message.user)];
	if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 褋锌械褑.邪写屑懈薪懈褋褌褉邪褌芯褉`);
	if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'givedonate [ID] [COUNT]'`); 
	acc.users[message.$match[1]].donate += Number(message.$match[2]);
 	
	var is = [user_id(message.user), message.text] 
	adm_log(is)
	return message.send(`馃拵 鉃� 袙褘 胁褘写邪谢懈 懈谐褉芯泻褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])} 褉褍斜懈薪芯胁馃拵`);
});

vk.updates.hear(/^(?:removedonate)\s?([0-9]+)?\s?([0-9]+)?/i, message => {
	let id = user_id(message.user)

	let i = config;
	if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`馃拵 鉃� 袩褉懈屑械褉: 'removedonate [ID] [COUNT] \n馃拵 鉃� COUNT - 泻芯谢懈褔械褋褌胁芯 芯褌薪懈屑邪械屑芯谐芯 写芯薪邪褌邪.'`); 
			let user = acc.users[user_id(message.user)];
			if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`); 
			acc.users[message.$match[1]].donate -= Number(message.$match[2]);
			return message.send(`馃拵 鉃� 袙褘 蟹邪斜褉邪谢懈  褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${message.$match[2]} 褉褍斜懈薪芯胁`);
	 
});


 


vk.updates.hear(/^(?:褋锌械褑)$/i, message => {
	let id = user_id(message.user)
	if(acc.users[id].level < 5) return;
			return message.send(`
				袣芯屑邪薪写褘 褋锌械褑.邪写屑懈薪懈褋褌褉邪褌芯褉邪
				giverub [id] [count] - 胁褘写邪褌褜 胁邪谢褞褌褍.
				removerub [id] - 邪薪薪褍谢懈褉芯胁邪褌褜 胁邪谢褞褌褍.
				givedonate [id] [count] - 胁褘写邪褌褜 写芯薪邪褌.
				removedonate [id] [count] - 芯褌薪褟褌褜 泻芯谢-胁芯 写芯薪邪褌邪.
				delluser [id] - 芯斜薪褍谢懈褌褜 邪泻泻邪褍薪褌 懈谐褉芯泻褍.

				oon id - 胁褘褋褌邪胁懈褌褜 芯谐褉邪薪懈褔械薪懈械 薪邪 褋褌邪胁泻懈
				oof id - 褋薪褟褌褜 芯谐褉邪薪懈褔械薪懈械
				boostzp ID LVL(1-24)
				boostbiz ID LVL(1-24)

				givevip id time
				givemoder id time
				giveadm id time 

				`);
 
});


vk.updates.hear(/^(?:delluser)\s?([0-9]+)?/i,  message => {
	let id = user_id(message.user)

	let i = config;
	if(acc.users[id].level < 5) return;

			let user = acc.users[user_id(message.user)];
			if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
			if(!message.$match[1] || !acc.users[message.$match[1]]) return message.send(`馃挵 鉃� 袩褉懈屑械褉: 'delluser [ID]'`); 

			acc.users[message.$match[1]].balance = 0;
		 	acc.users[message.$match[1]].bitcoin =0
		 	acc.users[message.$match[1]].donate =0
		 	acc.users[message.$match[1]].exs =0
		 	acc.users[message.$match[1]].exsup = 50
		 	acc.users[message.$match[1]].lvl  =0
		 	acc.users[message.$match[1]].game.binlose =0
		 	acc.users[message.$match[1]].game.binwin =0
		 	acc.users[message.$match[1]].game.binstop = false
		 	acc.users[message.$match[1]].game.kazlose =0
		 	acc.users[message.$match[1]].game.kazwin =0
		 	acc.users[message.$match[1]].game.rand_lose =0
		 	acc.users[message.$match[1]].game.rand_win =0
		 	acc.users[message.$match[1]].game.stavka_win =0
		 	acc.users[message.$match[1]].game.stavka_lose =0
		 	acc.users[message.$match[1]].game.win = 50
		 	acc.users[message.$match[1]].msg.messages = 0
		 	acc.users[message.$match[1]].msg.last_msg = ''
		 	acc.users[message.$match[1]].prefix = `校写邪谢械薪 | ${time()} | ${data()}`
		 	acc.users[message.$match[1]].cars = false
		 	acc.users[message.$match[1]].house = false
		 	acc.users[message.$match[1]].lodka = false
		 	acc.users[message.$match[1]].rep.status = false
		 	acc.users[message.$match[1]].rep.id = false 
		 	acc.users[message.$match[1]].warn = 0 
		 	acc.users[message.$match[1]].warn_p = []
		 	acc.users[message.$match[1]].aircraft = false
		 	acc.users[message.$match[1]].helicopter = false 
		 	acc.users[message.$match[1]].level = 0
		 	acc.users[message.$match[1]].bizs.one_biz = false
		 	acc.users[message.$match[1]].bizs.two_biz =  false
		 	acc.users[message.$match[1]].bizs.one.count = false
		 	acc.users[message.$match[1]].bizs.one.balance = 0
		 	acc.users[message.$match[1]].bizs.one.id = false
		 	acc.users[message.$match[1]].bizs.one.name = false
		 	acc.users[message.$match[1]].bizs.one.people = 0
		 	acc.users[message.$match[1]].bizs.one.uplvl = 0
		 	acc.users[message.$match[1]].bizs.one.zp = 0 
		 	acc.users[message.$match[1]].bizs.two.count = false
		 	acc.users[message.$match[1]].bizs.two.balance = 0
		 	acc.users[message.$match[1]].bizs.two.id = false
		 	acc.users[message.$match[1]].bizs.two.name = false
		 	acc.users[message.$match[1]].bizs.two.people = 0
		 	acc.users[message.$match[1]].bizs.two.uplvl = 0
		 	acc.users[message.$match[1]].bizs.two.zp = 0 
		 	acc.users[message.$match[1]].bizs.two.max_peop = 0 
		 	acc.users[message.$match[1]].bizs.one.max_peop = 0 
		 	acc.users[message.$match[1]].job.name = false;
		 	acc.users[message.$match[1]].job.count = 0;
		 	acc.users[message.$match[1]].job.stop = false;
		 	acc.users[message.$match[1]].job.lvl = 0;
		 	acc.users[message.$match[1]].mute = false;
		 	acc.users[message.$match[1]].ferm.id = false;
		 	acc.users[message.$match[1]].ferm.zp = 0;
		 	acc.users[message.$match[1]].reys = false;
		 	acc.users[message.$match[1]].housep = 0;
		 	acc.users[message.$match[1]].pit = false;
		 	acc.users[message.$match[1]].bank = 0;
		 	acc.users[acc.users[message.$match[1]].brak].brak = false;
		 	acc.users[message.$match[1]].brak = false;
		 	acc.users[message.$match[1]].safe.status = false;
		 	acc.users[message.$match[1]].safe.key = false;
		 	acc.users[message.$match[1]].credit = 0;
		 	acc.users[message.$match[1]].procent = 0;
		 	acc.users[message.$match[1]].global_exs = 0;
		 	acc.users[message.$match[1]].autozp = false;
		 	acc.users[message.$match[1]].autobiz = false;
		 	acc.users[message.$match[1]].frac_name = false;
		 	acc.users[message.$match[1]].duel = false;
		 	acc.users[message.$match[1]].duel_summ = false;
		 	acc.users[message.$match[1]].uron = 0;
		 	acc.users[message.$match[1]].gun_name = false;
		 	acc.users[message.$match[1]].block_game = true;
		 	acc.users[message.$match[1]].nachal = false;
					 
			return message.send(`馃挵 鉃� 袙褘 褍写邪谢懈谢 邪泻泻邪褍薪褌 懈谐褉芯泻邪 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})]`);
	
});
 
 
//////////////// mute /////////
vk.updates.hear(/^(?:mute)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(user.level < 1) return message.send(`馃敻 鉃� 袙褘 薪械 VIP`);
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`鈴� 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械:\n鈴� 鉃� mute [ID] [TIME(1-999)]`);
	let time = message.$match[2] * 60000;
	let id = Number(message.$match[1])
	acc.users[id].mute = true;

	var is = [user_id(message.user), message.text] 
	adm_log(is)

	setTimeout(() => {
			acc.users[id].mute = false;
			vk.api.call('messages.send', {
				peer_id: acc.users[id].id,
				message: `鈴� 鉃� 袙褉械屑械薪薪邪褟 斜谢芯泻懈褉芯胁泻邪 斜褘谢邪 褋薪褟褌邪. :)`
			});
	}, time);

	vk.api.call('messages.send', {
		peer_id: acc.users[id].id,
		message: `鈴� 鉃� ${user.prefix} 胁褉械屑械薪薪芯 蟹邪斜谢芯泻懈褉芯胁邪谢 写芯褋褌褍锌 泻 斜芯褌褍 薪邪 [${message.$match[2]}] 屑懈薪褍褌(褘).\n\n鈴� 鉃� 效械褉械蟹 [${message.$match[2]}] 屑懈薪褍褌 斜谢芯泻懈褉芯胁泻邪 锌褉芯锌邪写械褌.`
	});
	return message.send(`馃挵 鉃� 袙褘 蟹邪斜谢芯泻懈褉芯胁邪谢懈 胁褉械屑械薪薪芯 写芯褋褌褍锌 泻 斜芯褌褍 懈谐褉芯泻褍  [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] 薪邪 ${time/60000} 屑懈薪褍褌`); 
});


vk.updates.hear(/^(?:unmute)\s?([0-9]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(user.level < 1) return message.send(`馃敻 鉃� 袙褘 薪械 VIP`);
	if(!message.$match[1] || !Number(message.$match[1]) || !acc.users[message.$match[1]]) return message.send(`鈴� 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械:\n鈴� 鉃� unmute [ID]`);
		var is = [user_id(message.user), message.text] 
		adm_log(is)
 	
	acc.users[message.$match[1]].mute = false;  
	vk.api.call('messages.send', {
		peer_id: acc.users[message.$match[1]].id,
		message: `鈴� 鉃� 袙褉械屑械薪薪邪褟 斜谢芯泻懈褉芯胁泻邪 斜褘谢邪 褋薪褟褌邪 写芯褋褉芯褔薪芯 | 袘芯谢褜褕械 薪械 薪邪褉褍褕邪泄褌械 :)`
	});
	return message.send(`馃挵 鉃� 袙褘 褋薪褟谢懈 斜谢芯泻懈褉芯胁泻褍 懈谐褉芯泻褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})]`);
	 
});
////////////////////////////// 
vk.updates.hear(/^(?:oon)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: oon ID`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);
		acc.users[message.$match[1]].block_game = true 

		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 锌芯褋褌邪胁懈谢懈 芯谐褉邪薪懈褔械薪懈械 薪邪 褋褌邪胁泻懈 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:oof)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: ooff ID`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);
		acc.users[message.$match[1]].block_game = false; 

		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 褋薪褟谢懈 芯谐褉邪薪懈褔械薪懈械 薪邪 褋褌邪胁泻懈 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: unban ID`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);
		acc.users[message.$match[1]].ban = false 
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� ${user.prefix} 褉邪蟹斜谢芯泻懈褉芯胁邪谢 袙邪褋.`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 褉邪蟹斜谢芯泻懈褉芯胁邪谢懈 懈谐褉芯泻邪 [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: warn [ID] [袩袪袠效袠袧袗]`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 2) return message.send(`馃敻 鉃� 袙褘 薪械 MODER`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);

		acc.users[message.$match[1]].warn += 1;
		acc.users[message.$match[1]].warn_p.push(message.$match[2]);
		logs(user_id(message.user), message.$match[1], message.$match[2], type = 6)

		var is = [user_id(message.user), message.text] 
		adm_log(is)

		let text = `鉁� 鉃� ${user.prefix} 胁褘写邪谢 胁邪屑 warn(锌褉械写褍锌褉械卸写械薪懈械)`
		if(acc.users[message.$match[1]].warn == 3){
			acc.users[message.$match[1]].warn = 0;
			acc.users[message.$match[1]].ban = true;
			acc.users[message.$match[1]].warn_p = []
			text += `\n馃敻 鉃� 校 胁邪褋 3 锌褉械写褍锌褉械卸写械薪懈褟.\n馃敻 鉃� 袙邪褕 邪泻泻邪褍薪褌 蟹邪斜谢芯泻懈褉芯胁邪薪.`
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: text
		});
		user.ainfo.warns += 1;
		return message.send(`鉁� 鉃� 袙褘 胁褘写邪谢懈 锌褉械写褍锌褉械卸写械薪懈械 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}].`);
	}); 

	vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: unwarn ID`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 4) return message.send(`馃敻 鉃� 袙褘 薪械 袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);

		acc.users[message.$match[1]].warn = 0; 
		acc.users[message.$match[1]].warn_p = []

		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� 袗写屑懈薪懈褋褌褉邪褌芯褉 褋薪褟谢 袙邪屑 胁褋械 锌褉械写褍锌褉械卸写械薪懈褟`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 褋薪褟谢懈 胁褋械 锌褉械写褍锌褉械卸写械薪懈褟 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}].`);
	}); 

 


vk.updates.hear(/^(?:vig)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: vig [ID] `);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 4) return message.send(`馃敻 鉃� 袙褘 薪械 袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);

		acc.users[message.$match[1]].ainfo.vig += 1; 

		var is = [user_id(message.user), message.text] 
		adm_log(is)

		let text = `鉁� 鉃� ${user.prefix} 胁褘写邪谢 胁邪屑 邪写屑懈薪-胁褘谐芯胁芯褉.\n鉁� 鉃� 袩芯褋谢械 3 胁邪褋 褋薪懈屑械褌 褋 邪写屑懈薪-锌芯褋褌邪.`
		if(acc.users[message.$match[1]].ainfo.vig == 3){
			acc.users[message.$match[1]].ainfo.vig = 0;  
			acc.users[message.$match[1]].level = 0;
			text += `\n馃敻 鉃� 校 胁邪褋 3 锌褉械写褍锌褉械卸写械薪懈褟.\n馃敻 鉃� 袙褘 谢懈褕懈谢懈褋褜 邪写屑懈薪-锌褉邪胁.`
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: text
		}); 
		return message.send(`鉁� 鉃� 袙褘 胁褘写邪谢懈 胁褘谐芯胁芯褉 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}].`);
	}); 

	vk.updates.hear(/^(?:unvig)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: unwarn ID`);
		if(!Number(message.$match[1])) return message.send(`馃敻 鉃� 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
		if(user.level < 4) return message.send(`馃敻 鉃� 袙褘 薪械 袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉`);
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);

		acc.users[message.$match[1]].ainfo.vig = 0; 

		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� 袗写屑懈薪懈褋褌褉邪褌芯褉 褋薪褟谢 袙邪屑 胁褋械 胁褘谐芯胁芯褉褘`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`鉁� 鉃� 袙褘 褋薪褟谢懈 胁褋械 胁褘谐芯胁芯褉褘 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}].`);
	}); 

///////////////////////////////////////////////////////////////////////////
	vk.updates.hear(/^(?:斜芯褌)$/i, (message) => {
		let dev = '';   
		return message.send(`
			馃摑 鉃� 袩褉芯械泻褌: ${config.bot}
			馃捇 鉃� 袙械褉褋懈褟: 2.1
			馃拃 鉃� 小芯蟹写邪褌械谢褜: @mastachoktv(袛屑懈褌褉懈泄)  

			馃摋 鉃� 袩芯谢褜蟹芯胁邪褌械谢械泄: ${acc.number}

			馃摐 鉃� 袚褉褍锌锌邪: ${config.group_url}
			`);
	});
	vk.updates.hear(/^(?:斜械褋械写褘)$/i,  (message) => { 
		return message.send(`
			馃摌 鉃� 小褋褘谢泻懈 薪邪 薪邪褕懈 斜械褋械写褘:
 
			`);
	});

/////
vk.updates.hear(/^(?:斜邪谢邪薪褋)/i,  (message) => { 
	let user = acc.users[user_id(message.user)];
	return message.send(`
		馃敻 鉃� ID: ${user_id(message.user)} 
		馃挻 鉃� 袘邪谢邪薪褋 ${spaces(user.balance)}$ 
		馃挻 鉃� 袘懈褌泻芯懈薪芯胁 ${spaces(user.bitcoin)}$ 
		馃敻 鉃� 袪褍斜懈薪芯胁: ${spaces(user.donate)} 
		馃敻 鉃� 校褉芯胁械薪褜: ${user.lvl} 
		馃憫 鉃� 袪械泄褌懈薪谐: ${spaces(user.global_exs)}
		馃敻 鉃� 袨锌褘褌邪: [${user.exs}馃専/${user.exsup}馃専]`
		)

});


vk.updates.hear(/^(?:get)\s?([0-9]+)?/i, (message) => {  
	let user = acc.users[user_id(message.user)]; 
	let warns = '';
	if(!message.$match[1] || !Number(message.$match[1]) || !acc.users[message.$match[1]]) return message.send(`馃敻 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械.`);
	for(i=0;i<acc.users[message.$match[1]].warn_p.length;i++){warns += `鉀� 鉃� ${acc.users[message.$match[1]].warn_p[i]}\n`}
	if(user.level < 1) return; 
	let id = acc.users[message.$match[1]]
	return message.send(`
		馃搵 袠薪褎芯褉屑邪褑懈褟 芯斜 懈谐褉芯泻械 [${id.prefix}] 馃搵
		馃敻 鉃� 袠屑褟: ${id.prefix}
		馃敼 鉃� ID: ${message.$match[1]}
		馃敼 鉃� 笑懈褎褉芯胁芯泄: ${id.id}
		馃敼 鉃� VK: @id${id.id}(${id.prefix})
		馃敼 鉃� 袘邪谢邪薪褋: ${id.balance}
		馃敼 鉃� 袘懈褌泻芯懈薪芯胁: ${id.bitcoin}
		馃敼 鉃� 袪褍斜懈薪芯胁: ${id.donate}
		馃敼 鉃� 袩褉懈胁懈谢械谐懈褟: ${id.level.toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "袙懈锌").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}
		馃敼 鉃� 袛邪褌邪 褉械谐懈褋褌褉邪褑懈懈: ${id.rtime}

		袠屑褍褖械褋褌胁芯:\n` +
		(user.level >= 3 ? `鉁� 鉃� 小邪屑芯谢械褌:  ${id.aircraft.name}\n` : ``)+
		(user.level >= 3 ? `馃殎 鉃� 袙械褉褌芯谢械褌: ${id.helicopter.name}\n` : ``)+
		(user.level >= 3 ? `馃殬 鉃� 袗胁褌芯屑芯斜懈谢褜: ${id.cars.name}\n` : ``)+  
		(user.level >= 3 ? `馃殼 鉃� 袥芯写泻邪: ${id.lodka}\n` : ``)+ 
		(user.level >= 3 ? `馃彙 鉃� 袛芯屑: ${id.house}\n` : ``)+   
		(user.pit== false ? `馃惣 鉃� 袩懈褌芯屑械褑:  芯褌褋褍褌褋褌胁褍械褌\n` : `馃惣 鉃� 袩懈褌芯屑械褑:  ${user.pit}\n`)+
		(user.gun_name == false ? `馃敨 鉃� 袨褌褋褍褌褋褌胁褍械褌\n` : `馃敨 鉃� 袧邪蟹胁邪薪懈械: ${user.gun_name}\n`)+  
		` 
		馃彣 鉃� 袘懈蟹薪械褋褘: 
		`+(user.level >= 3 ? `1&#8419; 鉃� ${id.bizs.one.name} || ${spaces(id.bizs.one.zp)}$/褔邪褋\n` : ``)+  
		(user.level >= 3 ? `2&#8419; 鉃� ${id.bizs.two.name} || ${spaces(id.bizs.two.zp)}$/褔邪褋\n` : ``)+  
		`
		`+
		(user.level >= 3 ? `馃敻 鉃� 袩芯褋谢械写薪械械 褋屑褋 斜芯褌褍: ${id.msg.last_msg}\n` : ``)+  
		(user.level >= 3 ? `馃敻 鉃� 小芯芯斜褖械薪懈泄 斜芯褌褍: ${id.msg.messages}\n` : ``)+ 
		(user.level >= 2 ? `馃敻 鉃� 校褉芯胁械薪褜: ${id.lvl}\n` : ``)+ 
		(user.level >= 2 ? `馃敻 鉃� 袨锌褘褌: ${id.exs}\n` : ``)+  

		(user.level >= 2 ? `\n鈿� 鉃� 袩褉械写褍锌褉械卸写械薪懈泄: ${id.warn}\n` : ``)+ 
		(user.level >= 2 ? `鈿� 鉃� 袩褉懈褔懈薪褘: [${id.warn}]\n${warns}\n` : ``)+ 
		(user.level >= 4 ? `鉀� 鉃� 袗写屑懈薪-胁褘谐芯胁芯褉芯胁: ${user.ainfo.vig}\n` : ``)+  
		(id.ban == false ? `鈿� 鉃� 袗泻泻邪褍薪褌 薪械 蟹邪斜谢芯泻懈褉芯胁邪薪\n` : `鈿� 鉃� 袗泻泻邪褍薪褌 蟹邪斜谢芯泻懈褉芯胁邪薪 [${id.ban}]`)
		);
	});

 
		

vk.updates.hear(/^(?:褋胁邪写褜斜邪)\s?([0-9]+)?/i, (message) => {  
	let user = acc.users[user_id(message.user)]; 
	if(user.brak != false) return message.send(`馃檯 鉃� 袙褘 褍卸械 卸械薪邪褌褘.`);
	if(!acc.users[message.$match[1]]) return message.send(`馃毝 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌.`);
	if(acc.users[message.$match[1]].brak != false) return message.send(`馃檯 鉃� 协褌芯褌 懈谐褉芯泻 褍卸械 卸械薪邪褌!`);
	user.brak = Number(message.$match[1]);
	acc.users[message.$match[1]].brak = user_id(message.user);
	return message.send(`鉃栤灃鉃栤灃鉃朶n鈿� 鉃� - - - - [袙袧袠袦袗袧袠袝] - - - - <<鈿燶n馃懌 鉃� 袩芯蟹写褉邪胁懈屑 屑芯谢芯写芯卸械薪芯胁: \n馃懌 鉃� -->> ${user.prefix} 懈 ${acc.users[message.$match[1]].prefix} <<--\n鉃栤灃鉃栤灃鉃朻)
});

vk.updates.hear(/^(?:褉邪蟹胁芯写)/i, (message) => {  
	let user = acc.users[user_id(message.user)]; 
	if(user.brak == false) return message.send(`馃檯 鉃� 袙褘 薪械 卸械薪邪褌褘.`); 
	acc.users[user.brak].brak = false;
	user.brak = false;
	return message.send(`馃懌 鉃� 袙褘 褍褋锌械褕薪芯 褉邪蟹胁械谢懈褋褜.`)
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
vk.updates.hear(/^(?:懈谐褉芯锌褉芯褎懈谢褜)/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	return message.send(`
		馃摃 >> 袙邪褕 袠谐褉芯-袩褉芯褎懈谢褜 芦 馃摃
		馃敻 鉃� 袠屑褟: ${user.prefix}
		馃敻 鉃� ID: ${user_id(message.user)}
		馃敻 鉃� 袘邪谢邪薪褋: ${spaces(user.balance)}$
	
		馃幉 鉃� 袠谐褉褘 芦 馃幉	 
		馃幇 鉃� 袣邪蟹懈薪芯: [袩芯斜械写: ${user.game.kazwin}/ 袩芯褉邪卸械薪懈泄: ${user.game.kazlose}]
		馃搳 鉃� 袗泻褑懈懈: [袩芯斜械写: ${user.game.binwin}/ 袩芯褉邪卸械薪懈泄: ${user.game.binlose}]
		馃幉 鉃� 小褌邪胁泻邪: [袩芯斜械写: ${user.game.stavka_win}/ 袩芯褉邪卸械薪懈泄: ${user.game.stavka_lose}]
		馃挵 鉃� 袪邪薪写芯屑: [袩芯斜械写: ${user.game.rand_win}/ 袩芯褉邪卸械薪懈泄: ${user.game.rand_lose}]
		馃敨 鉃� 小褌褉械谢褘: [袩芯斜械写: ${user.game.strela_loose}/ 袩芯褉邪卸械薪懈泄: ${user.game.strela_win}] 
		`);

});

 

vk.updates.hear(/^(?:锌褉芯褎懈谢褜|锌褉芯褎)\s?([0-9]+)?/i, (message) => { 
	 let cars = [0, 'Mercedes S-Class','Volkswagen Phaeton','Lexus LS 430','Skoda鈥俁apid','Audi A8','Range Rover','BMW X6','Porsche Cayenne','BMW 7 Series','Lexus LX']
	 let hel = [0, 'Agusta A129 Mangusta','袦懈-24','AH-2','CAIC WZ-10','HAL LCH','Eurocopter Tiger','袣邪-52','Apache']
	 let air = [0, 'Fokker DR1 Triplane','Mitsubishi A6M Zero','小褍-35小']

	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let warns = '';
	for(i=0;i<user.warn_p.length;i++){warns += `鉀� 鉃� ${user.warn_p[i]}\n`}

	if(!message.$match[1]){
		return message.send(`
		馃摃 >> 袙邪褕 锌褉芯褎懈谢褜 芦 馃摃
		馃敻 鉃� 袠屑褟: ${user.prefix}
		馃敻 鉃� ID: ${user_id(message.user)}
		馃敼 鉃� 笑懈褎褉芯胁芯泄: ${message.user}
		馃敻 鉃� 袘邪谢邪薪褋: ${spaces(user.balance)}$
		馃敻 鉃� 袘懈褌泻芯懈薪芯胁: ${spaces(user.bitcoin)}
		馃敻 鉃� 袪褍斜懈薪芯胁: ${spaces(user.donate)}
		馃憫 鉃� 袪械泄褌懈薪谐: ${spaces(user.global_exs)}
		馃敻 鉃� 袛邪褌邪 褉械谐懈褋褌褉邪褑懈懈: ${user.rtime}

		鉀� 鉃� 袗写屑懈薪-胁褘谐芯胁芯褉芯胁: ${user.ainfo.vig}
		鉀� 鉃� 袩褉懈胁懈谢械谐懈褟: ${user.level.toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "VIP").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}
		 
		` +
		(user.brak == false ? `馃挅 鉃� 袧械 卸械薪邪褌\n` : `馃挅 鉃� 袦褍卸/卸械薪邪:   ${acc.users[user.brak].prefix}\n`)+
		`

		鈿� 鉃� 袩褉械写褍锌褉械卸写械薪懈泄: [${user.warn}]
		鈿� 鉃� 袩褉懈褔懈薪褘: 
		${warns}
		馃敻 鉃� 校褉芯胁械薪褜: ${user.lvl} 
		馃敻 鉃� 袨锌褘褌邪: [${user.exs}馃専/${user.exsup}馃専]

		` +(user.pit== false ? `馃惣 鉃� 袩懈褌芯屑械褑:  芯褌褋褍褌褋褌胁褍械褌\n` : `馃惣 鉃� 袩懈褌芯屑械褑:  ${user.pit}\n`)+
		`
		袠屑褍褖械褋褌胁芯:\n` +
		(user.aircraft == false ? `鉁� 鉃� 小邪屑芯谢械褌:  芯褌褋褍褌褋褌胁褍械褌\n` : `鉁� 鉃� 小邪屑芯谢械褌:  ${air[user.aircraft]}\n`)+
		(user.helicopter == false ? `馃殎 鉃� 袙械褉褌芯谢械褌: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殎 鉃� 袙械褉褌芯谢械褌: ${hel[user.helicopter]}\n`)+
		(user.cars == false ? `馃殬 鉃� 袗胁褌芯屑芯斜懈谢褜: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殬 鉃� 袗胁褌芯屑芯斜懈谢褜: ${cars[user.cars]}\n`)+  
		(user.lodka == false ? `馃殼 鉃� 袥芯写泻邪: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殼 鉃� 袥芯写泻邪: ${user.lodka}\n`)+ 
		(user.house == false ? `馃彙 鉃� 袛芯屑: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃彙 鉃� 袛芯屑: ${user.house}\n`)+   
		` 
		馃彣 鉃� 袘懈蟹薪械褋褘: 
		`+(user.bizs.one_biz == false ? `1&#8419; 鉃� 芯褌褋褍褌褋褌胁褍械褌\n` : `1&#8419; 鉃� ${user.bizs.one.name} || ${spaces(user.bizs.one.zp)}$/褔邪褋\n`)+  
		(user.bizs.two_biz == false ? `2&#8419; 鉃� 芯褌褋褍褌褋褌胁褍械褌\n` : `2&#8419; 鉃� ${user.bizs.two.name} || ${spaces(user.bizs.two.zp)}$/褔邪褋\n`)+  
		`

		馃敨 鉃� 袨褉褍卸懈械:
		`+(user.gun_name == false ? `馃敨 鉃� 袨褌褋褍褌褋褌胁褍械褌\n` : `馃敨 鉃� 袧邪蟹胁邪薪懈械: ${user.gun_name}\n`)+  
		` 
		馃敨 鉃� 校褉芯薪: ${user.uron}
		鉂� 鉃� 袟写芯褉芯胁褜械: 100%
		`);
	}else{
		if(!Number(message.$match[1]) || !acc.users[message.$match[1]]) return message.send(`馃敻 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械.`);
		let id = acc.users[message.$match[1]]
		return message.send(`
			馃搵 袠薪褎芯褉屑邪褑懈褟 芯斜 懈谐褉芯泻械 [${id.prefix}] 馃搵
			馃敻 鉃� 袠屑褟: ${id.prefix}
			馃敼 鉃� ID: ${message.$match[1]}
			馃敼 鉃� VK: @id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})
			馃敼 鉃� 袘邪谢邪薪褋: ${spaces(id.balance)}
			馃敼 鉃� 袪褍斜懈薪芯胁: ${spaces(id.donate)}
			馃敼 鉃� 袩褉懈胁懈谢械谐懈褟: ${id.level.toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "袙懈锌").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}
			` +
			(id.brak == false ? `馃挅 鉃� 袧械 卸械薪邪褌\n` : `馃挅 鉃� 袦褍卸/卸械薪邪:   ${acc.users[id.brak].prefix}\n`)+
			`
			馃敨 鉃� 袨褉褍卸懈械:
			`+(id.gun_name == false ? `馃敨 鉃� 袨褌褋褍褌褋褌胁褍械褌\n` : `馃敨 鉃� 袧邪蟹胁邪薪懈械: ${id.gun_name}\n`)+  
			` 
			馃敨 鉃� 校褉芯薪: ${id.uron}
			鉂� 鉃� 袟写芯褉芯胁褜械: 100%
			`);
		}
	 
});


 
//////////////////////////////////////////
	vk.updates.hear(/^(?:褌芯锌)/i,  (message) => {

		let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {
		if(acc.users[i]){
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				lvl: acc.users[i].global_exs
			})

		} 
			 
		}
		tops.sort(function(a, b) {
			if (b.lvl > a.lvl) return 1
			if (b.lvl < a.lvl) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					lvl: tops[g].lvl,
					smile: `${ups}`
				})
			}
		}
		var people = "馃憫 孝袨袩 袩袨 袪袝袡孝袠袧袚校 馃憫 \n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.lvl) + "馃憫").join("\n")
		text += `${people}\n\n`; 
		message.send(text);
	});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	vk.updates.hear(/^(?:泻械泄褋|斜芯薪褍褋)/i, (message) => {  
 		if(message.$from.type != 'user') return message.send(`袘褉邪褌褜 斜芯薪褍褋 屑芯卸薪芯 褌芯谢褜泻芯 胁 袥小 ${config.group_url}`);
		let user = acc.users[user_id(message.user)];
 		let id = user_id(message.user)
 		if(user.bloks.cases == true) return message.send(`馃挼 >> 袣械泄褋 屑芯卸薪芯 芯褌泻褉褘胁邪褌褜 褉邪蟹 胁 10 屑懈薪褍褌.`);
 		user.bloks.cases = true
		setTimeout(() => {
			user.bloks.cases = false
		}, 600000);

 		text = '馃挼 >> 袨褌泻褉褘胁 泻械泄褋 胁褘 锌芯谢褍褔懈谢懈:\n'
 		let count = rand(4,5);
 		for(i=0;i<count;i++){
 			x = rand(1,100)
 			if(x<79){
 				mon = rand(15000,19000)
 				if(config.bonus_balance == true) mon = mon * 2;
 				text += `馃敼 >> ${spaces(mon)}$\n`
 				acc.users[id].balance += mon
 			}
 			if(x>79 && x <80){
 				mon = 1
 				text += `馃敼 >> ${spaces(mon)} 褉褍斜懈薪(芯胁)\n`
 				acc.users[id].donate += mon
 			}
 			if(x>80){
 				mon = rand(1,5)
 				if(config.bonus_exs == true) mon = mon * 2;
 				acc.users[id].exs += mon

 				let up = lvlup(id);
 				if(up == true){
 					text += `馃敼 >> ${mon} 芯锌褘褌邪 [校褉芯胁械薪褜 锌芯胁褘褕械薪]\n`
 				}else{
 					text += `馃敼 >> ${mon} 芯锌褘褌邪\n`
 				}
 				 
 				 
 			}
 		}
 		return message.send(text)
 	});

 

 	 vk.updates.hear(/^(?:斜泻械泄褋|斜斜芯薪褍褋)/i, (message) => {  
 		if(message.$from.type != 'user') return message.send(`袘褉邪褌褜 斜芯谢褜褕芯泄-泻械泄褋 屑芯卸薪芯 褌芯谢褜泻芯 胁 袥小 ${config.group_url}`);
		let user = acc.users[user_id(message.user)];
 		if(user.bloks.cases == true) return message.send(`馃挼 >> 袘芯谢褜褕芯泄 袣械泄褋 屑芯卸薪芯 芯褌泻褉褘胁邪褌褜 褉邪蟹 胁 10 屑懈薪褍褌.`); 
 		let id = user_id(message.user)
 		if(user.donate < 10) return message.send(`馃挼 >> 袘芯谢褜褕芯泄 泻械泄褋 褋褌芯懈褌 10 褉褍斜懈薪芯胁!`);
 		user.donate -= 10; 
 		user.bloks.cases = true
		setTimeout(() => {
			user.bloks.cases = false
		}, 600000);

 		text = '馃挵 >> 袨褌泻褉褘胁 斜芯谢褜褕芯泄 泻械泄褋 胁褘 锌芯谢褍褔懈谢懈:\n'
 		let count = rand(10,15);
 		for(i=0;i<count;i++){
 			x = rand(1,100)
 			if(x<79){
 				mon = rand(25000,30000)
 				if(config.bonus_balance == true) mon = mon * 2;
 				text += `馃敼 >> ${spaces(mon)}$\n`
 				acc.users[id].balance += mon
 			}
 			if(x>79 && x <80){
 				mon = 1;
 				text += `馃敼 >> ${spaces(mon)} 褉褍斜懈薪\n`
 				acc.users[id].donate += mon
 			}
 			if(x>80){
 				mon = rand(2,5)
 				if(config.bonus_exs == true) mon = mon * 2;
 				acc.users[id].exs += mon

 				let up = lvlup(id);
 				if(up == true){
 					text += `馃敼 >> ${mon} 芯锌褘褌邪 [校褉芯胁械薪褜 锌芯胁褘褕械薪]\n`
 				}else{
 					text += `馃敼 >> ${mon} 芯锌褘褌邪\n`
 				}
 				 
 				 
 			}
 		}
 		return message.send(text)
 	});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	vk.updates.hear(/^(?:邪蟹懈薪芯)\s?([^\s	].*)?/i, (message) => { 
		if(!message.$match[1]) return message.send(`馃敻 鉃� 褍泻邪卸懈褌械 褋褌邪胁泻褍`);
		let amount = Number(parserInt(message.$match[1]));
		amount = Math.round(amount);  
		let id = user_id(message.user)
		let user = acc.users[user_id(message.user)];
 		let text = '';
		if(!Number(amount)) return message.send(`馃敻 鉃� 小褌邪胁泻邪 写芯谢卸薪邪 斜褘褌褜 褔懈褋谢芯屑!`);
		if (amount > acc.users[id].balance || amount < 1 ) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 屑芯卸械褌 锌褉械胁褘褕邪褌褜 斜邪谢邪薪褋 懈谢懈 斜褘褌褜 薪懈卸械 1$`);
		if(user.block_game == true && user.level < 3){
			if (amount > 500000 && amount != acc.users[id].balance) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 写芯谢卸薪邪 斜褘褌褜 斜芯谢褜褕械 500.000$\n鉀� 鉃� 袙 '写芯薪邪褌' 屑芯卸薪芯 泻褍锌懈褌褜 褋薪褟褌懈械 芯谐褉邪薪懈褔械薪懈褟.`);
		} 
		
		if(acc.users[id].balance > 20000000){
			if(rand(1,100) <= 30){
				  
				user.game.kazwin += 1;
				user.balance -= amount;
				let sum = amount * 2; 
				if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
				if(config.bonus_exs == true) user.exs += 2;
				let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
				user.balance += sum;
				game_log(user_id(message.user), '泻邪蟹懈薪芯', amount, 1)
			
				if(amount >= 10000){
					 
					user.exs += 2;
					let up = lvlup(id);
					if(up == true){
						return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
					}else{
						return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪!`);
					}
				 }else{
					return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);
				}
				 
			}else{
				game_log(user_id(message.user), '泻邪蟹懈薪芯', amount, 0)
				user.game.kazlose += 1;
				user.balance -= amount;
				return message.send(`馃寶 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${amount}$!`);
			}
		}else{	
			if(rand(1,100) <= 20){
				 
				user.game.kazwin += 1;
				user.balance -= amount;
				let sum = amount * 2; 
				if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
				if(config.bonus_exs == true) user.exs += 2;
				let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
				user.balance += sum;
			
				if(amount >= 10000){
				game_log(user_id(message.user), '泻邪蟹懈薪芯', amount, 1)
					 
					user.exs += 2;
					let up = lvlup(id);
					if(up == true){
						return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
					}else{
						return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪!`);
					}
				 }else{
					return message.send(`${text}馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);
				}
				 
			}else{
				game_log(user_id(message.user), '泻邪蟹懈薪芯', amount, 0)
				user.game.kazlose += 1;
				user.balance -= amount;
				return message.send(`馃寶 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${amount}$!`);
			}
		}
	});  
	vk.updates.hear(/^(?:泻邪蟹懈薪芯)\s?([^\s  ].*)?/i, (message) => {
        if(!message.$match[1]) return message.send(`馃敻 鉃� 褍泻邪卸懈褌械 褋褌邪胁泻褍`);
        let amount = Number(parserInt(message.$match[1]));
        amount = Math.round(amount);   
        let user = acc.users[user_id(message.user)]; 
        if(!Number(amount)) return message.send(`馃敻 鉃� 小褌邪胁泻邪 写芯谢卸薪邪 斜褘褌褜 褔懈褋谢芯屑!`);
        if (amount > user.balance || amount < 1 ) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 屑芯卸械褌 锌褉械胁褘褕邪褌褜 斜邪谢邪薪褋 懈谢懈 斜褘褌褜 薪懈卸械 1$`);

 		if(user.block_game == true && user.level < 3){
			if (amount > 500000 && amount != user.balance) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 写芯谢卸薪邪 斜褘褌褜 斜芯谢褜褕械 500.000$\n鉀� 鉃� 袙 '写芯薪邪褌' 屑芯卸薪芯 泻褍锌懈褌褜 褋薪褟褌懈械 芯谐褉邪薪懈褔械薪懈褟.`);
		} 

        let mnojitel = [1,2,3,4,5].random();
        let win = ['馃寶|馃寶|馃寶','馃敻|馃敻|馃敻','馃幉|馃幉|馃幉'].random();
        let lose = ['馃寶|馃帀|馃敻','馃敻|馃帀|馃敻','馃幉|馃帀|馃幉'].random();

        if(rand(1,100) < 30){
        	let balance = amount;
        	let win_balance = amount * mnojitel;
        	win_balance = Math.round(win_balance);
        	user.balance += Number(win_balance) 
        	return message.send(`馃幉 鉃� 袙邪屑 胁褘锌邪谢邪 泻芯屑斜懈薪邪褑懈褟: [${win}]\n馃拵 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${win_balance}$!\n馃敟 鉃� 袦薪芯卸懈褌械谢褜: ${mnojitel}x`); 
        }else{
        	user.balance -= amount;
        	return message.send(`馃幉 鉃� 袙邪屑 胁褘锌邪谢邪 泻芯屑斜懈薪邪褑懈褟: [${lose}]\n馃寶 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${amount}$!`);
        }
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	vk.updates.hear(/^(?:邪泻褑懈褟)?\s([^\s].*)?\s(.*)/i, message => {
		if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: 邪泻褑懈褟 [胁胁械褉褏/胁薪懈蟹] [褋褌邪胁泻邪]`)
		let amount = parserInt(message.$match[2]);   
		let user = acc.users[user_id(message.user)]; 
		let id = user_id(message.user) 
		if (amount > acc.users[id].balance || amount < 1) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 屑芯卸械褌 锌褉械胁褘褕邪褌褜 斜邪谢邪薪褋 懈谢懈 斜褘褌褜 薪懈卸械 1$`);
		if(user.block_game == true && user.level < 2){
			if (amount > 500000) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 写芯谢卸薪邪 斜褘褌褜 斜芯谢褜褕械 500.000$\n鉀� 鉃� 袙 '写芯薪邪褌' 屑芯卸薪芯 泻褍锌懈褌褜 褋薪褟褌懈械 芯谐褉邪薪懈褔械薪懈褟.`);
		}
		 
		if(!Number(amount)) return message.send(`馃敻 鉃� 小褌邪胁泻邪 写芯谢卸薪邪 斜褘褌褜 褔懈褋谢芯屑!`); 
		 
		 	if(message.$match[1] == '胁胁械褉褏'){
				if(rand(1,2) == 1){ 
					user.balance -= amount;
					let sum = amount * 2;
					let text = ''
					if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
					if(config.bonus_exs == true) user.exs += 2;
					let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
					user.balance += sum;
					user.game.binwin += 1; 
					game_log(user_id(message.user), '邪泻褑懈褟', amount, 1)
					if(amount < 10000){ 
						user.exs += 2;
						let up = lvlup(user_id(message.user));
						if(up == true){
							return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 胁褘褉芯褋 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
			 			}else{
							return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 胁褘褉芯褋 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪!`);
			 			}
 					}else{
 						return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 胁褘褉芯褋 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);
 					}

				}else{ 
					game_log(user_id(message.user), '邪泻褑懈褟', amount, 0)
					user.game.binlose += 1;
					user.balance -= amount;
					return message.reply(`馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 褍锌邪谢 薪邪 - ${rand(1,100)}%\n馃寶 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${spaces(amount)}$!`);
				}
			}
			if(message.$match[1] == '胁薪懈蟹'){ 
				if(rand(1,2) == 1){
				let i = games(type='胁薪懈蟹');
					user.balance -= amount;
					let sum = amount * 2;
					let text = ''
					if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
					if(config.bonus_exs == true) user.exs += 2;
					let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
					user.balance += sum; 
					user.game.binwin += 1;
					game_log(user_id(message.user), '邪泻褑懈褟', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user));
						if(up == true){
							return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 褍锌邪谢 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
			 			}else{
							return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 褍锌邪谢 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪!`);
			 			}
					}else{
						return message.reply(`${text}馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 褍锌邪谢 薪邪 - ${rand(1,100)}%\n馃崁 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(sum)}$ 懈 ${a} 芯锌褘褌邪!\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);	
					}
					 
					 
				}else{ 
					game_log(user_id(message.user), '邪泻褑懈褟', amount, 0)
					user.game.binlose += 1;
					user.balance -= amount;
					return message.reply(`馃搱 鉃� 袣褍褉褋 邪泻褑懈泄 胁褘褉芯褋 薪邪 - ${rand(1,100)}%\n馃寶 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${spaces(amount)}$!`);
				}
			} 
	});
		 
	vk.updates.hear(/^(?:褋褌邪胁泻邪)\s?([^]+)?\s([^\s	].*)/i,  message => {
		if(!message.$match[1]) return message.send(`馃敻 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: 褋褌邪胁泻邪 [胁褘褕械/薪懈卸械] [褋褌邪胁泻邪]`)
		let amount = parserInt(message.$match[2]);   
		amount = Math.round(amount);  
		let id = user_id(message.user) 
		if(!Number(amount)) return message.send(`馃敻 鉃� 小褌邪胁泻邪 写芯谢卸薪邪 斜褘褌褜 褔懈褋谢芯屑!`);
		let user = acc.users[user_id(message.user)]; 
		if (amount > acc.users[id].balance || amount < 1) return message.send(`馃敻 鉃�  小褌邪胁泻邪 薪械 屑芯卸械褌 锌褉械胁褘褕邪褌褜 斜邪谢邪薪褋 懈谢懈 斜褘褌褜 薪懈卸械 1$`);  
	    if(user.block_game == true && user.level < 2){
			if (amount > 500000) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 写芯谢卸薪邪 斜褘褌褜 斜芯谢褜褕械 500.000$\n鉀� 鉃� 袙 '写芯薪邪褌' 屑芯卸薪芯 泻褍锌懈褌褜 褋薪褟褌懈械 芯谐褉邪薪懈褔械薪懈褟.`);
		}

		 	if(message.$match[1].toLowerCase() == '胁褘褕械'){
				if(rand(1,2) == 1){ 

					user.balance -= amount;
					user.balance += amount * 2;
					user.game.stavka_win += 1; 
					game_log(user_id(message.user), '褋褌邪胁泻邪', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user)); 
						if(up == true){
							return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(500000,999999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
			 			}else{
							return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(500000,999999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪!`);
			 			}
					}else{
						return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(500000,999999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪!\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);
					} 
				}else{ 
					game_log(user_id(message.user), '褋褌邪胁泻邪', amount, 0) 
					user.game.stavka_lose += 1;
					user.balance -= amount;
					return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(1,499999)}]\n馃敻 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${spaces(amount)}$!`);
				}
			}
			if(message.$match[1].toLowerCase() == '薪懈卸械'){ 
				if(rand(1,2) == 1){ 
					user.balance -= amount;
					user.balance += amount * 2;
					user.game.stavka_win += 1;  
					game_log(user_id(message.user), '褋褌邪胁泻邪', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user)); 
						if(up == true){
							return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(1,499999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪! \n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
			 			}else{
							return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(1,499999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪!`);
			 			}
					}else{
						return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(1,499999)}]. 袙褘 褍谐邪写邪谢懈\n馃敻 鉃� 袙褘 胁褘懈谐褉邪谢懈 ${spaces(amount * 2)}$ 懈 2 芯锌褘褌邪!\n馃崁 鉃� 袨锌褘褌 写邪械褌褋褟 锌褉懈 褋褌邪胁泻械 芯褌 10.000$`);
					}  
				}else{ 
					game_log(user_id(message.user), '褋褌邪胁泻邪', amount, 0)
					user.game.stavka_lose += 1;
					user.balance -= amount;
					return message.reply(`馃敻 鉃� 效懈褋谢芯 [${rand(500000,999999)}]\n馃敻 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 ${spaces(amount)}$!`);
				}
			} 
	});
 
 	vk.updates.hear(/^(?:褉邪薪写芯屑)\s?([0-9]+)?\s([^\s	].*)/i, message => {
		let i = parserInt(message.$match[2]); 
		let user = acc.users[user_id(message.user)];
 		if(!message.$match[1] || !message.$match[2] || !Number(i)|| !Number(message.$match[1]) || message.$match[1] > 60 ) return message.send(`馃幉 鉃� 袩褉懈屑械褉 胁胁芯写邪: '袪邪薪写芯屑 [1-60] [小孝袗袙袣袗]\n馃幉 鉃� [1-60] - 褝褌芯 褕邪薪褋(芯褌 薪械谐芯 蟹邪胁懈褋懈褌 褋褍屑屑邪 胁褘锌谢邪褌褘).'`);
		user.bloks.random_game = true
		setTimeout(() => {
			user.bloks.random_game = false
		}, 300000); 
		let p = Number(message.$match[1])
		let amount = p;
		amount = Math.round(amount);  
		if(!Number(message.$match[1])) return message.send(`馃幉 鉃� 袩褉懈屑械褉 胁胁芯写邪: '袪邪薪写芯屑 [1-60] [小孝袗袙袣袗]\n馃幉 鉃� [1-60] - 褝褌芯 褕邪薪褋(芯褌 薪械谐芯 蟹邪胁懈褋懈褌 褋褍屑屑邪 胁褘锌谢邪褌褘).'`);
		if(user.block_game == true && user.level < 2){
			if (amount > 500000) return message.send(`馃帀 鉃�  小褌邪胁泻邪 薪械 写芯谢卸薪邪 斜褘褌褜 斜芯谢褜褕械 500.000$\n鉀� 鉃� 袙 '写芯薪邪褌' 屑芯卸薪芯 泻褍锌懈褌褜 褋薪褟褌懈械 芯谐褉邪薪懈褔械薪懈褟.`);
		}
		if (i > user.balance || i <= 0) return message.send(`馃敻 鉃�  小褌邪胁泻邪 薪械 屑芯卸械褌 锌褉械胁褘褕邪褌褜 斜邪谢邪薪褋 懈谢懈 斜褘褌褜 芯褌褉懈褑邪褌械谢褜薪芯泄`);  
		if(p >= 40){
			if(rand(1,130) <= p){ 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 1)
				i = i / 100 * 30 + i 

				user.exs += 2;
				user.game.rand_win += 1;
				let up = lvlup(user_id(message.user));
				user.balance += Math.round(i);
				if(up == true){
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢褍褔懈谢懈 +2 芯锌褘褌邪\n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
		 		}else{
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢褍褔懈谢懈 +2 芯锌褘褌邪`);
	 			}  
			}else{ 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 0)
				user.game.rand_lose += 1;
				user.balance -= Number(i); 
				return message.send(`馃幉 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 [${Math.round(i)}]$`);
			} 
		} 
		if(p >= 20 && p < 40){
			if(rand(1,100) <= p){
				i = i / 100 * 20 + i 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 1)

				user.exs += 2;
				user.game.rand_win += 1;
				let up = lvlup(user_id(message.user)); 

				user.balance += Math.round(i);
				if(up == true){
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢褍褔懈谢懈 +2 芯锌褘褌邪\n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
		 		}else{
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢褍褔懈谢懈 +2 芯锌褘褌邪`);
	 			}  
			}else{
				user.balance -= Number(i); 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 0)  
				user.game.rand_lose += 1;
				return message.send(`馃幉 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 [${Math.round(i)}]$`);
			} 
		} 

		if(p >= 1 && p < 20){
			if(rand(1,100) <= p){
				i = i / 100 * 70 + i 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 1)

				user.exs += 2;
				user.game.rand_win += 1;
				let up = lvlup(user_id(message.user)); 

				user.balance += Math.round(i);
				if(up == true){
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢芯褔懈谢懈 +2 芯锌褘褌邪\n馃専 鉃� [校褉芯胁械薪褜 锌芯胁褘褕械薪]`);
		 		}else{
					return message.reply(`馃幉 鉃� 袙褘 胁褘懈谐褉邪谢懈 [${Math.round(i)}]$ 锌褉懈 褕邪薪褋械: ${p}%\n馃幉 鉃� 袠 锌芯谢芯褔懈谢懈 +2 芯锌褘褌邪`);
	 			}  
			}else{
				user.balance -= Number(i); 
				game_log(user_id(message.user), '褉邪薪写芯屑', amount, 0) 
				user.game.rand_lose += 1;
				return message.send(`馃幉 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 [${i}]$`);
			} 
		} 

		user.balance -= Number(message.$match[2]); 
		user.game.rand_lose += 1;
		return message.send(`馃幉 鉃� 袙褘 锌褉芯懈谐褉邪谢懈 [${message.$match[1]}]$`);
});

 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	vk.updates.hear(/^eval\s([^]+)/i, (message) => {  
		if (message.user === 160037573) {
			return message.send(`袚芯褌芯胁芯: ${eval(message.$match[1])}`);
		}
	});
 
	vk.updates.hear(/^(?:log)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return;

		if(!message.$match[2]) return message.send(`- - log [id] [number] - -\n1. 袩械褉械写邪褔懈 [锌械褉械写邪褌褜]\n2. 袙褘写邪褔懈 [give]\n3. 袨斜薪褍谢械薪懈褟 [remove]\n4. 袙褘写邪褔邪 锌褉邪胁 [admin]\n5. 袨斜薪褍谢械薪懈械 锌褉邪胁 [admin]\n6. 袙邪褉薪褘 [warn]`) 
		let id = message.$match[1];
		let i = message.$match[2];
		if(i < 0 || i > 5) return message.send(`Error`);
		let text = '';
		if(i == 1) for(i=0; i!=log.point[id].log.length; i++){text += log.point[id].log[i];}
		if(i == 2) for(i=0; i!=log.give[id].log.length; i++){text += log.give[id].log[i];}
		if(i == 3) for(i=0; i!=log.remove[id].log.length; i++){text += log.remove[id].log[i];} 
		if(i == 4) for(i=0; i!=log.admin[id].log.length; i++){text += log.admin[id].log[i];} 
		if(i == 5) for(i=0; i!=log.setwin[id].log.length; i++){text += log.setwin[id].log[i];}  
		if(i == 6) for(i=0; i!=log.warns[id].log.length; i++){text += log.warns[id].log[i];}  
		return message.send(text);
	});

	vk.updates.hear(/^(?:谢芯谐)/i, (message) => {
		let id = user_id(message.user);
		 
		let text = '鉀� 袥芯谐 锌芯褋谢械写薪懈褏 15 懈谐褉 鉀擻n';
		for(i=0; i!=log.game[id].log.length; i++){text += log.game[id].log[i];} 
		return message.send(text);
	});
 // - -- - - - - - - -- - - - -  褉褍斜懈薪褘 - - - - - 
 	vk.updates.hear(/^(?:写芯薪邪褌)/i,  message => {
		let user = acc.users[user_id(message.user)];
 		return message.send(`	
 			馃拵 鉃� 校 胁邪褋 ${user.donate} 褉褍斜懈薪芯胁 << 馃拵

 			馃挼 鉃� 100.000.000$ - 10 褉褍斜谢械泄.
 			馃挼 鉃� 600.000.000$ - 50 褉褍斜谢械泄.
 			馃挼 鉃� 1.500.000.000$ - 100 褉褍斜谢械泄.

 			鈿� 鉃� 校斜褉邪褌褜 芯谐褉邪薪懈褔械薪懈械 薪邪 褋褌邪胁泻懈 - 50褉

 			- - - - - - - 
 			馃敼 鉃� VIP-锌褉邪胁邪:
 			馃敾 鉃� 袧邪胁褋械谐写邪 -> 50褉. 
 			- - - - - - - 
 			馃敼 鉃� MODER-锌褉邪胁邪:
 			馃敾 鉃� 袧邪胁褋械谐写邪 -> 200褉. 
 			- - - - - - - 
 			馃敼 鉃� ADMIN-锌褉邪胁邪:
 			馃敾 鉃� 袧邪胁褋械谐写邪 -> 400褉.
 			- - - - - - - 
 			馃敼 鉃� 袚袥.ADMIN-锌褉邪胁邪:
 			馃敾 鉃� 袧邪胁褋械谐写邪 -> 600褉.
 			- - - - - - -  

 			馃敻 鉃� 小薪褟褌褜 '袦芯谢褔邪薪泻褍' -> 30 褉褍斜谢械泄.
 			馃敻 鉃� 袪邪蟹斜邪薪 邪泻泻邪褍薪褌邪 -> 50 褉褍斜谢械泄.

 			馃拵 鉃� 袩芯泻褍锌泻邪 褉褍斜懈薪芯胁: 1 蟹邪 1 褉褍斜谢褜.
  			
 			馃搵 鉃� 校褋谢褍谐懈 邪胁褌芯屑邪褌懈褔械褋泻芯谐芯 褋斜芯褉邪:
			馃憭 鉃� '袗胁褌芯褋斜芯褉 蟹邪褉锌谢邪褌' | 50褉 | 24 褉邪蟹邪
			馃憭 鉃� '袗胁褌芯褋斜芯褉 锌褉懈斜褘谢懈' | 50褉 | 24 褉邪蟹邪

 			馃挸 鉃� 袨斜屑械薪 褉褍斜懈薪芯胁 薪邪 $
 			馃挸 鉃� '孝褉械泄写 [COUNT]' || '袣褍褉褋'

 			馃挻 鉃� 袣芯写械褉: vk.com/mastachoktv
 			`)
 	});
 
 
	vk.updates.hear(/^泻褍褉褋/i,  (message) => {  
		return message.send(`
				馃搳 鉃� 袗泻褌褍邪谢褜薪褘泄 泻褍褉褋 芯斜屑械薪邪 褉褍斜懈薪芯胁 << 馃搳
				- - - - - - - -  
				馃敻 鉃� 袩褉芯写邪卸邪: ${acc.curs}$
				- - - - - - - - 
				馃摱 鉃� '孝褉械泄写 [COUNT]'


				馃挵 鉃� 袗泻褌褍邪谢褜薪褘泄 泻褍褉褋 芯斜屑械薪邪 袘懈褌泻芯懈薪芯胁 << 馃挵
				- - - - - - - -  
				馃敻 鉃� 袩褉芯写邪卸邪: ${acc.bit}$
				- - - - - - - - 
				馃摱 鉃� '袘懈褌泻芯懈薪 锌褉芯写邪褌褜 [COUNT]'
			`);
	});

	vk.updates.hear(/^(?:褌褉械泄写)\s?([0-9]+)?/i,  (message) => {
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`馃摑 鉃� 袙胁械写懈褌械 泻芯谢懈褔械褋褌胁芯 褉褍斜懈薪芯胁 写谢褟 芯斜屑械薪邪`);
		if(user.donate < message.$match[1]) return message.send(`馃摑 鉃� 校 胁邪褋 薪械褌 褋褌芯谢褜泻芯 褉褍斜懈薪芯胁`);
		user.donate -= Number(message.$match[1]);
		user.balance += Number(message.$match[1] * acc.curs)
		return message.send(`馃摑 鉃� 袙褘 芯斜屑械薪褟谢懈 [${message.$match[1]}] 褉褍斜懈薪芯胁 薪邪 [${message.$match[1] * acc.curs}]$`);
	});

//////////////////////////////////////////////////////// 锌褉芯屑懈泻懈
 	
 vk.updates.hear(/^(?:锌褉芯屑芯泻芯写)\s?([^]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
 	if(!message.$match[1]) return message.send(`馃摑 鉃� 校泻邪卸懈褌械 锌褉芯屑芯泻芯写`);
 	if(!acc.promos[message.$match[1]]) return message.send(`馃摑 鉃� 孝邪泻芯谐芯 锌褉芯屑芯泻芯写邪 薪械褌褍/谢懈斜芯 蟹邪泻芯薪褔懈谢懈褋褜 邪泻褌懈胁邪褑懈懈`);
 	if(acc.promos[message.$match[1]].users[message.user]) return message.send(`馃摑 鉃� 袙褘 褍卸械 邪泻褌懈胁懈褉芯胁邪谢懈 锌褉芯屑芯泻芯写`);
 	acc.promos[message.$match[1]].users[message.user] = {i: true};
 	acc.promos[message.$match[1]].activ -= 1;
 	if(acc.promos[message.$match[1]].type == 1){
 		user.balance += Number(acc.promos[message.$match[1]].balance); 
 		message.send(`鉁� 鉃� 袙褘 邪泻褌懈胁懈褉芯胁邪谢懈 锌褉芯屑芯泻芯写!\n鉁� 鉃� 袙褘 锌芯谢褍褔懈谢懈: ${acc.promos[message.$match[1]].balance}$!\n 馃摏 鉃� 袨褋褌邪谢芯褋褜 邪泻褌懈胁邪褑懈泄: ${acc.promos[message.$match[1]].activ}`);
 	}
 	if(acc.promos.type == 2){
 		user.donate += Number(acc.promos[message.$match[1]].balance); 
 		message.send(`鉁� 鉃� 袙褘 邪泻褌懈胁懈褉芯胁邪谢懈 锌褉芯屑芯泻芯写!\n鉁� 鉃� 袙褘 锌芯谢褍褔懈谢懈: ${acc.promos[message.$match[1]].balance} 褉褍斜懈薪芯胁!\n 馃摏 鉃� 袨褋褌邪谢芯褋褜 邪泻褌懈胁邪褑懈泄: ${acc.promos[message.$match[1]].activ}`);
 	}

 	if(acc.promos[message.$match[1]].activ == 0) delete acc.promos[message.$match[1]];
 	return 
 });

 
  vk.updates.hear(/^(?:addpromo)\s?([0-9]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
	if(user.level < 5) return;
 	if(!message.$match[1]) return message.send(`馃摑 鉃� 校泻邪卸懈褌械 褋褍屑屑褍 写谢褟 锌褉芯屑芯泻芯写邪`);  

 	var result  = '';
	let words  = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	let max_position = words.length - 1;
	for( i = 0; i < 6; ++i ) {
		position = Math.floor ( Math.random() * max_position );
		result = result + words.substring(position, position + 1);
	}

	acc.promos[result] = {
		users: {},
		activ: 30,
		type: 1,
		balance: message.$match[1]
	}		
  
 	return message.send(`馃憫 鉃� 袥芯胁懈褌械 锌褉芯屑芯泻芯写:\n馃憫 鉃� 袧邪 30 邪泻褌懈胁邪褑懈泄 | 袧邪 ${message.$match[1]}$\n馃憫 鉃� 袙胁械写懈褌械: '袩褉芯屑芯泻芯写 ${result}'`);
 });

 
 //////////// full dostup - - - - - - 

	vk.updates.hear(/^(?:setwin)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		let id = user_id(message.user);	 	
		let i = config;
		if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 >> 袩褉懈屑械褉 泻芯屑邪薪写褘: setwin ID COUNT(% 胁褘懈谐褉褘褕邪)`);
			if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`馃敻 >> 效懈褋谢芯 写芯谢卸薪芯 斜褘褌褜 褑懈褎褉芯胁芯谐芯 胁懈写邪.`);
			let user = acc.users[user_id(message.user)];
			if(user.level < 3) return message.send(`馃敻 >> 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
			if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);
			acc.users[message.$match[1]].game.win = Number(message.$match[2]);
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 5)
			return message.send(`馃敻 >> 袙褘 褍褋褌邪薪芯胁懈谢懈 懈谐褉芯泻褍(${acc.users[message.$match[1]].prefix}) 锌褉芯褑械薪褌 锌芯斜械写: ${message.$match[2]}%`);
	 
	});

	vk.updates.hear(/^(?:givevip)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 Full-Admin`);
		let id = user_id(message.user);
		if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`鈴� 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械:\n鈴� 鉃� givevip [ID] [TIME(1-999)](写薪械泄)`);
		let time = message.$match[2] * 24;
        acc.users[message.$match[1]].adm_time = time;
        acc.users[message.$match[1]].level = 1;
		return message.send(`馃挵 鉃� 袙褘 胁褘写邪谢懈 VIP-袗泻泻邪褍薪褌 懈谐褉芯泻褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] 薪邪 ${message.$match[2]} 写薪械泄.`); 
	});

	vk.updates.hear(/^(?:givemoder)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 Full-Admin`);
		let id = user_id(message.user);
		if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`鈴� 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械:\n鈴� 鉃� givemoder [ID] [TIME(1-999)](写薪械泄)`);
		let time = message.$match[2] * 24;
        acc.users[message.$match[1]].adm_time = time;
        acc.users[message.$match[1]].level = 2;
		return message.send(`馃挵 鉃� 袙褘 胁褘写邪谢懈 MODER-袗泻泻邪褍薪褌 懈谐褉芯泻褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] 薪邪 ${message.$match[2]} 写薪械泄.`); 
	});

	vk.updates.hear(/^(?:giveadm)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		let id = user_id(message.user);
		if(user.level < 5) return message.send(`馃敻 鉃� 袙褘 薪械 Full-Admin`);
		if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`鈴� 鉃� 袩褉芯胁械褉褜褌械 胁胁芯写懈屑褘械 写邪薪薪褘械:\n鈴� 鉃� giveadm [ID] [TIME(1-999)](写薪械泄)`);
		let time = message.$match[2] * 24;
        acc.users[message.$match[1]].adm_time = time;
        acc.users[message.$match[1]].level = 3;
		return message.send(`馃挵 鉃� 袙褘 胁褘写邪谢懈 ADMIN-袗泻泻邪褍薪褌 懈谐褉芯泻褍 [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] 薪邪 ${message.$match[2]} 写薪械泄.`); 
	});

	vk.updates.hear(/^(?:setadm)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		let id = user_id(message.user);	 	 
		let i = config;
		if(acc.users[id].level < 5) return;
		 
			let user = acc.users[user_id(message.user)]; 
			if(user.level < 3) return message.send(`馃敻 >> 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`);
			if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 >> 袩褉懈屑械褉 泻芯屑邪薪写褘: giveadm ID LVL(1-5)`); 
			if(message.$match[2] > 5) return message.send(`馃敻 >> 袦邪泻褋懈屑邪谢褜薪褘泄 邪写屑懈薪-褍褉芯胁械薪褜 5!`)
			if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`); 
			acc.users[message.$match[1]].level = Number(message.$match[2]);
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 4)
			vk.api.call('messages.send', {
				peer_id: acc.users[message.$match[1]].id,
				message: `鉁� 鉃� ${user.prefix} 胁褘写邪谢 袙邪屑 写芯谢卸薪芯褋褌褜: ${message.$match[2].toString().replace(/0/gi, "袠谐褉芯泻邪").replace(/1/gi, "VIP").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}.`
			});
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`馃敻 >> 袙褘 胁褘写邪谢懈 懈谐褉芯泻褍[${acc.users[message.$match[1]].prefix}]\n馃敻 >> 袗写屑懈薪-褍褉芯胁械薪褜: ${message.$match[2]} [${message.$match[2].toString().replace(/0/gi, "袠谐褉芯泻").replace(/1/gi, "VIP").replace(/2/gi, "袦芯写械褉邪褌芯褉").replace(/3/gi, "袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/4/gi, "袚谢.袗写屑懈薪懈褋褌褉邪褌芯褉").replace(/5/gi, "小芯蟹写邪褌械谢褜")}]`);
		 
	});

 
	vk.updates.hear(/^(?:boostzp)\s?([0-9]+)?\s?([0-9]+)?/i,(message) => {
		let id = user_id(message.user);	 	 
		if(message.user != 160037573) return;
		let user = acc.users[user_id(message.user)];  
		if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 >> 袩褉懈屑械褉 泻芯屑邪薪写褘: boostzp ID LVL(1-24)`);  
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`); 
		acc.users[message.$match[1]].autozp = Number(message.$match[2]);
		return message.send(`馃敻 >> 袙褘 胁褘写邪谢懈 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}] 邪胁褌芯褋斜芯褉 蟹邪褉锌谢邪褌 薪邪 (${message.$match[2]}) 褉邪蟹 `);
	});
	vk.updates.hear(/^(?:boostbiz)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		let id = user_id(message.user);	 	 
		if(message.user != 160037573) return;
		let user = acc.users[user_id(message.user)];  
		if(!message.$match[1] || !message.$match[2]) return message.send(`馃敻 >> 袩褉懈屑械褉 泻芯屑邪薪写褘: boostbiz ID LVL(1-24)`);  
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`); 
		acc.users[message.$match[1]].autobiz = Number(message.$match[2]);
		return message.send(`馃敻 >> 袙褘 胁褘写邪谢懈 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}] 邪胁褌芯褋斜芯褉 锌褉懈斜褘谢懈 薪邪 (${message.$match[2]}) 褉邪蟹 `);
	});
///////////////////

	vk.updates.hear(/^(?:blockpay)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		if(message.user != 160037573) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	 
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);  
		if(Number(message.$match[2]) == 1){
			texts = '胁泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_pay = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = '芯褌泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_pay = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� 小锌械褑.袗写屑懈薪懈褋褌褉邪褌芯褉 ${texts} 袙邪屑 蟹邪锌褉械褌 薪邪 锌械褉械胁芯写褘.`
		}); 
		return message.send(`馃敻 >> 袙褘 ${texts}懈 蟹邪锌褉械褌 薪邪 锌械褉械胁芯写褘`);
	});

	vk.updates.hear(/^(?:blockgive)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		if(message.user != 160037573) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	
		let i = config;
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);  
		if(Number(message.$match[2]) == 1){
			texts = '胁泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_give = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = '芯褌泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_give = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� 小锌械褑.袗写屑懈薪懈褋褌褉邪褌芯褉 ${texts} 袙邪屑 蟹邪锌褉械褌 薪邪 胁褘写邪褔褍 胁邪谢褞褌褘.`
		}); 
		return message.send(`馃敻 >> 袙褘 ${texts}懈 蟹邪锌褉械褌 薪邪 胁褘写邪褔褍 胁邪谢褞褌褘`);
	});

	vk.updates.hear(/^(?:blockrep)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		if(message.user != 160037573) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	
		let i = config;
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`鉂� 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`);  
		if(Number(message.$match[2]) == 1){
			texts = '胁泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_rep = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = '芯褌泻谢褞褔懈谢' 
			acc.users[message.$match[1]].admin.block_rep = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `鉁� 鉃� 小锌械褑.袗写屑懈薪懈褋褌褉邪褌芯褉 ${texts} 袙邪屑 蟹邪锌褉械褌 薪邪 芯褌胁械褌褘 薪邪 褉械锌芯褉褌褘.`
		}); 
		return message.send(`馃敻 >> 袙褘 ${texts}懈 蟹邪锌褉械褌 薪邪 芯褌胁械褌 薪邪 褉械锌芯褉褌褘.`);
	});
////////////////////
 

	vk.updates.hear(/^(?:bonus)\s([^]+)\s([0-9]+)/i, (message) => { 

		let id = user_id(message.user);		
		let i = config;
		if(message.user != 160037573) return;
		let user = acc.users[user_id(message.user)]; 
		if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`); 

		if(message.$match[1] == 'balance'){
			if(message.$match[2] == 1){ config.bonus_balance = true; return message.send(`鉁� 鉃� 袙褘 胁泻谢褞褔懈谢懈 褏2 斜邪谢邪薪褋 写谢褟 懈谐褉.`); } 
			if(message.$match[2] == 0){ config.bonus_balance = false; return message.send(`鉁� 鉃� 袙褘 胁褘泻谢褞褔懈谢懈 褏2 斜邪谢邪薪褋 胁 懈谐褉邪褏.`); }
		}  
		if(message.$match[1] == 'exs'){ 
			if(message.$match[2] == 1){ config.bonus_exs = true; return message.send(`鉁� 鉃� 袙褘 胁泻谢褞褔懈谢懈 褏2 芯锌褘褌 胁 懈谐褉邪褏.`); } 
			if(message.$match[2] == 0){ config.bonus_exs = false; return message.send(`鉁� 鉃� 袙褘 胁褘泻谢褞褔懈谢懈 褏2 芯锌褘褌 胁 懈谐褉邪褏`); }
		}   
	}); 

	vk.updates.hear(/^(?:promo)\s([^]+)\s([0-9]+)/i, (message) => {
		let id = user_id(message.user);		
		let i = config;
		if(message.user != 483398970) return; 
		let user = acc.users[user_id(message.user)]; 
		if(user.level < 3) return message.send(`馃敻 鉃� 袙褘 薪械 邪写屑懈薪懈褋褌褉邪褌芯褉`); 

		if(message.$match[1] == 'balance'){
			config.promo.balance = Number(message.$match[2]); return message.send(`鉁� 鉃� 小褍屑屑邪 写谢褟 锌褉芯屑芯泻芯写芯胁 褋芯褋褌芯胁谢褟械褌: ${message.$match[2]}$`);
		}  
		if(message.$match[1] == 'activ'){ 
			config.promo.activ = Number(message.$match[2]); return message.send(`鉁� 鉃� 袣芯谢懈褔械褋褌胁芯 邪泻褌懈胁邪褑懈泄 写谢褟 锌褉芯屑芯泻芯写芯胁 褋芯褋褌芯胁谢褟械褌: ${message.$match[2]}`);
		}   
	}); 


 	vk.updates.hear(/^(?:givefull)\s?([0-9]+)?/i, message => {	
		let id = user_id(message.user);	
		let i = config;
		if(message.user != 483398970) return; 
	config.full.push(Number(message.$match[1]));
	return message.send(`袙褘 胁褘写邪谢懈 Full-Dostup 懈谐褉芯泻褍 [${acc.users[message.$match[1]].prefix}]`);
	});

 	vk.updates.hear(/^(?:delfull)\s?([0-9]+)?/i, message => {	
		let id = user_id(message.user);	
		let i = config;
		if(message.user != 483398970) return; 
		 
	if(id != 1) return message.send(`馃敻 鉃� 袙褘 薪械 褋锌械褑.邪写屑懈薪懈褋褌褉邪褌芯褉`); 
	delete config.full[message.$matchmessage.$match[1]];
	return message.send(`袙褘 蟹邪斜褉邪谢懈 Full-Dostup 懈谐褉芯泻邪 [${acc.users[message.$match[1]].prefix}]`);
	});

	vk.updates.hear(/^(?:apanel)$/i,  message => {
		let id = user_id(message.user);	
		let i = config;
		if(message.user != 483398970) return;
		let a = '';
		for(z=0;z<i.full.length;z++){if(z!=0){a+=`ID: ${z} | ${acc.users[i.full[z]].prefix}\n`}}
		return message.send(`
			- - 袩褉懈胁邪褌薪邪褟 袠薪褎芯褉屑邪褑懈褟 - -
			* 小谢懈胁 写邪薪薪芯泄 懈薪褎芯褉屑邪褑懈懈 - 薪邪泻邪蟹褍械屑 *
			~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

			袧邪褋褌褉芯泄泻懈:
			x2 斜邪谢邪薪褋: ${i.bonus_balance}
			褏2 芯锌褘褌: ${i.bonus_exs}
			(bonus [balance/exs] [0/1])

			袩褉芯屑芯泻芯写褘:
			袙褘写邪褔邪: ${i.promo.balance}$
			袗泻褌懈胁邪褑懈泄: ${i.promo.activ}
			(promo [balance/activ] [count])

			小芯芯斜褖械薪懈褟:
			袙褉械屑褟 芯斜薪芯胁谢械薪懈褟: ${i.antiflood_time}
			袥懈屑懈褌 褋屑褋: ${i.antiflood_limit}

			Full-Dostup:
			${a}
 

		`);
	});



 vk.updates.hear(/^(?:锌懈褌芯屑褑褘)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){  
 		return message.send(`
 			馃惣 袩懈褌芯屑褑褘 馃惣

			馃悓1. 校谢懈褌泻邪.
			馃悑2. 袣懈褌.
			馃悜3. 袨胁褑邪.
			馃悢4. 袣褍褉懈褑邪.
			馃惃5. 袣芯邪谢邪.
			馃悵6. 袨褋邪.
			馃惙7. 小胁懈薪褜褟.
			馃悩8. 小谢芯薪.
			馃惖9. 袦邪褉褌褘褕泻邪.
			馃惂10. 袩懈薪谐胁懈薪.
			馃悈11. 孝懈谐褉.
			馃惗12. 袙芯谢泻.
			馃惏13. 袟邪褟褑.
			馃悇14. 袣芯褉芯胁邪.

			馃挼 鉃� 笑械薪邪 锌懈褌芯屑褑邪: 1.000.000$

			袛谢褟 锌芯泻褍锌泻懈 胁胁械写懈褌械 "袩懈褌芯屑褑褘 [薪芯屑械褉]"
			袛谢褟 锌褉芯写邪卸懈 胁胁械写懈褌械 "袩褉芯写邪褌褜 锌懈褌芯屑褑邪"
			[袛械薪褜谐懈 薪械 胁芯蟹胁褉邪褖邪褞褌褋褟]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];  
 	let names = [0,'校谢懈褌泻邪','袣懈褌','袨胁褑邪','袣褍褉懈褑邪','袣芯邪谢邪','袨褋邪','小胁懈薪褜褟','小谢芯薪','袦邪褉褌褘褕泻邪','袩懈薪谐胁懈薪','孝懈谐褉','袙芯谢泻','袟邪褟褑','袣芯褉芯胁邪']
 	if(i < 0 || i > 14) return;
 	if(user.pit != false) return message.send(`馃惣 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 锌懈褌芯屑械褑`);
 	if(i > 0 && i <= 14){
 		if(user.balance < 1000000) return message.send(`馃惣 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 $.`);
 		user.balance -= 1000000;
 		user.pit = names[i];
 		return message.send(`馃惣 鉃� 袙褘 泻褍锌懈谢懈 锌懈褌芯屑褑邪 (${names[i]}) 蟹邪 1.000.000$`)
 	}
 	 
 });

 	  vk.updates.hear(/^(?:袩褉芯写邪褌褜 锌懈褌芯屑褑邪)/i,  message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.pit == false) return message.send(`校 胁邪褋 薪械褌 锌懈褌芯屑褑邪`);
 	user.pit = false;
 	return message.send(`馃惣 鉃� 袙褘 褍褋锌械褕薪芯 锌褉芯写邪谢懈 锌懈褌芯屑褑邪.`);
 });
 ///////////////////////////////////////////////////////
 	vk.updates.hear(/^(?:写芯屑)$/i, message => {
		let user = acc.users[user_id(message.user)];
		return message.send(`   

			鉁� 鉃� 袠屑褍褖械褋褌胁芯:\n` +
			(user.aircraft.id == false ? `鉁� 鉃� 小邪屑芯谢械褌:  芯褌褋褍褌褋褌胁褍械褌\n` : `鉁� 鉃� 小邪屑芯谢械褌:  ${user.aircraft.name}\n`)+
			(user.helicopter.id == false ? `馃殎 鉃� 袙械褉褌芯谢械褌: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殎 鉃� 袙械褉褌芯谢械褌: ${user.helicopter.name}\n`)+
			(user.cars.id == false ? `馃殬 鉃� 袗胁褌芯屑芯斜懈谢褜: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殬 鉃� 袗胁褌芯屑芯斜懈谢褜: ${user.cars.name}\n`)+  
			(user.lodka == false ? `馃殼 鉃� 袥芯写泻邪: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃殼 鉃� 袥芯写泻邪: ${user.lodka}\n`)+ 
			(user.house == false ? `馃彙 鉃� 袛芯屑: 芯褌褋褍褌褋褌胁褍械褌\n` : `馃彙 鉃� 袛芯屑: ${user.house}\n`)+   
			(user.house == false ? `\n馃惣 鉃� 袩懈褌芯屑械褑: 薪械褌褍\n` : `\n馃惣 鉃� 袩懈褌芯屑械褑: ${user.pit}\n`)+ 
			` 
 
			`);
	});
 

 vk.updates.hear(/^(?:写芯屑邪)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){  
 		return message.send(`
 			馃彙 袛芯屑邪 馃彙 
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃彋袛谢褟 袘芯屑卸械泄馃彋
			鉃栤灃鉃栤灃鉃栤灃鉃�
			猬�1. 袣芯褉芯斜泻邪 馃摝 鉁�
			猬浶樞� 袦褍褋芯褉泻懈 20.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�2. 袩芯写胁邪谢 - 
			猬浶π敌叫�: 50.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬� 3. 袩邪谢邪褌泻邪 鉀� 
			猬浶π敌叫�: 150.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�4. 袛芯屑懈泻 薪邪 写械褉械胁械 
			猬浶π敌叫�: 300.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�5.袩芯谢褍褉邪蟹褉褍褕械薪薪褘泄 袛芯屑 
			猬浶π敌叫�: 500.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�6. 袛芯屑 胁 谢械褋褍 
			猬浶π敌叫�: 700.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬� 7.袛芯屑 胁 袝胁褉芯锌械
			猬浶π敌叫�: 1.000.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�8. 袛邪褔邪 鉁�
			猬浶π敌叫�: 1.500.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬� 9. 袛芯屑 袧邪 袩谢褟卸械 鉁�
			猬浶π敌叫�: 2.000.000馃挿鉁�
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬�10. 袘芯谢褜褕芯泄 袣芯褌褌械写卸鉁�
			猬浶π敌叫�: 5.000.000馃挿鉁�

			馃彚袛芯褉芯谐懈械 袨褋芯斜薪褟泻懈馃彚
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃�
			猬�11. 袨褋芯斜薪褟泻 
			猬浶π敌叫�: 100 褉褍斜懈薪芯胁馃拵
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			猬� 12. 袛芯屑 薪邪 袪褍斜谢褢胁泻械 
			猬浶π敌叫�: 150 褉褍斜懈薪芯胁馃拵
			猬涒灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃

			袛谢褟 锌芯泻褍锌泻懈 胁胁械写懈褌械 "袛芯屑邪 [薪芯屑械褉]"
			袛谢褟 锌褉芯写邪卸懈 胁胁械写懈褌械 "袩褉芯写邪褌褜 写芯屑"
			[袛械薪褜谐懈 薪械 胁芯蟹胁褉邪褖邪褞褌褋褟]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)]; 
 	let count = [0, 20000,50000,150000,300000,500000,700000,1000000,1500000,2000000,5000000,100,150,300];
 	let names = [0, '袣芯褉芯斜泻邪','袩芯写胁邪谢','袩邪谢邪褌泻邪','袛芯屑懈泻 薪邪 写械褉械胁械','袩芯谢褍褉邪蟹褉褍褕械薪薪褘泄 写芯屑','袛芯屑 胁 谢械褋褍','袛芯屑 胁 袝胁褉芯锌械','袛邪褔邪','袛芯屑 袧邪 袩谢褟卸械','袘芯谢褜褕芯泄 袣芯褌褌械写卸','袨褋芯斜薪褟泻','袛芯屑 薪邪 袪褍斜谢褢胁泻械','袥懈褔薪褘泄 薪械斜芯褋泻褉褢斜']
 	if(i < 0 || i > 13) return;
 	if(user.house != false) return message.send(`馃彚 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪 写芯屑`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`馃彚 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 褉褍斜懈薪芯胁.`);
 		user.balance -= count[i];
 		user.house = names[i];
 		return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 写芯屑 (${names[i]}) 蟹邪 ${count[i]}$`)
 	}
 	if(i > 11 && i < 13){
 		if(user.donate < count[i]) return message.send(`馃彚 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 褉褍斜懈薪芯胁.`);
 		user.donate -= count[i];
 		user.house = names[i];
 		return message.send(`馃彚 鉃� 袙褘 泻褍锌懈谢懈 写芯屑 (${names[i]}) 蟹邪 ${count[i]} 褉褍斜懈薪芯胁`)
 	}
 });

  vk.updates.hear(/^(?:锌褉芯写邪褌褜 写芯屑)/i,  message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.house == false) return message.send(`校 胁邪褋 薪械褌 写芯屑邪`);
 	user.house = false;
 	return message.send(`馃彚 鉃� 袙褘 褍褋锌械褕薪芯 锌褉芯写邪谢懈 写芯屑 谐芯褋褍写邪褉褋褌胁褍.`);
 });





 vk.updates.hear(/^(?:谢芯写泻邪)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			鉀敌炐毖嬔囆叫敌� 袥芯写泻懈 鉀� 
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃數1 - Carer X- 
			馃敶10.000.000馃挿
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶2.Nauticat F 
			馃敶15.000.000馃挿
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃數3. Nordhavn 56 MS 
			馃敶50.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶4. Princess 60
			馃數100.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃殼袛芯褉芯谐懈械 袣邪褌械褉邪馃殼 
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃數5. Azimut 70 
			馃敶200.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃�
			馃敶6. Dominator 40M
			馃數300.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃數7. Moonen 124 
			馃敶450.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶8. Wider 150 
			馃數650.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃數9. Palmer Johnson 42M 
			馃敶800.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶10. Wider FR 
			馃數1.000.000.000馃挿鉁�
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃洢袥褞泻褋芯胁褘械 携褏褌褘馃洢
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶馃數11. Browns- 250 褉褍斜懈薪芯胁馃拵
			鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃
			馃敶馃數12. Golden Sky- 500 褉褍斜懈薪芯胁馃拵

			袛谢褟 锌芯泻褍锌泻懈 胁胁械写懈褌械 "袥芯写泻邪 [薪芯屑械褉]"
			袛谢褟 锌褉芯写邪卸懈 胁胁械写懈褌械 "袥芯写泻邪 锌褉芯写邪褌褜"
			[袛械薪褜谐懈 薪械 胁芯蟹胁褉邪褖邪褞褌褋褟]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];
 	let count = [0, 10000000,15000000, 50000000,10000000,200000000,300000000,450000000,650000000,800000000,1000000000,250,500];
 	let names = [0, 'Carer X','Nauticat F','Nordhavn 56 MS','Princess 60','Azimut 70','Dominator 40M','Moonen 124','Wider 150','Palmer Johnson 42M','Wider FR','Browns','Golden Sky']
 	if(i < 0 || i > 12) return;
 	if(user.lodka != false) return message.send(`馃洢 鉃� 校 胁邪褋 褍卸械 泻褍锌谢械薪邪 谢芯写泻邪`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`馃洢 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
 		user.balance -= count[i];
 		user.lodka = names[i];
 		return message.send(`馃洢 鉃� 袙褘 泻褍锌懈谢懈 谢芯写泻褍 (${names[i]}) 蟹邪 ${count[i]}$`)
 	}else{
 		if(user.donate < count[i]) return message.send(`校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 褉褍斜懈薪芯胁.`);
 		user.donate -= count[i];
 		user.lodka = names[i];
 		return message.send(`馃洢 鉃� 袙褘 泻褍锌懈谢懈 谢芯写泻褍 (${names[i]}) 蟹邪 ${count[i]} 褉褍斜懈薪芯胁`)
 	}
 });

  vk.updates.hear(/^(?:谢芯写泻邪 锌褉芯写邪褌褜)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	if(user.lodka == false) return message.send(`馃洢 鉃� 校 胁邪褋 薪械褌 谢芯写泻懈`);
 	user.lodka = false;
 	return message.send(`馃洢 鉃� 袙褘 褍褋锌械褕薪芯 锌褉芯写邪谢懈 谢芯写泻褍 谐芯褋褍写邪褉褋褌胁褍.`);
 });


//\\\\\\\\\\\ 袪袗袘袨孝蝎 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



 vk.updates.hear(/^(?:褉邪斜芯褌褘)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			馃懆鈥嶁殩锔� 褉邪斜芯褌褘 馃懆鈥嶁殩锔�  
			
			猬� 1. 楔邪褏褌械褉  | 1泻/褔 |[0]
			猬� 2. 协谢械泻褌褉懈泻 | 5泻/褔 |[10]
			猬� 3. 孝芯褉谐芯胁械褑 | 10泻/褔 |[20]
			猬� 4. 袛邪谢褜薪芯斜芯泄褖懈泻 | 15泻/褔 |[30]
			猬� 5. 袘懈蟹薪械褋屑械薪 | 20泻/褔 |[40]
			猬� 6. 袧械褎褌褟薪薪懈泻 | 25泻/褔 |[50]
			猬� 7. 袛械锌褍褌邪褌 | 35泻/褔 |[65]
			猬� 8. 袦懈薪懈褋褌褉 肖懈薪邪薪褋芯胁 |  45泻/褔 |[70]
			猬� 8. 袦械褉 |  60泻/褔 |[80]
			猬� 9. 袩褉械蟹懈写械薪褌 | 80泻/褔 |[100]


			袙 [] 褌褉械斜褍械屑褘泄 褍褉芯胁械薪褜 褋褌邪卸邪. 
			袛谢褟 锌芯谢褍褔械薪懈褟 蟹邪褉锌谢邪褌褘 懈 +1 褋褌邪卸邪 械卸械褔邪褋薪芯 锌褉芯锌懈褋褘胁邪泄褌械: '袪邪斜芯褌邪褌褜'

			效褌芯斜褘 褍褋褌褉芯懈褌褜褋褟 胁胁械写懈褌械: "褉邪斜芯褌褘 [薪芯屑械褉]"
			袛谢褟 褍胁芯谢褜薪懈褟 胁胁械写懈褌械: "褍胁芯谢懈褌褜褋褟"
			孝褉褍写芯胁邪褟 泻薪懈卸泻邪: '袣薪懈卸泻邪'
			袛谢褟 褉邪斜芯褌褘 胁胁械写懈褌械: '袪邪斜芯褌邪褌褜'
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];  
	if(user.lvl < 2) return message.send(`馃懆鈥� 鉃� 校褋褌褉芯懈褌褜褋褟 薪邪 褉邪斜芯褌褍 屑芯卸薪芯 懈屑械褟 2 褍褉芯胁械薪褜\n馃挸 鉃� 袙邪褕 褍褉芯胁械薪褜 [${user.lvl}]`);
 	let names = [0, '楔邪褏褌械褉','协谢械泻褌褉懈泻','孝芯褉谐芯胁械褑','袛邪谢褜薪芯斜芯泄褖懈泻','袘懈蟹薪械褋屑械薪','袘懈蟹薪械褋屑械薪','袧械褎褌褟薪薪懈泻','袛械锌褍褌邪褌','袦懈薪懈褋褌褉 肖懈薪邪薪褋芯胁','袦械褉','袩褉械蟹懈写械薪褌']
 	let staj = [0,0,10,20,30,40,50,65,70,80,100]
 	let counts = [0,1000,5000,10000,15000,20000,25000,35000,45000,60000,80000]
 	if(i <= 0 || i > 7) return;
 	if(user.job.name != false) return message.send(`馃懆鈥� 鉃� 校 胁邪褋 褍卸械 械褋褌褜 褉邪斜芯褌邪`);
 	if(i > 0 && i <= 7){
 		if(user.job.lvl < staj[i]) return message.send(`馃懆鈥� 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪褘泄 褋褌邪卸.`); 
 		if(staj[i] > user.job.lvl) return message.send(`馃懆鈥� 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪褘泄 褋褌邪卸.`); 
 		user.job.name = names[i];
 		user.job.count = Number(counts[i]); 
 		return message.send(`馃懆鈥嶁殩锔� 鉃� 袙褘 褍褋褌褉芯懈谢懈褋褜 薪邪 褉邪斜芯褌褍 `)
 	} 
 });

  vk.updates.hear(/^(?:褍胁芯谢懈褌褜褋褟)/i, message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.job.name == false) return message.send(`馃懆鈥嶁殩锔� 鉃� 校 胁邪褋 薪械褌 褉邪斜芯褌褘.`);
 	user.job.name = false;
 	user.job.count = 0; 
 	return message.send(`馃懆鈥嶁殩锔� 鉃� 袙褘 褍褋锌械褕薪芯 褍胁芯谢懈谢懈褋褜.`);
 });

  vk.updates.hear(/^(?:泻薪懈卸泻邪)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.job.name == false){ text = '芯褌褋褍褌褋褌胁褍械褌' }else{
 		text = user.job.name
 	} 
 	return message.send(`
 		馃摑 孝褉褍写芯胁邪褟 泻薪懈卸泻邪 馃摑
 		馃搵 小褌邪卸 褉邪斜芯褌褘: ${user.job.lvl} 
 		馃搵 袪邪斜芯褌邪: ${text}
 		馃搵 袟邪褉锌谢邪褌邪: ${user.job.count}$/褔邪褋
 		`);
 });

  vk.updates.hear(/^(?:褉邪斜芯褌邪褌褜)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.job.name == false) return message.send(`馃懆鈥嶁殩锔� 鉃� 校 胁邪褋 薪械褌 褉邪斜芯褌褘.`);
 	if(user.job.stop != false) return message.send(`馃懆鈥嶁殩锔� >> 袪邪斜芯褌邪褌褜 屑芯卸薪芯 褉邪蟹 胁 褔邪褋.`);
 	var counts = user.job.count
 	user.balance += Number(user.job.count); 
 	user.job.lvl += 1;

 	user.job.stop = true;
	setTimeout(() => {
			user.job.stop = false;
	}, 3600000);


 	return message.send(`
 		馃摑 鉃� 袙褘 芯褌褉邪斜芯褌邪谢懈 褔邪褋. +1 泻 褋褌邪卸褍. +${counts}$ 
 		`);
 });
 


 
 
	vk.updates.hear(/^(?:wiki|胁懈泻懈)\s([^]+)/i, message => {
 
	let cc = message.$match[1].toLowerCase();
	 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter1 = /(?!http(s)?:\/\/)?(www\.)?[邪-褟0-9-_.]{1,256}\.(褉褎|褋褉斜|斜谢芯谐|斜谐|褍泻褉|褉褍褋|覜邪蟹|丕賲丕乇丕鬲.|賲氐乇.|丕賱爻毓賵丿賷丞.)/
		var lol = filter0.test(cc)
		var lol1 = filter1.test(cc)
		if(filter0.test(cc) == true || filter1.test(cc) == true){
			var check = true;
			return message.send(`馃啒 鉃� 袨褌泻邪蟹! | 袩芯写芯蟹褉懈褌械谢褜薪邪褟 褋褋褘谢泻邪. |鉀擿);

		}else{
    rq.get("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent(message.$match[1])+"&meta=siteinfo&rvprop=content&format=json", function(e,r,b){
        var data = JSON.parse(b);
        message.reply("馃敭 袨褌胁械褌 薪邪 胁邪褕 蟹邪锌褉芯褋. \n\n鉁� 小褋褘谢泻邪: " + data[3][0]);
    });
	}
	})

	vk.updates.hear(/^(?:邪薪械泻写芯褌)/i, message => {

	return prequest('http://www.anekdot.ru/rss/randomu.html')
	    .then(response => {
	      let match = response.match(/\['([^']+)/);
	          match = match && match[1].replace(/<br>/, '\n');
	          message.reply("袗薪械泻写芯褌  &#127770; \n " + match);

	      return {
	        message:      match
	      }
	    });
	});

	vk.updates.hear(/^(?:cc)\s?([^]+)?/i,  message => {

		   let cc = message.$match[1].toLowerCase();
	 
	       let text = message.$match[1];
	       if(!text) return message.send("鈿� 袙胁械写懈褌械 褋褋褘褋谢泻褍, 泻芯褌芯褉褍褞 薪褍卸薪芯 褋芯泻褉邪褌懈褌褜!");
	     	vk.api.call("utils.getShortLink", {url: text}).then(function (res){
	        if(!text) return message.send("鈿� 袙胁械写懈褌械 褋褋褘褋谢泻褍, 泻芯褌芯褉褍褞 薪褍卸薪芯 褋芯泻褉邪褌懈褌褜!");
	        message.send("馃槣 鉃� 袣芯褉芯褌泻邪褟 褋褋褘谢泻邪: " + res.short_url);
	     });
	  
	   });



///////////////////////////////////////////////////////////////////////////////

	vk.updates.hear(/^(?:斜邪薪泻)$/i, message => {
		let user = acc.users[user_id(message.user)];
		return message.send(`
			馃挼 鉃� 小褔械褌 胁 斜邪薪泻械: ${user.bank}$
			馃挼 鉃� 袘懈褌泻芯懈薪芯胁: ${user.bitcoin} 


			馃挸 鉃� 袘邪薪泻 屑芯卸械褌 锌褉械写芯褋褌邪胁懈褌褜 袙邪屑 泻褉械写懈褌 
			馃挸 鉃� 袙蟹褟褌褜 泻褉械写懈褌 锌芯写 15%: '袣褉械写懈褌 [小校袦袦袗]' 
			馃挸 鉃� 袩芯谐邪褋懈褌褜 泻褉械写懈褌: '袩芯谐邪褋懈褌褜 [小校袦袦袗]'

			鈿� 鉃� 袙邪卸薪芯! 袩芯泻邪 胁邪褕 写芯谢谐 斜芯谢褜褕械 0 
			鈿� 鉃� 袝卸械褔邪褋薪芯 褋 胁邪褕械谐芯 褋褔械褌邪 斜褍写械褌 褋锌懈褋褘胁邪褌褜褋褟 15% 芯褌 褋褍屑屑褘 泻褉械写懈褌邪
			`);
	});

	vk.updates.hear(/^(?:泻褉械写懈褌)\s?([0-9]+)?/i,  message => {
		let user = acc.users[user_id(message.user)];
		if(user.lvl < 3) return message.send(`馃挸 鉃� 袘褉邪褌褜 泻褉械写懈褌 屑芯卸薪芯 懈屑械褟 3 褍褉芯胁械薪褜\n馃挸 鉃� 袙邪褕 褍褉芯胁械薪褜 [${user.lvl}]`);
		if(user.credit != 0) return message.send(`馃挸 鉃� 效褌芯斜褘 胁蟹褟褌褜 泻褉械写懈褌, 薪褍卸薪芯 锌芯谐邪褋懈褌褜 褋褌邪褉褘泄: [${spaces(user.credit)}$]`);
		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`馃挸 鉃� 袙褘 薪械 褍泻邪蟹邪谢懈 褋褍屑屑褍`);
		if(message.$match[1] < 100000 || message.$match[1] > 10000000) return message.send(`馃挸 鉃� 袦懈薪懈屑邪谢褜薪邪褟 褋褍屑屑邪 泻褉械写懈褌邪 100.000$\n馃挸 鉃� 袦邪泻褋懈屑邪谢褜薪邪褟 褋褍屑屑邪 泻褉械写懈褌邪 10.000.000$`);
 		user.balance += Number(message.$match[1]);
 		let dolg = Number(message.$match[1]) / 100 * 15;
 		dolg += Number(message.$match[1]);
		user.credit = Number(dolg);
		user.procent = Number(message.$match[1] / 100 * 15);
		return message.send(`
			馃挸 鉃� 袙褘 胁蟹褟谢懈 泻褉械写懈褌 薪邪 褋褍屑屑褍: ${spaces(message.$match[1])}$
			馃挸 鉃� 袣 锌芯谐邪褕械薪懈褞: ${spaces(dolg)}$
			馃挸 鉃� 袝卸械褔邪褋薪芯 斜褍写械褌 褋锌懈褋褘胁邪褌褜褋褟: ${spaces(message.$match[1] / 100 * 15)}$
		`);
	});
	
 	vk.updates.hear(/^(?:锌芯谐邪褋懈褌褜)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];
		if(user.credit == 0) return message.send(`馃挸 鉃� 褍 胁邪褋 薪械褌 泻褉械写懈褌邪`);
		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`馃挸 鉃� 袙褘 薪械 褍泻邪蟹邪谢懈 褋褍屑屑褍.`);
		if(user.credit > user.balance) return message.send(`馃挸 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
		if(user.credit > message.$match[1]) return message.send(`馃挸 鉃� 袨锌谢邪褌懈褌褜 泻褉械写懈褌 屑芯卸薪芯 芯写薪懈屑 胁泻谢邪写芯屑. [${spaces(user.credit)}$]`);
		if(user.credit < message.$match[1]) return message.send(`馃挸 鉃� 袙胁械写懈褌械 褌芯褔薪褍褞 褋褍屑屑褍 泻 锌芯谐邪褕械薪懈褞. [${spaces(user.credit)}$]`);

		user.balance -= Number(message.$match[1]);
		user.credit -= Number(message.$match[1]);
		user.procent = 0;
		return message.send(`
			馃挸 鉃� 袙褘 褍褋锌械褕薪芯 锌芯谐邪褋懈谢懈 胁械褋褜 泻褉械写懈褌.
		`);
	});

 



 vk.updates.hear(/^(?:褎械褉屑邪)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];  
 
		if(!message.$match[1]){
			return message.send(`
			馃憠 鉃� 小锌懈褋芯泻 屑邪泄薪懈薪谐-褎械褉屑:

			1&#8419;. 袦懈薪懈 褎械褉屑邪 | (300泻) | [10/2褔]
			2&#8419;. 小褉械写薪褟褟 褎械褉屑邪 | (1泻泻) | [32/2褔]
			3&#8419;. 袘芯谢褜褕邪褟 褎械褉屑邪 | (1泻泻泻) | [30.307/2褔] 
			 
			馃捀 鉃� 袛谢褟 邪褉械薪写褘 褎械褉屑褘 薪邪 褔邪褋: 肖械褉屑邪 [薪芯屑械褉]   
			馃捀 鉃� 袩芯 懈褋褌械褔械薪懈褞 2 褔邪褋芯胁 斜懈褌泻芯懈薪褘 斜褍写褍褌 蟹邪褔懈褋谢械薪褘 薪邪 胁邪褕 褋褔褢褌.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3]
 	let count = [0, 10, 32, 30307]; 
 	let cena = [0, 300000,1000000,1000000000]

 	if(i < 0 || i > 3) return;
 	if(user.ferm.id != false) return message.send(`馃捀 鉃� 校 胁邪褋 褍卸械 邪褉械薪写芯胁邪薪邪 褎械褉屑邪`);
 	if(i > 0 && i <= 3){
 		if(user.balance < cena[i]) return message.send(`馃捀 鉃� 校 胁邪褋 薪械 写芯褋褌邪褌芯褔薪芯 写械薪械谐.`);
 		user.ferm.id = Number(ids[i]); 
 	user.balance -= cena[i];
    setTimeout(() => {
    	user.bitcoin += Number(count[i])
    	user.bitcoin += Number(count[i])
    	user.ferm.id = false;
	    vk.api.call('messages.send', {
			peer_id: user.id,
			message: `鉁� 鉃� 袗褉械薪写邪 屑邪泄薪懈薪谐-褎械褉屑褘 蟹邪泻芯薪褔懈谢邪褋褜.\n鉁� 鉃� 袙褘 锌芯谢褍褔懈谢懈 ${count[i]} 袘懈褌泻芯懈薪芯胁.\n鉁� 鉃� '袘懈褌泻芯懈薪 锌褉芯写邪褌褜 [count]' - 写谢褟 锌褉芯写邪卸懈.` 
		});
	}, 7200000); 


 	return message.send(`馃捀 鉃� 袙褘 褍褋锌械褕薪芯 邪褉械薪写邪胁邪谢懈 薪邪 2 褔邪褋邪 屑邪泄薪懈薪谐-褎械褉屑褍.\n馃捀 鉃� 效械褉械蟹 褔邪褋 胁邪屑 斜褍写械褌 蟹邪褔懈褋谢械薪芯 [${count[i]}] 袘懈褌泻芯懈薪芯胁`)
 	} 
 }); 

 vk.updates.hear(/^(?:斜懈褌泻芯懈薪 锌褉芯写邪褌褜)\s?([0-9]+)?/i, (message) => { 
 	if(!message.$match[1] || !Number(message.$match[1])) return message.send(`馃捀 鉃� 校泻邪卸懈褌械 泻芯谢-胁芯 斜懈褌泻芯懈薪芯胁`)
 	let user = acc.users[user_id(message.user)];  
 	if(user.bitcoin < Number(message.$match[1])) return message.send(`馃捀 鉃� 校 胁邪褋 薪械褌 褋褌芯谢褜泻芯 袘懈褌泻芯懈薪芯胁.`);
 	user.bitcoin -= Number(message.$match[1]);
 	user.balance += Number(message.$match[1] * acc.bit)
 	return message.send(`馃捀 鉃� 袙褘 锌褉芯写邪谢懈 ${message.$match[1]} 斜懈褌泻芯懈薪芯胁 蟹邪 ${acc.bit * message.$match[1]}$`)
 });
 
 vk.updates.hear(/^(?:褋械泄褎)/i, (message) => { 
 		let user = acc.users[user_id(message.user)]; 
		 
		if (user.safe.status != false) return message.send(`馃攽 鉃� 袙蟹谢芯屑邪褌褜 褋械泄褎 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`);
		 
		if (user.safe.status == 3) return;
		user.safe.status = 3;
		user.safe.key = [`1111`, `2222`, `3333`, `4444`, `5555`, `6666`, `7777`, `8888`, `9999`, `0000`].random();
		return message.send(` 
		  馃彌 鉃� 袙褘 薪邪褔邪谢懈 胁蟹谢芯屑 褋械泄褎邪 馃彌
		  馃攽 鉃� 袙邪褕邪 蟹邪写邪褔邪: 锌芯写芯斜褉邪褌褜 泻芯写 懈蟹 4 芯写懈薪邪泻芯胁褘褏 褑懈褎褉.
		  馃棟 鉃� 袧邪褔邪褌褜 胁蟹谢芯屑: "袙蟹谢芯屑 [泻芯写]"
		  馃寶 鉃� 校写邪褔懈!
		 
  `);
	});
	vk.updates.hear(/^(?:胁蟹谢芯屑)\s?([0-9]+)?$/i, message => {
 		let user = acc.users[user_id(message.user)];

		if (user.safe.status == true) return message.send(`馃攽 鉃� 袙蟹谢芯屑邪褌褜 褋械泄褎 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`);
		if (user.safe.status == false) return;
		if (!message.$match[1]) return message.send(`馃棟 鉃� 校泻邪卸懈褌械 泻芯写 泻 褋械泄褎褍.`);
		if (message.$match[1] > 9999) return message.send(`馃棟 鉃� 袣芯写 - 褋芯褋褌芯懈褌 懈蟹 4 芯写懈薪邪泻芯胁褘褏 褋懈屑胁芯谢芯胁.`);
		if (message.$match[1] < 0) return message.send(`馃棟 鉃� 袣芯写 - 褋芯褋褌芯懈褌 懈蟹 4 芯写懈薪邪泻芯胁褘褏 褋懈屑胁芯谢芯胁.`);
		let nu = user.safe.key;
		let kod = Number(message.$match[1]);
		if (kod == user.safe.key) { 
			let summ = rand(20000,33000);
			user.balance += summ; 
			user.safe.key = false; 
			user.safe.status = true;
			setTimeout(() => {
				user.safe.status = false;
			}, 600000);
			return message.send(`馃 鉃� 袧械胁械褉芯褟褌薪芯!\n馃檴 鉃� 袙褘 褋屑芯谐谢懈 褍谐邪写邪褌褜 泻芯写\n馃彌 鉃� 袨斜褘褋泻懈胁邪褟 褋械泄褎 胁褘 薪邪褕谢懈:\n馃挻 鉃� ${spaces(summ)}$`);
		} else {
			user.safe.status = true;
			user.safe.key = true;
			setTimeout(() => {
				user.safe.status = false;
			}, 600000); 
			return message.send(`馃 鉃� 袙褘 薪械 褍谐邪写邪谢懈 泻芯写.\n馃 鉃� 袙邪褋 蟹邪写械褉卸邪谢懈 懈 芯褕褌褉邪褎芯胁邪谢懈.\n馃攽 鉃� 袙械褉薪褘泄 泻芯写 斜褘谢: ${nu}`);
		}
	});

  
 vk.updates.hear(/^(?:谢芯褌械褉械褟)/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(user.balance < 5000) return message.send(`馃挘 鉃� 袥芯褌械褉械泄薪褘泄 斜懈谢械褌懈泻 褋褌芯懈褌 5000$`);
	user.balance -= 5000;
	let rez = [true, false].random();
	if(rez == false){
		let text = [].random(); 
		user.balance += 500;
		return message.send(`馃挘 鉃� 袙邪屑 锌芯锌邪谢邪褋褜 薪械褍写邪褔薪褘泄 斜懈谢械褌.\n馃憭 鉃� 袙褘 胁褘谐懈褉邪谢懈 500$`);
	}else{ 
		let count = [3000,5000,10000,15000,20000].random();
		user.balance += count;
		return message.send(`馃帀 鉃� 校写邪褔薪褘泄 斜懈谢械褌懈泻!\n馃憭 鉃� 袙褘 锌芯谢褍褔懈谢懈 ${count}$`);
	}
});
   
  ////////////////
  	vk.updates.hear(/^(?:泻褍锌懈褌褜 褉械泄褌懈薪谐)\s?([0-9]+)?/i, message => {
 		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || !Number(message.$match[1])) return message.send(`馃憫 鉃� 校泻邪卸懈褌械 泻芯谢懈褔械褋褌胁芯 褉械泄褌懈薪谐邪.`);
		if(user.balance < message.$match[1] * 500000) return message.send(`馃憫 鉃� 1 褉械泄褌懈薪谐 褋褌芯懈褌 500.000$\n馃憫 鉃� 袛谢褟 锌芯泻褍锌泻懈 ${message.$match[1]}馃憫 薪褍卸薪芯 ${message.$match[1] * 500000}$`)
		if(user.level > 0) return message.send(`馃憫 鉃� 袗写屑懈薪懈褋褌褉邪褑懈懈 蟹邪锌褉械褖械薪芯 锌芯泻褍锌邪褌褜 褉械泄褌懈薪谐.`)
		user.balance -= Number(message.$match[1] * 500000);
		user.global_exs += Number(message.$match[1]);
		return message.send(`馃憫 鉃� 袙褘 褍褋锌械褕薪芯 泻褍锌懈谢懈 ${message.$match[1]} 褉械泄褌懈薪谐邪`);
	});

  	  vk.updates.hear(/^(?:锌褉芯写邪褌褜 褉械泄褌懈薪谐)\s?([0-9]+)?/i, message => {
 		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || !Number(message.$match[1])) return message.send(`馃憫 鉃� 校泻邪卸懈褌械 泻芯谢懈褔械褋褌胁芯 褉械泄褌懈薪谐邪.`);
		if(user.global_exs < message.$match[1]) return message.send(`馃憫 鉃� 校 胁邪褋 薪械褌 褋褌芯谢褜泻芯 褉械泄褌懈薪谐邪.`)
		user.balance += Number(message.$match[1] * 200000);
		user.global_exs -= Number(message.$match[1]);
		return message.send(`馃憫 鉃� 袙褘 褍褋锌械褕薪芯 锌褉芯写邪谢懈 ${message.$match[1]} 褉械泄褌懈薪谐邪 蟹邪 ${message.$match[1] * 200000}$`);
	});


vk.updates.hear(/^(?:褋芯蟹写邪褌褜 褎褉邪泻褑懈褞)\s?([^]+)?/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];
	if(user.donate < 50) return message.send(`馃摌 鉃� 小芯蟹写邪薪懈械 褎褉邪泻褑懈懈 褋褌芯懈褌 50 褉褍斜懈薪芯胁`);
	if(!message.$match[1]) return message.send(`馃摌 鉃� 袧邪锌懈褕懈褌械 薪邪蟹胁邪薪懈械 写谢褟 褎褉邪泻褑懈懈.`);
	if(acc.users[id].frac_name != false) return message.send(`馃摌 鉃� 袙褘 褍卸械 薪邪褏芯写懈褌械褋褜 胁芯 胁褉邪泻褑懈懈`);
	let args =  message.$match[1];
	if(frac[args]) return message.send(`馃摌 鉃� 肖褉邪泻褑懈褟 褋 褌邪泻懈屑 薪邪蟹胁邪薪懈械屑 褍卸械 褋褍褖械褋褌胁褍械褌.`);
	frac[args] = {
		users: {},
		balance: 0,
		bank: 0,
		people: 1, 
		counts: 0,
		owner: message.user
	}
	frac[args].users[id] = {
		count: 0
	}
	user.frac_name = args;
	return message.send(`
		馃摌 鉃� 袙褘 褋芯蟹写邪谢懈 褎褉邪泻褑懈褞 "${args}"
		馃摌 鉃� 袠薪褎芯褉屑邪褑懈褟: "肖褉邪泻褑懈褟"
		`);
}); 

vk.updates.hear(/^(?:褎褉邪泻褑懈懈)/i,  (message) => { 
	let text = '馃摌 鉃� 小锌懈褋芯泻 褎褉邪泻褑懈泄:\n\n'
	for(i in frac){
 		text += `馃捈 鉃� 袧邪蟹胁邪薪懈械: ${i} | 袙谢邪写械谢械褑: @id${frac[i].owner}(${acc.users[user_id(frac[i].owner)].prefix})\n`
	}
	return message.send(`
	${text}
	`);
});

vk.updates.hear(/^(?:胁芯泄褌懈)\s?([^]+)?/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)]; 
	if(frac[message.$match[1]].owner == message.user) return message.send(`馃摌 鉃� 袙褘 懈褌邪泻 褋芯蟹写邪褌械谢褜 褎褉邪泻褑懈懈!`); 
	if(!message.$match[1]) return message.send(`馃摌 鉃� 袧邪锌懈褕懈褌械 褌芯褔薪芯械 薪邪蟹胁邪薪懈械 褎褉邪泻褑懈懈, 谐写械 褏芯褌懈褌械 褉邪斜芯褌邪褌褜. (校褔懈褌褘胁邪褟 褉械谐懈褋褌褉/蟹薪邪泻懈/褋懈屑胁芯谢褘/褋屑邪泄谢褘)`);
	if(acc.users[id].frac_name != false) return message.send(`馃摌 鉃� 袙褘 褍卸械 薪邪褏芯写懈褌械褋褜 胁芯 胁褉邪泻褑懈懈`);
	let args = message.$match[1];
	if(!frac[args]) return message.send(`馃摌 鉃� 肖褉邪泻褑懈褟 褋 褌邪泻懈屑 薪邪蟹胁邪薪懈械屑 薪械 褋褍褖械褋褌胁褍械褌.`);
	if(frac[args].people >= 10) return message.send(`馃摌 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢-胁芯 褉邪斜芯褌薪懈泻芯胁 胁芯 褎褉邪泻褑懈懈 10.`)
	frac[args].people += 1;
	frac[args].users[id] = {
		count: 0
	}
	user.frac_name = args;
	return message.send(`
		馃摌 鉃� 袙褘 胁褋褌褍锌懈谢懈 胁芯 褎褉邪泻褑懈褞 "${args}"
		馃摌 鉃� 袠薪褎芯褉屑邪褑懈褟: "肖褉邪泻褑懈褟"
		`);
}); 

vk.updates.hear(/^(?:胁褘泄褌懈)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`馃摌 鉃� 袙褘 薪械 薪邪褏芯写懈褌械褋褜 胁芯 胁褉邪泻褑懈懈`);      
	let name = acc.users[id].frac_name;
	if(frac[name].owner == message.user) return message.send(`馃摌 鉃� 小芯蟹写邪褌械谢褜 褎褉邪泻褑懈懈 薪械 屑芯卸械褌 械褢 锌芯泻懈薪褍褌褜!`); 

	frac[name].people -= 1;
	delete frac[name].users[id];

	user.frac_name = false;
	return message.send(`
		馃摌 鉃� 袙褘 锌芯泻懈薪褍谢懈 褎褉邪泻褑懈褞 "${name}" 
		`);
});

vk.updates.hear(/^(?:褎褉邪泻褑懈褟 褋薪褟褌褜)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`馃摌 鉃� 袙褘 薪械 薪邪褏芯写懈褌械褋褜 胁芯 胁褉邪泻褑懈懈`);      
	let name = acc.users[id].frac_name;
	if(frac[name].owner != message.user) return message.send(`馃摌 鉃� 袣芯屑邪薪写邪 写芯褋褌褍锌薪邪 褋芯蟹写邪褌械谢褞 褎褉邪泻褑懈懈!`); 
	let sum = frac[name].balance;
	frac[name].balance = 0;
	user.balance += Number(sum);
	return message.send(`
		馃挻 鉃� 袙褘 褋薪褟谢懈 褋 斜邪谢邪薪褋邪 褎褉邪泻褑懈懈 ${sum}$
		`);
});

vk.updates.hear(/^(?:芯褌褉邪斜芯褌邪褌褜)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`馃摌 鉃� 袙褘 薪械 薪邪褏芯写懈褌械褋褜 胁芯 胁褉邪泻褑懈懈`);  
	if(user.bloks.frac == true) return message.send(`馃摌 鉃� 袪邪斜芯褌邪褌褜 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌)`);     
	let name = acc.users[id].frac_name; 

	frac[name].users[id].count += 1;
	frac[name].bank += 5000;
	 
	user.bloks.frac = true; 
		setTimeout(() => {
			user.bloks.frac = false;
	}, 360000);

	 
	return message.send(`
		馃摌 鉃� 袙褘 芯褌褉邪斜芯褌邪谢懈 10 屑懈薪褍褌 薪邪 褉邪斜芯褌械.
		馃挵 鉃� +5.000$ 胁 泻芯锌懈谢泻褍 褎褉邪泻褑懈懈.

		馃挻 鉃� 袪邪蟹 胁 2 褔邪褋邪 胁褘写邪械褌褋褟 蟹邪褉锌谢邪褌邪 蟹邪 胁邪褕褍 褉邪斜芯褌褍.
		`);
});

vk.updates.hear(/^(?:褎褉邪泻褑懈褟)$/i, (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];
	
	if(acc.users[id].frac_name == false){
		return message.send(`
		馃捈 鉃� 袠薪褎芯褉屑邪褑懈褟 芯 褎褉邪泻褑懈懈:

		馃敻 鉃� 袙褋褌褍锌懈褌褜 胁芯 褎褉邪泻褑懈褞: '袙芯泄褌懈 <薪邪蟹胁邪薪懈械 褎褉邪泻褑懈懈>'
		馃敻 鉃� 袩芯泻懈薪褍褌褜 褎褉邪泻褑懈褞: '袙褘泄褌懈'
		馃敻 鉃� 肖褉邪泻褑懈褟 褋薪褟褌褜 - 褋薪褟褌褜 胁褋械 写械薪褜谐懈(写谢褟 褋芯蟹写邪褌械谢褟)

		馃敻 鉃� 效褌芯斜褘 褎褉邪泻褑懈褟 锌褉懈薪芯褋懈谢邪 锌褉懈斜褘谢褜, 薪褍卸薪褘 褉邪斜芯褔懈械.
		馃敻 鉃� 袪邪斜芯褔懈械 写芯斜褉芯胁芯谢褜薪芯 屑芯谐褍褌 褍褋褌褉芯懈褌褜褋褟 胁芯 褎褉邪泻褑懈褞.
		馃敻 鉃� 袛谢褟 褍褋褌褉芯泄褋褌胁邪 懈屑 薪褍卸薪芯 锌褉芯锌懈褋邪褌褜: '袙芯泄褌懈 <薪邪蟹胁邪薪懈械 褎褉邪泻褑懈懈>'
		馃敻 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢懈褔械褋褌胁芯 褉邪斜芯褔懈褏 - 10.
		馃敻 鉃� 袣邪卸写褘械 10 屑懈薪褍褌 褉邪斜芯褔懈械 写芯谢卸薪褘 锌懈褋邪褌褜 泻芯屑邪薪写褍 '袨褌褉邪斜芯褌邪褌褜'.
		馃敻 鉃� 袟邪 泻邪卸写芯械 薪邪锌懈褋邪薪懈械 胁 泻芯锌懈谢泻褍 褎褉邪泻褑懈懈 懈写械褌 5000$.
		馃敻 鉃� 袣邪卸写褘械 2 褔邪褋邪 褋褍屑屑邪 懈蟹 泻芯锌懈谢泻懈 锌械褉械褏芯写懈褌 薪邪 褋褔械褌 褎褉邪泻褑懈懈 懈 写械谢懈褌褋褟 邪胁褌芯屑邪褌懈褔械褋泻懈 屑械卸写褍 褋芯蟹写邪褌械谢械屑 褎褉邪泻褑懈懈(10% 芯褌 锌褉懈斜褘谢懈) 懈 褉邪斜芯褌薪懈泻邪屑懈(90% 芯褌 锌褉懈斜褘谢懈).

		`);
	}
	let text = '';
	for(i in frac[user.frac_name].users){
		text += `馃敾 鉃� @id${acc.users[i].id}(${acc.users[i].prefix}) | [${frac[user.frac_name].users[i].count}] 褉邪蟹 蟹邪 2 褔邪褋邪\n`
	}
		 return message.send(`
		馃摌 鉃� 袧邪蟹胁邪薪懈械 褎褉邪泻褑懈懈 "${user.frac_name}"
		馃搼 鉃� 袪邪斜芯褌薪懈泻芯胁: ${frac[user.frac_name].people}
		馃挻 鉃� 袙 泻芯锌懈谢泻械: ${frac[user.frac_name].bank}$
		馃挵 鉃� 袧邪 褋褔械褌褍: ${frac[user.frac_name].balance}$

		馃憫 鉃� 小芯蟹写邪褌械谢褜: @id${frac[user.frac_name].owner}(${acc.users[user_id(frac[user.frac_name].owner)].prefix})

		馃捈 鉃� 小褌邪褌懈褋褌懈泻邪 芯褌褉邪斜芯褌泻懈:
		${text}

		馃捈 鉃� 袠薪褎芯褉屑邪褑懈褟 芯 褎褉邪泻褑懈懈:

		馃敻 鉃� 效褌芯斜褘 褎褉邪泻褑懈褟 锌褉懈薪芯褋懈谢邪 锌褉懈斜褘谢褜, 薪褍卸薪褘 褉邪斜芯褔懈械.
		馃敻 鉃� 袪邪斜芯褔懈械 写芯斜褉芯胁芯谢褜薪芯 屑芯谐褍褌 褍褋褌褉芯懈褌褜褋褟 胁芯 褎褉邪泻褑懈褞.
		馃敻 鉃� 袛谢褟 褍褋褌褉芯泄褋褌胁邪 懈屑 薪褍卸薪芯 锌褉芯锌懈褋邪褌褜: '袙芯泄褌懈 <薪邪蟹胁邪薪懈械 褎褉邪泻褑懈懈>'
		馃敻 鉃� 袦邪泻褋懈屑邪谢褜薪芯械 泻芯谢懈褔械褋褌胁芯 褉邪斜芯褔懈褏 - 10.
		馃敻 鉃� 袣邪卸写褘械 10 屑懈薪褍褌 褉邪斜芯褔懈械 写芯谢卸薪褘 锌懈褋邪褌褜 泻芯屑邪薪写褍 '袨褌褉邪斜芯褌邪褌褜'.
		馃敻 鉃� 袟邪 泻邪卸写芯械 薪邪锌懈褋邪薪懈械 胁 泻芯锌懈谢泻褍 褎褉邪泻褑懈懈 懈写械褌 5000$.
		馃敻 鉃� 袣邪卸写褘械 2 褔邪褋邪 褋褍屑屑邪 懈蟹 泻芯锌懈谢泻懈 锌械褉械褏芯写懈褌 薪邪 褋褔械褌 褎褉邪泻褑懈懈 懈 写械谢懈褌褋褟 邪胁褌芯屑邪褌懈褔械褋泻懈 屑械卸写褍 褋芯蟹写邪褌械谢械屑 褎褉邪泻褑懈懈(10% 芯褌 锌褉懈斜褘谢懈) 懈 褉邪斜芯褌薪懈泻邪屑懈(90% 芯褌 锌褉懈斜褘谢懈).

		`);
}); 

vk.updates.hear(/^(?:泻褉褍褌懈褌褜)$/i, (message) => { 
	let a = cases.random(); 
	let user = acc.users[user_id(message.user)];

	if(user.balance < 100000) return message.send(`馃捀 鉃� 袨褉褍卸械泄薪褘泄 泻械泄褋 褋褌芯懈褌 100.000$`);
	if(user.bloks.gun_case == true) return message.send(`馃敨 鉃� 袣褉褍褌懈褌褜 芯褉褍卸械泄薪褘泄 泻械泄褋 屑芯卸薪芯 褉邪蟹 胁 10 屑懈薪褍褌.`);
	user.balance -= 10000;
	user.bloks.gun_case = true; 
		setTimeout(() => {
			user.bloks.gun_case = false;
	}, 360000);

	user.uron = a.uron;
	user.gun_name = a.name;
	return message.send(`
		馃捀 鉃� 袙褘 芯褌泻褉褘谢懈 芯褉褍卸械泄薪褘泄 泻械泄褋 蟹邪 10.000$
		馃捀 鉃� 袙邪屑 胁褘锌邪谢芯 芯褉褍卸懈械:
		馃敨 鉃� ${a.name} 褋 褍褉芯薪芯屑 ${a.uron} 械写懈薪懈褑
		
		鈿� 鉃� 袩褉懈 褋谢械写褍褞褖械屑 芯褌泻褉褘褌懈懈 泻械泄褋邪, 写邪薪薪芯械 芯褉褍卸懈械 斜褍写械褌 蟹邪屑械薪械薪芯 胁褘锌邪胁褕懈屑.
	`);
});

vk.updates.hear(/^(?:褋写邪褞褋褜)/i, message => {
 
	let user = acc.users[user_id(message.user)];     
	if(user.duel == false) return message.send(`馃敨 鉃� 袙邪屑 薪懈泻褌芯 薪械 斜褉芯褋邪谢 胁褘蟹芯胁/袙褘 薪械 胁褘蟹褘胁邪谢懈 薪邪 褋褌褉械谢褍 薪懈泻芯谐芯.`);
	
	vk.api.call("messages.send", {
		peer_id: acc.users[user.duel].id,
		message: `
		馃敨 鉃� 袠谐褉芯泻 薪械 褋芯谐谢邪褋懈谢褋褟 薪邪 褋褌褉械谢褍.
		`
	}).then((res) => {}).catch((error) => {console.log('duel error'); });	

	user.duel_summ = false;
	acc.users[user.duel].duel_summ = false;
	acc.users[user.duel].duel = false;
	acc.users[user.duel].nachal = false;
	user.duel = false;
	user.nachal = false; 

 

	return message.send(`
		馃敨 鉃� 袙褘 芯褌屑械薪懈谢懈 褋褌褉械谢褍.
	`);
});

vk.updates.hear(/^(?:褋褌褉械谢邪)\s?([0-9]+)?\s?([0-9]+)?/i, message => {

	let args = message.$match[1];
	let user = acc.users[user_id(message.user)];
	if(acc.users[args].gun_name == false) return message.send(`馃敨 鉃� 校 懈谐褉芯泻邪 薪械褌 芯褉褍卸懈褟. ('袣褉褍褌懈褌褜')`)
	if(user.gun_name == false)	 return message.send(`馃敨 鉃� 校 胁邪褋 薪械褌 芯褉褍卸懈褟. ('袣褉褍褌懈褌褜')`)

	if(args == user_id(message.user)) return message.send(`馃敨 鉃� 袙褘 褍泻邪蟹邪谢懈 褋胁芯泄 ID`)
	if(!message.$match[2] || !args || message.$match[2] < 1) return message.send(`馃捀 鉃� 袩褉懈屑械褉 泻芯屑邪薪写褘: '小褌褉械谢邪 ID 小孝袗袙袣袗'`)
	if(user.balance < message.$match[2]) return message.send(`馃捀 鉃� 袙邪褕邪 褋褌邪胁泻邪 斜芯谢褜褕械 胁邪褕械谐芯 斜邪谢邪薪褋邪`)
	if(!acc.users[args]) return message.send(`馃敨 鉃� 孝邪泻芯谐芯 懈谐褉芯泻邪 薪械褌!`)
	if(acc.users[args].balance < message.$match[2]) return message.send(`馃捀 鉃� 校 懈谐褉芯泻邪 斜邪谢邪薪褋 屑械薪褜褕械 胁邪褕械泄 褋褌邪胁泻懈`)
	if(user.duel != false) return message.send(`馃敨 鉃� 袙褘 褍卸械 薪邪蟹薪邪褔邪谢懈 褋褌褉械谢褍 懈谐褉芯泻褍 ${acc.users[user.duel].prefix}\n馃帉 鉃� 袛谢褟 芯褌屑械薪褘 薪邪锌懈褕懈褌械: '小写邪褞褋褜'`);
	if(acc.users[args].duel != false) return message.send(`馃敨 鉃� 袙褘 褍卸械 薪邪蟹薪邪褔邪谢懈 褋褌褉械谢褍 懈谐褉芯泻褍 ${acc.users[user.duel].prefix}\n&#127987; 鉃� 袛谢褟 芯褌屑械薪褘 薪邪锌懈褕懈褌械: '小写邪褞褋褜'`);
	user.duel_summ = Number(message.$match[2]);
	acc.users[args].duel_summ = Number(message.$match[2]);
	user.duel = Number(args);
	acc.users[args].duel = Number(user_id(message.user));
	user.nachal = user_id(message.user);
	acc.users[args].nachal =  user_id(message.user);

	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `
		馃敨 鉃� 袠谐褉芯泻 @id${user.id}(${user.prefix}) 薪邪蟹薪邪褔懈谢 胁邪屑 褋褌褉械谢褍
		馃捀 鉃� 小褌邪胁泻邪 ${message.$match[2]}$

		馃敨 鉃� 袛谢褟 锌褉懈薪褟褌懈褟 薪邪锌懈褕懈褌械: '袩褉懈薪褟褌褜'
		馃帉 鉃� 袛谢褟 芯褌屑械薪褘 薪邪锌懈褕懈褌械: '小写邪褞褋褜'
		`
	}).then((res) => {}).catch((error) => {console.log('duel error'); });	

	return message.send(`
		馃敨 鉃� 袙褘 薪邪蟹薪邪褔懈谢懈 褋褌褉械谢褍 懈谐褉芯泻褍 @id${acc.users[args].id}(${acc.users[args].prefix})
		馃捀 鉃� 小褌邪胁泻邪 ${message.$match[2]}$
		馃敨 鉃� 袨卸懈写邪泄褌械 锌褉懈薪褟褌懈褟 斜芯褟 懈谐褉芯泻芯屑.
		
		&#127987; 鉃� 袛谢褟 芯褌屑械薪褘 薪邪锌懈褕懈褌械: '小写邪褞褋褜'
	`);
});

vk.updates.hear(/^(?:锌褉懈薪褟褌褜)/i, message => {

	let args = message.$match[1];
	let user = acc.users[user_id(message.user)];
	if(user.duel == false) return message.send(`馃敨 鉃� 袙邪屑 薪械 薪邪蟹薪邪褔邪谢懈 褋褌褉械谢褍!`); 
	if(user.balance < user.summ) return message.send(`馃捀 鉃� 小褌邪胁泻邪 斜芯谢褜褕械 胁邪褕械谐芯 斜邪谢邪薪褋邪`)
	if(acc.users[user.duel].balance < message.$match[2]) return message.send(`馃捀 鉃� 校 锌褉芯褌懈胁薪懈泻邪 斜邪谢邪薪褋 屑械薪褜褕械 褋褌邪胁泻懈`) 
	if(user_id(message.user) == user.nachal) return message.send(`馃捀 鉃� 袩褉懈薪褟褌褜 褋褌褉械谢褍 写芯谢卸械薪 褋芯锌械褉薪懈泻!`);

	let sum = user.duel_summ;  
	let us2 = user.duel;
	let one_hp = 100; //泻褌芯 锌褉懈薪懈屑邪械褌
	let two_hp = 100; //泻褌芯 邪褌邪泻褍械褌
	let text = '';

	//1 褝褌邪锌
	one_hp -= acc.users[user.duel].uron;
	two_hp -= user.uron;
	text += `
	- - 1&#8419; 褝褌邪锌 - - 
	馃敻 鉃� ${user.prefix} | -${acc.users[user.duel].uron}% | ${one_hp}鉂�
 	馃敼 鉃� ${acc.users[user.duel].prefix} | -${user.uron}% | ${two_hp}鉂� 
	`;
	// 2 褝褌邪锌
	one_hp -= acc.users[user.duel].uron;
	two_hp -= user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// 锌芯斜械写懈谢 胁褌芯褉芯泄
					user.balance -= Number(user.duel_summ);
					acc.users[user.duel].balance += Number(user.duel_summ);

					user.game.strela_loose += 1; 
					acc.users[us2].game.strela_win += 1;

					text += `
					- - 肖懈薪邪谢 - - 
					馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${acc.users[us2].id}(${acc.users[us2].prefix})
					馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | 0鉂�
				 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}鉂� 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel_summ = false;
					acc.users[us2].duel = false; 
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
				}
				if(two_hp <= 0){
					// 锌芯斜械写懈谢 锌械褉胁褘泄
					user.balance += Number(user.duel_summ);
					acc.users[us2].balance -= Number(user.duel_summ);

					user.game.strela_win += 1;  
					acc.users[us2].game.strela_loose += 1;

					text += `
					- - 肖懈薪邪谢 - - 
					馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${user.id}(${user.prefix})
					馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}鉂�
				 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | 0鉂� 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
				}
			}
		}
			if(two_hp <= 0){
				// 锌芯斜械写懈谢 锌械褉胁褘泄
				user.balance += Number(user.duel_summ);
				acc.users[us2].balance -= Number(user.duel_summ);

				user.game.strela_win += 1;  
				acc.users[us2].game.strela_loose += 1;

				text += `
				- - 肖懈薪邪谢 - - 
				馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${user.id}(${user.prefix})
				馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}鉂�
			 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | 0鉂� 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
			}
			if(one_hp <= 0){
				// 锌芯斜械写懈谢 胁褌芯褉芯泄
				user.balance -= Number(user.duel_summ);
				acc.users[user.duel].balance += Number(user.duel_summ);

				user.game.strela_loose += 1; 
				acc.users[us2].game.strela_win += 1;

				text += `
				- - 肖懈薪邪谢 - - 
				馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${acc.users[us2].id}(${acc.users[us2].prefix})
				馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | 0鉂�
			 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}鉂� 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel_summ = false;
				acc.users[us2].duel = false; 
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
			} 
	
	}else{
		text += `
		- - 2&#8419; 褝褌邪锌 - - 
		馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}鉂�
	 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}鉂� 
		`;
	} 
	// 3 褝褌邪锌
	one_hp -= acc.users[us2].uron;
	two_hp -= user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// 锌芯斜械写懈谢 胁褌芯褉芯泄
					user.balance -= Number(user.duel_summ);
					acc.users[us2].balance += Number(user.duel_summ);

					user.game.strela_loose += 1; 
					acc.users[us2].game.strela_win += 1;

					text += `
					- - 肖懈薪邪谢 - - 
					馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${acc.users[us2].id}(${acc.users[us2].prefix})
					馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | 0鉂�
				 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}鉂� 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
				}
				if(two_hp <= 0){
					// 锌芯斜械写懈谢 锌械褉胁褘泄
					user.balance += Number(user.duel_summ);
					acc.users[us2].balance -= Number(user.duel_summ);

					user.game.strela_win += 1;
					acc.users[us2].game.strela_loose += 1;

					text += `
					- - 肖懈薪邪谢 - - 
					馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${user.id}(${user.prefix})
					馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}鉂�
				 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | 0鉂� 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
				}
			}
		}
			if(two_hp <= 0){
				// 锌芯斜械写懈谢 锌械褉胁褘泄
				user.balance += Number(user.duel_summ);
				acc.users[us2].balance -= Number(user.duel_summ);

				user.game.strela_win += 1;
				acc.users[us2].game.strela_loose += 1;

				text += `
				- - 肖懈薪邪谢 - - 
				馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${user.id}(${user.prefix})
				馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}鉂�
			 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | 0鉂� 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
			}
			if(one_hp <= 0){
				// 锌芯斜械写懈谢 胁褌芯褉芯泄
				user.balance -= Number(user.duel_summ);
				acc.users[us2].balance += Number(user.duel_summ);

				user.game.strela_loose += 1; 
				acc.users[us2].game.strela_win += 1;

				text += `
				- - 肖懈薪邪谢 - - 
				馃弫 鉃� 袙 褎懈薪邪谢褜薪芯屑 褝褌邪锌械 锌芯斜械写懈谢 @id${acc.users[us2].id}(${acc.users[us2].prefix})
				馃敻 鉃� ${user.prefix} | -${acc.users[us2].uron}% | 0鉂�
			 	馃敼 鉃� ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}鉂� 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`馃敨 鉃� 袪械蟹褍谢褜褌邪褌 斜芯褟 芯褌锌褉邪胁谢械薪 胁邪屑 胁 袥小.`);			
			}
		 
		
	}else{
		text += `
		- - 3&#8419; 褝褌邪锌 - - 
		袙褘 褋褘谐褉邪谢懈 胁 薪懈褔褜褞!`;
		vk.api.call("messages.send", {
				user_id: user.id,
				message: text
				
			}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

			vk.api.call("messages.send", {
				user_id: acc.users[us2].id,
				message: text
			}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });
		acc.users[us2].duel = false;
		acc.users[us2].duel_summ = false;
		user.duel = false;
		user.duel_summ = false;
		acc.users[us2].nachal = false;
		user.nachal = false; 
		 
	}  

 
	 
});




let cases = [
	{
		uron: 36,
		name: '袩懈褋褌芯谢械褌 "Deagle"'
	},
	{
		uron: 36,
		name: '袗胁褌芯屑邪褌 "M4A4"'
	}, 
	{
		uron: 55,
		name: `袛褉芯斜芯胁懈泻 "Sawed-Off"`
	},
	{
		uron: 43,
		name: `袩懈褋褌芯谢械褌 "Five-SeveN | 袠褋锌褘褌邪薪懈械 芯谐薪褢屑"`
	},
	{
		uron: 37,
		name: `袗胁褌芯屑邪褌 "AK-47"`
	},
	{
		uron: 35,
		name: `袗胁褌芯屑邪褌 "AUG"`
	},
	{
		uron: 34,
		name: `袗胁褌芯屑邪褌 "Galil AR"`
	},
	{
		uron: 37,
		name: `袩懈褋褌芯谢械褌-袩褍谢械屑械褌 "袩袩-19 袘懈蟹芯薪"`
	},
	{
		uron: 44,
		name: `袩懈褋褌芯谢械褌-袩褍谢械屑械褌 "MP9"`
	},
	{
		uron: 45,
		name: `袩懈褋褌芯谢械褌-袩褍谢械屑械褌 "UMP-45"`
	}, 
	{
		uron: 55,
		name: `袩懈褋褌芯谢械褌褘 "Dual Berettas | 校写邪褉 泻芯斜褉褘"`
	},
	{
		uron: 49,
		name: `袛褉芯斜芯胁懈泻 "Nova | 协泻蟹芯"`
	},
	{
		uron: 43,
		name: `袩懈褋褌芯谢械褌 "Desert Eagle | 袛懈褉械泻褌懈胁邪"`
	},
	{
		uron: 45,
		name: `袪械胁芯谢褜胁械褉 "R8 | 袣褉芯胁邪胁邪褟 锌邪褍褌懈薪邪"`
	} 

]
 
async function run() {
    await vk.updates.startPolling();
    console.log('Bot actived');
	restart();
}

run().catch(console.error);

 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 
var parserInt = (str) => parseInt(str.replace(/k|泻/ig, "000"));
function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

 //------------------------------------------------------------------------------------\\ 
 //------------------------------------------------------------------------------------\\
 	function user_id(id) {
	 	let ids = 0
	 	if(uid[id]){
	 		ids = uid[id].id
	 	}    
		return ids; 
	}  
  //------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------\\
	// log
 	function logs(id, ids, num, type) {
	 	
 	// - - - - - - - - - - - - - - - - -  
  		if(type == 1){ 
 			if(!log.point[ids]){ log.point[ids] = { log: [] }  } 
 			if(!log.point[id]){ log.point[id] = { log: [] }  } 
 			log.point[id].log.push(`[${time()} | ${data()} | Pay] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}$\n`)
 			log.point[ids].log.push(`[${time()} | ${data()} | Pay] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}$\n`)
			if(log.point[id].log.length >= 15){ delete log.point[id].log.shift() } 
			if(log.point[ids].log.length >= 15){ delete log.point[id].log.shift() } 
 		}
 		if(type == 2){ 
 			if(!log.give[ids]){ log.give[ids] = { log: [] }  } 
 			if(!log.give[id]){ log.give[id] = { log: [] }  } 
 			log.give[id].log.push(`[${time()} | ${data()} | Give] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}$\n`)
 			log.give[ids].log.push(`[${time()} | ${data()} | Give] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}$\n`)
			if(log.give[id].log.length >= 15){ delete log.give[id].log.shift() } 
			if(log.give[ids].log.length >= 15){ delete log.give[id].log.shift() }  
 		}
 		if(type == 3){ 
 			if(!log.remove[ids]){ log.remove[ids] = { log: [] }  } 
 			if(!log.remove[id]){ log.remove[id] = { log: [] }  } 
 			log.remove[id].log.push(`[${time()} | ${data()} | Remove] 袟邪斜褉邪谢 [ID: ${id}] 褍 懈谐褉芯泻邪 [ID: ${ids}] \n`)
 			log.remove[ids].log.push(`[${time()} | ${data()} | Remove] 袟邪斜褉邪谢 [ID: ${id}] 褍 懈谐褉芯泻邪 [ID: ${ids}] \n`)
			if(log.remove[id].log.length >= 15){ delete log.remove[id].log.shift() } 
			if(log.remove[ids].log.length >= 15){ delete log.remove[id].log.shift() } 
 		} 
 		if(type == 4){ 
 			if(!log.admin[ids]){ log.admin[ids] = { log: [] }  } 
 			if(!log.admin[id]){ log.admin[id] = { log: [] }  } 
 			log.admin[id].log.push(`[${time()} | ${data()} | Admin] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num} lvl\n`)
 			log.admin[ids].log.push(`[${time()} | ${data()} | Admin] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num} lvl\n`)
			if(log.admin[id].log.length >= 15){ delete log.admin[id].log.shift() } 
			if(log.admin[ids].log.length >= 15){ delete log.admin[id].log.shift() } 
 		} 
 		if(type == 5){ 
 			if(!log.setwin[ids]){ log.setwin[ids] = { log: [] }  } 
 			if(!log.setwin[id]){ log.setwin[id] = { log: [] }  } 
 			log.setwin[id].log.push(`[${time()} | ${data()} | Setwin] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}%\n`)
 			log.setwin[ids].log.push(`[${time()} | ${data()} | Setwin] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] -> ${num}%\n`)
			if(log.setwin[id].log.length >= 15){ delete log.setwin[id].log.shift() } 
			if(log.setwin[ids].log.length >= 15){ delete log.setwin[id].log.shift() }  
 		} 
 		if(type == 6){ 
 			if(!log.warns[ids]){ log.warns[ids] = { log: [] }  } 
 			if(!log.warns[id]){ log.warns[id] = { log: [] }  } 
 			log.warns[id].log.push(`[${time()} | ${data()} | warn] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] | 袩褉懈褔懈薪邪: ${num}\n`)
 			log.warns[ids].log.push(`[${time()} | ${data()} | warn] 袙褘写邪谢 [ID: ${id}] 懈谐褉芯泻褍 [ID: ${ids}] | 袩褉懈褔懈薪邪: ${num}\n`)
			if(log.warns[id].log.length >= 15){ delete log.warns[id].log.shift() } 
			if(log.warns[ids].log.length >= 15){ delete log.warns[id].log.shift() }  
 		} 
 	}
	//

	// log
	 
 	function game_log(id, name, count, win_lose) {
 
 	// - - - - - - - - - - - - - - - - -   
 		if(!log.game[id]){ log.game[id] = { log: [] }  } 
 		log.game[id].log.push(`[${time()} | ${data()} | ${name}] 小褌邪胁泻邪: ${count}$ | 袠褋褏芯写: ${win_lose.toString().replace(/0/gi, "鉂�").replace(/1/gi, "鉁�")}\n`) 
		if(log.game[id].log.length >= 15){ delete log.game[id].log.shift() }  

 	}
	//
 //------------------------------------------------------------------------------------\\
 	function lvlup(id) {
 		let text = false;
 		if(acc.users[id].exs >= acc.users[id].exsup){
 			acc.users[id].exs -= acc.users[id].exsup;
 			acc.users[id].lvl += 1;
 			if(acc.users[id].game.win < 52){acc.users[id].game.win += 1;}
 			acc.users[id].exsup += new_lvl();
 			text = true;
 		}
 		return text;
 	} 
 //------------------------------------------------------------------------------------\\
	function new_lvl(iid) {
	 	let ids = 0
	 	let numbers = [10,20,30,40,50,60];
	 	let rand = numbers.random()
	 	return rand;
	}
 //------------------------------------------------------------------------------------\\
 	function zapret(text) {
 		let text1 = text.toLowerCase();
 		let texts = 0;
 		let stat = false;
		var zaprets = /(胁泻 斜芯 褌 |褋芯胁邪 薪械 褋锌懈褌|褋芯胁邪 薪懈泻芯谐写邪 薪械 褋锌懈褌|褋 芯 胁 邪 薪 械 褋 锌 懈 褌|褋芯胁邪薪懈泻芯谐写邪薪械褋锌懈褌|褋芯胁邪 薪械 褋锌懈褌 薪懈泻芯谐写邪|胁泻斜芯褌褉褍|vkvot ru|vkbotru|vkbot|v k b o t . r u|胁 泻 斜芯褌|锌芯褉薪芯|botvk|斜芯褌胁泻|vkbot|泻斜芯褌|bot vk|褏械薪褌邪泄|褋械泻褋|锌懈写褉|褌褉邪褏|薪邪褋懈谢懈械|蟹芯芯褎懈谢|斜写褋屑|褋懈褉懈褟|hentai|hentay|褋懈薪懈泄 泻懈褌|褋邪屑芯褍斜懈泄褋褌胁芯|褌械褉褉芯褉懈褋褌褘|褋谢懈胁|褑锌|cp|屑邪谢械薪褜泻懈械|屑邪谢芯谢械褌泻懈|褋褍褔泻懈|褌褉邪褏|械斜谢褟|懈蟹薪邪褋懈谢芯胁邪薪懈械|斜谢褟褌褜|褏褍泄|锌芯褕械谢 薪邪褏|褌胁邪褉褜|屑褉邪蟹褜|褋褍褔泻邪|谐邪薪写芯薪|褍械斜芯泻|褕谢褞褏|锌邪褋泻褍写邪|芯褉谐邪蟹屑|写械胁褋褌胁械薪薪懈褑褘|褑械谢泻懈|褉邪褋褋芯胁芯械|屑械谢泻懈械|屑邪谢芯谢械褌泻懈|薪械褋芯胁械褉褕械薪薪芯谢械褌薪懈械|械斜谢褟|褏械薪褌邪泄|sex|bdsm|ebl|trax|syka|shlux|懈薪褑械褋褌|iznas|屑邪褌褜|写芯谢斜邪械斜|写芯谢斜邪褢斜|褏褍械褋芯褋|褋褍褔泻邪|褋褍泻邪|褌胁邪褉褜|锌械蟹写褞泻|褏褍泄|褕谢褞褏|斜芯谐|褋邪褌邪薪邪|屑褉邪蟹褜)/
		if (zaprets.test(text1) == true) { 
				texts = `馃摋 鉃� 袧械泻芯褉褉械泻褌薪褘泄 蟹邪锌褉芯褋.` 
				stat = true;
		}
		var filter1 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter2 = /(?!http(s)?:\/\/)?(www\.)?[邪-褟0-9-_.]{1,256}\.(褉褎|褋褉斜|斜谢芯谐|斜谐|褍泻褉|褉褍褋|覜邪蟹|丕賲丕乇丕鬲.|賲氐乇.|丕賱爻毓賵丿賷丞.)/ 
		if (filter1.test(text1) == true || filter2.test(text1) == true) { 
			texts = `馃摋 鉃� 袧械泻芯褉褉械泻褌薪褘泄 蟹邪锌褉芯褋.` 
			stat = true; 
		}
		return texts
 	} 
 
  //------------------------------------------------------------------------------------\\
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

 
 
 	 function time() {
			let date = new Date();
			let days = date.getDate();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;
			if (seconds < 10) seconds = "0" + seconds;
			var times = hours + ':' + minutes + ':' + seconds
			return times;
	}
 //------------------------------------------------------------------------------------\\
	function data() {
		var date = new Date();
		let days = date.getDate();
		let month = date.getMonth() + 1; 
		if (month < 10) month = "0" + month;
		if (days < 10) days = "0" + days;
		var datas = days + ':' + month + ':2018' ;
		return datas;
	}
 //------------------------------------------------------------------------------------\\ 
 	setInterval(() => {
		acc.curs = rand(30000,80000) 
		acc.bit = rand(31000,32200)
	}, 600000);


 	   setInterval(() =>{
 		for(i=1;i<200000;i++){
 			if(acc.users[i]){
 				if(acc.users[i].autobiz != false){
	 				acc.users[i].autobiz -= 1;
	 				if(acc.users[i].autobiz == 0){acc.users[i].autobiz = false}

	 				if(acc.users[i].bizs.one_biz == true){
	 					acc.users[i].balance += Number(acc.users[i].bizs.one.zp)
	 				}
	 				if(acc.users[i].bizs.two_biz == true){
	 				 	acc.users[i].balance += Number(acc.users[i].bizs.two.zp)
	 				}
	 			}
	 			//
	 			if(acc.users[i].autozp != false){
	 				if(acc.users[i].job.name != false){
	 					acc.users[i].autozp -= 1;
	 					if(acc.users[i].autozp == 0){acc.users[i].autozp = false}
	 					acc.users[i].balance += Number(acc.users[i].job.count)	
	 				}
	 			}
 			}
 			 
 		}
 	}, 3600000); 
 
 
  	function restart() {
 		  	for(i=1;i < 200000; i++){  
 		  		if(acc.users[i]){
				acc.users[i].bloks.cases = false
				acc.users[i].bloks.bonus = false
				acc.users[i].bloks.random_game = false
				acc.users[i].bloks.gun_case = false
				acc.users[i].bloks.frac = false
				acc.users[i].bloks.pay = false
				acc.users[i].bloks.a_case = false
				acc.users[i].bloks.giverub = false
				acc.users[i].job.stop = false
				acc.users[i].bizs.one.stop = false
				acc.users[i].bizs.two.stop = false
				acc.users[i].safe.status = false;
 				acc.users[i].safe.key = false;
				}
			} 
	}

 	setInterval(() =>{
 		for(name in frac){
 			let sum = frac[name].bank;
 			frac[name].bank = 0;
 			let owner_sum = sum / 100 * 10;
 			let user_sums = sum / 100 * 90;
 			let people = frac[name].people - 1;
 			let user_sum = user_sums / people;

 			frac[name].balance += owner_sum;
 			for(i in frac[name].users){
 				frac[name].users[i].count = 0;
 				acc.users[i].balance += user_sum;
 			} 
 		}
 	}, 7200000); 

 	 function adm_log(is) {
  		let id = is[0];	
		let i = config;  
		vk.api.call('messages.send', { user_id: acc.users[2].id, message: `鈿� 鈿� [ADM-LOG | User_id: @id${acc.users[is[0]].id}(${is[0]})] 鈿� 鈿燶n[ -> ${is[1]} <- ]`});			 
  	}
 

   	 setInterval(() =>{
 		for(i=0;i<100000;i++){
 			if(acc.users[i]){
 			 	if(acc.users[i].adm_time > 0){
 			 		acc.users[i].adm_time -= 1;
 			 		if(acc.users[i].adm_time == 0){
 			 			acc.users[i].level = 0;

 			 			vk.api.call('messages.send', {
							user_id: acc.users[i].id,
							message: `小褉芯泻 写械泄褋褌胁懈褟 vip/moder/admin 锌褉邪胁 懈褋褌械泻. 袙褘 褋薪褟褌褘 褋 写芯谢卸薪芯褋褌懈.`
						});
 			 		}
 			 	}
 			}
 		}
 	}, 3600000);  	 


setInterval(function(){
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t")) 
	fs.writeFileSync("./base/uid.json", JSON.stringify(uid, null, "\t"))  
	fs.writeFileSync("./base/log.json", JSON.stringify(log, null, "\t"));
	fs.writeFileSync("./base/frac.json", JSON.stringify(frac, null, "\t"));
}, 3500);

  