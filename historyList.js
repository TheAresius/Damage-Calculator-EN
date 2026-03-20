// gets history from local storage
var historyData = JSON.parse(localStorage.getItem('gc_damage_history')) || [];
var selectedHistoryIds = new Set(); // tracks which items are set

function saveHistory() {
    localStorage.setItem('gc_damage_history', JSON.stringify(historyData));
}

function renderHistory() {
    var resultList = document.getElementById("resultList"); 
    var historySection = document.getElementById("history-section");
    
    if (!resultList) return; 

    resultList.innerHTML = "";

    if (historyData.length === 0) {
        if (historySection) historySection.style.display = "none";
        return; 
    } else {
        if (historySection) historySection.style.display = "block";
    }

    // history header
    if (historyData.length > 0) {
        const count = selectedHistoryIds.size;
        const isReady = count === 2;
        const compareDisabled = count !== 2 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : '';
        const compareText = count === 2 ? "Compare Selected" : `Compare (${count}/2)`;
        const tooltipAttr = !isReady ? 'title="Check two results to compare them"' : '';

        resultList.innerHTML += `
            <div style="display: flex; flex-direction: column; margin-bottom: 20px;">
                <h2 style="text-align: center; color: white; margin: 0 0 15px 0; font-family: 'Montserrat', sans-serif;">
                    History
                </h2>
                <div style="display: flex; justify-content: center; align-items: center; gap: 15px; flex-wrap: wrap;">
                    <div ${tooltipAttr}>
                        <button onclick="compareSelected()" class="calc-btn" ${compareDisabled} style="width: auto; min-width: 160px; padding: 8px 20px;">
                            ${compareText}
                        </button>
                    </div>
                    <button onclick="clearHistory()" class="clear-btn">
                        Clear all
                    </button>
                </div>
            </div>
        `;
    }

    [...historyData].reverse().forEach((item) => {
        let displayTitle = item.customName 
            ? `<span class="yellow">#${item.count}:</span> ${item.customName}`
            : `<span class="yellow">#${item.count}:</span> ${item.calculationType} - ${item.enemySelectedElement}`;

        const isChecked = selectedHistoryIds.has(item.id) ? "checked" : "";
        const isFav = item.isFavorite === true;
        const favColor = isFav ? "#FFD700" : "currentColor";
        const favFill = isFav ? "#FFD700" : "none";
        const favTitle = isFav ? "Check favorite" : "Uncheck favorite";
        const wrapperId = `history-wrapper-${item.id}`;
        const iconId = `collapse-icon-${item.id}`;
        const wrapperClass = item.isCollapsed ? 'history-anim-wrapper collapsed' : 'history-anim-wrapper';
        const iconClass = item.isCollapsed ? 'collapse-icon-svg icon-rotated' : 'collapse-icon-svg';

        let htmlItem = `
          <div class="response-list-item">
            <div class="response-list-header">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="history-checkbox" 
                           onchange="toggleHistorySelection(${item.id}, this)" ${isChecked}>
                    
                    <div class="response-list-item-title" style="text-align: left; margin:0;">
                        ${displayTitle}
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="icon-btn fav-btn" onclick="toggleFavorite(${item.id})" title="${favTitle}">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="${favColor}" stroke-width="2" fill="${favFill}" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </button>

                    <button class="icon-btn load-btn" onclick="loadHistoryItem(${item.id})" title="Load these values">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                            <path d="M12 12v9"></path>
                            <path d="m16 16-4-4-4 4"></path>
                        </svg>
                    </button>

                    <button class="icon-btn edit-btn" onclick="editHistoryItem(${item.id})" title="Rename result">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>

                    <button class="icon-btn delete-btn" onclick="deleteHistoryItem(${item.id})" title="Delete result">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>

                    <button class="icon-btn collapse-btn" onclick="toggleItemCollapse(${item.id})" title="Expand/Collapse">
                        <svg id="${iconId}" class="${iconClass}" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>

                </div>
            </div>

            <div id="${wrapperId}" class="${wrapperClass}">
                <div class="history-anim-inner">
                    <div class="response-list-item-content">
                        <div class="column-left">
                            <div class="stat-group">
                                <div class="response-list-item-value">${stringsHistoryListCharacterLevel}: <span class='history-stat-value'>${item.yourLV}</span></div>
                                <div class="response-list-item-value">${stringsHistoryListMonsterLevel}: <span class='history-stat-value'>${item.monsterLV}</span></div>
                            </div>
                            <div class="stat-group">
                                <div class="response-list-item-value">${stringsHistoryListAttack}: <span class='history-stat-value'>${item.ATK}</span></div>
                                <div class="response-list-item-value">${stringsHistoryListSpecialAttack}: <span class='history-stat-value'>${item.sATK}</span></div>
                                <div class="response-list-item-value">${stringHistoryListCriticalRate}: <span class='history-stat-value'>${item.crit_r}% (${(item.meta.savedCritExtra  >= 0 ? '+' : '')}${item.meta.savedCritExtra || 0}%)</span></div>
                                <div class="response-list-item-value">${stringHistoryListCriticalDamage}<span class='history-stat-value'>${item.crit_d}% (${(item.meta.savedCdmg >= 0 ? '+' : '')}${item.meta.savedCdmg || 0}%)</span></div>
                            </div>
                            <div class="stat-group">
                            <div class="response-list-item-value">${stringsHistoryListHarrierDebuff}: <span class='history-stat-value'>${item.harrier_debuff}%</span></div>
                            <div class="response-list-item-value">${stringsHistoryListHarrierResistance}: <span class='history-stat-value'>${item.harrier_resist}%</span></div>
                        </div>
                            <div class="stat-group result-group">
                                <div class="response-list-item-value">${stringsNormalHitDamage}: <span class="yellow">${Number(item.ui_final_dmg).toLocaleString('en-US')}</span></div>
                                <div class="response-list-item-value">${stringsCriticalHitDamage}: <span class="yellow">${Number(item.ui_corrected_final_dmg).toLocaleString('en-US')}</span></div>
                                <div class="response-list-item-value">${stringsAverageDamage}: <span class="yellow">${Number(item.avgCritDmg).toLocaleString('en-US')}</span></div>
                            </div>
                        </div>
                        
                        <div class="column-right">
                            <div class="stat-group">
                                <div class="response-list-item-value">${stringsHistoryListASD}: <span class='history-stat-value'>${item.asd_buffs}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListPola}: <span class='history-stat-value'>${item.pola_buffs}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListBossDmg}: <span class='history-stat-value'>${item.boss_dmg_buffs}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListBAtk}: <span class='history-stat-value'>${item.b_atk}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListBuffs}: <span class='history-stat-value'>${item.buffs}% (${(item.meta.savedBuffExtra>= 0 ? '+' : '')}${item.meta.savedBuffExtra || 0}%)</span></div>
                                <div class="response-list-item-value">${stringsHistoryListDef}: <span class='history-stat-value'>${item.def_pierce}% (${(item.meta.savedDefPierce>= 0 ? '+' : '')}${item.meta.savedDefPierce || 0}%)</span></div>
                            </div>
                            <div class="stat-group">
                                <div class="response-list-item-value">${stringsHistoryListSpecificTier}: <span class='history-stat-value'>${item.specific_tier}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListSpecificSkill}: <span class='history-stat-value'>${item.specific_skill}%</span></div>
                                <div class="response-list-item-value">${stringsHistoryListDamageValue}: <span class='history-stat-value'>${item.skill_multi}</span></div>
                            </div>
                            <div class="stat-group result-group">
                                <div class="response-list-item-value">${stringsNormalHitDamage} (back): <span class="yellow">${Number(item.ui_back_normal).toLocaleString('en-US')}</span></div>
                                <div class="response-list-item-value">${stringsCriticalHitDamage} (back): <span class="yellow">${Number(item.ui_back_critical).toLocaleString('en-US')}</span></div>
                                <div class="response-list-item-value">${stringsAverageDamage} (back): <span class="yellow">${Number(item.ui_back_average).toLocaleString('en-US')}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        `;
        resultList.innerHTML += htmlItem;
    });
}

