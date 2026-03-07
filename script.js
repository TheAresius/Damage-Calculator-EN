// default values
var ATK_factor = 0.0168;
var sATK_factor = 0.007;
var Pet_factor = 0.00477148;

function calculate() {
  // usual defense values
  var DEF = 0;
  var sDEF = 0.21875;

  // stores the user input values and fixes the decimal separator
  var yourLV = Number(
    window.document.querySelector("input#yourLV_string").value
  );
  var monsterLV = Number(
    window.document.querySelector("input#monsterLV_string").value
  );
  var ATK = Number(window.document.querySelector("input#ATK_string").value);
  var sATK = Number(window.document.querySelector("input#sATK_string").value);
  var crit_r = document.querySelector("input#crit_r_string").value;
  
  crit_r = Number(crit_r.replace(/,/g, "."));
  var crit_d = window.document.querySelector("input#crit_d_string").value;
  crit_d = Number(crit_d.replace(/,/g, "."));
  
  var harrier_debuff = window.document.querySelector(
    "input#harrier_d_string"
  ).value;
  harrier_debuff = Number(harrier_debuff.replace(/,/, "."));
  var harrier_resist = window.document.querySelector(
    "input#harrier_r_string"
  ).value;
  harrier_resist = Number(harrier_resist.replace(/,/, "."));

  var buffs = window.document.querySelector("input#buffs_string").value;
  buffs = Number(buffs.replace(/,/, "."));

  var asd_buffs = window.document.querySelector("input#asd_buffs_string").value;
  asd_buffs = Number(asd_buffs.replace(/,/, "."));

  var pola_buffs = window.document.querySelector("input#pola_buffs_string").value;
  pola_buffs = Number(pola_buffs.replace(/,/, "."));

  var boss_dmg_buffs = window.document.querySelector("input#boss_buffs_string").value;
  boss_dmg_buffs = Number(boss_dmg_buffs.replace(/,/, "."));

  var b_atk = window.document.querySelector("input#back_attack_string").value;
  b_atk = Number(b_atk.replace(/,/, "."));

  var def_pierce = window.document.querySelector("input#def_multi_string").value;
  def_pierce = Number(def_pierce.replace(/,/, "."));
  
  var skill_multi = window.document.querySelector("input#skill_multi_string").value;
  skill_multi = Number(skill_multi.replace(/,/g, "."));

  var specific_skill = window.document.querySelector("input#specific_skill_string").value;
  specific_skill = Number(specific_skill.replace(/,/g, "."));

  var specific_tier = window.document.querySelector("input#specific_tier_string").value;
  specific_tier = Number(specific_tier.replace(/,/g, "."));

  // extra status for modifiers
  var final_crit_r = crit_r;
  var final_crit_d = crit_d;
  var final_def_pierce = def_pierce

  // setup for possible user input errors
  resetAllInputErrors();
  let hasError = false;

  // specific enemy selection
  var enemyElement = document.getElementById("Enemy_list");

  
  var enemy = enemyElement.value;
  if (enemy != "0") {
    yourLV = 90;
    monsterLV = 90;
  }
  if (
    enemy === "1" ||
    enemy === "2" ||
    enemy === "3" ||
    enemy === "4" ||
    enemy === "6" ||
    enemy === "7" 
    
  ) {
    DEF = 0.5;
    sDEF = 0.3;
  } else if (enemy === "5") {
    DEF = 0.6;
    sDEF = 0.3;
  } else if (enemy === "17" || enemy === "9" || enemy === "10" || enemy === "34") {
    DEF = 0.6;
    sDEF = 0.4;
  } else if (enemy === "8" || enemy=== "15" || enemy === "16"){
    DEF = 0.5;
    sDEF = 0.4;
  } else if (enemy === "13") {
    DEF = 0.3;
    sDEF = 0.4;
  } else if (enemy === "11") {
    DEF = 0;
    sDEF = 0.21875;
  } else if (enemy === "12") {
    DEF = 0.4;
    sDEF = 0.53124;
  } else if (enemy === "14") {
    DEF = 0.86;
    sDEF = 0.88;
  } else if (enemy === "18" || enemy === "19" || enemy ==="20") {
    DEF = 0;
    sDEF = 0.21875;
    harrier_debuff = 20;
  } else if (enemy === "21"){
    DEF = 2/3;
    sDEF = 71/96;
    harrier_debuff = 20;
  } else if(enemy==="22"){
    DEF = 0.23075;
    sDEF = 0.399025
  } else if(enemy==="23"){
    DEF = 0;
    sDEF = 0.21875;
  } else if(enemy==="25"){
    DEF = -0.25;
    sDEF = 0.0234;
  } else if(enemy==="26"){
    DEF = -1.5;
    sDEF = 71/96;
  } else if(enemy==="27"){
    DEF = 0.58335;
    sDEF = -0.56255;
  } else if(enemy==="28"||enemy==="42" ||enemy==="59"){
    DEF = 2/3;
    sDEF = 71/96;
  } else if(enemy==="29"||enemy==="43"){
    DEF = 0.5;
    sDEF = 0.609375;
  } else if(enemy==="35"){
    DEF = 0;
    sDEF = 0.21875;
  } else if(enemy==="36"){
    DEF = -17/3;
    sDEF = -4.2084;
  } else if(enemy==="37"){
    DEF = 0.2;
    sDEF = 0.375;
  } else if(enemy==="38"){
    DEF = -1;
    sDEF = -0.5625;
  } else if(enemy==="44" || enemy==="46") {
    DEF = 0.9;
    sDEF = 236/256;
    harrier_debuff = 20;
  } else if(enemy==="45" || enemy==="47") {
    DEF = 69/99;
    sDEF = 0.282596;
    harrier_debuff = 20;
  } else if(enemy==="48" || enemy==="49") {
    DEF = 2/3;
    sDEF = 71/96;
    harrier_debuff = 20;
  } else if(enemy==="50") {
    DEF = 5/6;
    sDEF = 167/192;
    harrier_debuff = 20;
  } else if(enemy==="51") {
    DEF = 5/6;
    sDEF = 67/192;
    harrier_debuff = 20;
  } else if(enemy==="52") {
    DEF = -2/3;
    sDEF = 167/192;
    harrier_debuff = 20;
  } else if (enemy==="53" || enemy==="54" || enemy==="56" || enemy==="58") {
    DEF = 0.5;
    sDEF = 78/128;
  } else if (enemy==="55") {
    DEF = 0.9;
    sDEF = 59/64;
  } else if (enemy==="57") {
    DEF = 0;
    sDEF = 0.21875;
  } else if (enemy==="60") {
    DEF = 0.6;
    sDEF = 11/16;
  } else if (enemy==="61" || enemy==="63" || enemy==="64" || enemy==="65" || enemy==="66" || enemy==="67" || enemy==="68" || enemy==="69" || enemy==="70" || enemy==="72") {
    DEF = 0;
    sDEF = 0.21875;
  } else if (enemy==="71") {
    DEF = 2/3;
    sDEF = 71/96;
  } else if (enemy==="73") {
    DEF = 0.95;
    sDEF = 123/128;
    harrier_debuff = 30;
  } else if (enemy==="74" || enemy==="75") {
    DEF = 0;
    sDEF = 0.21875;
    harrier_debuff = 30;
  } else if (enemy==="76" || enemy==="78" || enemy==="80") {
    DEF = 0.5;
    sDEF = 39/64;
    harrier_debuff = 30;
  } else if (enemy==="77" || enemy==="79" || enemy==="81" || enemy==="84") {
    DEF = -1/3;
    sDEF = -1/24;
    harrier_debuff = 30;
  } else if (enemy==="82") {
    DEF = 0;
    sDEF = 0.21875;
    harrier_debuff = 30;
  } else if(enemy==="83") {
    DEF = 2/3;
    sDEF = 71/96;
    harrier_debuff = 30;
  } else if (enemy==="84" || enemy==="86") {
    DEF = 0;
    sDEF = 0.21875;
    harrier_debuff = 30;
  } else if (enemy==="85") {
    DEF = 0.5;
    sDEF = 39/64;
    harrier_debuff = 30;
  }
  
  var selectedOption = document.getElementById('Enemy_list').value;
  var IsBoss = enemyData[selectedOption].IsBoss;
  
  // check for user input errors
  if (yourLV < 1 || yourLV > 90 || !Number.isInteger(yourLV) || isNaN(yourLV)) {
    setErrorOnInputById("yourLV_string");
    hasError = true;
}
if (monsterLV < 1 || monsterLV > 150 || !Number.isInteger(monsterLV) || isNaN(monsterLV)) {
    setErrorOnInputById("monsterLV_string");
    hasError = true;
}

if (ATK < 0 || !Number.isInteger(ATK) || isNaN(Number(ATK))) {
    setErrorOnInputById("ATK_string");
    hasError = true;
}
if (sATK < 0 || !Number.isInteger(sATK) || isNaN(Number(sATK))) {
    setErrorOnInputById("sATK_string");
    hasError = true;
}

const floatChecks = [
    { val: crit_r, id: "crit_r_string" },
    { val: crit_d, id: "crit_d_string" },
    { val: harrier_debuff, id: "harrier_d_string" },
    { val: harrier_resist, id: "harrier_r_string" },
    { val: buffs, id: "buffs_string" },
    { val: asd_buffs, id: "asd_buffs_string" },
    { val: pola_buffs, id: "pola_buffs_string" },
    { val: boss_dmg_buffs, id: "boss_buffs_string" },
    { val: skill_multi, id: "skill_multi_string" },
    { val: b_atk, id: "back_attack_string" },
    { val: specific_skill, id: "specific_skill_string" },
    { val: specific_tier, id: "specific_tier_string" }
];

floatChecks.forEach(item => {
    if (item.val < 0 || isNaN(item.val)) {
        setErrorOnInputById(item.id);
        hasError = true;
    }
});

if (def_pierce < 0 || isNaN(def_pierce) || def_pierce >= 100) {
    setErrorOnInputById("def_multi_string");
    hasError = true;
}

const validHarrierEnemies = ["0","15","18","19","20","21","35","36","37","38","44","45","46","47","48","49","50","51","52","73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86"];

if (harrier_debuff > 0 && !validHarrierEnemies.includes(String(enemy))) {
    showAlert("Attention", stringsErrorHarrier, "warning", "Ok");
    setErrorOnInputById("harrier_d_string");
    setErrorOnInputById("Enemy_list");
    hasError = true;
}

if (hasError) {
  showAlert("Attention", stringsErrorInvalidData, "warning", "Ok")
    return;
  } else {
    
    var buff_multi = 1;

    const sBuffs = window.storedBuffStats || { buff:0, crit:0, ignore_def:0, pet_buff:0, resist_all:0, resist_normal:0, resist_special:0, crit_dmg:0 };
    const sDebuffs = window.storedDebuffStats || { ignore_def:0 };

    if (document.getElementById('pola_buffs_checkbox').checked) {
        buff_multi += pola_buffs / 100;
    }
    if (IsBoss && document.getElementById('boss_buffs_checkbox').checked) {
        buff_multi += boss_dmg_buffs / 100;
    }

    var extraResistAll = 0;
    var extraResistNormal = 0;
    var extraResistSpecial = 0;

    if (document.getElementById('other_buffs_checkbox').checked) {
        buff_multi += buffs / 100;
        buff_multi += sBuffs.buff / 100;
        final_crit_r += sBuffs.crit;
        final_crit_d += sBuffs.crit_dmg;
        final_def_pierce += sBuffs.ignore_def; 
        extraResistAll = Math.abs(sBuffs.resist_all);
        extraResistNormal = Math.abs(sBuffs.resist_normal);
        extraResistSpecial = Math.abs(sBuffs.resist_special);
    }

    if (document.getElementById('def_multi_checkbox').checked) {
        final_def_pierce += def_pierce;
        final_def_pierce += sDebuffs.ignore_def;
    }
    if (!document.getElementById('back_buffs_checkbox').checked) {
        b_atk = 0;
    }

    // logic for level difference
    if (yourLV - monsterLV <= 5) {
      var valid_lv_dif = 0;
    } else {
      var valid_lv_dif = yourLV - monsterLV - 5;
    }

    var isNormalChecked = document.getElementById("Normal").checked;
    var isSpecialChecked = document.getElementById("Special").checked;
    var isPetChecked = document.getElementById("Pet").checked;

    var calculationType = "";

    // selection of damage type and the actual 'damage formula'
    if (isNormalChecked) {
      calculationType = stringsComboDamage;

      var final_multi = (1 - extraResistAll/100) * (1 - extraResistNormal/100);
      if (final_multi<0) {
        final_multi = 0
      }

      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          ATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) / 100) * buff_multi * final_multi;
    } else if (isSpecialChecked) {
      calculationType = stringsSkillDamage;

      var final_multi = (1 - extraResistAll/100) * (1 - extraResistSpecial/100);
      if (final_multi<0) {
        final_multi = 0
      }

      var special_buff_multi = buff_multi;
      if (document.getElementById('asd_buffs_checkbox').checked) {
        special_buff_multi += asd_buffs / 100;
      }
      if (document.getElementById('specific_skill_checkbox').checked) {
        special_buff_multi += specific_skill / 100;
      }
      if (document.getElementById('specific_tier_checkbox').checked) {
        special_buff_multi += specific_tier / 100;
      }

      var effecttive_ATK = ATK + sATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - sDEF) *
          sATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) / 100) *
          special_buff_multi *
          final_multi;
    } else if (isPetChecked) {
      calculationType = stringsPetDamage;

      var final_multi = (1 - extraResistAll/100) * (1 - extraResistNormal/100) * (1 + pet_buff/100);
      if (final_multi<0) {
        final_multi = 0
      }

      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          Pet_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) / 100) * buff_multi * final_multi;
    }
    
    // harrier world debuff and adjustments
    if (harrier_debuff > 0) {
      var harrier_final = (harrier_debuff - harrier_resist) / 100;
      if (harrier_final < 0) {
        harrier_final = 0;
      }
      final_dmg = final_dmg * (1 - harrier_final);
      var new_crit_d = final_crit_d - 250;
      var new_crit_r = crit_r + window.crit_extra - 20;
      var new_b_atk = 130 + b_atk - 50
      if (new_b_atk < 100) {
        new_b_atk = 100
      }
      if (new_crit_d < -50) {
        new_crit_d = -50;
      }
      if (new_crit_r < 0) {
        new_crit_r = 0;
      }
      if (1 - harrier_debuff / 100 + harrier_resist / 100 < 0) {
        final_dmg = 0;
      }
    } else {
      new_crit_d = final_crit_d;
      new_crit_r = crit_r;
      new_b_atk = 130 + b_atk
    }


    // back atk override for specific enemies 
    if (enemy === "20" || enemy === "21" || enemy === "44" || enemy === "45" || enemy === "46" || enemy === "47" || enemy === "50" || enemy === "51" || enemy === "52") {
        new_b_atk = 100; 
    } 
    else if (enemy === "73") {
        new_b_atk *= (80 / 3);
    }

    if (new_crit_r > 100) {
      new_crit_r = 100;
    }


    // presentation of results
    var ui_final_dmg, ui_corrected_final_dmg, avgCritDmg;
    var ui_back_normal, ui_back_critical, ui_back_average;

    // preventive check if def pierce >= 100%
    if (final_def_pierce >= 100) {
      var msg = "-";
          
      showAlert('Defense ignore limit',stringsErrorDef, 'error');

      ui_final_dmg = msg;
      ui_corrected_final_dmg = msg;
      avgCritDmg = msg;

      ui_back_normal = msg;
      ui_back_critical = msg;
      ui_back_average = msg;

    } else {
        var def_factor = (1 - final_def_pierce/100); 

        avgCritDmg = Math.round((final_dmg * (new_crit_r / 100) * (1.5 + new_crit_d / 100) + final_dmg * (1 - new_crit_r / 100)) / def_factor);

        ui_final_dmg = Math.round(final_dmg / def_factor);
        ui_corrected_final_dmg = Math.round(final_dmg * (1.5 + new_crit_d / 100) / def_factor);

        ui_back_normal = Math.round(ui_final_dmg * new_b_atk/100);
        ui_back_critical = Math.round(ui_corrected_final_dmg * new_b_atk/100 );
        ui_back_average = Math.round(avgCritDmg * new_b_atk/100);

    }

     showResultOnUi(ui_final_dmg, ui_corrected_final_dmg, avgCritDmg, ui_back_normal, ui_back_critical, ui_back_average);

    // get selected option string text
    var enemySelectedElement = enemyElement.options[enemyElement.selectedIndex].innerHTML;

        // fix decimal places
        crit_r = Number(crit_r).toFixed(2);
        crit_d = Number(crit_d).toFixed(2);
        harrier_debuff = Number(harrier_debuff).toFixed(2);
        harrier_resist = Number(harrier_resist).toFixed(2);

        // helper for safe saving in case def_pierce >=100
        const safeSave = (val) => (typeof val === 'number') ? val : 0;

        var resultEntry = {
            id: Date.now(),
            count: historyData.length + 1, 
            customName: null, 

            meta: {
              // saves the states of every item
              category: document.getElementById("category_select").value,
              enemyId: document.getElementById("Enemy_list").value,
              
              chk_asd: document.getElementById('asd_buffs_checkbox').checked,
              chk_pola: document.getElementById('pola_buffs_checkbox').checked,
              chk_boss: document.getElementById('boss_buffs_checkbox').checked,
              chk_other: document.getElementById('other_buffs_checkbox').checked,
              chk_back: document.getElementById('back_buffs_checkbox').checked,
              chk_def: document.getElementById('def_multi_checkbox').checked,
              chk_skill: document.getElementById('specific_skill_checkbox').checked,
              chk_tier: document.getElementById('specific_tier_checkbox').checked,

              // converts buffs/debuffs map into arrays for result loading if needed
              activeBuffsList: window.activeBuffs && window.activeBuffs.size > 0 
                  ? Array.from(window.activeBuffs.entries()) 
                  : [],
              activeDebuffsList: window.activeDebuffs && window.activeDebuffs.size > 0 
                  ? Array.from(window.activeDebuffs.entries()) 
                  : [],

              savedBuffExtra: window.buff_extra || 0,
              savedCritExtra: window.crit_extra || 0,
              savedDefPierce: window.ignore_def || 0,
              savedResistAll: window.resist_all || 0,
              savedResistNormal: window.resist_normal || 0,
              savedResistSpecial: window.resist_special || 0,
              savedCdmg: window.crit_dmg || 0,

              isNormal: document.getElementById("Normal").checked,
              isSpecial: document.getElementById("Special").checked,
              isPet: document.getElementById("Pet").checked
            },

            yourLV: yourLV,
            monsterLV: monsterLV,
            ATK: ATK,
            sATK: sATK,
            crit_r: crit_r,
            crit_d: crit_d,
            harrier_debuff: harrier_debuff,
            harrier_resist: harrier_resist,
            asd_buffs: asd_buffs,
            pola_buffs: pola_buffs,
            boss_dmg_buffs: boss_dmg_buffs,
            buffs: buffs,
            b_atk: b_atk,
            def_pierce: def_pierce,
            skill_multi: skill_multi,
            
            ui_final_dmg: safeSave(ui_final_dmg),
            ui_corrected_final_dmg: safeSave(ui_corrected_final_dmg),
            avgCritDmg: safeSave(avgCritDmg),
            ui_back_normal: safeSave(ui_back_normal),
            ui_back_critical: safeSave(ui_back_critical),
            ui_back_average: safeSave(ui_back_average),
            
            calculationType: calculationType,
            enemySelectedElement: enemySelectedElement,
            specific_skill: specific_skill,
            specific_tier: specific_tier
        };

        // adds to history
        historyData.push(resultEntry);
        saveHistory();
        renderHistory();
    }
}

