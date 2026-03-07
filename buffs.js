// globals
window.buff_extra = 0;
window.crit_extra = 0;
window.resist_all = 0;
window.resist_normal = 0;
window.resist_special = 0;
window.crit_dmg = 0;
window.ignore_def = 0;
window.pet_buff = 0;

window.activeBuffs = new Map();
window.activeDebuffs = new Map();
window.storedBuffStats = null;   
window.storedDebuffStats = null; 

function calculateStatsFromMap(map) {
    let stats = { 
        buff: 0,
        crit: 0,
        resist_all: 0,
        resist_normal: 0,
        resist_special: 0,
        crit_dmg: 0,
        ignore_def: 0,
        pet_buff: 0
    };

    if (!window.buffsData) return stats;

    map.forEach((count, buffId) => {
        const buffData = window.buffsData.find(b => b.id === buffId);
        if (buffData) {
            const add = (s) => {
                stats.buff += s.buff || 0;
                stats.crit += s.crit || 0;
                stats.resist_all += s.resist_all || 0;
                stats.resist_normal += s.resist_normal || 0;
                stats.resist_special += s.resist_special || 0;
                stats.crit_dmg += (s.crit_dmg || s.crit_dmg || 0);
                stats.ignore_def += s.ignore_def || 0;
                stats.pet_buff += s.pet_buff || 0;
            };

            if (Array.isArray(buffData.stats)) {
                if (buffData.stats[count - 1]) add(buffData.stats[count - 1]);
            } else if (buffData.stats) {
                let stacked = {};
                for (let k in buffData.stats) stacked[k] = buffData.stats[k] * count;
                add(stacked);
            }
        }
    });
    return stats;
}

function processBuffsLogic() {
    const results = calculateStatsFromMap(window.activeBuffs);
    window.storedBuffStats = results;

    const setText = (id, val, color = null) => {
        const el = document.querySelector('#buffsModal #' + id);
        if (el) {
            el.innerText = val;
            if (color) el.style.color = color;
        }
    };

    const setLabelColor = (id, color) => {
        const el = document.querySelector('#buffsModal #' + id);
        if (el) el.style.color = color;
    };

    setText('sum_general', `+${Math.abs(results.buff).toFixed(2)}%`);
    setText('sum_crit_r', `+${Math.abs(results.crit).toFixed(2)}%`);
    setText('sum_pet', `+${Math.abs(results.pet_buff).toFixed(2)}%`);
    
    setText('sum_res_all', `-${Math.abs(results.resist_all).toFixed(2)}%`);
    setText('sum_res_normal', `-${Math.abs(results.resist_normal).toFixed(2)}%`);
    setText('sum_res_special', `-${Math.abs(results.resist_special).toFixed(2)}%`);
    const valCdmg = results.crit_dmg;
    
    if (valCdmg >= 0) {
        setText('sum_res_cdmg', `+${valCdmg.toFixed(2)}%`, '#7ffa4eff');
        setLabelColor('label_res_cdmg', '#7ffa4eff');
    } else {
        setText('sum_res_cdmg', `${valCdmg.toFixed(2)}%`, '#ce6363');
        setLabelColor('label_res_cdmg', '#ce6363');
    }
}

function processDebuffsLogic() {
    const results = calculateStatsFromMap(window.activeDebuffs);
    window.storedDebuffStats = results;

    const setText = (id, val) => {
        const el = document.querySelector('#debuffsModal #' + id);
        if (el) el.innerText = val;
    };
    
    setText('sum_ignore', `+${Math.abs(results.ignore_def).toFixed(2)}%`);
}

function syncGlobalVariables() {
    const b = window.storedBuffStats || { buff:0, crit:0, ignore_def:0, pet_buff:0, resist_all:0, resist_normal:0, resist_special:0, crit_dmg:0 };
    const d = window.storedDebuffStats || { buff:0, crit:0, ignore_def:0, pet_buff:0, resist_all:0, resist_normal:0, resist_special:0, crit_dmg:0 };

    window.buff_extra = b.buff + d.buff;
    window.crit_extra = b.crit + d.crit;
    window.ignore_def = b.ignore_def + d.ignore_def;
    window.pet_buff = b.pet_buff + d.pet_buff;
    window.resist_all = b.resist_all + d.resist_all;
    window.resist_normal = b.resist_normal + d.resist_normal;
    window.resist_special = b.resist_special + d.resist_special;
    window.crit_dmg = b.crit_dmg + d.crit_dmg;
}

