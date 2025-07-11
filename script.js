//Default values
var ATK_factor = 0.0168;
var sATK_factor = 0.007;
var Pet_factor = 0.00477148;
var count = 0;
function calculate() {
  //Deufalt values
  var DEF = 0;
  var sDEF = 0.21875;

  //Stores the user input values and fixes the decimal separator
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

  //Setup for possible user input errors
  setInputBorderTransparent();

  //Specific enemy selection
  var enemyElement = document.getElementById("Enemy_list");
  var enemy = enemyElement.value;
  if (enemy != "0") {
    yourLV = 85;
    monsterLV = 85;
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
  } else if (enemy === "18" || enemy === "19" || enemy === "20") {
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
  }

  var selectedOption = document.getElementById('Enemy_list').value;
  var IsBoss = enemyData[selectedOption].IsBoss;

  
  //Check for user input errors
  if (
    yourLV < 1 ||
    yourLV > 85 ||
    Number.isInteger(yourLV) == false ||
    isNaN(yourLV) == true ||
    +monsterLV < 1 ||
    monsterLV > 150 ||
    Number.isInteger(monsterLV) == false ||
    isNaN(monsterLV) == true ||
    +ATK < 0 ||
    Number.isInteger(Number(ATK)) == false ||
    isNaN(ATK) == true ||
    +sATK < 0 ||
    Number.isInteger(sATK) == false ||
    isNaN(Number(sATK)) == true ||
    +crit_r < 0 ||
    isNaN(crit_r) == true ||
    +crit_d < 0 ||
    isNaN(crit_d) == true ||
    +harrier_debuff < 0 ||
    isNaN(harrier_debuff) == true ||
    +harrier_resist < 0 ||
    isNaN(harrier_resist) == true ||
    +buffs < 0 ||
    isNaN(buffs) == true ||
    +skill_multi < 0 ||
    isNaN(skill_multi) == true ||
    +b_atk <0 ||
    isNaN(b_atk) == true ||
    +asd_buffs < 0 || 
    isNaN(asd_buffs) ||
    +pola_buffs < 0 || 
    isNaN(pola_buffs) ||
    +boss_dmg_buffs < 0 ||
    isNaN(boss_dmg_buffs) ||
    +def_pierce <0 ||
    isNaN(def_pierce) == true||
    +def_pierce >= 100 ||
    isNaN(def_pierce) == true
  ) {
    window.alert(stringsErrorInvalidData);

    if (
      yourLV < 1 ||
      yourLV > 85 ||
      Number.isInteger(yourLV) == false ||
      isNaN(yourLV) == true
    ) {
      setErrorOnInputById("yourLV_string");
    }
    if (
      monsterLV < 1 ||
      monsterLV > 150 ||
      Number.isInteger(monsterLV) == false ||
      isNaN(monsterLV) == true
    ) {
      setErrorOnInputById("monsterLV_string");
    }
    if (
      ATK < 0 ||
      Number.isInteger(ATK) == false ||
      isNaN(Number(ATK)) == true
    ) {
      setErrorOnInputById("ATK_string");
    }
    if (
      sATK < 0 ||
      Number.isInteger(sATK) == false ||
      isNaN(Number(sATK)) == true
    ) {
      setErrorOnInputById("sATK_string");
    }
    if (crit_r < 0 || isNaN(crit_r) == true) {
      setErrorOnInputById("crit_r_string");
    }
    if (crit_d < 0 || isNaN(crit_d) == true) {
      setErrorOnInputById("crit_d_string");
    }
    if (harrier_debuff < 0 || isNaN(harrier_debuff) == true) {
      setErrorOnInputById("harrier_d_string");
    }
    if (harrier_resist < 0 || isNaN(harrier_resist) == true) {
      setErrorOnInputById("harrier_r_string");
    }
    if (buffs < 0 || isNaN(buffs) == true) {
      setErrorOnInputById("buffs_string");
    } 
    if (asd_buffs < 0 || isNaN(asd_buffs) == true) {
      setErrorOnInputById("asd_buffs_string");
    }

    if (pola_buffs < 0 || isNaN(pola_buffs) == true) {
      setErrorOnInputById("pola_buffs_string")
    }

    if (boss_dmg_buffs < 0 || isNaN(boss_dmg_buffs) == true) {
      setErrorOnInputById("boss_buffs_string")
    }

    if (skill_multi < 0 || isNaN(skill_multi) == true) {
      setErrorOnInputById("skill_multi_string");
    }
    if (b_atk < 0 || isNaN(b_atk) == true) {
      setErrorOnInputById("back_attack_string")
    }
    if (def_pierce < 0 || isNaN(def_pierce) == true || def_pierce >= 100) {
      setErrorOnInputById("def_multi_string")
    }
  } else if (harrier_debuff > 0 && enemy != "0" && enemy != "15" && enemy!="18" && enemy!="19" && enemy!="20" && enemy!="21" && enemy!="35" && enemy!="36" && enemy!="37"&& enemy!="38" 
              && enemy!="44" && enemy!="45" && enemy!="46" && enemy!="47" && enemy!="48" && enemy!="49" && enemy!="50" && enemy!="51" && enemy!="52") {
    window.alert(stringsErrorHarrier);

    setErrorOnInputById("harrier_d_string");
    setErrorOnInputById("Enemy_list");
  } else {
    //Removes the red borders and procedes with the calculation
    removeRedBorders();
    var buff_multi = 1

    if (document.getElementById('asd_buffs_checkbox').checked) {
      buff_multi += asd_buffs/100;
    }
    if (document.getElementById('asd_buffs_checkbox').checked == false) {
      asd_buffs = 0;
    }

    if (document.getElementById('pola_buffs_checkbox').checked) {
      buff_multi += pola_buffs/100;
    }
    if (document.getElementById('pola_buffs_checkbox').checked == false) {
      pola_buffs = 0;
    }

    if (IsBoss && document.getElementById('boss_buffs_checkbox').checked) {
      buff_multi += boss_dmg_buffs / 100;
    } else {
        boss_dmg_buffs = 0;
    }

    if (document.getElementById('other_buffs_checkbox').checked) {
      buff_multi += buffs/100;
    }
    if (document.getElementById('other_buffs_checkbox').checked == false) {
      buffs = 0;
    }

    if (document.getElementById('back_buffs_checkbox').checked == false) {
      b_atk = 0
    }

    if (document.getElementById('def_multi_checkbox').checked == false) {
      def_pierce = 0
    }




    

    //Fixes the level difference
    if (yourLV - monsterLV <= 5) {
      var valid_lv_dif = 0;
    } else {
      var valid_lv_dif = yourLV - monsterLV - 5;
    }

    var isNormalChecked = document.getElementById("Normal").checked;
    var isSpecialChecked = document.getElementById("Special").checked;
    var isPetChecked = document.getElementById("Pet").checked;

    var calculationType = "";

    //Selection of damage type and does some math
    if (isNormalChecked) {
      calculationType = stringsComboDamage;
      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          ATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        (buff_multi - asd_buffs/100);
    } else if (isSpecialChecked) {
      calculationType = stringsSkillDamage;
      var effecttive_ATK = ATK + sATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - sDEF) *
          sATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        buff_multi;
    } else if (isPetChecked) {
      calculationType = stringsPetDamage;
      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          Pet_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        (buff_multi - asd_buffs/100);
      //Remember: Red pet magic stone (4%, 8% or 10%) multiplies 'final_dmg' by 1.04, 1.08 or 1.1. It is not a type of buff for 'buff_multi'
    }
    
    //Harrier World debuff and adjustments
    if (harrier_debuff > 0) {
      var harrier_final = (harrier_debuff - harrier_resist) / 100;
      if (harrier_final < 0) {
        harrier_final = 0;
      }
      final_dmg = final_dmg * (1 - harrier_final);
      var new_crit_d = crit_d - 250;
      var new_crit_r = crit_r - 20;
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
      new_crit_d = crit_d;
      new_crit_r = crit_r;
      new_b_atk = 130 + b_atk
    }
    if (new_crit_r > 100) {
      new_crit_r = 100;
    }

    //Presentation of results
    var avgCritDmg = Math.round((final_dmg * (new_crit_r / 100) * (1.5 + new_crit_d / 100) + final_dmg * (1 - new_crit_r / 100)) / (1 - def_pierce/100));

    var ui_final_dmg = Math.round(final_dmg / (1 - def_pierce/100));
    var ui_corrected_final_dmg = Math.round(final_dmg * (1.5 + new_crit_d / 100) / (1 - def_pierce/100));

    var ui_back_normal = Math.round(ui_final_dmg * new_b_atk/100)
    var ui_back_critical = Math.round(ui_corrected_final_dmg * new_b_atk/100)
    var ui_back_average = Math.round(avgCritDmg * new_b_atk/100)

    showResultOnUi(ui_final_dmg, ui_corrected_final_dmg, avgCritDmg, ui_back_normal, ui_back_critical, ui_back_average);

    // get selected option string text
    var enemySelectedElement =
      enemyElement.options[enemyElement.selectedIndex].innerHTML;

    //Decimal place fix
    crit_r = Number(crit_r).toFixed(2);
    crit_d = Number(crit_d).toFixed(2);
    harrier_debuff = Number(harrier_debuff).toFixed(2);
    harrier_resist = Number(harrier_resist).toFixed(2);


    count += 1; //Adds current calculation number to the history
    updateCalculationResultList({
      count,
      yourLV,
      monsterLV,
      ATK,
      sATK,
      crit_r,
      crit_d,
      harrier_debuff,
      harrier_resist,
      asd_buffs,
      pola_buffs,
      boss_dmg_buffs,
      buffs,
      b_atk,
      def_pierce,
      skill_multi,
      ui_final_dmg,
      ui_corrected_final_dmg,
      avgCritDmg,
      ui_back_normal,
      ui_back_critical,
      ui_back_average,
      calculationType,
      enemySelectedElement,
    });
  }
}