// reverse damage calc: simulation of base damage
async function applyReverseCalculation() {
    const rawValue = document.getElementById('rev_dmg_input').value;
    const damageType = document.getElementById('rev_dmg_type').value;
    const baseInput = document.getElementById("skill_multi_string");
    const damageInput = Number(rawValue.replace(/[,.]/g, ""));

    if (!damageInput) {
        showAlert('Attention', stringsErrorMissingDmg, 'error');
        return;
    }

    const originalBaseValue = baseInput.value;
    const SIMULATION_BASE = 100000;
    baseInput.value = SIMULATION_BASE;
    const initialHistoryLength = historyData.length;
    
    // calls calculate to check for errors
    calculate();

    // if the history size didn't change, it means there was an error
    if (historyData.length === initialHistoryLength) {
        // restores original base value
        baseInput.value = originalBaseValue;

        if (window.hideReverseModal) {
            window.hideReverseModal();
        }
        setTimeout(() => {
            showAlert(
                'Data error', 
                stringsErrorDataError, 
                'error'
            );
        }, 100);

        return;
    }

    // removes test simulation from history
    const simulationResult = historyData.pop(); 
    saveHistory();   
    renderHistory(); 

    // simulation
    const simulatedDamage = simulationResult[damageType];
    
    if (simulatedDamage <= 0 || isNaN(simulatedDamage)) {
        baseInput.value = originalBaseValue;
        
        if (window.hideReverseModal) {
            window.hideReverseModal();
        }
        
        showAlert('Error', stringsErrorInvalidDmg, 'error');
        return;
    }

    // simulation math
    const multiplierFactor = simulatedDamage / SIMULATION_BASE;
    const realBase = Number(damageInput) / multiplierFactor;
    const finalResult = Math.round(realBase * 100) / 100;

    if (typeof baseDmgUpdateFlash === 'function') {
        baseDmgUpdateFlash("skill_multi_string");
    }
    
    // updates UI with simulated value
    baseInput.value = finalResult;
    calculate();
    
    if (window.hideReverseModal) {
        window.hideReverseModal();
    }
    
    // swal toast
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        background: '#1f293a',
        color: '#fff'
    });
    Toast.fire({ icon: 'success', title: `Obtained base damage: ${finalResult}` });
}