function showModalHandler(modalId) {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById(modalId);
    const content = modal ? modal.querySelector('.modal-content') : null;
    
    if (modal && content) {
        overlay.classList.add('show');
        document.body.classList.add('no-scroll');
        modal.style.display = 'block';
        setTimeout(() => content.classList.add('show'), 10);
    }
}

function hideModalHandler(modalId) {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById(modalId);
    const content = modal ? modal.querySelector('.modal-content') : null;
    const tooltip = document.getElementById('global-tooltip');
    
    if (tooltip) tooltip.classList.remove('show');

    if (modal && content) {
        content.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            const anyOpen = Array.from(document.querySelectorAll('.modal')).some(m => m.style.display === 'block');
            if (!anyOpen) {
                overlay.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        }, 300);
    }
}

function renderGrid(containerId, activeMap, allowedCategories) {
    const gridContainer = document.getElementById(containerId);
    let tooltip = document.getElementById('global-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'global-tooltip';
        document.body.appendChild(tooltip);
    }
    
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const groups = {
        general: { title: "General Buffs", items: [] },
        character: { title: "Character Buffs", items: [] },
        pet: { title: "Pet Buffs", items: [] },
        defense: { title: "Ignore Defense Debuffs", items: [] },
        resist: { title: "Enemy Resistances", items: [] }
    };

    if (window.buffsData) {
        window.buffsData.forEach(buff => {
            const cat = buff.category || 'general';
            if (allowedCategories.includes(cat) && groups[cat]) {
                groups[cat].items.push(buff);
            }
        });
    }

    allowedCategories.forEach(catKey => {
        const group = groups[catKey];
        if (group && group.items.length > 0) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'buff-category-title';
            titleDiv.innerText = group.title;
            if(catKey === 'resist') titleDiv.style.color = '#ff6b6b'; 
            gridContainer.appendChild(titleDiv);

            group.items.forEach(buff => {
                const div = document.createElement('div');
                div.className = 'buff-item';
                div.addEventListener('contextmenu', (e) => { e.preventDefault(); return false; });

                if (activeMap.has(buff.id)) {
                    div.classList.add('active');
                    const count = activeMap.get(buff.id);
                    if (buff.maxStacks && buff.maxStacks > 1) {
                        const badge = document.createElement('div');
                        badge.className = 'stack-badge';
                        badge.innerText = count;
                        div.appendChild(badge);
                    }
                }

                const img = document.createElement('img');
                img.src = buff.icon || 'images/icon.ico';
                img.alt = buff.name;
                img.draggable = false;
                div.appendChild(img);

                div.addEventListener('click', () => { 
                    toggleBuffEffect(buff, div, activeMap); 
                });

                div.addEventListener('mouseenter', () => {
                    tooltip.innerHTML = buff.name;
                    const rect = div.getBoundingClientRect();
                    tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                    tooltip.style.top = (rect.top - 10) + 'px';
                    tooltip.classList.add('show');
                });

                div.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
                gridContainer.appendChild(div);
            });
        }
    });
    
    drawSummaryTable();
}

function toggleBuffEffect(buff, element, activeMap) {
    let currentStack = activeMap.get(buff.id) || 0;
    let nextStack = currentStack + 1;
    let max = buff.maxStacks || 1; 

    if (nextStack > max) nextStack = 0;

    if (nextStack === 0) {
        activeMap.delete(buff.id);
        element.classList.remove('active');
        const badge = element.querySelector('.stack-badge');
        if (badge) badge.remove();
    } else {
        activeMap.set(buff.id, nextStack);
        element.classList.add('active');
        if (max > 1) {
            let badge = element.querySelector('.stack-badge');
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'stack-badge';
                element.appendChild(badge);
            }
            badge.innerText = nextStack;
        }
    }
    
    if (activeMap === window.activeBuffs) processBuffsLogic();
    else processDebuffsLogic();

    syncGlobalVariables(); 
    saveBuffsToStorage();
}

