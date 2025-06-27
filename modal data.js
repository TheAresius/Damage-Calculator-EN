var enemyData = {
    "0": {
        name: "Normal monster",
        description: "Those are the most common enemies found in the game.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: ""
        },
        extra: "-",
        path: 'images/monsters/general monster.png',
        IsBoss: true
    },

    "1": {
        name: "Dark Gorgos (1F - ToD)",
        description: stringIsBoss + "Can be found on the first stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>900k (37 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png',
        IsBoss: true
    },

    "2": {
        name: "Hellish Gardosen (2F - ToD)",
        description: stringIsBoss + "Can be found on the second stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.88M (72 bars)</span>" + stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/gadosen 1.png',
        IsBoss: true
    },

    "3": {
        name: "Wicked Kamiki (3F - ToD)",
        description: stringIsBoss + "Can be found on the third stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.80M (72 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/kamiki 1.png',
        IsBoss: true
    },

    "4": {
        name: "Vengeful Gaikoz (4F - ToD)",
        description: stringIsBoss + "Can be found on the fourth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.89M (76 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png',
        IsBoss: true
    },

    "5": {
        name: "Kaze'aze (5F - ToD)",
        description: stringIsBoss + "Can be found on the fifth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M (241 bars)</span>."
        },
        extra: "- From time to time Kaze'aze will teleport herself to the center of the map and start concentrating energy. A set of marks will appear in the floor showing the sequence of her attack.<br>"+
               "- If you use skills next to her during this action, you can delay her attack and end up killing your party members.",
        path: 'images/monsters/cazeaje.png',
        IsBoss: true
    },

    "6": {
        name: "Dark Gorgos (6F - ToD)",
        description: stringIsNotBoss + "Can be found on the sixth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.26M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 75% of its HP to defeat it.",
        path: 'images/monsters/gorgos 2.png',
        IsBoss: true
    },

    "17": {
        name: "Giant Dark Gorgos (6F - ToD)",
        description: stringIsBoss + "Can be found on the sixth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.46M (139 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png',
        IsBoss: true
    },

    "7": {
        name: "Vengeful Gaikoz (7F - ToD)",
        description: "Only the two summoned Gaikoz are considered bosses. Can be found on the seventh stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.89M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 50% of its HP to defeat it.",
        path: 'images/monsters/gaikoz 2.png',
        IsBoss: true
    },

    "16": {
        name: "Vengeful Gaikoz (7F - ToD)",
        description: "Only the two summoned Gaikoz are considered bosses. Can be found on the seventh stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>4.15M (167 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png',
        IsBoss: true
    },

    "15": {
        name: "Wicked Kamiki (8F - ToD)",
        description: "Only the two summoned Kamiki are considered bosses. Can be found on the eighth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.52M</span>" + stringScaleHP
        },
        extra: "- Kamiki will use a freezing mist every 20 seconds on a selected region in the map. It will quickly damage your HP.",
        path: 'images/monsters/kamiki 2.png',
        IsBoss: true
    },

    "8": {
        name: "Wicked Kamiki (8F - ToD)",
        description: "Only the two summoned Kamiki are considered bosses. Can be found on the eighth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.52M (141 bars)</span>."
        },
        extra: "- Kamiki will use a freezing mist every 20 seconds on a selected region in the map. It will quickly damage your HP.",
        path: 'images/monsters/kamiki 1.png',
        IsBoss: true
    },

    "34": {
        name: "Hellish Gardosen (9F - ToD)",
        description: "Only the two summoned Gardosen are considered bosses. Can be found on the ninth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.97M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 60% of its HP to defeat it.",
        path: 'images/monsters/gadosen 2.png',
        IsBoss: true
    },

    "9": {
        name: "Hellish Gardosen (9F - ToD)",
        description: "Only the two summoned Gardosen are considered bosses. Can be found on the ninth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>8.44M (353 bars)</span>."
        },
        extra: "- Gardosen will use his 'soul absorption' attack every 40 seconds. If you stay in the red area, it will kill you no matter what.",
        path: 'images/monsters/gadosen 1.png',
        IsBoss: true
    },

    "10": {
        name: "Kaze'aze (10F - ToD)",
        description: stringIsBoss + "Can be found on the tenth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>55.18M (2401 bars)</span>."
        },
        extra: "- From time to time Kaze'aze will teleport herself to the center of the map and start concentrating energy. A set of marks will appear in the floor showing the sequence of her attack.<br>"+
               "- If you use skills next to her during this action, you can delay her attack and end up killing your party members.",
        path: 'images/monsters/cazeaje.png',
        IsBoss: true
    },

    "11": {
        name: "Berkas (body)",
        description: stringIsBoss + "Can be found in the Berkas's Lair raid dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>7.65M (307 bars)</span>" + stringScaleHP
        },
        extra: "- Due to its size, Berkas has many hitbox regions and the damage dealt to it is spread along its body and legs. <br>"+
               "- The damage dealt to its legs is reduced by 60%"+
               "- Your damage is reduced by 66.66% without the suppressor",
        path: 'images/monsters/berkas.png',
        IsBoss: true
    },

    "12": {
        name: "Berkas (legs)",
        description: stringIsBoss + "Can be found in the Berkas's Lair raid dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>40.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>40.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>53.12%</span>",
            health: stringEstHP + "<span class='yellow'>7.65M (307 bars)</span>" + stringScaleHP
        },
        extra: "- Due to its size, Berkas has many hitbox regions and the damage dealt to it is spread along its body and legs. <br>"+
               "- The damage dealt to its legs is reduced by 60%"+
               "- Your damage is reduced by 66.66% without the suppressor",
        path: 'images/monsters/berkas.png',
        IsBoss: true
    },

    "13": {
        name: "Harkion (body)",
        description: stringIsBoss + "Can be found in the Judgment Land hero dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>30.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>30.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>690.00M</span>."
        },
        extra: "- Harkion has two sets of hitbox, its body and its legs.<br>"+
               "- The damage dealt to its legs is reduced by 80%.",
        path: 'images/monsters/harkyon.png',
        IsBoss: true
    },

    "14": {
        name: "Harkion (legs)",
        description: stringIsBoss + "Can be found in the Judgment Land hero dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>86.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>86.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>88.00%</span>",
            health: stringEstHP + "<span class='yellow'>690.00M</span>."
        },
        extra: "- Harkion has two sets of hitbox, its body and its legs.<br>"+
               "- The damage dealt to its legs is reduced by 80%.",
        path: 'images/monsters/harkyon.png',
        IsBoss: true
    },

    "18": {
        name: "Voidal Devourer",
        description: stringIsBoss + "Can be found in the Void (Invasion) raid dungeon.<br>"+
                     "There is a 20% taint debuff in this dungeon. The debuff has been applied automatically in the calculator.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: " - HP (estimated):<br>"+
                        "<span class='tab'>- 1st stage <span class='yellow'>16.72M (669 bars)</span></span>.<br>"+
                        "<span class='tab'>- 2nd stage <span class='yellow'>25.08M (1003 bars)</span></span>.<br>"+
                        "<span class='tab'>- 3rd stage <span class='yellow'>66.85M (2674 bars)</span></span>.<br>"+
                        "<span class='tab'>- 4th stage <span class='yellow'>93.58M (3743 bars)</span></span>."
        },
        extra: "- On stages 3 and 4 the Voidal Devourer will use its 'breath' 70 seconds after the beginning of the stage.<br>"+
               "- In order to interrupt it, it is necessary to deal 2M damage on stage 3 and 3.2M damage on stage 4.",
        path: 'images/monsters/devourer.png',
        IsBoss: true
    },

    "19": {
        name: "Voidal Sentry/Crusher",
        description: stringIsNotBoss + "Can be found in the Void (Taint) raid dungeon.<br>"+
                     "There is a 20% taint debuff in this dungeon. The debuff has been applied automatically in the calculator.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                    "<span class='tab'>- Voidal Sentry: <span class='yellow'>124k</span></span>.<br>"+
                    "<span class='tab'>- Voidal Crusher: <span class='yellow'>672k</span></span>."
        },
        extra: "-",
        path: 'images/monsters/crusher.png',
        IsBoss: true
    },

    "20": {
        name: "Voidal Enforcer",
        description: stringIsNotBoss + "Can be found in the Void (Taint) raid dungeon after the first stage.<br>"+
                                       "There is a 20% taint debuff in this dungeon. The debuff has been applied automatically in the calculator.<br>"+
                                       "The buff acquired from the Voidal Enforcer, present on phases 2, 3, and 4, is <span class='yellow'>200%</span>. Add this value to your buffs if desired.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- 2nd stage <span class='yellow'>2.51M</span></span>.<br>"+
                        "<span class='tab'>- 3rd stage <span class='yellow'>4.36M</span></span>.<br>"+
                        "<span class='tab'>- 4th stage <span class='yellow'>6.00M</span></span>."
        },
        extra: "- The enemy will use 'casting' 60 seconds after being defeated for the first time, on stages 3 and 4.<br>"+
               "- 5 seconds after being reborn the enemy will use 'casting'.<br>"+
               "- It is necessary do deal 1M damage in order to interrupt it.",
        path: 'images/monsters/enforcer.png',
        IsBoss: true
    },

    "21": {
        name: "Voidal Gazer",
        description: stringIsBoss + "Can be found in the Void (Taint) raid dungeon after the first stage. <br>"+
                                       "There is a 20% taint debuff in this dungeon. The debuff has been applied automatically in the calculator.<br>"+
                                       "The buff acquired from the Voidal Enforcer, present on phases 2, 3, and 4, is <span class='yellow'>200%</span>. Add this value to your buffs if desired.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- 2nd stage <span class='yellow'>25.08M (1003 bars)</span></span>.<br>"+
                        "<span class='tab'>- 3rd stage <span class='yellow'>50.12M (2005 bars)</span></span>.<br>"+
                        "<span class='tab'>- 4th stage <span class='yellow'>70.18M (2807 bars)</span></span>."
        },
        extra: "- Voidal Gazer will use 'casting' every 60 seconds.<br>"+
               "- In order to interrupt it, it is necessary to deal 2M damage on stage 3 and 3M damage on stage 4.",
        path: 'images/monsters/gazer.png',
        IsBoss: true
    },
    "22": {
        name: "Rofnus (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>23.08%</span>",
            defense2: stringDef2 + "<span class='yellow'>23.08%</span>",
            defense3: stringDef3 + "<span class='yellow'>39.90%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>."
        },
        extra: "Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png',
        IsBoss: true
    },
    "23": {
        name: "Rofnus (HP regeneration) (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>"
        },
        extra: "Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png',
        IsBoss: true
    },

    "24": {
        name: "Skeram (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the second stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>10.00M</span>"
        },
        extra: "-",
        path: 'images/monsters/skeram.png',
        IsBoss: true
    },

    "25": {
        name: "Chaotic Witch (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png',
        IsBoss: true
    },

    "26": {
        name: "Chaotic Witch (purple protection) (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png',
        IsBoss: true
    },

    "27": {
        name: "Chaotic Witch (red protection) (Infinite Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>58.34%</span>",
            defense2: stringDef2 + "<span class='yellow'>58.34%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png',
        IsBoss: true
    },

    "28": {
        name: "Duell (Infinite Cloister 3)",
        description: stringIsBoss + "Can be found on the last stage of Infinite Cloister on difficulty 3.",
       status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (644 bars)</span>"
        },
        extra: "- Duell will use 'casting' after ~45 seconds up to three consecutive times. It is necessary to deal, respectively, 1.7M, 1.5M and 1.4M damage to interrupt it.<br>"+
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack pattern.<br>"+
               "- When interrupted three consecutive times, Duell will be weakened and receive 50% more damage from all sources.",
        path: 'images/monsters/duel.png',
        IsBoss: true
    },

    "29": {
        name: "Duell (weakened) (Infinite Cloister 3)",
        description: stringIsBoss + "Can be found on the last stage of Infinite Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (640 bars)</span>"
        },
        extra: "- Duell will use 'casting' after ~45 seconds up to three consecutive times. It is necessary to deal, respectively, 1.7M, 1.5M and 1.4M damage to interrupt it.<br>"+
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack pattern.<br>"+
               "- When interrupted three consecutive times, Duell will be weakened and receive 50% more damage from all sources.",
        path: 'images/monsters/duel.png',
        IsBoss: true
    },

    "30": {
        name: "Periett",
        description: stringIsNotBoss + "Can be found on floor 15 from Wizard's Labyrinth.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>5.64M</span>"
        },
        extra: "-",
        path: 'images/monsters/periett.png',
        IsBoss: true
    },
    "31": {
        name: "Thanatos",
        description: stringIsNotBoss + "Can be found on floor 24 from Wizard's Labyrinth.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>15.38M</span>"
        },
        extra: "-",
        path: 'images/monsters/thanatos.png',
        IsBoss: true
    },

    "32": {
        name: "Iblis",
        description: stringIsNotBoss + "Can be found on floor 24 from Wizard's Labyrinth.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.47M</span>"
        },
        extra: "- Iblis can randomly block your attack and reduce your damage by 99.9%.",
        path: 'images/monsters/evilis.png',
        IsBoss: true
    },
    "33": {
        name: "Kassias Grandiel",
        description: stringIsBoss + "Can be found on floor 30 from Wizard's Labyrinth.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>17.42M (697 bars)</span>"
        },
        extra: "- When Grandiel gets below 80% HP he can become invulnerable and summon Drawl and Veron, which will attack simultaneously. It is necessary to defeat them in order to make Grandiel vulnerable to damage again.<br>"+
               "- After defeating Drawl and Veron, and when Grandiel is below 50% HP, he can summon his 5 clones, which will attack simultaneously.",
        path: 'images/monsters/grandiel.png',
        IsBoss: true
    },

    "35": {
        name: "Temple Guardian",
        description: stringIsNotBoss + "Can be found in Temple of Time.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>2.81M</span>" + stringScaleHP
        },
        extra: "- When below 95% HP, the enemy can become invulnerable and if it does so, it will summon two golens on the map. You will have 12 seconds to defeat them.<br>"+
               "- If they are defeated, the Temple Guardian will get weakened and will receive 566% more damage from all sources during 10 seconds.",
        path: 'images/monsters/guardiao.png',
        IsBoss: true
    },
    
    "36": {
        name: "Temple Guardian (weakened)",
        description: stringIsNotBoss + "Can be found in Temple of Time.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>2.81M</span>" + stringScaleHP
        },
        extra: "- When below 95% HP, the enemy can become invulnerable and if it does so, it will summon two golens on the map. You will have 12 seconds to defeat them.<br>"+
               "- If they are defeated, the Temple Guardian will get weakened and will receive 566% more damage from all sources during 10 seconds.",
        path: 'images/monsters/guardiao.png',
        IsBoss: true
    },

    "37": {
        name: "Corrupted Saint Gaian",
        description: stringIsBoss + "Can be found in Temple of Time.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>20.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>20.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>37.50%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M (52 bars)</span>" + stringScaleHP
        },
        extra: "- When below 66% HP, Gaian can summon his golens in the map. You will have 12 seconds to defeat them.<br>"+
               "- If they are defeated, Gaian will get frozen in time and will receive 150% more damage during 10 seconds.",
        path: 'images/monsters/gaian.png',
        IsBoss: true
    },

    "38": {
        name: "Corrupted Saint Gaian (weakened)",
        description: stringIsBoss + "Can be found in Temple of Time.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M (52 bars)</span>" + stringScaleHP
        },
        extra: "- When below 66% HP, Gaian can summon his golens in the map. You will have 12 seconds to defeat them.<br>"+
               "- If they are defeated, Gaian will get frozen in time and will receive 150% more damage during 10 seconds.",
        path: 'images/monsters/gaian.png',
        IsBoss: true
    },

    "44": {
        name: "Heart of the Absolute - bottom of the map",
        description: stringIsNotBoss + "Can be found in the bottom part of the map on the first stage of Void (Nightmare).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>2.10M </span>"
        },
        extra: "- The Heart of the Absolute will summon multiple monsters while it remains alive. You must defeat 5 'Void Invaders' for the enemy '???' to start charging energy and firing at the Heart of the Absolute.<br>"+
               "- While being attacked, the Heart of the Absolute will lose its defense and it will receive much more damage from skills.",
        path: 'images/monsters/heart 1.png',
        IsBoss: true
    },

    "45": {
        name: "Heart of the Absolute - bottom of the map (weakened)",
        description: stringIsNotBoss + "Can be found in the bottom part of the map on the first stage of Void (Nightmare).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>70.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>70.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>28.26%</span>",
            health: stringEstHP + "<span class='yellow'>2.10M </span>"
        },
        extra: "- The Heart of the Absolute will summon multiple monsters while it remains alive. You must defeat 5 'Void Invaders' for the enemy '???' to start charging energy and firing at the Heart of the Absolute.<br>"+
               "- While being attacked, the Heart of the Absolute will lose its defense and it will receive much more damage from skills.",
        path: 'images/monsters/heart 1.png',
        IsBoss: true
    },

    "46": {
        name: "Heart of the Absolute - top of the map",
        description: stringIsNotBoss + "Can be found in the upper part of the map on the first stage of Void (Nightmare).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>7.30M </span>"
        },
        extra: "- The Heart of the Absolute will summon multiple monsters while it remains alive. You must defeat 5 'Void Invaders' for the enemy '???' to start charging energy and firing at the Heart of the Absolute.<br>"+
               "- While being attacked, the Heart of the Absolute will lose its defense and it will receive much more damage from skills.",
        path: 'images/monsters/heart 2.png',
        IsBoss: true
    },

    "47": {
        name: "Heart of the Absolute - top of the map (weakened)",
        description: stringIsNotBoss + "Can be found in the upper part of the map on the first stage of Void (Nightmare).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>70.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>70.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>28.26%</span>",
            health: stringEstHP + "<span class='yellow'>7.30M </span>"
        },
        extra: "- The Heart of the Absolute will summon multiple monsters while it remains alive. You must defeat 5 'Void Invaders' for the enemy '???' to start charging energy and firing at the Heart of the Absolute.<br>"+
               "- While being attacked, the Heart of the Absolute will lose its defense and it will receive much more damage from skills.",
        path: 'images/monsters/heart 2.png',
        IsBoss: true
    },

    "48": {
        name: "Voidal Apostle (Nightmare) - 2F",
        description: stringIsBoss + "Can be found on the second stage of Void (Nightmare).<br>It is not possible to break this enemy's defense.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>6.58M (263 bars)</span>"
        },
        extra: "- From time to time the Voidal Apostle will summon a purple aura on the map. During this attack the Voidal Apostle will remain still and vulnerable to damage, however players within the aura will also summon multiple thorns wherever they move.<br><br>"+
               "- After ~1:30 from the begining of the stage, the Voidal Apostle will use the 'Danger' mechanics, which will summon multiple spheres through the map. During this perior the Voidal Apostle will leave the map and it won't be possible to damage it.<br>",
        path: 'images/monsters/apostle 1.png',
        IsBoss: true
    },

    "49": {
        name: "Voidal Apostle (Nightmare) - 3F",
        description: stringIsBoss + "Can be found on the third stage of Void (Nightmare).<br>It is not possible to break this enemy's defense.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>14.92M (597 bars)</span>"
        },
        extra: "- From time to time the Voidal Apostle will teleport itself to the right (if it's on the left portion of the map) or left (if it's on the right portion of the map) corner of the map and shoot an energy wave. During this period the Voidal Apostle will remain still and be very susceptible to damage.<br><br>"+
               "- The Voidal Apostle may use the 'Danger' mechanics. A wind will blow from left to right or right to left, indicating which side the boss will move while dealing a high amount of damage. If it flies to the left it will remain at the bottom platform; if it flies to the right it will remain at the topmost platform .<br><br>"+
               "- After using the teleport mechanis twice, Voidal Apostle may use the 'Summon' mechanics and will leave the map until all 'Nightmare Gazers' are defeated. Once defeated, they will summon a damage buff orb and the Voidal Apostle will remain vulnerable for ~15 seconds.<br><br>"+
               "- The buff acquired from the 'Nightmare Gazers' is <span class='yellow'>150%</span>. Add this value to your buffs if desired.<br><br>"+
               "- If the Voidal Apostle is defeated before the 'Summon' mechanics it will be possible to access the hidden stage (4F) of Void (Nightmare).",
        path: 'images/monsters/apostle 2.png',
        IsBoss: true
    },

    "50": {
        name: "Voidal Apostle (Nightmare) - 4F",
        description: stringIsBoss + "Can be found on the hidden stage (4F) of Void (Nightmare). It is only possible to access the hidden stage if stage 3 is cleared before the 'Summon' mechanics.<br>It is not possible to break this enemy's defense.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 bars)</span>"
        },
        extra: "- The Voidal Apostle will remain still in the center of the map while concentrating energy and dealing a small amount of damage to players. If it is not defeated within 1 minute the dungeon will fail automatically.<br><br>"+
               "- Every 10 seconds the Voidal Apostle will summon buff orbs across the map. Those orbs will be avaible for 10 seconds and they grant a particular buff until they vanish from the map.<br><br>"+
               "- Blue orb: reduces the cooldown of all skill by 20 seconds, restores two MP bars and causes the Voidal Apostle to receive <span class='yellow'>400%</span> more damage from skills (this is not considered a buff but rather a direct increase in the damage received by the boss).<br><br>"+
               "- Red orb: restores 1000 HP and causes the Voidal Apostle to receive <span class='yellow'>900%</span> more damage from basic commands and pets (this is not considered a buff but rather a direct increase in the damage received by the boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "51": {
        name: "Voidal Apostle (Nightmare) - 4F (Blue orb)",
        description: stringIsBoss + "Can be found on the hidden stage (4F) of Void (Nightmare). It is only possible to access the hidden stage if stage 3 is cleared before the 'Summon' mechanics.<br>It is not possible to break this enemy's defense.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 bars)</span>"
        },
        extra: "- The Voidal Apostle will remain still in the center of the map while concentrating energy and dealing a small amount of damage to players. If it is not defeated within 1 minute the dungeon will fail automatically.<br><br>"+
               "- Every 10 seconds the Voidal Apostle will summon buff orbs across the map. Those orbs will be avaible for 10 seconds and they grant a particular buff until they vanish from the map.<br><br>"+
               "- Blue orb: reduces the cooldown of all skill by 20 seconds, restores two MP bars and causes the Voidal Apostle to receive <span class='yellow'>400%</span> more damage from skills (this is not considered a buff but rather a direct increase in the damage received by the boss).<br><br>"+
               "- Red orb: restores 1000 HP and causes the Voidal Apostle to receive <span class='yellow'>900%</span> more damage from basic commands and pets (this is not considered a buff but rather a direct increase in the damage received by the boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "52": {
        name: "Voidal Apostle (Nightmare) - 4F (Red orb)",
        description: stringIsBoss + "Can be found on the hidden stage (4F) of Void (Nightmare). It is only possible to access the hidden stage if stage 3 is cleared before the 'Summon' mechanics.<br>It is not possible to break this enemy's defense.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 bars)</span>"
        },
        extra: "- The Voidal Apostle will remain still in the center of the map while concentrating energy and dealing a small amount of damage to players. If it is not defeated within 1 minute the dungeon will fail automatically.<br><br>"+
               "- Every 10 seconds the Voidal Apostle will summon buff orbs across the map. Those orbs will be avaible for 10 seconds and they grant a particular buff until they vanish from the map.<br><br>"+
               "- Blue orb: reduces the cooldown of all skill by 20 seconds, restores two MP bars and causes the Voidal Apostle to receive <span class='yellow'>400%</span> more damage from skills (this is not considered a buff but rather a direct increase in the damage received by the boss).<br><br>"+
               "- Red orb: restores 1000 HP and causes the Voidal Apostle to receive <span class='yellow'>900%</span> more damage from basic commands and pets (this is not considered a buff but rather a direct increase in the damage received by the boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "53": {
        name: "Ashtaroth, the Creator (corners)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>8.95M</span>"
        },
        extra: "-",
        path: 'images/monsters/astaroth cloister.png',
        IsBoss: false
    },

    "54": {
        name: "Ashtaroth, the Creator (meio)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>22.31M</span>"
        },
        extra: "-",
        path: 'images/monsters/astaroth cloister.png',
        IsBoss: false
    },

    "55": {
        name: "Dragon Knight",
        description: stringIsNotBoss + "Can be found on the second stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.19%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- The Dragon Knight has an extremely high defense, if not stricken by the catapult (you only deal 10% of your usual damage). When hit by the catapult, its defense will be reduced for 10 seconds (it can be extended with pet freeze).<br><br>"+
               "- When weakened, its defense will start switching from time to time as such:<br>"+
               "<span class='tab'>- 3 seconds with reduced defense (the Dragon takes 10x the usual damage)</span></span>.<br>"+
               "<span class='tab'>- 1 second with extremely reduced defense (the Dragon takes 20x the usual damage)</span></span>.<br><br>"+
               "- In order to optimize damage, it is necessary to freeze the Dragon with a pet during the 'super weakened' state. By doing this you can extend the duration of its extremely reduced defense.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },

    "56": {
        name: "Dragon Knight (weakened)",
        description: stringIsNotBoss + "Can be found on the second stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- The Dragon Knight has an extremely high defense, if not stricken by the catapult (you only deal 10% of your usual damage). When hit by the catapult, its defense will be reduced for 10 seconds (it can be extended with pet freeze).<br><br>"+
               "- When weakened, its defense will start switching from time to time as such:<br>"+
               "<span class='tab'>- 3 seconds with reduced defense (the Dragon takes 10x the usual damage)</span></span>.<br>"+
               "<span class='tab'>- 1 second with extremely reduced defense (the Dragon takes 20x the usual damage)</span></span>.<br><br>"+
               "- In order to optimize damage, it is necessary to freeze the Dragon with a pet during the 'super weakened' state. By doing this you can extend the duration of its extremely reduced defense.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },

    "57": {
        name: "Dragon Knight (super weakened)",
        description: stringIsNotBoss + "Can be found on the second stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- The Dragon Knight has an extremely high defense, if not stricken by the catapult (you only deal 10% of your usual damage). When hit by the catapult, its defense will be reduced for 10 seconds (it can be extended with pet freeze).<br><br>"+
               "- When weakened, its defense will start switching from time to time as such:<br>"+
               "<span class='tab'>- 3 seconds with reduced defense (the Dragon takes 10x the usual damage)</span></span>.<br>"+
               "<span class='tab'>- 1 second with extremely reduced defense (the Dragon takes 20x the usual damage)</span></span>.<br><br>"+
               "- In order to optimize damage, it is necessary to freeze the Dragon with a pet during the 'super weakened' state. By doing this you can extend the duration of its extremely reduced defense.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },
    
    "58": {
        name: "Harbinger",
        description: stringIsNotBoss + "Can be found on the third stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>23.82M</span>"
        },
        extra: "- On every ~27 seconds she will summon a new 'On Target' skill (up to 3).<br>"+
               "- When she reaches 50% HP, she will use 'Havoc' (Warning) and start gathering energy in order to use 'Last Destruction'.<br>"+
               "- During her Warning, she will always keep looking to the right, which allows a very certain back attack opportunity.<br>"+
               "- Upon reaching the maximum energy limit, she will teleport to the opposite side of where she is at the moment (right corner, if she is between the center and the left corner of the map and vice versa)",
        path: 'images/monsters/encantrix cloister.png',
        IsBoss: false
    },

    "59": {
        name: "Duell (Infinite Cloister 4)",
        description: stringIsBoss + "Can be found on the last stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>46.25M (1850 bars)</span>"
        },
        extra: "- Duell will use 'casting' after ~45 seconds up to four consecutive times. You have 10 seconds to interrupt each one.<br>"+
               "- It is necessary to deal 3.7M damage to interrupt the first three castings and 2.9M do interrupt the last one.<br>" +
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack pattern.<br>"+
               "- When interrupted four consecutive times, Duell will be weakened and receive 20% more damage from all sources during 8 seconds.",
        path: 'images/monsters/duel4.png',
        IsBoss: true
    },

    "60": {
        name: "Duell (Infinite Cloister 4) (weakened)",
        description: stringIsBoss + "Can be found on the last stage of Infinite Cloister on difficulty 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>68.75%</span>",
            health: stringEstHP + "<span class='yellow'>46.25M (1850 bars)</span>"
        },
        extra: "- Duell will use 'casting' after ~45 seconds up to four consecutive times. You have 10 seconds to interrupt each one.<br>"+
               "- It is necessary to deal 3.7M damage to interrupt the first three castings and 2.9M do interrupt the last one.<br>" +
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack pattern.<br>"+
               "- When interrupted four consecutive times, Duell will be weakened and receive 20% more damage from all sources during 8 seconds.",
        path: 'images/monsters/duel4.png',
        IsBoss: true
    },

};
