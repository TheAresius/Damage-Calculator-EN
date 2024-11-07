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
        path: 'images/monsters/general monster.png'
    },

    "1": {
        name: "Dark Gorgos (1F - ToD)",
        description: stringIsBoss + "Can be found on the first stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>943k (37 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png'
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
        path: 'images/monsters/gadosen 1.png'
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
        path: 'images/monsters/kamiki 1.png'
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
        path: 'images/monsters/gaikoz 1.png'
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
        path: 'images/monsters/cazeaje.png'
    },

    "6": {
        name: "Dark Gorgos (6F - ToD)",
        description: stringIsNotBoss + "Can be found on the sixth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 65% of its HP to defeat it.",
        path: 'images/monsters/gorgos 2.png'
    },

    "17": {
        name: "Giant Dark Gorgos (6F - ToD)",
        description: stringIsBoss + "Can be found on the sixth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.31M (139 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png'
    },

    "7": {
        name: "Vengeful Gaikoz (7F - ToD)",
        description: "Only the two summoned Gaikoz are considered bosses. Can be found on the seventh stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.81M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 50% of its HP to defeat it.",
        path: 'images/monsters/gaikoz 2.png'
    },

    "16": {
        name: "Vengeful Gaikoz (7F - ToD)",
        description: "Only the two summoned Gaikoz are considered bosses. Can be found on the seventh stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.97M (167 bars)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png'
    },

    "15": {
        name: "Wicked Kamiki (8F - ToD)",
        description: "Only the two summoned Kamiki are considered bosses. Can be found on the eighth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.37M</span>" + stringScaleHP
        },
        extra: "- Kamiki will use a freezing mist every 20 seconds on a selected region in the map. It will quickly damage your HP.",
        path: 'images/monsters/kamiki 2.png'
    },

    "8": {
        name: "Wicked Kamiki (8F - ToD)",
        description: "Only the two summoned Kamiki are considered bosses. Can be found on the eighth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.37M (141 bars)</span>."
        },
        extra: "- Kamiki will use a freezing mist every 20 seconds on a selected region in the map. It will quickly damage your HP.",
        path: 'images/monsters/kamiki 1.png'
    },

    "34": {
        name: "Hellish Gardosen (9F - ToD)",
        description: "Only the two summoned Gardosen are considered bosses. Can be found on the ninth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M</span>" + stringScaleHP
        },
        extra: "- It's necessary to damage only 33% of its HP to defeat it.",
        path: 'images/monsters/gadosen 2.png'
    },

    "9": {
        name: "Hellish Gardosen (9F - ToD)",
        description: "Only the two summoned Gardosen are considered bosses. Can be found on the ninth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M (353 bars)</span>."
        },
        extra: "- Gardosen will use his 'soul absorption' attack every 40 seconds. If you stay in the red area, it will kill you no matter what.",
        path: 'images/monsters/gadosen 1.png'
    },

    "10": {
        name: "Kaze'aze (10F - ToD)",
        description: stringIsBoss + "Can be found on the tenth stage of Tower of Disappearance (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>52.77M (2401 bars)</span>."
        },
        extra: "- From time to time Kaze'aze will teleport herself to the center of the map and start concentrating energy. A set of marks will appear in the floor showing the sequence of her attack.<br>"+
               "- If you use skills next to her during this action, you can delay her attack and end up killing your party members.",
        path: 'images/monsters/cazeaje.png'
    },

    "11": {
        name: "Berkas (body)",
        description: stringIsBoss + "Can be found in the Berkas's Lair raid dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>7.90M (307 bars)</span>" + stringScaleHP
        },
        extra: "- Due to its size, Berkas has many hitbox regions and the damage dealt to it is spread along its body and legs. <br>"+
               "- The damage dealt to its legs is reduced by 60%",
        path: 'images/monsters/berkas.png'
    },

    "12": {
        name: "Berkas (legs)",
        description: stringIsBoss + "Can be found in the Berkas's Lair raid dungeon.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>40.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>40.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>53.12%</span>",
            health: stringEstHP + "<span class='yellow'>7.90M (307 bars)</span>" + stringScaleHP
        },
        extra: "- Due to its size, Berkas has many hitbox regions and the damage dealt to it is spread along its body and legs. <br>"+
               "- The damage dealt to its legs is reduced by 60%",
        path: 'images/monsters/berkas.png'
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
        path: 'images/monsters/harkyon.png'
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
        path: 'images/monsters/harkyon.png'
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
        path: 'images/monsters/devourer.png'
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
        path: 'images/monsters/crusher.png'
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
                        "<span class='tab'>- 2° fase <span class='yellow'>2.51M</span></span>.<br>"+
                        "<span class='tab'>- 3° fase <span class='yellow'>4.36M</span></span>.<br>"+
                        "<span class='tab'>- 4° fase <span class='yellow'>6.00M</span></span>."
        },
        extra: "- The enemy will use 'casting' 60 seconds after being defeated for the first time, on stages 3 and 4.<br>"+
               "- 5 seconds after being reborn the enemy will use 'casting'.<br>"+
               "- It is necessary do deal 1M damage in order to interrupt it.",
        path: 'images/monsters/enforcer.png'
    },

    "21": {
        name: "Voidal Gazer",
        description: stringIsBoss + "Can be found in the Void (Taint) raid dungeon after the first stage.<br>"+
                                       "There is a 20% taint debuff in this dungeon. The debuff has been applied automatically in the calculator.<br>"+
                                       "The buff acquired from the Voidal Enforcer, present on phases 2, 3, and 4, is <span class='yellow'>200%</span>. Add this value to your buffs if desired.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- 2° fase <span class='yellow'>25.08M (1003 bars)</span></span>.<br>"+
                        "<span class='tab'>- 3° fase <span class='yellow'>50.12M (2005 bars)</span></span>.<br>"+
                        "<span class='tab'>- 4° fase <span class='yellow'>70.18M (2807 bars)</span></span>."
        },
        extra: "- Voidal Gazer will use 'casting' every 60 seconds.<br>"+
               "- In order to interrupt it, it is necessary to deal 2M damage on stage 3 and 3M damage on stage 4.",
        path: 'images/monsters/gazer.png'
    },
    "22": {
        name: "Rofnus (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>23.08%</span>",
            defense2: stringDef2 + "<span class='yellow'>23.08%</span>",
            defense3: stringDef3 + "<span class='yellow'>39.90%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>."
        },
        extra: "Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png'
    },
    "23": {
        name: "Rofnus (HP regeneration) (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the first stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>"
        },
        extra: "Rofnus is more susceptible to damage when recovering HP. Your final damage is increased by 30%.",
        path: 'images/monsters/rofnus.png'
    },

    "24": {
        name: "Skeram (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the second stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>10.00M</span>"
        },
        extra: "-",
        path: 'images/monsters/skeram.png'
    },

    "25": {
        name: "Chaotic Witch (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png'
    },

    "26": {
        name: "Chaotic Witch (purple protection) (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png'
    },

    "27": {
        name: "Chaotic Witch (red protection) (Infinity Cloister)",
        description: stringIsNotBoss + "Can be found on the third stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>58.34%</span>",
            defense2: stringDef2 + "<span class='yellow'>58.34%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- When not using the protection skill, the Chaotic Witch receives 25% more damage from normal attacks and pet when compared to enemies with the same defense.<br>"+
               "- When the <span class='purple'>purple protection</span> is active, the Chaotic Witch receives 100% more damage from normal attacks and pet, and reduces damage from skills by 73%. <br>"+
               "- When the <span class='red'>red protection</span>, is active, the Chaotic Witch reduces damage from normal attacks and pet by 66% and receives 60% more damage from skills.",
        path: 'images/monsters/dekane.png'
    },

    "28": {
        name: "Duell (Infinity Cloister)",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (644 bars)</span>"
        },
        extra: "- Duell will use 'casting' up to three consecutive times and it is necessary to deal 1.7M damage to interrupt it.<br>"+
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack patern.<br>"+
               "- When interrupted three consecutive times, Duell will be weakened and receive 50% more damage from all sources.",
        path: 'images/monsters/duel.png'
    },

    "29": {
        name: "Duell (weakened) (Infinity Cloister)",
        description: stringIsBoss + "Can be found on the last stage of Infinity Cloister on dificulty 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (640 bars)</span>"
        },
        extra: "- Duell will use 'casting' up to three consecutive times and it is necessary to deal 1.7M damage to interrupt it.<br>"+
               "- If not interrupted, Duell will release a powerful attack and return to his usual attack patern.<br>"+
               "- When interrupted three consecutive times, Duell will be weakened and receive 50% more damage from all sources.",
        path: 'images/monsters/duel.png'
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
        path: 'images/monsters/periett.png'
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
        path: 'images/monsters/thanatos.png'
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
        path: 'images/monsters/evilis.png'
    },
    "33": {
        name: "Kassias Grandiel",
        description: stringIsBoss + "Can be found on floor 30 from Wizard's Labyrinth.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>17.41M</span>"
        },
        extra: "- When Grandiel gets below 80% HP he can become invulnerable and summon Drawl and Veron, which will attack simultaneously. It is necessary to defeat them in order to make Grandiel vulnerable to damage again.<br>"+
               "- After defeating Drawl and Veron, and when Grandiel is below 50% HP, he can summon his 5 clones, which will attack simultaneously.",
        path: 'images/monsters/grandiel.png'
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
        path: 'images/monsters/guardiao.png'
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
        path: 'images/monsters/guardiao.png'
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
        path: 'images/monsters/gaian.png'
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
        path: 'images/monsters/gaian.png'
    },

};