function drawSummaryTable() {
    // buffs summary table
    const buffsContainer = document.querySelector('#buffsModal .buffs-summary-container');
    if (buffsContainer && buffsContainer.innerHTML.trim() === '') {
        buffsContainer.innerHTML = `
        <table class="buff-summary-table">
            <tbody>
                <tr>
                    <td style="color: #7ffa4eff;">Damage Buffs</td>
                    <td id="sum_general" class="buff-value" style="color: #7ffa4eff;">0.00%</td>
                </tr>
                <tr>
                    <td style="color: #7ffa4eff;">Critical Rate buffs</td>
                    <td id="sum_crit_r" class="buff-value" style="color: #7ffa4eff;">0.00%</td>
                </tr>
                <tr>
                    <td style="color: #7ffa4eff;">Pet Buffs</td>
                    <td id="sum_pet" class="buff-value" style="color: #7ffa4eff;">0.00%</td>
                </tr>
                <tr>
                    <td id="label_res_cdmg" style="color: #ce6363;">Critical damage buffs</td>
                    <td id="sum_res_cdmg" class="buff-value" style="color: #ce6363;">-0.00%</td>
                </tr>
                <tr>
                    <td style="color: #ce6363;">General Damage</td>
                    <td id="sum_res_all" class="buff-value" style="color: #ce6363;">-0.00%</td>
                </tr>
                <tr>
                    <td style="color: #ce6363;">Basic Commands / Pet Damage</td>
                    <td id="sum_res_normal" class="buff-value" style="color: #ce6363;">-0.00%</td>
                </tr>
                <tr>
                    <td style="color: #ce6363;">Skill Damage</td>
                    <td id="sum_res_special" class="buff-value" style="color: #ce6363;">-0.00%</td>
                </tr>
            </tbody>
        </table>`;
    }

    // debuffs summary table
    const debuffsContainer = document.querySelector('#debuffsModal .buffs-summary-container');
    if (debuffsContainer && debuffsContainer.innerHTML.trim() === '') {
        debuffsContainer.innerHTML = `
        <table class="buff-summary-table">
            <tbody>
                <tr>
                    <td style="color: #7ffa4eff;">Defense Ignore</td>
                    <td id="sum_ignore" class="buff-value" style="color: #7ffa4eff;">0.00%</td>
                </tr>
            </tbody>
        </table>`;
    }
}

function saveBuffsToStorage() {
    localStorage.setItem('gc_active_buffs', JSON.stringify(Array.from(window.activeBuffs.entries())));
    localStorage.setItem('gc_active_debuffs', JSON.stringify(Array.from(window.activeDebuffs.entries())));
}

window.forceSetBuffs = function(buffsArray, debuffsArray, shouldCalculate = false) {
    if (!window.buffsData) {
        console.warn("waiting for buffsData");
        setTimeout(() => window.forceSetBuffs(buffsArray, debuffsArray, shouldCalculate), 100);
        return;
    }

    try {
        window.activeBuffs = new Map(buffsArray);
        window.activeDebuffs = new Map(debuffsArray);

        window.activeBuffs.forEach((stacks, id) => {
            const buffData = window.buffsData.find(b => b.id === id);
            if (buffData && buffData.category === 'defense') {
                window.activeDebuffs.set(id, stacks);
                window.activeBuffs.delete(id);
            }
        });

        window.activeDebuffs.forEach((stacks, id) => {
            const buffData = window.buffsData.find(b => b.id === id);
            if (buffData && buffData.category !== 'defense') {
                window.activeBuffs.set(id, stacks);
                window.activeDebuffs.delete(id);
            }
        });

    } catch(e) {
        console.error("error when importing buffs", e);
        window.activeBuffs = new Map();
        window.activeDebuffs = new Map();
    }
    
    processBuffsLogic();
    processDebuffsLogic();
    syncGlobalVariables();
    saveBuffsToStorage();
};

