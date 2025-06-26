function setInputBorderTransparent() {
  document.getElementById("yourLV_string").style.borderColor = "transparent";
  document.getElementById("monsterLV_string").style.borderColor = "transparent";
  document.getElementById("ATK_string").style.borderColor = "transparent";
  document.getElementById("sATK_string").style.borderColor = "transparent";
  document.getElementById("crit_r_string").style.borderColor = "transparent";
  document.getElementById("crit_d_string").style.borderColor = "transparent";
  document.getElementById("harrier_d_string").style.borderColor = "transparent";
  document.getElementById("harrier_r_string").style.borderColor = "transparent";
  document.getElementById("buffs_string").style.borderColor = "transparent";
  document.getElementById("skill_multi_string").style.borderColor = "transparent";
  document.getElementById("Enemy_list").style.borderColor = "transparent";
  document.getElementById("back_attack_string").style.borderColor = "transparent";
  document.getElementById("asd_buffs_string").style.borderColor = "transparent";
  document.getElementById("pola_buffs_string").style.borderColor = "transparent";
  document.getElementById("boss_buffs_string").style.borderColor = "transparent";
  document.getElementById("def_multi_string").style.borderColor = "transparent";
}

function removeRedBorders() {
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
  document.getElementById("back_attack_string").style.borderWidth = "1px";
  document.getElementById("asd_buffs_string").style.borderWidth = "1px";
  document.getElementById("pola_buffs_string").style.borderWidth = "1px";
  document.getElementById("boss_buffs_string").style.borderWidth = "1px";
  document.getElementById("def_multi_string").style.borderWidth = "1px";
}

function setErrorOnInputById(inputId) {
  document.getElementById(inputId).style.borderColor = "red";
  document.getElementById(inputId).style.borderWidth = "2px";
}

function showResultOnUi(ui_final_dmg, ui_corrected_final_dmg, avgCritDmg, ui_back_normal, ui_back_critical, ui_back_average) {
  const frontColumn = document.getElementById('front-column');
  const backColumn = document.getElementById('back-column');

  frontColumn.innerHTML = '';
  backColumn.innerHTML = '';

  const frontContent =
    `<div><span class="yellow"> Front damage:</span>
      <div>${stringsNormalHitDamage}: <span class="yellow">${ui_final_dmg.toLocaleString('en')}</span></div>
      <div>${stringsCriticalHitDamage}: <span class="yellow">${ui_corrected_final_dmg.toLocaleString('en')}</span></div>
      <div>${stringsAverageDamage}: <span class="yellow">${avgCritDmg.toLocaleString('en')}</span></div>
    </div>`;

  frontColumn.innerHTML = frontContent;

  const backContent =
    `<div><span class="yellow"> Back damage:</span>
      <div>${stringsBackNormal}: <span class="yellow">${ui_back_normal.toLocaleString('en')}</span></div>
      <div>${stringsBackCritical}: <span class="yellow">${ui_back_critical.toLocaleString('en')}</span></div>
      <div>${stringsBackAverage}: <span class="yellow">${ui_back_average.toLocaleString('en')}</span></div>
    </div>`;

  backColumn.innerHTML = backContent;
}