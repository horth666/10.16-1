/* 剧情与结果数据集中维护。traits 只参与内部匹配，不会展示给用户。 */
window.GAME_DATA = {
  traits: ["power", "autonomy", "insight", "bonds", "ambition", "daring"],

  questions: [
    {
      chapter: "第一幕 · 雨夜归宅",
      title: "门为你开，却没人叫出你的名字",
      body: "黑色轿车停在晏家老宅前。管家接过你的邀请函，只说老夫人在等你。穿过长廊时，你发现墙上有一幅被临时换过的家族合影，而宴会厅里所有人的谈话都在你出现的瞬间停了半拍。",
      options: [
        { text: "先向主位的老夫人致意，把邀请函原封不动放到她手边", traits: { bonds: 3, power: 1, insight: 1 }, affinity: ["true-daughter", "beloved-heiress", "claimant"], flag: "formal", aftermath: "老夫人没有看信，却把你身旁那把空了多年的椅子拉开。" },
        { text: "借整理大衣的片刻，记住那幅新照片里每个人的站位", traits: { insight: 3, autonomy: 2 }, affinity: ["silent-heir", "witness", "shadow-regent"], flag: "portrait", aftermath: "你认出照片边缘有一道新裁痕：原本还站着另一个人。" },
        { text: "让司机别熄火，自己带着行李走进这场宴会", traits: { autonomy: 3, daring: 2 }, affinity: ["rogue-lady", "freewalker", "self-made"], flag: "escape", aftermath: "车灯没有灭。至少今晚，离开的决定仍在你手里。" },
        { text: "不急着入席，先核对邀请函火漆与门厅家徽的细微差别", traits: { insight: 2, ambition: 2, power: 1 }, affinity: ["architect", "negotiator", "alliance-princess"], flag: "seal", aftermath: "两枚家徽少了一片月桂叶。邀请你的人，或许并不代表整个晏家。" }
      ]
    },
    {
      chapter: "第二幕 · 金色晚宴",
      title: "一只碎杯，让所有人的目光落到你身上",
      body: "开席不久，侍者撞翻了酒杯。红酒浸透一份桌边文件，二叔却忽然说，那份文件刚才只经过你的手。年轻侍者脸色发白，主位上的人都在等你如何接住这句指控。",
      dynamic: [
        { when: [0, 1], text: "你余光里那幅被裁过的合影再次浮现：二叔正是照片里离缺口最近的人。" },
        { when: [0, 3], text: "邀请函上缺失的月桂叶，恰好也出现在被酒浸湿的文件角落。" }
      ],
      options: [
        { text: "请管家调出上菜顺序，当场复原文件真正经过谁的手", traits: { insight: 3, power: 2 }, affinity: ["negotiator", "witness", "true-daughter"], flag: "prove", aftermath: "时间线对上了。二叔改口说只是一场误会，却第一次认真看了你。" },
        { text: "先替侍者挡下追问，再私下问他究竟看见了什么", traits: { bonds: 3, daring: 1, insight: 1 }, affinity: ["beloved-heiress", "self-made", "freewalker"], flag: "protect", aftermath: "侍者在收拾碎片时，悄悄将一枚书房钥匙塞进你掌心。" },
        { text: "举杯把话题转向遗嘱，让真正紧张的人自己露出破绽", traits: { power: 3, ambition: 2, daring: 1 }, affinity: ["claimant", "rogue-lady", "shadow-regent"], flag: "toast", aftermath: "三个人同时放下酒杯。你已经知道该从谁开始查。" },
        { text: "指出文件用的是旧版家徽，问二叔为何把它带到今晚", traits: { insight: 2, ambition: 2, autonomy: 1 }, affinity: ["alliance-princess", "architect", "silent-heir"], flag: "oldcrest", aftermath: "席间静了两秒。那不是普通文件，而是一份从未执行的旧协议。" }
      ]
    },
    {
      chapter: "第三幕 · 禁闭书房",
      title: "你的名字，出现在一份二十年前的信托里",
      body: "午夜前，书房门意外虚掩。保险柜里没有珠宝，只有一份写着你出生日期的信托草案，以及一张婴儿手环。最末页被人撕走，走廊已经传来脚步声。",
      dynamic: [
        { when: [1, 1], text: "那枚藏在掌心的钥匙正好能打开抽屉，像有人算准你会走到这里。" },
        { when: [1, 2], text: "你在三只酒杯后观察到的其中一人，此刻正停在门外。" }
      ],
      options: [
        { text: "快速拍下页码与装订痕迹，再把每样东西放回原位", traits: { insight: 3, autonomy: 1, ambition: 1 }, affinity: ["witness", "architect", "silent-heir"], flag: "photo", aftermath: "相册里多了六张证据，而书房看起来从未有人来过。" },
        { text: "拿着婴儿手环直接去见老夫人，只问一句：它属于谁", traits: { bonds: 2, power: 2, daring: 1 }, affinity: ["true-daughter", "beloved-heiress", "claimant"], flag: "confront", aftermath: "老夫人没有否认。她只让你在十点前，不要相信任何姓晏的人。" },
        { text: "取走信托草案，把缺失的末页变成对方必须来谈的筹码", traits: { power: 2, ambition: 3, daring: 1 }, affinity: ["shadow-regent", "rogue-lady", "negotiator"], flag: "leverage", aftermath: "你刚合上门，手机就收到陌生消息：『你拿走的，只是他们想让你看见的。』" },
        { text: "只记下律师事务所名称，离开老宅后从外部核验", traits: { autonomy: 3, insight: 2 }, affinity: ["freewalker", "self-made", "alliance-princess"], flag: "outside", aftermath: "事务所仍在营业，而且有人在一周前刚调阅过同一份档案。" }
      ]
    },
    {
      chapter: "第四幕 · 玻璃花房",
      title: "最像盟友的人，递来一份不能签的合作",
      body: "堂兄晏临在花房拦住你。他承认家族里有人篡改过继承顺序，并提出合作：你帮他拿到遗嘱原件，他帮你恢复身份。合同只写了他的承诺，却没有你的退出方式。",
      dynamic: [
        { when: [2, 2], text: "他看了一眼你的手袋，显然知道那份草案已不在保险柜里。" },
        { when: [2, 3], text: "外部档案显示，晏临正是上周的调阅人。" }
      ],
      options: [
        { text: "可以合作，但先补上信息互换、违约代价和退出条款", traits: { power: 2, insight: 2, ambition: 2 }, affinity: ["negotiator", "alliance-princess", "architect"], flag: "terms", aftermath: "晏临笑着换了支笔。现在这才是一场双方都醒着的合作。" },
        { text: "答应得干脆，再故意给他一条只有内鬼才会追的假线索", traits: { insight: 2, daring: 2, ambition: 2 }, affinity: ["rogue-lady", "shadow-regent", "silent-heir"], flag: "decoy", aftermath: "十分钟后，那条假线索被转发给了二叔。你的答案有了。" },
        { text: "拒绝交易，转而去找那位在晏家工作了三十年的女管家", traits: { bonds: 3, insight: 1, autonomy: 1 }, affinity: ["beloved-heiress", "true-daughter", "witness"], flag: "housekeeper", aftermath: "女管家叫出你幼时的小名，并交给你一张从未寄出的明信片。" },
        { text: "表面接受，实际把今晚当作最后一次留在晏家的调查", traits: { autonomy: 3, ambition: 1, daring: 1 }, affinity: ["freewalker", "self-made", "claimant"], flag: "lastnight", aftermath: "你订好了凌晨的车票。留下还是离开，必须由真相来争取。" }
      ]
    },
    {
      chapter: "第五幕 · 订婚风波",
      title: "宴会还未结束，你的婚约已经上了财经头条",
      body: "屏幕亮起：晏氏将与裴家联姻，而照片中的订婚对象正是你。没有人征求过你的同意。裴家继承人裴昭却发来一句：『我也刚刚知道。要不要把这场戏改成我们的版本？』",
      dynamic: [
        { when: [3, 0], text: "花房里那份刚补过条款的合同提醒你：任何关系，都该有清晰边界。" },
        { when: [3, 3], text: "凌晨车票还在口袋里。这个突如其来的婚约，让离开的代价变得更高。" }
      ],
      options: [
        { text: "当众询问婚约的授权人与解约条件，让安排你的人亲自回答", traits: { autonomy: 2, power: 2, daring: 2 }, affinity: ["negotiator", "rogue-lady", "freewalker"], flag: "publicterms", aftermath: "直播镜头还没关。提出婚约的人第一次发现，你不是公告里的静态照片。" },
        { text: "私下见裴昭，把被安排的关系改成一项有期限的共同调查", traits: { insight: 2, bonds: 1, ambition: 2 }, affinity: ["alliance-princess", "architect", "shadow-regent"], flag: "pei", aftermath: "你们没有谈感情，只交换了各自掌握的一半账本。反而比承诺更可靠。" },
        { text: "借所有人关注婚约时，追问信托为何用了你的出生日期", traits: { power: 2, insight: 2, ambition: 1 }, affinity: ["true-daughter", "claimant", "silent-heir"], flag: "birth", aftermath: "老夫人终于承认：你不是被临时请来的客人，而是被故意移出族谱的人。" },
        { text: "先叫停因联姻消息被裁撤的项目组，保住被波及的人", traits: { bonds: 3, autonomy: 1, power: 1 }, affinity: ["self-made", "beloved-heiress", "witness"], flag: "staff", aftermath: "第二天，项目组把一份异常资金流向发给了你。他们也选择站在你这边。" }
      ]
    },
    {
      chapter: "第六幕 · 身份听证",
      title: "鉴定报告说你与晏家毫无关系",
      body: "家族律师提前召开听证会。一份盖章的鉴定报告被投到大屏幕上，结论否定了你与晏家的血缘。二叔要求你立刻交还信托相关文件。可你注意到报告日期，比你回国还早三天。",
      dynamic: [
        { when: [4, 2], text: "刚刚被承认的旧族谱与眼前的鉴定互相矛盾。至少有一份证据在撒谎。" },
        { when: [4, 1], text: "裴昭发来账本页码：负责鉴定的机构，上个月收到一笔匿名款项。" }
      ],
      options: [
        { text: "要求封存样本，并由三家互不关联的机构重新核验", traits: { insight: 3, power: 2 }, affinity: ["true-daughter", "witness", "negotiator"], flag: "retest", aftermath: "律师无法拒绝。有人第一次露出了真正的慌乱。" },
        { text: "不拆穿日期错误，先观察谁在结论公布后立刻联系外界", traits: { insight: 3, ambition: 2 }, affinity: ["shadow-regent", "silent-heir", "architect"], flag: "observe", aftermath: "电话只响了七秒，却把幕后付款人与席间最沉默的人连在了一起。" },
        { text: "拿出已经掌握的证据，反向质疑律师是否参与伪造", traits: { daring: 3, power: 2, ambition: 1 }, affinity: ["rogue-lady", "claimant", "self-made"], flag: "counter", aftermath: "听证会变成质询会。你从被审核的人，变成了提问的人。" },
        { text: "暂时离席，只带走那个在此刻仍愿意相信你的人", traits: { autonomy: 3, bonds: 2 }, affinity: ["freewalker", "beloved-heiress", "alliance-princess"], flag: "walkout", aftermath: "门在身后关上。走廊里，你终于听见一句不附带条件的『我相信你』。" }
      ]
    },
    {
      chapter: "第七幕 · 未寄出的信",
      title: "保护你的人，也曾亲手抹去你的身份",
      body: "女管家带来一封旧信。二十年前，正是老夫人决定把你送离晏家；但信中同时写着，当时有人计划利用幼年的你转移巨额债务。她抹去你的名字，或许是为了让你活在晏家之外。",
      dynamic: [
        { when: [3, 2], text: "明信片背后的字迹与这封信完全相同：『等风平了，再让她自己决定。』" },
        { when: [5, 3], text: "陪你离席的人没有替老夫人辩解，只说：『现在，决定权该还给你。』" }
      ],
      options: [
        { text: "接受她当年的保护，但要求把所有隐瞒写进新的家族信托", traits: { bonds: 3, power: 1, insight: 1 }, affinity: ["beloved-heiress", "alliance-princess", "true-daughter"], flag: "forgive", aftermath: "原谅没有抹掉旧事，却让一份更透明的规则第一次成为可能。" },
        { text: "不急着谈原谅，先用这封信换取董事会的完整表决记录", traits: { power: 2, ambition: 3, autonomy: 1 }, affinity: ["negotiator", "claimant", "rogue-lady"], flag: "trade", aftermath: "情感是情感，证据是证据。你没有让任何一种替代另一种。" },
        { text: "追查信里提到的旧仓库，找到当年债务转移的原始底账", traits: { insight: 3, daring: 2 }, affinity: ["witness", "self-made", "silent-heir"], flag: "warehouse", aftermath: "灰尘里的底账证明：真正欠晏家的，从来不是你。" },
        { text: "停止证明自己是谁，开始设计事情结束后自己要过的生活", traits: { autonomy: 3, ambition: 2 }, affinity: ["architect", "shadow-regent", "freewalker"], flag: "ownlife", aftermath: "那一刻，晏家第一次从你的命运，变成了你可以处理的一件事。" }
      ]
    },
    {
      chapter: "第八幕 · 证人归来",
      title: "失踪多年的姑姑，带回遗嘱的最后一页",
      body: "暴雨最密时，一位被家族宣称早已去世的女人走进老宅。她是你的姑姑，也是遗嘱见证人。缺失的末页写明：继承权不按血缘自动生效，而要交给『最能终止旧规则的人』。",
      dynamic: [
        { when: [6, 2], text: "你从旧仓库找到的底账，恰好能证明她为何必须假死离开。" },
        { when: [6, 3], text: "你已想清楚晏家之外的生活，因此这份遗嘱不再像一副非戴不可的王冠。" }
      ],
      options: [
        { text: "先与姑姑单独谈，确认她这些年沉默的代价与真正诉求", traits: { bonds: 3, insight: 2 }, affinity: ["true-daughter", "beloved-heiress", "alliance-princess"], flag: "aunt", aftermath: "她不要股份，只要当年替她承担罪名的人得到清白。" },
        { text: "只公开半页遗嘱，引出那个最急于毁掉原件的人", traits: { insight: 3, daring: 2, ambition: 1 }, affinity: ["shadow-regent", "architect", "rogue-lady"], flag: "bait", aftermath: "火警在十分钟后响起。你等到了那个主动走进档案室的人。" },
        { text: "先把姑姑送到安全地点，再决定这份遗嘱是否值得公开", traits: { autonomy: 2, bonds: 2, daring: 1 }, affinity: ["freewalker", "self-made", "witness"], flag: "safe", aftermath: "你保住了人，而不是只保住一份能替你加冕的纸。" },
        { text: "立刻召集董事会，用原件、底账与时间线完成证据闭环", traits: { power: 3, insight: 2, ambition: 1 }, affinity: ["claimant", "negotiator", "silent-heir"], flag: "board", aftermath: "没有人能再用一句『家事』带过。今晚必须有人交出答案。" }
      ]
    },
    {
      chapter: "第九幕 · 王冠的价格",
      title: "你可以继承一切，也可以改写一切",
      body: "证据足以推翻现有继承安排。律师告诉你，只要签字，晏氏的表决权、老宅与那场婚约带来的联盟都会归到你名下。但签字也意味着接受这套曾经伤害过许多人的规则。",
      dynamic: [
        { when: [7, 0], text: "姑姑只把钢笔推向你：『别替任何人选，包括我。』" },
        { when: [7, 1], text: "被引入档案室的人已经承认伪造证据。此刻你拥有的不只是继承权，还有重新定规则的窗口。" }
      ],
      options: [
        { text: "接下控制权，但把重大决策、退出机制与监督写进新章程", traits: { power: 3, bonds: 1, ambition: 2 }, affinity: ["claimant", "true-daughter", "negotiator"], flag: "charter", aftermath: "你没有拒绝王冠，而是先拆掉了王冠里的暗刺。" },
        { text: "用继承权交换独立资产与基金，把人生从家族业务中剥离", traits: { autonomy: 3, ambition: 1, bonds: 1 }, affinity: ["freewalker", "self-made", "alliance-princess"], flag: "exchange", aftermath: "你带走的不是姓氏，而是一块谁也不能再替你决定用途的未来。" },
        { text: "支持更合适的人站到台前，自己保留否决旧规则的权利", traits: { insight: 2, power: 2, ambition: 2 }, affinity: ["shadow-regent", "silent-heir", "architect"], flag: "proxy", aftermath: "掌声给了别人，真正改变投票方向的钥匙留在你手中。" },
        { text: "公开全部真相，即使它会让晏家的体面与股价同时下跌", traits: { daring: 3, autonomy: 2, bonds: 1 }, affinity: ["rogue-lady", "witness", "beloved-heiress"], flag: "expose", aftermath: "屏幕上的数字开始下跌，门外却第一次有人叫出那些被牺牲者的名字。" }
      ]
    },
    {
      chapter: "终幕 · 十点钟声",
      title: "门外全是镜头，你要以谁的身份走出去？",
      body: "十点整，钟声穿过老宅。记者已经堵在门外，董事会等待你的决定，裴昭也把那份从未由你签署的婚约放进碎纸机。故事到了最后一页，但落款仍然空着。",
      dynamic: [
        { when: [8, 0], text: "新章程摆在桌上，第一页不是你的名字，而是所有人都必须遵守的边界。" },
        { when: [8, 1], text: "基金与独立资产已经完成交割。你随时可以从另一扇门离开。" },
        { when: [8, 2], text: "名义继承人正在门外接受闪光灯，而你手机上的最后一票仍未投下。" },
        { when: [8, 3], text: "完整档案已发送给媒体。你不再需要晏家替你讲述身世。" }
      ],
      options: [
        { text: "带着遗嘱原件独自走向镜头，亲口宣布新的继承安排", traits: { power: 3, daring: 2, ambition: 1 }, affinity: ["true-daughter", "claimant", "self-made"], flag: "frontdoor", aftermath: "大门开启。你不是来领取身份，而是来宣布它将如何被使用。" },
        { text: "与可信的盟友并肩出现，公布一份彼此都能退出的新契约", traits: { bonds: 2, power: 1, insight: 1, autonomy: 1 }, affinity: ["alliance-princess", "negotiator", "beloved-heiress"], flag: "allies", aftermath: "没有谁站在谁身后。镜头记录下的，是一张重新排列过的关系图。" },
        { text: "不参加发布会，在书房完成最后三张关键选票的调度", traits: { insight: 2, power: 2, ambition: 3 }, affinity: ["shadow-regent", "architect", "silent-heir"], flag: "votes", aftermath: "门外还在猜测你的态度时，新的决议已经通过。" },
        { text: "公开那封旧信，然后坐上仍未熄火的车，去过自己的生活", traits: { autonomy: 3, daring: 2, insight: 1 }, affinity: ["rogue-lady", "freewalker", "witness"], flag: "leave", aftermath: "车驶出铁门。你留下真相，却没有把余生也留在这里。" }
      ]
    }
  ],

  results: [
    {
      id: "silent-heir", code: "FAMILY FILE 01", name: "隐名执印人",
      tagline: "你不站在继承名单最上方，却握着让名单生效的那枚印。",
      profile: { power: .75, autonomy: .55, insight: 1, bonds: .25, ambition: .8, daring: .35 },
      intro: "晏家曾把你的名字从族谱中抹去，却没能拿走一项更关键的权利：对核心信托的最终确认权。你习惯先看清文件背后的手，再决定印章落在哪里。那些把沉默误认成退让的人，最后才发现你一直在场。",
      archive: "你不追逐餐桌主位，也不急着证明血缘。你让旧协议、异常日期与每一次失言互相作证，最终拼出完整真相。晏氏保留了体面，但从此任何重大继承安排，都必须经过你的确认。",
      advantage: "识别规则的漏洞，保存关键证据，并在信息最完整时才表态。你真正擅长的不是抢先出牌，而是让无效的牌再也上不了桌。",
      turning: "董事会宣布原方案通过的那一刻，你翻开信托末页，指出缺少唯一有效印鉴。喧闹突然停下。你没有提高声音，只把印章收回盒中：『现在，我们可以重新谈。』",
      quote: "他们以为我没有名字，却忘了每一份结局，都需要我的落款。",
      shareLine: "真正的底牌，从来不需要提前亮相。"
    },
    {
      id: "true-daughter", code: "FAMILY FILE 02", name: "归席真千金",
      tagline: "你回来，不是为了补上一把椅子，而是让旧座次失效。",
      profile: { power: .7, autonomy: .55, insight: .65, bonds: .75, ambition: .55, daring: .45 },
      intro: "你确实是被送离晏家的孩子，但『真千金』只是故事的开端，不是奖杯。你愿意面对血缘中的温度与亏欠，也坚持让隐瞒付出代价。最终，你以自己的方式回到家族，不再接受任何人替你解释过去。",
      archive: "你完成独立核验，找回被删去的族谱页，也听完了老夫人当年的选择。你没有把团圆写成轻易的原谅，而是促成一份公开、可监督的新信托。你得到的不只是姓氏，还有决定这个姓氏意味着什么的权利。",
      advantage: "同时容纳感情与证据。你能辨认保护里夹带的控制，也能在追责之后留下真正值得修复的关系。",
      turning: "发布会上，有记者问你是否终于『被晏家承认』。你将新族谱合上，平静回答：『不是他们承认我，是我决定承认怎样的晏家。』",
      quote: "我不是被找回来的那个人，我是自己走回来的。",
      shareLine: "迟到的身份，不代表迟到的人生。"
    },
    {
      id: "shadow-regent", code: "FAMILY FILE 03", name: "幕后执棋者",
      tagline: "所有人争着成为新闻，而你早已改了明天的议程。",
      profile: { power: .85, autonomy: .55, insight: .95, bonds: .2, ambition: 1, daring: .45 },
      intro: "你从不迷恋表面的继承人位置。比起被镜头围住，你更擅长找到真正决定局势的投票权、协议与人心。你让更合适的人站在台前，自己则保留改变方向的能力。",
      archive: "在晏家的最终重组中，你没有担任董事长，却建立了一套谁都绕不开的决策机制。外界只知道继承人换了，极少有人明白，三场关键投票与两次人事变动都来自你的安排。",
      advantage: "把零散信息变成结构，把短期联盟变成长线制衡。你能看见权力真正流动的路径，而不是被座位和头衔迷惑。",
      turning: "门外的发布会正在庆祝新继承人上任。书房里，你投出最后一票，否决了旧派系试图保留的免责条款。手机只亮了一次：『已按你的方案通过。』",
      quote: "我不需要坐上主位，主位也会按我的规则运转。",
      shareLine: "最安静的位置，往往拥有最大的回声。"
    },
    {
      id: "rogue-lady", code: "FAMILY FILE 04", name: "破局恶女",
      tagline: "所谓不体面，不过是你拒绝继续替别人维持体面。",
      profile: { power: .75, autonomy: .9, insight: .55, bonds: .2, ambition: .65, daring: 1 },
      intro: "晏家把不肯配合的人称为恶女，而你欣然收下这个称呼。你拆穿伪造报告，拒绝被婚约包装，也不替任何人的错误保持沉默。你的锋利不是为了伤人，而是为了让旧剧本无法继续。",
      archive: "你公开了被藏起的信件与资金记录，迫使家族第一次为那些『不得不牺牲』的人负责。你没有接管一个原样的晏氏，而是亲手打碎不能被修补的部分，再从废墟上建立自己的规则。",
      advantage: "在众人被礼貌困住时说出关键一句。你对虚假的共识不感兴趣，也敢承担打破平衡后的真实代价。",
      turning: "二叔警告你，公开档案会毁掉晏家的名声。你按下发送键：『靠沉默保住的名声，不是名声，是人质。』",
      quote: "他们说我毁了规矩；我只是让规矩第一次不能伤人。",
      shareLine: "不按剧本的人，才有机会改掉结局。"
    },
    {
      id: "alliance-princess", code: "FAMILY FILE 05", name: "契约千金",
      tagline: "你接受联手，但从不把自己写进附属条款。",
      profile: { power: .55, autonomy: .8, insight: .7, bonds: .7, ambition: .6, daring: .35 },
      intro: "你没有天真地拒绝所有合作，也没有把婚约当作命运。你看见关系背后的交换，主动把一场被安排的联姻改写成期限清楚、权利对等的联盟。选择并肩，是因为值得，而不是因为无路可退。",
      archive: "你与裴昭共同揭开两家的账本秘密，又在风波结束后亲手废除原婚约。新的合作协议保留退出权，也保留各自的生活。财经媒体称它为世纪联盟，只有你们知道，最重要的一条是『任何人均可自由离场』。",
      advantage: "建立边界清楚的合作，让感情、利益与责任各归其位。你能借势，却不会把方向盘交出去。",
      turning: "两家长辈等着你们宣布婚期。你与裴昭同时翻到合同最后一页，公布的却是联合调查结果。他低声问：『合作愉快？』你回答：『本阶段而已。』",
      quote: "我可以与任何人并肩，但不会站在任何人的身后。",
      shareLine: "最好的联盟，不以失去自己为代价。"
    },
    {
      id: "beloved-heiress", code: "FAMILY FILE 06", name: "鎏金团宠",
      tagline: "你拥有的不只是偏爱，而是让偏爱变得有原则的能力。",
      profile: { power: .4, autonomy: .45, insight: .5, bonds: 1, ambition: .3, daring: .45 },
      intro: "你是晏家最想补偿的人，也是最不愿把别人变成补偿代价的人。你保护侍者、听完姑姑的经历，也给迟到的亲情留下了修复空间。众人愿意站到你身边，不只因为身份，更因为你从未把善意当作软弱。",
      archive: "新信托给了你丰厚资源，你却把第一笔资金用于修复被旧决策波及的人。老宅依然为你保留最好的房间，但你拥有随时离开的钥匙。家人的期待不再是枷锁，而是需要尊重边界的关系。",
      advantage: "辨认真正可靠的人，并让关系成为彼此的支撑而非筹码。你能让权力记得具体的人，也能让亲近不越过边界。",
      turning: "董事会建议裁掉知情的旧员工来『彻底翻篇』。你放下茶杯：『晏家的新一页，不会写在别人的失业通知上。』全桌无人再附和。",
      quote: "我被很多人爱着，所以更知道，爱不该要求谁保持沉默。",
      shareLine: "真正的偏爱，是让你始终拥有选择。"
    },
    {
      id: "self-made", code: "FAMILY FILE 07", name: "逆风新贵",
      tagline: "你没有等身份抬高自己，而是让自己配得上任何身份。",
      profile: { power: .55, autonomy: .9, insight: .6, bonds: .55, ambition: .75, daring: .75 },
      intro: "你回到晏家时没有完整证据，也没有天然盟友。你靠一次次具体行动积累可信的人、可用的线索和独立的筹码。最后，继承权只是你众多选择中的一个，而不是唯一出路。",
      archive: "你把换得的独立资产重组为自己的事业，并邀请当初被晏氏放弃的项目组加入。三年后，你以合作方而非家族附属的身份回到同一张谈判桌。那时没人再问你是谁家的千金。",
      advantage: "在资源不足时创造下一步。你愿意承担风险，也懂得把一次帮助变成长期互信，把一条线索变成可验证的事实。",
      turning: "晏氏提出用头衔换你回归。你把自己的公司报表推过去：『合作可以，收编不行。今天我们按市场价谈。』",
      quote: "身份是他们迟到的答案，实力是我早就写好的名字。",
      shareLine: "没有现成王冠，就把风向做成自己的加冕礼。"
    },
    {
      id: "witness", code: "FAMILY FILE 08", name: "秘闻见证人",
      tagline: "你记住那些被删掉的细节，也让被删掉的人重新出现。",
      profile: { power: .35, autonomy: .65, insight: 1, bonds: .65, ambition: .25, daring: .65 },
      intro: "别人忙着争夺遗产时，你一直在确认是谁为这些秘密付过代价。照片裁痕、旧底账、异常日期与未寄出的信，在你手里不再是八卦，而是一条能够还原真相的证据链。",
      archive: "你最终没有独占遗嘱，而是建立家族档案基金，将被掩盖的事件交给独立团队核验。晏家失去了一部分传奇，却找回了许多真实姓名。你仍是故事里最神秘的人，因为你从不拿别人的伤口装饰自己。",
      advantage: "注意叙事之外的缺口，保护证人与证据，并把复杂往事讲得准确而克制。你知道真相的价值在于恢复选择，而不是制造围观。",
      turning: "媒体只想要一个最刺激的标题。你删掉猎奇措辞，放上完整时间线：『如果真相只能靠羞辱当事人传播，那仍然是另一种隐瞒。』",
      quote: "我不是秘密的收藏者，我是让秘密终于有出口的人。",
      shareLine: "被忽略的细节，往往保存着命运的原件。"
    },
    {
      id: "negotiator", code: "FAMILY FILE 09", name: "金宴谈判官",
      tagline: "你从不赌别人善良，只把善意写成双方都遵守的条款。",
      profile: { power: .8, autonomy: .65, insight: .8, bonds: .55, ambition: .75, daring: .4 },
      intro: "你能在最混乱的宴席上听出每个人真正想要什么。你不回避利益，也不让利益吞没关系。无论合作、婚约还是继承，你总能找到一个让各方付出对应代价的位置。",
      archive: "最终重组谈判持续到凌晨，你用继承权换来监督席位、受害者补偿与自己的退出通道。没有哪一方拿到全部，却没有人能轻易反悔。晏家第一次拥有一份不依赖某位强者品格的稳定规则。",
      advantage: "拆解诉求、设定边界、预留退路。你在冲突中保持清醒，知道一份好协议不是让所有人满意，而是让风险和权利对称。",
      turning: "对方说『都是一家人，不必写得这么清楚』。你把钢笔推回去：『正因为是一家人，才更该让每个人都睡得着。』",
      quote: "感情可以留白，权利必须落款。",
      shareLine: "能被兑现的承诺，才配出现在我的故事里。"
    },
    {
      id: "freewalker", code: "FAMILY FILE 10", name: "离席自由人",
      tagline: "你有资格继承整座庄园，却选择继承自己的人生。",
      profile: { power: .2, autonomy: 1, insight: .55, bonds: .35, ambition: .45, daring: .8 },
      intro: "你不是输掉了豪门游戏，而是在拥有选择之后离席。你查清身世、归还不属于任何人的真相，也带走足够建立新生活的资源。晏家不再是你的牢笼，也不再是你的全部。",
      archive: "你保留一小部分独立信托，将其余表决权交给受监督的公益基金。老宅偶尔寄来邀请，你想去便去，不想去就让信停在门口。传闻你在海边开了一间只接受预约的工作室，门上没有家徽。",
      advantage: "在巨大诱惑前辨认自己的真实需要。你敢放弃别人眼里的胜利，也善于为离开准备现实可行的路径。",
      turning: "记者追问你为何放弃主位。你回头看了一眼亮着灯的老宅：『因为门终于开了，而我没有义务继续坐在里面。』",
      quote: "我带走的不是遗产，是再也不必向谁申请的人生。",
      shareLine: "能随时离开，才是真正拥有选择。"
    },
    {
      id: "claimant", code: "FAMILY FILE 11", name: "王冠竞逐者",
      tagline: "你不假装对权力无欲，只要求它配得上你的野心。",
      profile: { power: 1, autonomy: .55, insight: .6, bonds: .35, ambition: 1, daring: .75 },
      intro: "你从不把想赢说成无所谓。得知继承权被篡改后，你选择进入牌局、正面取回位置，并为这份权力建立新的正当性。你要的不是被偏爱，而是一场经得起证据与规则检验的胜利。",
      archive: "你成为晏氏新任掌舵人，接受公开监督，也承担旧账清理。反对者仍然存在，但再没人能说你的权力来自一场被安排的婚约或秘密血缘。你的王冠有重量，而你没有假装它只是一件饰品。",
      advantage: "在压力中做决定，组织资源，并对结果负责。你能把野心变成明确目标，也能为获得权力支付透明的成本。",
      turning: "表决前，有人建议你靠遗嘱直接接管。你拒绝特权条款，要求重新投票：『我要的不是一扇后门，是他们以后都关不上的正门。』",
      quote: "我承认我想赢，所以我的胜利不会藏在任何人的施舍里。",
      shareLine: "野心不必道歉，但必须经得起光。"
    },
    {
      id: "architect", code: "FAMILY FILE 12", name: "终局筑序者",
      tagline: "别人解决今晚的危机，你设计下一次危机无法发生的世界。",
      profile: { power: .75, autonomy: .75, insight: .9, bonds: .35, ambition: .95, daring: .35 },
      intro: "从邀请函的火漆开始，你就在理解这座家族机器如何运作。你没有满足于抓出一个反派，而是追问什么样的结构让秘密、牺牲与篡改反复发生。最终，你留下的是一套比任何继承人都更长久的新秩序。",
      archive: "你拆分交叉持股，设立独立审计，把家族身份与公司权利彻底分开。晏家仍然富有，却再没有谁能仅凭姓氏决定另一个人的生活。多年后，人们忘了那夜谁坐主位，却仍在使用你写下的章程。",
      advantage: "从单点冲突看见系统问题，并把线索、资源与人安排进可持续的结构。你不只会赢一局，更会重写游戏规则。",
      turning: "众人等你宣布谁是新继承人，你却投出一份组织重构方案。第一页写着：『从今日起，继承身份不再自动附带他人的命运。』",
      quote: "我不争最后一把椅子，我决定明天的房间该如何建造。",
      shareLine: "最高级的布局，是让旧困局失去重演的条件。"
    }
  ]
};