// selection of calcs
function toggleHistorySelection(id, checkbox) {
    if (checkbox.checked) {
        if (selectedHistoryIds.size >= 2) {
            checkbox.checked = false;
            
            showAlert(
                'Limit', 
                'You can only select two to compare.', 
                'warning'
            );
            
            return;
        }
        selectedHistoryIds.add(id);
    } else {
        selectedHistoryIds.delete(id);
    }
    renderHistory();
}

// calc compare
function compareSelected() {
    if (selectedHistoryIds.size !== 2) return;

    const ids = Array.from(selectedHistoryIds);
    const itemA = historyData.find(i => i.id === ids[0]);
    const itemB = historyData.find(i => i.id === ids[1]);

    if (!itemA || !itemB) return;

    const calcTotalBuffs = (item) => {
        const v = (key) => parseFloat(item[key]) || 0;
        const metaV = (key) => item.meta ? (parseFloat(item.meta[key]) || 0) : 0
        const isChecked = (key) => item.meta && item.meta[key] === true;

        let total = 0;

        if (isChecked('chk_asd')) total += v('asd_buffs');
        if (isChecked('chk_pola')) total += v('pola_buffs');
        let isBossEnemy = false;
        if (window.enemyData && item.meta.enemyId && window.enemyData[item.meta.enemyId]) {
            isBossEnemy = window.enemyData[item.meta.enemyId].IsBoss;
        }
        if (isChecked('chk_boss') && isBossEnemy) total += v('boss_dmg_buffs');
        if (isChecked('chk_other')) {
            total += v('buffs') + metaV('savedBuffExtra');
        }
        if (isChecked('chk_tier')) total += v('specific_tier');
        if (isChecked('chk_skill')) total += v('specific_skill');

        return total;
    };

    itemA.calculated_total_buffs = calcTotalBuffs(itemA);
    itemB.calculated_total_buffs = calcTotalBuffs(itemB);

    const getVal = (item, key) => {
        const v = parseFloat(item[key]);
        return isNaN(v) ? 0 : v;
    };

    const critA = getVal(itemA, 'ui_corrected_final_dmg');
    const critB = getVal(itemB, 'ui_corrected_final_dmg');
    const avgA  = getVal(itemA, 'avgCritDmg');
    const avgB  = getVal(itemB, 'avgCritDmg');
    const backCritA = getVal(itemA, 'ui_back_critical'); 
    const backCritB = getVal(itemB, 'ui_back_critical');
    const backAvgA = getVal(itemA, 'ui_back_average'); 
    const backAvgB = getVal(itemB, 'ui_back_average');

    const generateCells = (valA, valB) => {
        const format = (v) => v.toLocaleString('en-US');
        if (valA > valB) {
            const diff = valB !== 0 ? ((valA / valB) - 1) * 100 : 100;
            return {
                htmlA: `<span class="winner-val">${format(valA)}</span> <span class="diff-badge">▲ ${diff.toFixed(2)}%</span>`,
                htmlB: `<span class="compare-val">${format(valB)}</span>`
            };
        } else if (valB > valA) {
            const diff = valA !== 0 ? ((valB / valA) - 1) * 100 : 100;
            return {
                htmlA: `<span class="compare-val">${format(valA)}</span>`,
                htmlB: `<span class="winner-val">${format(valB)}</span> <span class="diff-badge">▲ ${diff.toFixed(2)}%</span>`
            };
        } else {
            return {
                htmlA: `<span class="compare-val">${format(valA)}</span>`,
                htmlB: `<span class="compare-val">${format(valB)}</span>`
            };
        }
    };

    // shows symbols when comparing stats
    const getStatRow = (label, key, suffix = '', extraMetaKey = null) => {
        const baseA = parseFloat(itemA[key]) || 0;
        const baseB = parseFloat(itemB[key]) || 0;

        let extraA = 0;
        let extraB = 0;
        const symUp =    '<span style="color: #7ffa4e; margin-left: 5px; font-size: 0.9em;">▲</span>';
        const symDown =  '<span style="color: #ff5252; margin-left: 5px; font-size: 0.9em;">▼</span>';

        if (extraMetaKey) {
            extraA = itemA.meta && itemA.meta[extraMetaKey] ? parseFloat(itemA.meta[extraMetaKey]) : 0;
            extraB = itemB.meta && itemB.meta[extraMetaKey] ? parseFloat(itemB.meta[extraMetaKey]) : 0;
        }

        const totalA = baseA + extraA;
        const totalB = baseB + extraB;

        if (totalA > totalB) {
            iconA = symUp;
            iconB = symDown;
        } else if (totalB > totalA) {
            iconA = symDown;
            iconB = symUp;
        } else {
            iconA = '';
            iconB = '';
        }

        const formatVal = (val) => !isNaN(parseFloat(val)) ? parseFloat(val).toLocaleString('en-US') : val;
        let displayA = `${formatVal(itemA[key])}${suffix}`;
        let displayB = `${formatVal(itemB[key])}${suffix}`;

        const appendExtra = (item, displayStr) => {
            if (extraMetaKey && item.meta && item.meta[extraMetaKey] !== undefined) {
                const extraVal = parseFloat(item.meta[extraMetaKey]);
                if (extraVal !== 0) { 
                    const sign = extraVal >= 0 ? '+' : '';
                    return `${displayStr} (${sign}${extraVal}%)`;
                }
            }
            return displayStr;
        };

        return `
            <tr class="compare-extra-row">
                <td>${label}</td>
                <td>${appendExtra(itemA, displayA)}${iconA}</td>
                <td>${appendExtra(itemB, displayB)}${iconB}</td>
            </tr>
        `;
    };

    const detailsHtml = `
        ${getStatRow('Attack', 'ATK')}
        ${getStatRow('Special attack', 'sATK')}
        ${getStatRow('Critical rate', 'crit_r', '%', 'savedCritExtra')}
        ${getStatRow('Critical damage', 'crit_d', '%', 'savedCdmg')}
        
        ${getStatRow('Taint debuff', 'harrier_debuff', '%')}
        ${getStatRow('Taint resist', 'harrier_resist', '%')}
        
        ${getStatRow('Back attack damage', 'b_atk', '%')}
        ${getStatRow('Defense ignore', 'def_pierce', '%', 'savedDefPierce')}
        ${getStatRow('Sum of buffs', 'calculated_total_buffs', '%')}
        ${getStatRow('Base damage', 'skill_multi')}
    `;

    const rowCrit = generateCells(critA, critB);
    const rowAvg  = generateCells(avgA, avgB);
    const rowBack = generateCells(backCritA, backCritB);
    const rowBackAvg = generateCells(backAvgA, backAvgB);

    const getName = (item) => {
        const subText = item.customName 
            ? item.customName 
            : `${item.calculationType || 'Cálculo'} - ${item.enemySelectedElement || 'Inimigo'}`;
        return `Build #${item.count}<br><span style="font-size:0.75em; color:#aaa; font-weight:normal">${subText}</span>`;
    };

    const modalText = document.getElementById('modalText');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    modalText.innerHTML = `
        <div class="modal-header">
            <div class="modal-name">Damage Compare</div>
        </div>
        
        <div class="modal-body">
            <table class="compare-table" style="table-layout: fixed; width: 100%;">
                <thead>
                    <tr>
                        <th style="width: 20%;">STATS</th>
                        <th style="width: 40%; line-height: 1em;">${getName(itemA)}</th>
                        <th style="width: 40%; line-height: 1em;">${getName(itemB)}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="3" style="padding: 0; border: none;">
                            <button class="toggle-details-btn" onclick="toggleCompareDetails(this)">
                                ▼ Show Stats ▼
                            </button>
                        </td>
                    </tr>

                    ${detailsHtml}
                    
                    <tr>
                        <td class="compare-row-label">
                            Critical Hit<br>
                            <span style="font-size:0.8em; font-weight:normal; color:#aaa">(Single hit)</span>
                        </td>
                        <td>${rowCrit.htmlA}</td>
                        <td>${rowCrit.htmlB}</td>
                    </tr>
                    <tr>
                        <td class="compare-row-label">
                            Avg Damage<br>
                            <span style="font-size:0.8em; font-weight:normal; color:#aaa">(Long term)</span>
                        </td>
                        <td>${rowAvg.htmlA}</td>
                        <td>${rowAvg.htmlB}</td>
                    </tr>
                    <tr>
                        <td class="compare-row-label">
                            Critical Hit (Back)<br>
                            <span style="font-size:0.8em; font-weight:normal; color:#aaa">(Single hit)</span>
                        </td>
                        <td>${rowBack.htmlA}</td>
                        <td>${rowBack.htmlB}</td>
                    </tr>
                    <tr>
                        <td class="compare-row-label">
                            Avg Damage (Back)<br>
                            <span style="font-size:0.8em; font-weight:normal; color:#aaa">(Long term)</span>
                        </td>
                        <td>${rowBackAvg.htmlA}</td>
                        <td>${rowBackAvg.htmlB}</td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 15px; text-align: center; font-size: 0.9em; color: #aaa;">
                <span class="diff-badge" style="font-size: 12px;">▲ X%</span> Shows how much damage the best build does (in percent) compared to the other one.<br>
                Comparison is made in the same order they were selected.
            </div>
        </div>
    `;

    overlay.classList.add('show');
    modal.style.display = 'block';
    body.classList.add('no-scroll');
    setTimeout(function() {
        modalContent.classList.add('show');
    }, 10);
}

