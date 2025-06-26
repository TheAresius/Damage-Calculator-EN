var responses = [];

function updateCalculationResultList(params) {
  responses.push(params);

  showResponsesOnUI();
}

function setListHeaders() {
  resultList.innerHTML = "";

  divider.innerHTML = "";
  divider.innerHTML = `<div class="divider-content"></div>`;
}

function showResponsesOnUI() {
  setListHeaders();

  var htmlData = `<h1>${stringsHistoryListTitle}</h1>`;

  responses.map((response) => {
    htmlData += `
      <div class="response-list-item">

        <div class="response-list-item-title">
        <span class = "yellow">
        #${response.count}: 
        </span>
        ${response.calculationType} - ${response.enemySelectedElement}
        </div>

        <div class="response-list-item-content">
          <div>
          
            <div class="response-list-item-value">
              ${stringsHistoryListCharacterLevel}:
              <span>
                ${response.yourLV}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListMonsterLevel}: 
              <span>
                ${response.monsterLV}
              </span>
            </div>

            <div style="line-height:50%;">
            <br>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListAttack}:
              <span>
                ${response.ATK}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListSpecialAttack}:
              <span>
                ${response.sATK}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringHistoryListCriticalRate}:
              <span>
                ${response.crit_r}%
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringHistoryListCriticalDamage}:
              <span>
                ${response.crit_d}%
              </span>
            </div>

            <div style="line-height:50%;">
            <br>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListHarrierDebuff}:
              <span>
                ${response.harrier_debuff}%
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListHarrierResistance}:
              <span>
                ${response.harrier_resist}%
              </span>
            </div>

            <div style="line-height:210%;">
            <br>
            </div>

            <div class="response-list-item-value">
              ${stringsNormalHitDamage+" (front)"}: 
              <span class="yellow">
                ${response.ui_final_dmg.toLocaleString('en')}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsCriticalHitDamage+" (front)"}: 
              <span class="yellow">
                ${response.ui_corrected_final_dmg.toLocaleString('en')}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsAverageDamage+" (front)"}: 
              <span class="yellow">
                ${response.avgCritDmg.toLocaleString('en')}
              </span>
            </div>

          </div>

          <div>

          <div class="response-list-item-value">
            ${stringsHistoryListASD}:
            <span>
              ${response.asd_buffs}%
            </span>
            </div>

            <div class="response-list-item-value">
            ${stringsHistoryListPola}:
            <span>
              ${response.pola_buffs}%
            </span>
            </div>

            <div class="response-list-item-value">
            ${stringsHistoryListBossDmg}:
            <span>
              ${response.boss_dmg_buffs}%
            </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListBAtk}:
              <span>
                ${response.b_atk}%
              </span>
            </div>

            <div class="response-list-item-value">
            ${stringsHistoryListBuffs}:
            <span>
              ${response.buffs}%
            </span>
            </div>

            <div class="response-list-item-value">
            ${stringsHistoryListDef}:
            <span>
              ${response.def_pierce}%
            </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListDamageValue}:
              <span>
                ${response.skill_multi}
              </span>
            </div>

            <div style="line-height:350%;">
            <br>
            </div>

            

            <div style="line-height:50%;">
            <br>
            </div>
            
            <div class="response-list-item-value">
              ${stringsNormalHitDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_normal.toLocaleString('en')}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsCriticalHitDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_critical.toLocaleString('en')}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsAverageDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_average.toLocaleString('en')}
              </span>
            </div>

          </div>
        </div>
      </div>
    `;
  });

  resultList.innerHTML = htmlData;
}