function loadSavedBuffs() {
    if (!window.buffsData) {
        setTimeout(loadSavedBuffs, 50);
        return;
    }

    const savedBuffs = localStorage.getItem('gc_active_buffs');
    const savedDebuffs = localStorage.getItem('gc_active_debuffs');
    
    const safeParseMap = (jsonString) => {
        try { return new Map(JSON.parse(jsonString)); } catch (e) { return new Map(); }
    };

    window.activeBuffs = safeParseMap(savedBuffs);
    window.activeDebuffs = safeParseMap(savedDebuffs);

    window.activeBuffs.forEach((stacks, id) => {
        const buffData = window.buffsData.find(b => b.id === id);
        if (buffData && buffData.category === 'defense') {
            window.activeDebuffs.set(id, stacks);
            window.activeBuffs.delete(id);
        }
    });

    window.activeDebuffs.forEach((stacks, id) => {
        const buffData = window.buffsData.find(b => b.id === id);
        if (buffData && buffData.category !== 'defense') {
            window.activeBuffs.set(id, stacks);
            window.activeDebuffs.delete(id);
        }
    });

    processBuffsLogic();
    processDebuffsLogic();
    syncGlobalVariables();
}

document.addEventListener('DOMContentLoaded', function() {
    const openBuffsBtn = document.getElementById('openBuffsBtn');
    const closeBuffsBtn = document.querySelector('.close-button-buffs');
    const applyBuffsBtn = document.getElementById('applyBuffsBtn');
    const clearBuffsBtn = document.getElementById('clearBuffsBtn');

    const openDebuffsBtn = document.getElementById('openDebuffsBtn');
    const closeDebuffsBtn = document.querySelector('.close-button-debuffs');
    const applyDebuffsBtn = document.getElementById('applyDebuffsBtn');
    const clearDebuffsBtn = document.getElementById('clearDebuffsBtn');

    const overlay = document.getElementById('overlay');
    if(overlay) overlay.addEventListener('click', () => {
        if(document.getElementById('buffsModal').style.display === 'block') hideModalHandler('buffsModal');
        if(document.getElementById('debuffsModal').style.display === 'block') hideModalHandler('debuffsModal');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if(document.getElementById('buffsModal').style.display === 'block') hideModalHandler('buffsModal');
            if(document.getElementById('debuffsModal').style.display === 'block') hideModalHandler('debuffsModal');
        }
    });

    if(openBuffsBtn) openBuffsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderGrid('buffsGrid', window.activeBuffs, ['general', 'character', 'pet', 'resist']);
        processBuffsLogic();
        showModalHandler('buffsModal');
    });

    if(closeBuffsBtn) closeBuffsBtn.addEventListener('click', () => hideModalHandler('buffsModal'));
    
    if(applyBuffsBtn) applyBuffsBtn.addEventListener('click', () => {
        processBuffsLogic(); 
        syncGlobalVariables(); 
        hideModalHandler('buffsModal');
    });

    if(clearBuffsBtn) clearBuffsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(typeof askConfirm === 'function') {
            askConfirm('Clear Buffs', 'Remove all?', () => {
                window.activeBuffs.clear();
                renderGrid('buffsGrid', window.activeBuffs, ['general', 'character', 'pet', 'resist']);
                processBuffsLogic(); 
                syncGlobalVariables(); 
                saveBuffsToStorage();
            });
        }
    });

    if(openDebuffsBtn) openDebuffsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderGrid('debuffsGrid', window.activeDebuffs, ['defense']);
        processDebuffsLogic();
        showModalHandler('debuffsModal');
    });

    if(closeDebuffsBtn) closeDebuffsBtn.addEventListener('click', () => hideModalHandler('debuffsModal'));
    
    if(applyDebuffsBtn) applyDebuffsBtn.addEventListener('click', () => {
        processDebuffsLogic(); 
        syncGlobalVariables(); 
        hideModalHandler('debuffsModal');
    });

    if(clearDebuffsBtn) clearDebuffsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(typeof askConfirm === 'function') {
            askConfirm('Clear Debuffs', 'Remover all?', () => {
                window.activeDebuffs.clear();
                renderGrid('debuffsGrid', window.activeDebuffs, ['defense']);
                processDebuffsLogic(); 
                syncGlobalVariables(); 
                saveBuffsToStorage();
            });
        }
    });
});

window.addEventListener('load', loadSavedBuffs);