// show/hide stats collapislbe
window.toggleCompareDetails = function(btn) {
    const rows = document.querySelectorAll('.compare-extra-row');
    const isClosed = rows.length > 0 && !rows[0].classList.contains('open');

    rows.forEach(row => {
        if (isClosed) {
            row.classList.add('open');
        } else {
            row.classList.remove('open');
        }
    });

    if (isClosed) {
        btn.innerHTML = '▲ Hide Stats ▲';
        btn.style.color = '#fff';
        btn.style.borderColor = '#666';
    } else {
        btn.innerHTML = '▼ Show Stats ▼';
        btn.style.color = '#aaa';
        btn.style.borderColor = '#444';
    }
}

// delete, edit name, clear and load tools
function deleteHistoryItem(id) {
    askConfirm(
        "Delete?", 
        "You cannot revert the result exclusion.", 
        () => {
            historyData = historyData.filter(item => item.id !== id);
            selectedHistoryIds.delete(id);
            saveHistory();
            renderHistory();
            showToast("Result successfully deleted!");
        }
    );
}

function editHistoryItem(id) {
    var item = historyData.find(i => i.id === id);

    if (item) {
        var currentName = item.customName || "";
    
        askInput(
            "Rename Result",
            currentName,
            (newName) => {
                
                item.customName = newName;
                saveHistory();
                renderHistory();

                if (typeof showToast === 'function') {
                    showToast('Name updated!');
                }
            },
            "ex: Critical damage build"
        );
    }
}

