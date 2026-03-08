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
               "- It is necessary do deal 1M damage in order to interrupt it.<br>"+
               "- It's not possible to deal back attack damage to this enemy.",
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
               "- In order to interrupt it, it is necessary to deal 2M damage on stage 3 and 3M damage on stage 4.<br>"+
               "- It's not possible to deal back attack damage to this enemy.",
        path: 'images/monsters/gazer.png',
        IsBoss: true
    },

    "22": {
        name: "Rofnus",
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>23.08%</span>",
            defense2: stringDef2 + "<span class='yellow'>23.08%</span>",
            defense3: stringDef3 + "<span class='yellow'>39.90%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>."
        },
        extra: "- When Rofnus gets bellow 66% HP, he can enter fury state and recover up to 33% of his total HP.<br>"+
               "- Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png',
        IsBoss: false
    },

    "23": {
        name: "Rofnus (HP regeneration)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>"
        },
        extra: "- When Rofnus gets bellow 66% HP, he can enter fury state and recover up to 33% of his total HP.<br>"+
               "- Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png',
        IsBoss: false
    },

    "24": {
        name: "Skeram",
        description: stringIsNotBoss + "Can be found on the second stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>10.00M</span>"
        },
        extra: "-",
        path: 'images/monsters/skeram.png',
        IsBoss: false
    },

    "25": {
        name: "Chaotic Witch",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.<br>"+
               "- If not defeated within 90 seconds, the Chaotic Witch will resurrect with 100% HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "26": {
        name: "Chaotic Witch (purple protection)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills."+
               "- If not defeated within 90 seconds, the Chaotic Witch will resurrect with 100% HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "27": {
        name: "Chaotic Witch (red protection)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on difficulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>58.34%</span>",
            defense2: stringDef2 + "<span class='yellow'>58.34%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills."+
               "- If not defeated within 90 seconds, the Chaotic Witch will resurrect with 100% HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "28": {
        name: "Duell",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on difficulty 3.",
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
        name: "Duell (weakened)",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on difficulty 3.",
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

    "39": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "40": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "41": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "42": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "43": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
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
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on difficulty 4.",
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
        name: "Ashtaroth, the Creator (middle)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on difficulty 4.",
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
        description: stringIsNotBoss + "Can be found on the second stage of Infinity Cloister on difficulty 4.",
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
        description: stringIsNotBoss + "Can be found on the second stage of Infinity Cloister on difficulty 4.",
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
        description: stringIsNotBoss + "Can be found on the second stage of Infinity Cloister on difficulty 4.",
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
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on difficulty 4.",
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
        name: "Duell",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on difficulty 4.",
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
        name: "Duell (weakened)",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on difficulty 4.",
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

    "61": {
        name: "[Abyss] Random Enemy",
        description: stringIsNotBoss + "Those are the most common enemies found in Abyssal Path. They can have a few buffs that increase their defenses.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: ""
        },
        extra: "- The random effects from each stage are only applied after ~7 seconds from the stage start. Therefore it is necessary for the party to deal the highest amount of damage possible during that time in order to avoid those defense buffs.<br>"+
               "- <b>General defense increase</b>: The enemy will get a <span class='blue'>blue</span> aura. Any damage source will be drastically reduced. (you can only deal <b>33%</b> of your original damage).<img src='images/monsters/blue_aura.png' class='mini-icon' oncontextmenu='return false';>"+
               "- <b>Alternating defenses</b>: The enemy will get a purple/red aura.<br>"+
               "※ When the <span class='purple'>purple</span> aura is active, any skill will have its damage drastically reduced (you can only deal <b>10%</b> of your original damage).<img src='images/monsters/purple_aura.png' class='mini-icon' oncontextmenu='return false';>"+
               "※ When the <span class='red'>red</span> aura is active, any basic command/pet will have its damage drastically reduced (you can only deal <b>10%</b> of your original damage).<img src='images/monsters/red_aura.png' class='mini-icon' oncontextmenu='return false';>",
        path: 'images/monsters/general monster.png',
        IsBoss: false
    },

    "62": {
        name: "[Abyss] Random Boss",
        description: stringIsBoss + "Can be found on Abyssal Path. It can show up randomly on stages 3, 9 and 15",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Stage 3: <span class='yellow'>52.82M (2165 bars)</span></span>.<br>"+
                        "<span class='tab'>- Stage 9: <span class='yellow'>72.50M (2900 bars)</span></span>.<br>"
        },
        extra: "-",
        path: 'images/monsters/quoronnos.png',
        IsBoss: true
    },

    "70": {
        name: "[Abyss] Reaper",
        description: stringIsNotBoss + "Can be found on stages 5 and 11 from Abyssal Path.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Stage 5: <span class='yellow'>14.68M</span></span>.<br>"+
                        "<span class='tab'>- Stage 11: <span class='yellow'>21.12M</span></span>.<br>"
        },
        extra: "- The Reaper has only two patterns, however they can ignore any kind of Hyper Armor. You can only avoid its attack if you are in an i-frame stance (performing Saving Action or during a skill).<br>"+
               "- From the start of the battle, the Reaper will summon a copy of itself towards every player. When it reaches a player, it will deal damage where it reached the player. If any player gets hit, they will take fatal damage and die instantly."+
               "<video src='videos/reaper_atk1.mp4' autoplay loop muted playsinline class='skill-video'></video>"+
               "- After its copies attack, the Reaper will use a horizontal slash where it stands still. If any player gets hit, they will take fatal damage and die instantly."+
               "<video src='videos/reaper_atk2.mp4' autoplay loop muted playsinline class='skill-video'></video>"+
               "- This boss will keep alternating those two patterns until it is defeated or the whole party is dead.",
        path: 'images/monsters/reaper.png',
        IsBoss: false
    },

    "71": {
        name: "Abyssal Dominator",
        description: stringIsBoss + "Can be found on stages (0-3), 6 and 12 from Abyssal Path.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Stage (0-3): <span class='yellow'>707k (29 bars)</span></span>.<br>"+
                        "<span class='tab'>- Stage 6: <span class='yellow'>69.22M (2387 bars)</span></span>.<br>"+
                        "<span class='tab'>- Stage 12: <span class='yellow'>85.93M (3523 bars)</span></span>."
        },
        extra: "- Randomly, the Abyssal Dominator will try to put a mark on any player. If the player is not in an i-frame instance (performing Saving Action or during a skill), they will get trapped. After a few seconds, one of the sides of the trap will open "+
               "allowing for the player to flee rapidly. If they fail to do so, the trap will kill them instantly, since it ignores any kind of Hyper Armor buff.<br>"+
               "<video src='videos/dominator_atk.mp4' autoplay loop muted playsinline class='skill-video'></video><br>"+
               "- There are some ways to survive it, if you happen to have been hit, however.<br>"+
               "<span class='tab'>※ If you have so many defense buffs (such as Dio's Black Space) and a high HP, you could end up not being killed, depending on how many hits you've taken.<br>"+
               "<span class='tab'>※ If you happen to have been healed in a certain window frame (right after the last hit, but before the character gets killed in the air).<br>"+
               "<span class='tab'>※ Or if the character has some form of blocking the last hit (like Lime and Ronan's block).<br>"+
               "- When reaching the mark of ~40 seconds, the Abyssal Dominator might start the 'casting' pattern. It will execute 2 castings on stages (0-3) and 6, and 3 castings on stage 12. You will have 10 seconds to interrupt them.<br>"+
               "- If not interrupted, it will release a powerful attack and return to its usual attack pattern.<br>"+
               "- When all castings have been interrupted, the Abyssal Dominator will be weakened and receive 200% more damage from all sources during 8 seconds.",
        path: 'images/monsters/dominator.png',
        IsBoss: true
    },

    "72": {
        name: "Abyssal Dominator (weakened)",
        description: stringIsBoss + "Can be found on stages (0-3), 6 and 12 from Abyssal Path.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Stage (0-3): <span class='yellow'>707k (29 bars)</span></span>.<br>"+
                        "<span class='tab'>- Stage 6: <span class='yellow'>69.22M (2387 bars)</span></span>.<br>"+
                        "<span class='tab'>- Stage 12: <span class='yellow'>85.93M (3523 bars)</span></span>.<br>"
        },
        extra: "- Randomly, the Abyssal Dominator will try to put a mark on any player. If the player is not in an i-frame instance (performing Saving Action or during a skill), they will get trapped. After a few seconds, one of the sides of the trap will open "+
               "allowing for the player to flee rapidly. If they fail to do so, the trap will kill them instantly, since it ignores any kind of Hyper Armor buff.<br>"+
               "<video src='videos/dominator_atk.mp4' autoplay loop muted playsinline class='skill-video'></video><br>"+
               "- There are some ways to survive it, if you happen to have been hit, however.<br>"+
               "<span class='tab'>※ If you have so many defense buffs (such as Dio's Black Space) and a high HP, you could end up not being killed, depending on how many hits you've taken.<br>"+
               "<span class='tab'>※ If you happen to have been healed in a certain window frame (right after the last hit, but before the character gets killed in the air).<br>"+
               "<span class='tab'>※ Or if the character has some form of blocking the last hit (like Lime and Ronan's block).<br>"+
               "- When reaching the mark of ~40 seconds, the Abyssal Dominator might start the 'casting' pattern. It will execute 2 castings on stages (0-3) and 6, and 3 castings on stages 12. You will have 10 seconds to interrupt them.<br>"+
               "- If not interrupted, it will release a powerful attack and return to its usual attack pattern.<br>"+
               "- When all castings have been interrupted, the Abyssal Dominator will be weakened and receive 200% more damage from all sources during 8 seconds.",
        path: 'images/monsters/dominator.png',
        IsBoss: true
    },

    "73": {
        name: "Gigantic Darkness",
        description: stringIsNotBoss + "Can be found in the Chapel of Eternity.",
        status:{
            defense1: stringDef1 + "<br><span class='tab'>-Shield: <span class='yellow'>95.00%</span> / Back: <span class='yellow'>0.00%</span></span>",
            defense2: stringDef2 + "<br><span class='tab'>-Shield: <span class='yellow'>95.00%</span> / Back: <span class='yellow'>0.00%</span></span>",
            defense3: stringDef3 + "<br><span class='tab'>-Shield: <span class='yellow'>96.10%</span> / Back: <span class='yellow'>21.88%</span></span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.41M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>21.89M</span></span>.<br>"+stringScaleHP
        },
        extra: "- His shield has an extremely high defense. When taking back attack damage, however, it acts like a common enemy (low defense) and takes 33% more damage.",
        path: 'images/monsters/solene/chapel/gigantic darkness.png',
        IsBoss: false
    },

    "74": {
        name: "Unknown Darkness",
        description: stringIsNotBoss + "Can be found in the Chapel of Eternity.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>15.74M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/chapel/unknown darkness.png',
        IsBoss: false
    },

    "75": {
        name: "Embodied Darkness",
        description: stringIsBoss + "Can be found in the Chapel of Eternity.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 bars)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 bars)</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/chapel/embodied darkness.png',
        IsBoss: true
    },

    "76": {
        name: "Sentinel Commander",
        description: stringIsNotBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_commander.png',
        IsBoss: false
    },

    "77": {
        name: "Sentinel Commander (weakened)",
        description: stringIsNotBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_commander.png',
        IsBoss: false
    },

    "78": {
        name: "Sentinel Amalgam",
        description: stringIsNotBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_amalgam.png',
        IsBoss: false
    },

    "79": {
        name: "Sentinel Amalgam (weakened)",
        description: stringIsNotBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_amalgam.png',
        IsBoss: false
    },
    
    "80": {
        name: "Sentinel Grand General",
        description: stringIsBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 bars)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 bars)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - The Sentinel has two Danger patterns:<br>
                <br> <span class='tab'>※ The Sentinel will fly and place several laser marks to the ground. Then it will land violently on top of a player.</span><br>
                <br> <span class='tab'>※ The Sentinel will palce a grid over the whole map with a few safe spots. After 4 seconds it will start scanning for players. If a single player is detected outside the safe spots, the Sentinel will cause a powerful attack.</span><br>
                - If it doesn't any player, it will get weakened, lose all his defenses and it will take 33% more damage for 5 seconds.
               `,
        path: 'images/monsters/solene/hall/sentinel_general.png',
        IsBoss: true
    },

    "81": {
        name: "Sentinel Grand General (weakened)",
        description: stringIsBoss + "Can be found in the Hall of Harmony.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 bars)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 bars)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - The Sentinel has two Danger patterns:<br>
                <br> <span class='tab'>※ The Sentinel will fly and place several laser marks to the ground. Then it will land violently on top of a player.</span><br>
                <br> <span class='tab'>※ The Sentinel will palce a grid over the whole map with a few safe spots. After 4 seconds it will start scanning for players. If a single player is detected outside the safe spots, the Sentinel will cause a powerful attack.</span><br>
                - If it doesn't any player, it will get weakened, lose all his defenses and it will take 33% more damage for 5 seconds.
               `,
        path: 'images/monsters/solene/hall/sentinel_general.png',
        IsBoss: true
    },

    

    "82": {
        name: "Swamp Guardian",
        description: stringIsNotBoss + "Can be found in the Sanctuary of Divine Beasts.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>5.04M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>25.13M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                -
               `,
        path: 'images/monsters/solene/sanctuary/swamp_guardian.png',
        IsBoss: false
    },

    "83": {
        name: "Chicken of Fire",
        description: stringIsNotBoss + "Can be found in the Sanctuary of Divine Beasts.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>2.20M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>12.62M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - The Chicken of Fire will run away randomly.<br>
                - Randomly the Chicken of Fire will enter an enraged state and will attack with a great damage.<br>
                - While in the enraged state, the Chicken of Fire will lose all its defenses and it will take 300% more damage.
               `,
        path: 'images/monsters/solene/sanctuary/chicken_of_fire.png',
        IsBoss: false
    },

    "84": {
        name: "Chicken of Fire (Enraged)",
        description: stringIsNotBoss + "Can be found in the Sanctuary of Divine Beasts.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>2.20M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>12.62M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - The Chicken of Fire will run away randomly.<br>
                - Randomly the Chicken of Fire will enter an enraged state and will attack with a great damage.<br>
                - While in the enraged state, the Chicken of Fire will lose all its defenses and it will take 300% more damage.
               `,
        path: 'images/monsters/solene/sanctuary/chicken_of_fire.png',
        IsBoss: false
    },

    "85": {
        name: "Surtrark of Flames",
        description: stringIsBoss + "Can be found in the Sanctuary of Divine Beasts.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.75M (190 bars)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>35.45M (1418 bars)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - This boss has two Danger patterns based on HP:
                <br>
                <b>※ Above 60% HP</b>
                <br>
                <span class='tab'>
                After dashing back and spreading fire feathers around the map / throwing fire balls, the boss can place a mark on a player for 1 second. After 1 second, if the player isn't on an i-frame stance (performing Saving Action or during a skill), the boss will transform the player into a chicken.
                <br></span>
                <span class='tab'>
                Then, the boss will start gathering energy (indicated by a gauge above it) and it will release an energy wave across the map. After that, the boss will get weakened, lose all its defenses and it will take 100% more damage for 5 seconds.
                </span>

                <br>

                <b>※ Below 60% HP</b>
                <br>
                <span class='tab'>
                The boss will teleport to the center of the map and make fire balls rain from the sky. It will recover HP for each hit the players take. After that, the boss will release an energy wave across the map.
                </span>
               `,
        path: 'images/monsters/solene/sanctuary/surtrark_of_flames.png',
        IsBoss: true
    },

    "86": {
        name: "Surtrark of Flames (Weakened)",
        description: stringIsBoss + "Can be found in the Sanctuary of Divine Beasts.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.75M (190 bars)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>35.45M (1418 bars)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - This boss has two Danger patterns based on HP:
                <br>
                <b>※ Above 60% HP</b>
                <br>
                <span class='tab'>
                After dashing back and spreading fire feathers around the map / throwing fire balls, the boss can place a mark on a player for 1 second. After 1 second, if the player isn't on an i-frame stance (performing Saving Action or during a skill), the boss will transform the player into a chicken.
                <br></span>
                <span class='tab'>
                Then, the boss will start gathering energy (indicated by a gauge above it) and it will release an energy wave across the map. After that, the boss will get weakened, lose all its defenses and it will take 100% more damage for 5 seconds.
                </span>

                <br>

                <b>※ Below 60% HP</b>
                <br>
                <span class='tab'>
                The boss will teleport to the center of the map and make fire balls rain from the sky. It will recover HP for each hit the players take. After that, the boss will release an energy wave across the map.
                </span>
               `,
        path: 'images/monsters/solene/sanctuary/surtrark_of_flames.png',
        IsBoss: true
    },

};

const categoryMap = {
    "Default": ["0"],
    "Abyssal Path (AP) - Conquest": ["61", "62", "70", "71", "72"],
    "Solene - Chapel of Eternity": ["73", "74", "75"],
    "Solene - Hall of Harmony": ["76", "77", "78", "79", "80", "81"],
    "Solene - Sanctuary of Divine Beasts": ["82", "83", "84", "85", "86"],
    "Void 1: Invasion": ["18"],
    "Void 2: Taint": ["19", "20", "21"],
    "Void 3: Nightmare": ["44", "45", "46", "47", "48", "49", "50", "51", "52"],
    "Infinity Cloister 3 (IC3)": ["22", "23", "24", "25", "26", "27", "28", "29"],
    "Infinity Cloister 4 (IC4)": ["53", "54", "55", "56", "57", "58", "59", "60"],
    "Tower of Disappearance (TOD)": ["1", "2", "3", "4", "5", "6", "17", "7", "16", "15", "8", "34", "9", "10"],
    "Berkas' Lair": ["11", "12"],
    "Land of Judgment": ["13", "14"],
    "Wizard's Labyrinth (WL)": ["30", "31", "32", "33"]    
};

window.buffsData = [
    // general buffs
    { 
        id: "gc_club", 
        name: "GC Club", 
        category: "general",
        icon: "images/icons/general/gc_club.png", 
        stats: {buff: 10, crit: 0} 
    },
    { 
        id: "pgc", 
        name: "Premium GC Club", 
        category: "general",
        icon: "images/icons/general/pgc.png", 
        stats: {buff: 10, crit: 0} 
    },
    { 
        id: "second_gear", 
        name: "Second Gear Ring",
        category: "general",
        icon: "images/icons/general/second_gear.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "persephone", 
        name: "Pearl of Persephone Earrings", 
        category: "general",
        icon: "images/icons/general/persephone.png", 
        stats: {buff: 50, crit: 0}  
    },
    { 
        id: "guild", 
        name: "[Guild] Attack Potion", 
        category: "general",
        icon: "images/icons/general/guild.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "lisnar", 
        name: "Lisnar's Blessing", 
        category: "general",
        icon: "images/icons/general/lisnar.png", 
        stats: {buff: 20, crit: 0}  
    },
    { 
        id: "yore_attack", 
        name: "Demons of Yore Attack Potion", 
        category: "general",
        icon: "images/icons/general/yore_attack.png", 
        stats: {buff: 100, crit: 0}  
    },
    { 
        id: "yore_crit", 
        name: "Demons of Yore Critical Potion", 
        category: "general",
        icon: "images/icons/general/yore_crit.png", 
        stats: {buff: 0, crit: 100}  
    },
    { 
        id: "yore_berserker", 
        name: "Demons of Yore Berserker Potion", 
        category: "general",
        icon: "images/icons/general/yore_berserker.png", 
        stats: {buff: 100, crit: 100} 
    },
    { 
        id: "renak", 
        name: "Title: Renak", 
        category: "general",
        icon: "images/icons/general/renak.png", 
        stats: {buff: 10, crit: 1.5}  
    },
    { 
        id: "searetone", 
        name: "Title: Searetone", 
        category: "general",
        icon: "images/icons/general/searetone.png", 
        stats: {buff: 5, crit: 1.5}  
    },
    { 
        id: "fury", 
        name: "Set: Fury", 
        category: "general",
        icon: "images/icons/general/fury.png", 
        stats: {buff: 5, crit: 0},
        maxStacks: 2 
    },
    { 
        id: "fight", 
        name: "Set: Fight", 
        category: "general",
        icon: "images/icons/general/fight.png", 
        stats: {buff: 2.5, crit: 0},
        maxStacks: 2
    },
    { 
        id: "hunt", 
        name: "Conjunto de Caçada", 
        category: "general",
        icon: "images/icons/general/hunt.png", 
        stats: {buff: 10}
    },
    { 
        id: "rage", 
        name: "Set: Rage", 
        category: "general",
        icon: "images/icons/general/rage.png", 
        stats: {buff: 10, crit: 0}
    },
    { 
        id: "punish", 
        name: "Set: Punish", 
        category: "general",
        icon: "images/icons/general/punish.png", 
        stats: {buff: 10, crit: 0}
    },
    { 
        id: "limit", 
        name: "Set: Limit", 
        category: "general",
        icon: "images/icons/general/limit.png", 
        stats: {buff: 15, crit: 0}
    },
    { 
        id: "fatal1", 
        name: "Increase to attack while in Fatal (Epic Stone)", 
        category: "general",
        icon: "images/icons/general/fatal.png", 
        stats: {buff: 20, crit: 0}
    },
    { 
        id: "fatal2", 
        name: "Increase to Critical Damage while in Fatal (Epic Stone)", 
        category: "general",
        icon: "images/icons/general/fatal.png", 
        stats: {crit_dmg: 20}
    },
    { 
        id: "awakening", 
        name: "Awakening Skill", 
        category: "general",
        icon: "images/icons/general/awakening.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "taint_buff", 
        name: "Void 2: Taint's Buff", 
        category: "general",
        icon: "images/icons/general/void_buff.png", 
        stats: {buff: 200, crit: 0}  
    },
    { 
        id: "nightmare_buff", 
        name: "Void 3: Nightmare's Buff", 
        category: "general",
        icon: "images/icons/general/void_buff.png", 
        stats: {buff: 150, crit: 0}  
    },

    // character buffs
    { 
        id: "bravery", 
        name: "Bravery", 
        category: "character",
        icon: "images/icons/character/bravery.png", 
        stats: {buff: 10}  
    },
    { 
        id: "invisibility_lass", 
        name: "Invisibility", 
        category: "character",
        icon: "images/icons/character/invisibility.png", 
        stats: {buff: 50, crit: 0}  
    },
    { 
        id: "nature_ryan", 
        name: "Nature Commander", 
        category: "character",
        icon: "images/icons/character/nature.png", 
        stats: {buff: 7, crit: 0}  
    },
    { 
        id: "wolf_own", 
        name: "Wolf Transformation (self buff)", 
        category: "character",
        icon: "images/icons/character/wolf.png", 
        stats: {buff: 20, crit: 0}  
    },
    { 
        id: "wolf_party", 
        name: "Wolf Transformation (party buff)", 
        category: "character",
        icon: "images/icons/character/wolf.png", 
        stats: {buff: 7, crit: 0}  
    },
    { 
        id: "magnus_own", 
        name: "Magnus Dan Transformation (self buff)", 
        category: "character",
        icon: "images/icons/character/magnus.png", 
        stats: {buff: 0, crit: 5}  
    },
    { 
        id: "magnus_party", 
        name: "Magnus Dan Transformation (party buff)", 
        category: "character",
        icon: "images/icons/character/magnus.png", 
        stats: {buff: 0, crit: 1.5}  
    },
    { 
        id: "dark_myst", 
        name: "Dark Myst",
        category: "character",
        icon: "images/icons/character/dark_myst.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "holy_bless", 
        name: "Holy Bless",
        category: "character",
        icon: "images/icons/character/holy_bless.png", 
        stats: {buff: 5, crit: 0},
        maxStacks: 5
    },
    { 
        id: "tempest_blade", 
        name: "Tempest Blade",
        category: "character",
        icon: "images/icons/character/tempest_blade.png", 
        stats: {buff: 10, crit: 0}
    },
    { 
        id: "erudon", 
        name: "Erudon Weapon",
        category: "character",
        icon: "images/icons/character/erudon.png", 
        stats: {buff: 10, crit: 0}  
    },
    { 
        id: "fever", 
        name: "Dance Fever",
        category: "character",
        icon: "images/icons/character/fever.png", 
        stats: {buff: 15, crit: 0},
    },
    { 
        id: "fan_service1", 
        name: "Fan Service Lv1",
        category: "character",
        icon: "images/icons/character/fan_service1.png", 
        stats: {buff: 15, crit: 0},
    },
    { 
        id: "fan_service2", 
        name: "Fan Service Lv2",
        category: "character",
        icon: "images/icons/character/fan_service2.png", 
        stats: {buff: 30, crit: 0},
    },
    { 
        id: "yin1", 
        name: "End of Days Type 1",
        category: "character",
        icon: "images/icons/character/yin.png", 
        stats: {buff: 100, crit: 0},
    },
    { 
        id: "yin2", 
        name: "End of Days Type 2",
        category: "character",
        icon: "images/icons/character/yin.png", 
        stats: {buff: 10, crit: 0},
    },
    { 
        id: "rage_sieghart1", 
        name: "Rage 1st ~ 3rd job", 
        category: "character",
        icon: "images/icons/character/rage_sieghart1.png", 
        stats: {buff: 10, crit: 0}  
    },
    { 
        id: "rage_sieghart2", 
        name: "Rage 4th job",
        category: "character",
        icon: "images/icons/character/rage_sieghart1.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "orb", 
        name: "Power Marble",
        category: "character",
        icon: "images/icons/character/orb.png", 
        stats: [
            { buff: 10, crit: 0 },
            { buff: 15, crit: 0 },
            { buff: 20, crit: 0 }
        ],
        maxStacks: 3
    },
    { 
        id: "SS", 
        name: "Sword Stance Enhancement <span class='command'>C+↑</span>",
        category: "character",
        icon: "images/icons/character/SS.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "offensive", 
        name: "Offensive Stance <span class='command'>C+→</span>",
        category: "character",
        icon: "images/icons/character/offensive.png", 
        stats: {buff: 0, crit: 5}  
    },
    { 
        id: "grandark", 
        name: "Grandark's Domination",
        category: "character",
        icon: "images/icons/character/grandark.png", 
        stats: {buff: 10, crit: 0}  
    },
    { 
        id: "bastion", 
        name: "Bastion",
        category: "character",
        icon: "images/icons/character/bastion.png", 
        stats: {buff: 10, crit: 0}  
    },
    { 
        id: "haunt", 
        name: "Haunt",
        category: "character",
        icon: "images/icons/character/haunt.png", 
        stats: {buff: 0, crit: 3}  
    },
    { 
        id: "rage_mode", 
        name: "Rage Mode",
        category: "character",
        icon: "images/icons/character/rage_mode.png", 
        stats: {buff: 10, crit: 0}  
    },
        { 
        id: "charging", 
        name: "Charging Buff",
        category: "character",
        icon: "images/icons/character/charging.png", 
        stats: [
            { buff: 3, crit: 0 },
            { buff: 6, crit: 0 },
            { buff: 10, crit: 0 }
        ],
        maxStacks: 3
    },
    { 
        id: "transformation", 
        name: "Transformation Passive Type 2",
        category: "character",
        icon: "images/icons/character/transformation.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "enhancement", 
        name: "Increased Enhancement Effect",
        category: "character",
        icon: "images/icons/character/enhancement.png", 
        stats: {buff: 0, crit: 5}  
    },
    { 
        id: "increased_attack", 
        name: "Increased Attack",
        category: "character",
        icon: "images/icons/character/increased_attack.png", 
        stats: {buff: 10, crit: 0}  
    },
    { 
        id: "bless2", 
        name: "Bless 2",
        category: "character",
        icon: "images/icons/character/bless2.png", 
        stats: [
            { buff: 1, crit: 0 },
            { buff: 2, crit: 0 },
            { buff: 3, crit: 0 }
        ],
        maxStacks: 3
    },
    { 
        id: "aura_attack1", 
        name: "Aura: Attack",
        category: "character",
        icon: "images/icons/character/aura_attack1.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "aura_attack2", 
        name: "Aura: Attack (Increased Attack)",
        category: "character",
        icon: "images/icons/character/aura_attack2.png", 
        stats: {buff: 7, crit: 0}  
    },
    { 
        id: "divine_punishment", 
        name: "Divine Punishment",
        category: "character",
        icon: "images/icons/character/divine_punishment.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "berserker1", 
        name: "Berserker",
        category: "character",
        icon: "images/icons/character/berserker1.png", 
        stats: {buff: 15, crit: 9}  
    },
    { 
        id: "berserker2", 
        name: "Berserker Lv3",
        category: "character",
        icon: "images/icons/character/berserker2.png", 
        stats: {buff: 20, crit: 9}  
    },
    { 
        id: "byet", 
        name: "Byet",
        category: "character",
        icon: "images/icons/character/byet.png", 
        stats: {buff: 3, crit: 0}  
    },
    { 
        id: "hy", 
        name: "Hy",
        category: "character",
        icon: "images/icons/character/hy.png", 
        stats: {buff: 3, crit: 0}  
    },
    { 
        id: "het", 
        name: "Het",
        category: "character",
        icon: "images/icons/character/het.png", 
        stats: {buff: 3, crit: 0}  
    },
    { 
        id: "domination", 
        name: "Domination",
        category: "character",
        icon: "images/icons/character/domination.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "taint", 
        name: "Taint",
        category: "character",
        icon: "images/icons/character/taint.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "overpower", 
        name: "Overpower",
        category: "character",
        icon: "images/icons/character/overpower.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "standby", 
        name: "Standby",
        category: "character",
        icon: "images/icons/character/standby.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "module", 
        name: "Skill Activate Module Lv2",
        category: "character",
        icon: "images/icons/character/module.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "overheat1", 
        name: "Overheat",
        category: "character",
        icon: "images/icons/character/overheat1.png", 
        stats: {buff: 5, crit: 0},
        stats: [
            { buff: 1, crit: 0 },
            { buff: 2, crit: 0 },
            { buff: 3, crit: 0 },
            { buff: 4, crit: 0 },
            { buff: 5, crit: 0 },
            { buff: 6, crit: 0 },
            { buff: 7, crit: 0 },
            { buff: 8, crit: 0 },
            { buff: 9, crit: 0 },
            { buff: 10, crit: 0 },
            { buff: 11, crit: 0 },
            { buff: 12, crit: 0 },
            { buff: 13, crit: 0 },
            { buff: 14, crit: 0 },
            { buff: 15, crit: 0 },
            { buff: 16, crit: 0 },
            { buff: 17, crit: 0 },
            { buff: 18, crit: 0 },
            { buff: 19, crit: 0 },
            { buff: 20, crit: 0 },
        ],
        maxStacks: 20 
    },
    { 
        id: "overheat2", 
        name: "Overheat Explosion",
        category: "character",
        icon: "images/icons/character/overheat2.png", 
        stats: {buff: 30, crit: 0}  
    },
    { 
        id: "wrathful_demon", 
        name: "Wrathful Demon",
        category: "character",
        icon: "images/icons/character/wrathful_demon.png", 
        stats: {buff: 15, crit: 0}  
    },
    { 
        id: "paint", 
        name: "Too Much Paint!",
        category: "character",
        icon: "images/icons/character/paint.png", 
        stats: {buff: 5, crit: 0}  
    },
    { 
        id: "go_luffy", 
        name: "Go! Luffy!",
        category: "character",
        icon: "images/icons/character/go_luffy.png", 
        stats: {buff: 5, crit: 0}  
    },

    // pet

    { 
        id: "pet1", 
        name: "Basic Red Glyph",
        category: "pet",
        icon: "images/icons/pet/pet1.png", 
        stats: {pet_buff: 4, crit: 0}  
    },
    { 
        id: "pet2", 
        name: "Epic Red Glyph",
        category: "pet",
        icon: "images/icons/pet/pet2.png", 
        stats: {pet_buff: 8, crit: 0}  
    },
    { 
        id: "pet3", 
        name: "Relic Red Glyph",
        category: "pet",
        icon: "images/icons/pet/pet3.png", 
        stats: {pet_buff: 10, crit: 0}  
    },

    // ignore def debuffs
    { 
        id: "provocation", 
        name: "Provocation",
        category: "defense",
        icon: "images/icons/defense/provocation.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "amplifying", 
        name: "Amplifying Orb",
        category: "defense",
        icon: "images/icons/defense/amplifying.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "fear", 
        name: "Fear Lv2",
        category: "defense",
        icon: "images/icons/defense/fear.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "rage_cutter", 
        name: "Rage Cutter",
        category: "defense",
        icon: "images/icons/defense/rage_cutter.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "block", 
        name: "Block (Aegis Knight)",
        category: "defense",
        icon: "images/icons/defense/block.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "pretty_virus", 
        name: "Pretty Virus",
        category: "defense",
        icon: "images/icons/defense/pretty_virus.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "mystic flow", 
        name: "Mystic Flow",
        category: "defense",
        icon: "images/icons/defense/mystic_flow.png", 
        stats: {ignore_def: 10}  
    },
    { 
        id: "haunt_curse", 
        name: "Curse: Dark Red (Ley)",
        category: "defense",
        icon: "images/icons/defense/haunt_curse.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "l_rin", 
        name: "Amulet",
        category: "defense",
        icon: "images/icons/defense/l_rin.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "charge", 
        name: "Charging Strike",
        category: "defense",
        icon: "images/icons/defense/charge.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "pressure_point", 
        name: "Pressure Point",
        category: "defense",
        icon: "images/icons/defense/pressure_point.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "water_puddle", 
        name: "Water Puddle",
        category: "defense",
        icon: "images/icons/defense/water_puddle.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "leg_break", 
        name: "Leg Break",
        category: "defense",
        icon: "images/icons/defense/leg_break.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "absolute_dark", 
        name: "Absolute Dark",
        category: "defense",
        icon: "images/icons/defense/absolute_dark.png", 
        stats: {ignore_def: 8}  
    },
    { 
        id: "void_weaken", 
        name: "Void: Weaken",
        category: "defense",
        icon: "images/icons/defense/void_weaken.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "chain_blast", 
        name: "Chain Blast TYPE2",
        category: "defense",
        icon: "images/icons/defense/chain_blast.png", 
        stats: {ignore_def: 10}  
    },
    { 
        id: "mass_explosion", 
        name: "Mass Explosion TYPE2",
        category: "defense",
        icon: "images/icons/defense/mass_explosion.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "crimson_blood", 
        name: "Crimson Blood Arts 1",
        category: "defense",
        icon: "images/icons/defense/crimson_blood.png", 
        stats: [
            { ignore_def: 5},
            { ignore_def: 10},
        ] ,
        maxStacks:2
    },

    // enemy resistances
    { 
        id: "increased_defense", 
        name: "Increased Defense",
        category: "resist",
        icon: "images/icons/resist/increased_defense.png", 
        stats: {resist_all: -20, crit: 0}  
    },
    { 
        id: "damage_reduction", 
        name: "Damage Reduction",
        category: "resist",
        icon: "images/icons/resist/damage_reduction.png", 
        stats: {resist_normal: -30, crit: 0}  
    },
    { 
        id: "special_damage_reduction", 
        name: "Special Damage Reduction",
        category: "resist",
        icon: "images/icons/resist/special_damage_reduction.png", 
        stats: {resist_special: -30, crit: 0}  
    },
    { 
        id: "cdmg_reduction", 
        name: "Critical Strike Damage Reduction",
        category: "resist",
        icon: "images/icons/resist/cdmg_reduction.png", 
        stats: {crit_dmg: -150, crit: 0}  
    },
    { 
        id: "blue_aura", 
        name: "General defense increase (Abyssal Path)",
        category: "resist",
        icon: "images/monsters/blue_aura.png", 
        stats: {resist_all: -200/3, crit: 0}  
    },
    { 
        id: "purple_aura", 
        name: "Defense Increase - skills (Abyssal Path)",
        category: "resist",
        icon: "images/monsters/purple_aura.png", 
        stats: {resist_special: -90, crit: 0}  
    },
    { 
        id: "red_aura", 
        name: "Defense increase - command/pet (Abyssal Path)",
        category: "resist",
        icon: "images/monsters/red_aura.png", 
        stats: {resist_normal: -90, crit: 0}  
    },
    
];