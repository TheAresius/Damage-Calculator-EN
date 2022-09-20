//I don't know why, but Harkyon's feet ignore the damage buffs from titles. Why do you do this KoG?
function title_warn(value) {
  if (value == "14") {
    window.alert(
      "Note: Harkyon legs ignore damage buffs from titles.\nIf you're using a title with damage buffs remember to remove 5% or 10% from 'Buffs'."
    );
  }
}
//Default values
var ATK_factor = 0.0168;
var sATK_factor = 0.007;
var Pet_factor = 0.00477148;

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
  var skill_multi = window.document.querySelector(
    "input#skill_multi_string"
  ).value;
  skill_multi = Number(skill_multi.replace(/,/g, "."));

  //Setup for possible user input errors
  document.getElementById("yourLV_string").style.borderColor = "transparent";
  document.getElementById("monsterLV_string").style.borderColor = "transparent";
  document.getElementById("ATK_string").style.borderColor = "transparent";
  document.getElementById("sATK_string").style.borderColor = "transparent";
  document.getElementById("crit_r_string").style.borderColor = "transparent";
  document.getElementById("crit_d_string").style.borderColor = "transparent";
  document.getElementById("harrier_d_string").style.borderColor = "transparent";
  document.getElementById("harrier_r_string").style.borderColor = "transparent";
  document.getElementById("buffs_string").style.borderColor = "transparent";
  document.getElementById("skill_multi_string").style.borderColor =
    "transparent";
  document.getElementById("Enemy_list").style.borderColor = "transparent";

  //Specific enemy selection
  var enemy = document.getElementById("Enemy_list").value;
  if (enemy != "0") {
    yourLV = 85;
    monsterLV = 85;
  }
  if (
    enemy === "1" ||
    enemy === "2" ||
    enemy === "3" ||
    enemy === "4" ||
    enemy === "7"
  ) {
    DEF = 0.5;
    sDEF = 0.3;
  } else if (enemy === "5") {
    DEF = 0.6;
    sDEF = 0.3;
  } else if (enemy === "6" || enemy === "9" || enemy === "10") {
    DEF = 0.6;
    sDEF = 0.4;
  } else if (enemy === "8") {
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
  }

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
    Number.isInteger(ATK) == false ||
    isNaN(ATK) == true ||
    +sATK < 0 ||
    Number.isInteger(sATK) == false ||
    isNaN(sATK) == true ||
    +crit_r < 0 ||
    crit_r > 117.1316 ||
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
    isNaN(skill_multi) == true
  ) {
    window.alert("Something went wrong, re-check the entered values.");
    if (
      yourLV < 1 ||
      yourLV > 85 ||
      Number.isInteger(yourLV) == false ||
      isNaN(yourLV) == true
    ) {
      document.getElementById("yourLV_string").style.borderColor = "red";
      document.getElementById("yourLV_string").style.borderWidth = "2px";
    }
    if (
      monsterLV < 1 ||
      monsterLV > 150 ||
      Number.isInteger(monsterLV) == false ||
      isNaN(monsterLV) == true
    ) {
      document.getElementById("monsterLV_string").style.borderColor = "red";
      document.getElementById("monsterLV_string").style.borderWidth = "2px";
    }
    if (ATK < 0 || Number.isInteger(ATK) == false || isNaN(ATK) == true) {
      document.getElementById("ATK_string").style.borderColor = "red";
      document.getElementById("ATK_string").style.borderWidth = "2px";
    }
    if (sATK < 0 || Number.isInteger(sATK) == false || isNaN(sATK) == true) {
      document.getElementById("sATK_string").style.borderColor = "red";
      document.getElementById("sATK_string").style.borderWidth = "2px";
    }
    if (crit_r < 0 || crit_r > 117.1316 || isNaN(crit_r) == true) {
      document.getElementById("crit_r_string").style.borderColor = "red";
      document.getElementById("crit_r_string").style.borderWidth = "2px";
    }
    if (crit_d < 0 || isNaN(crit_d) == true) {
      document.getElementById("crit_d_string").style.borderColor = "red";
      document.getElementById("crit_d_string").style.borderWidth = "2px";
    }
    if (harrier_debuff < 0 || isNaN(harrier_debuff) == true) {
      document.getElementById("harrier_d_string").style.borderColor = "red";
      document.getElementById("harrier_d_string").style.borderWidth = "2px";
    }
    if (harrier_resist < 0 || isNaN(harrier_resist) == true) {
      document.getElementById("harrier_r_string").style.borderColor = "red";
      document.getElementById("harrier_r_string").style.borderWidth = "2px";
    }
    if (buffs < 0 || isNaN(buffs) == true) {
      document.getElementById("buffs_string").style.borderColor = "red";
      document.getElementById("buffs_string").style.borderWidth = "2px";
    }
    if (skill_multi < 0 || isNaN(skill_multi) == true) {
      document.getElementById("skill_multi_string").style.borderColor = "red";
      document.getElementById("skill_multi_string").style.borderWidth = "2px";
    }
  } else if (harrier_debuff > 0 && enemy != "0") {
    window.alert(
      "There is no Harrier Debuff for that Specific monster. Review the entered values."
    );
    document.getElementById("harrier_d_string").style.borderColor = "red";
    document.getElementById("harrier_d_string").style.borderWidth = "2px";
    document.getElementById("Enemy_list").style.borderColor = "red";
    document.getElementById("Enemy_list").style.borderWidth = "2px";
  } else {
    //Removes the red borders and procedes with the calculation
    document.getElementById("yourLV_string").style.borderWidth = "1px";
    document.getElementById("monsterLV_string").style.borderWidth = "1px";
    document.getElementById("ATK_string").style.borderWidth = "1px";
    document.getElementById("sATK_string").style.borderWidth = "1px";
    document.getElementById("crit_r_string").style.borderWidth = "1px";
    document.getElementById("crit_d_string").style.borderWidth = "1px";
    document.getElementById("harrier_d_string").style.borderWidth = "1px";
    document.getElementById("harrier_r_string").style.borderWidth = "1px";
    document.getElementById("buffs_string").style.borderWidth = "1px";
    document.getElementById("skill_multi_string").style.borderWidth = "1px";
    document.getElementById("Enemy_list").style.borderWidth = "1px";

    var buff_multi = 1 + buffs / 100;

    //Fixes the level difference
    if (yourLV - monsterLV <= 5) {
      var valid_lv_dif = 0;
    } else {
      var valid_lv_dif = yourLV - monsterLV - 5;
    }

    //Selection of damage type and does some math
    if (document.getElementById("Normal").checked) {
      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          ATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        buff_multi;
    } else if (document.getElementById("Special").checked) {
      var effecttive_ATK = ATK + sATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - sDEF) *
          sATK_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        buff_multi;
    } else if (document.getElementById("Pet").checked) {
      var effecttive_ATK = ATK;
      var final_dmg =
        ((effecttive_ATK *
          (1 - DEF) *
          Pet_factor *
          skill_multi *
          (100 + 2 * valid_lv_dif)) /
          100) *
        buff_multi;
      //Remember: Red pet magic stone (4%, 8% or 10%) multiplies 'final_dmg' by 1.04, 1.08 or 1.1. It is not a type of buff for 'buff_multi'
    }
    //Harrier World debuff and adjustments
    if (harrier_debuff > 0) {
      var harrier_final = (harrier_debuff - harrier_resist) / 100;
      if (harrier_final < 0) {
        harrier_final = 0;
      }
      final_dmg = final_dmg * (1 - harrier_final);
      crit_d -= 250;
      crit_r -= 20;
      if (crit_d < -50) {
        crit_d = -50;
      }
      if (crit_r < 0) {
        crit_r = 0;
      }
      if (1 - harrier_debuff / 100 + harrier_resist / 100 < 0) {
        final_dmg = 0;
      }
    }
    if (crit_r > 100) {
      crit_r = 100;
    }

    //Presentation of results
    var avgCritDmg = Math.round(
      final_dmg * (crit_r / 100) * (1.5 + crit_d / 100) +
        final_dmg * (1 - crit_r / 100)
    );
    damage.innerHTML = `<br>Non-critical-hit Damage: <font color='yellow'>${Math.round(
      final_dmg
    )}</font>`;
    damage.innerHTML += `<br>Critical-hit damage: <font color='yellow'>${Math.round(
      final_dmg * (1.5 + crit_d / 100)
    )}</font>`;
    damage.innerHTML += `<br>Average damage: <font color = 'yellow'>${avgCritDmg}</font>`;
  }
}