function clearHistory() {
    askConfirm(
        "Clear all history?", 
        "All of your saved result will be lost.", 
        () => {
            historyData = historyData.filter(item => item.isFavorite === true);
            
            const remainingIds = new Set(historyData.map(i => i.id));
            selectedHistoryIds = new Set([...selectedHistoryIds].filter(id => remainingIds.has(id)));
            
            saveHistory();
            renderHistory();
            
            if (historyData.length > 0) {
                 showToast("History cleared! (Favorites weren't cleared)");
            } else {
                 showToast("History cleared!");
            }
        }
    );
}

window.addEventListener('load', function() {
    renderHistory();
});

function loadHistoryItem(id) {
    const item = historyData.find(entry => entry.id === id);

    if (!item) {
        showAlert('Error', 'Result nof found.', 'error');
        return;
    }

    askConfirm(
        'Load Result?',
        'Current values will be overwritten by this result. Continue?',
        () => {
            const catSelect = document.getElementById("category_select");
            const enemyList = document.getElementById("Enemy_list");

            // clears buffs/debuffs
            window.storedBuffStats = { buff:0, crit:0, ignore_def:0, pet_buff:0, resist_all:0, resist_normal:0, resist_special:0, crit_dmg:0 };
            window.storedDebuffStats = { ignore_def:0 };

            // clears variables
            window.buff_extra = parseFloat(item.meta.savedBuffExtra) || 0;
            window.crit_extra = parseFloat(item.meta.savedCritExtra) || 0;
            window.ignore_def = parseFloat(item.meta.savedDefPierce) || 0;
            window.resist_all = parseFloat(item.meta.savedResistAll) || 0;
            window.resist_normal = parseFloat(item.meta.savedResistNormal) || 0;
            window.resist_special = parseFloat(item.meta.savedResistSpecial) || 0;
            window.crit_dmg = parseFloat(item.meta.savedCdmg) || 0;

            // reconstructs the maps
            if (item.meta.activeBuffsList && Array.isArray(item.meta.activeBuffsList)) {
                window.activeBuffs = new Map(item.meta.activeBuffsList);
            } else {
                window.activeBuffs = new Map();
            }

            if (item.meta.activeDebuffsList && Array.isArray(item.meta.activeDebuffsList)) {
                window.activeDebuffs = new Map(item.meta.activeDebuffsList);
            } else {
                window.activeDebuffs = new Map();
            }
            
            // restores buffs/debuffs based on the id
            if (typeof calculateStatsFromMap === 'function') {
                window.storedBuffStats = calculateStatsFromMap(window.activeBuffs);
                window.storedDebuffStats = calculateStatsFromMap(window.activeDebuffs);
                
                if (typeof syncGlobalVariables === 'function') {
                    syncGlobalVariables();
                }
                
                try {
                    if (typeof processBuffsLogic === 'function') processBuffsLogic();
                    if (typeof processDebuffsLogic === 'function') processDebuffsLogic();
                } catch (e) { console.log("modal render test"); }
            }

            if(catSelect) {
                catSelect.value = item.meta.category;
                catSelect.dispatchEvent(new Event('change'));
            }
            if(enemyList) {
                enemyList.value = item.meta.enemyId;
            }

            document.getElementById('asd_buffs_checkbox').checked = item.meta.chk_asd;
            document.getElementById('pola_buffs_checkbox').checked = item.meta.chk_pola;
            document.getElementById('boss_buffs_checkbox').checked = item.meta.chk_boss;
            document.getElementById('other_buffs_checkbox').checked = item.meta.chk_other;
            document.getElementById('back_buffs_checkbox').checked = item.meta.chk_back;
            document.getElementById('def_multi_checkbox').checked = item.meta.chk_def;
            document.getElementById('specific_skill_checkbox').checked = item.meta.chk_skill;
            document.getElementById('specific_tier_checkbox').checked = item.meta.chk_tier;

            document.getElementById("Normal").checked = item.meta.isNormal;
            document.getElementById("Special").checked = item.meta.isSpecial;
            document.getElementById("Pet").checked = item.meta.isPet;
            
            document.getElementById("yourLV_string").value = item.yourLV;
            document.getElementById("monsterLV_string").value = item.monsterLV;
            document.getElementById("ATK_string").value = item.ATK;
            document.getElementById("sATK_string").value = item.sATK;
            document.getElementById("crit_r_string").value = item.crit_r;
            document.getElementById("crit_d_string").value = item.crit_d;
            document.getElementById("harrier_d_string").value = item.harrier_debuff;
            document.getElementById("harrier_r_string").value = item.harrier_resist;
            
            document.getElementById("buffs_string").value = item.buffs;
            document.getElementById("asd_buffs_string").value = item.asd_buffs;
            document.getElementById("pola_buffs_string").value = item.pola_buffs;
            document.getElementById("boss_buffs_string").value = item.boss_dmg_buffs;
            document.getElementById("back_attack_string").value = item.b_atk;
            document.getElementById("def_multi_string").value = item.def_pierce;
            document.getElementById("skill_multi_string").value = item.skill_multi;
            document.getElementById("specific_skill_string").value = item.specific_skill;
            document.getElementById("specific_tier_string").value = item.specific_tier;

            if (typeof showToast === 'function') {
                showToast('Result loaded successfully!');
            }
            
            // visual indicative for loading a calc
            const targetSection = document.getElementById('data_enter');

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetSection.classList.remove('data-loaded-highlight');

                setTimeout(() => {
                    targetSection.classList.add('data-loaded-highlight');
                    
                    setTimeout(() => {
                        targetSection.classList.remove('data-loaded-highlight');
                    }, 1500); 
                }, 50);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    );
}

function toggleFavorite(id) {
    const item = historyData.find(i => i.id === id);
    if (item) {
        // inverts true/false for isFavorite
        item.isFavorite = !item.isFavorite;
        saveHistory();
        renderHistory();
    }
}

function toggleItemCollapse(id) {
    const wrapper = document.getElementById(`history-wrapper-${id}`);
    const icon = document.getElementById(`collapse-icon-${id}`);
    
    if (wrapper) wrapper.classList.toggle('collapsed');
    if (icon) icon.classList.toggle('icon-rotated');
    const item = historyData.find(i => i.id === id);
    if (item) {
        // inverts true/false for isCollapsed
        item.isCollapsed = !item.isCollapsed;
        saveHistory();
    }
}