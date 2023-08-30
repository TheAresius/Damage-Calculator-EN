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
  document.getElementById("skill_multi_string").style.borderColor ="transparent";
  document.getElementById("Enemy_list").style.borderColor = "transparent";
  document.getElementById("back_attack_string").style.borderColor = "transparent";
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
    `<div><span class="yellow"> Frontal attack:</span>
      <div>${stringsNormalHitDamage}: <span class="yellow">${ui_final_dmg}</span></div>
      <div>${stringsCriticalHitDamage}: <span class="yellow">${ui_corrected_final_dmg}</span></div>
      <div>${stringsAverageDamage}: <span class="yellow">${avgCritDmg}</span></div>
    </div>`;

  frontColumn.innerHTML = frontContent;

  const backContent =
    `<div><span class="yellow"> Back attack:</span>
      <div>${stringsBackNormal}: <span class="yellow">${ui_back_normal}</span></div>
      <div>${stringsBackCritical}: <span class="yellow">${ui_back_critical}</span></div>
      <div>${stringsBackAverage}: <span class="yellow">${ui_back_average}</span></div>
    </div>`;

  backColumn.innerHTML = backContent;
}