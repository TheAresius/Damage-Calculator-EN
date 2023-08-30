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

            <div class="response-list-item-value">
            ${stringsHistoryListBuffs}:
            <span>
              ${response.buffs}%
            </span>
          </div>

          </div>

          <div>
          
            <div class="response-list-item-value">
              ${stringsHistoryListBAtk}:
              <span>
                ${response.b_atk}%
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsHistoryListDamageValue}:
              <span>
                ${response.skill_multi}
              </span>
            </div>

            <div style="line-height:94%;">
            <br>
            </div>

            <div class="response-list-item-value">
              ${stringsNormalHitDamage+" (frontal)"}: 
              <span class="yellow">
                ${response.ui_final_dmg}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsCriticalHitDamage+" (frontal)"}: 
              <span class="yellow">
                ${response.ui_corrected_final_dmg}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsAverageDamage+" (frontal)"}: 
              <span class="yellow">
                ${response.avgCritDmg}
              </span>
            </div>

            <div style="line-height:50%;">
            <br>
            </div>
            
            <div class="response-list-item-value">
              ${stringsNormalHitDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_normal}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsCriticalHitDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_critical}
              </span>
            </div>

            <div class="response-list-item-value">
              ${stringsAverageDamage+" (back)"}: 
              <span class="yellow">
                ${response.ui_back_average}
              </span>
            </div>

          </div>
        </div>
      </div>
    `;
  });

  resultList.innerHTML = htmlData;
}