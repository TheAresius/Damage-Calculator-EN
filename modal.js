document.addEventListener('DOMContentLoaded', function() {

    const overlay = document.getElementById('overlay');
    const body = document.body;

    /*
    ----------
    enemy info
    ----------
    */
    const enemyModal = document.getElementById('modal');
    const enemyModalContent = enemyModal.querySelector('.modal-content');
    const modalText = document.getElementById('modalText');
    const showInfoButton = document.getElementById('showInfoButton');
    const closeEnemyButton = document.querySelector('.close-button'); 
    const enemyList = document.getElementById('Enemy_list');

    function showEnemyModal() {
        overlay.classList.add('show');
        enemyModal.style.display = 'block';
        body.classList.add('no-scroll');
        setTimeout(function() {
            enemyModalContent.classList.add('show');
        }, 10);
    }

    function hideEnemyModal() {
        enemyModalContent.classList.remove('show');
        enemyModalContent.classList.add('hide');

        setTimeout(function() {
            enemyModal.style.display = 'none';
            enemyModalContent.classList.remove('hide');

            const buffsModal = document.getElementById('buffsModal');
            const debuffsModal = document.getElementById('debuffsModal');
            
            const isBuffsOpen = buffsModal && buffsModal.style.display === 'block';
            const isDebuffsOpen = debuffsModal && debuffsModal.style.display === 'block';
            const isReverseOpen = reverseModal && reverseModal.style.display === 'block';

            if (!isBuffsOpen && !isDebuffsOpen && !isReverseOpen) {
                overlay.classList.remove('show');
                body.classList.remove('no-scroll');
            }
        }, 300);
    }

    showInfoButton.addEventListener('click', function(event) {
        event.preventDefault();
        var selectedOption = enemyList.value;
        if (!enemyData[selectedOption]) return;
        var enemyInfo = enemyData[selectedOption];

        var rawExtras = enemyInfo.extra.split('<br>');
        var formattedExtras = rawExtras
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .map(item => `<div class="extra-item">${item}</div>`)
            .join('');

        modalText.innerHTML = `
            <div class="modal-header">
                <img src="${enemyInfo.path}" alt="${enemyInfo.name}" class="modal-image" oncontextmenu="return false;">
                <div class="modal-title-group"><div class="modal-name">${enemyInfo.name}</div></div>
            </div>
            <div class="modal-body">
                <div class="modal-section"><div class='modal-subtitle'>Description</div><div class="modal-text">${enemyInfo.description}</div></div>
                <div class="modal-section"><div class='modal-subtitle'>Stats and Defenses</div>
                    <div class="status-grid">
                        <div class="status-item">${enemyInfo.status.defense1}</div>
                        <div class="status-item">${enemyInfo.status.defense2}</div>
                        <div class="status-item">${enemyInfo.status.defense3}</div>
                        <div class="status-item full-width">${enemyInfo.status.health}</div>
                    </div>
                </div>
                <div class="modal-section"><div class='modal-subtitle'>Patterns and Extras</div><div class="extra-content">${formattedExtras}</div></div>
            </div>
            <div class="section-footer"><br></div>
        `;
        showEnemyModal();
    });

    closeEnemyButton.addEventListener('click', hideEnemyModal);

    /*
    ------------
    reverse calc
    ------------
    */
    const reverseModal = document.getElementById('reverseModal');
    const reverseModalContent = reverseModal ? reverseModal.querySelector('.modal-content') : null;
    const openReverseBtn = document.getElementById('reverse-calc');
    const closeReverseBtn = document.querySelector('.close-button-reverse');
    const cancelReverseBtn = document.querySelector('.btn-cancel-red');
    const calcReverseBtn = document.querySelector('.btn-confirm-green');
    const dmgInput = document.getElementById('rev_dmg_input');

    if (dmgInput) {
        dmgInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, "");
            if (value === "") { e.target.value = ""; return; }
            e.target.value = parseInt(value).toLocaleString('en-US');
        });
    }

    // dropdown
    const revSelect = document.getElementById('rev_dmg_type');
    const revWrapper = document.getElementById('rev_dropdown_wrapper');

    if (revSelect && revWrapper) {
        let isDropdownOpen = false;
        revSelect.addEventListener('click', (e) => {
            if (isDropdownOpen) { isDropdownOpen = false; return; }
            requestAnimationFrame(() => { revWrapper.classList.toggle('active'); });
        });
        revSelect.addEventListener('change', function() {
            revWrapper.classList.remove('active');
            this.blur();
            isDropdownOpen = true;
            setTimeout(() => { isDropdownOpen = false; }, 200);
        });
        revSelect.addEventListener('blur', () => { revWrapper.classList.remove('active'); });
        revSelect.addEventListener('keydown', (e) => {
            if (e.key === "Escape") { revWrapper.classList.remove('active'); revSelect.blur(); }
        });
    }

    function showReverseModal() {
        overlay.classList.add('show');
        body.classList.add('no-scroll');
        if(reverseModal) reverseModal.style.display = 'block';
        setTimeout(() => { if(reverseModalContent) reverseModalContent.classList.add('show'); }, 10);
    }

    window.hideReverseModal = function() {
        if(reverseModalContent) reverseModalContent.classList.remove('show');
        if(revWrapper) revWrapper.classList.remove("active");
        setTimeout(() => {
            if(reverseModal) reverseModal.style.display = 'none';
            
            // check other modals
            const buffsModal = document.getElementById('buffsModal');
            const debuffsModal = document.getElementById('debuffsModal');
            const isBuffsOpen = buffsModal && buffsModal.style.display === 'block';
            const isDebuffsOpen = debuffsModal && debuffsModal.style.display === 'block';
            
            if (enemyModal.style.display !== 'block' && !isBuffsOpen && !isDebuffsOpen) {
                overlay.classList.remove('show');
                body.classList.remove('no-scroll');
            }
        }, 300);
    };

    if (openReverseBtn) openReverseBtn.addEventListener('click', (e) => { e.preventDefault(); showReverseModal(); });
    if (closeReverseBtn) closeReverseBtn.addEventListener('click', window.hideReverseModal);
    if (cancelReverseBtn) cancelReverseBtn.addEventListener('click', window.hideReverseModal);
    if (calcReverseBtn) {
        calcReverseBtn.addEventListener('click', () => {
            if (typeof applyReverseCalculation === 'function') applyReverseCalculation();
        });
    }



    // general overlay
    overlay.addEventListener('click', () => {
        if (enemyModal.style.display === 'block') hideEnemyModal();
        if (reverseModal && reverseModal.style.display === 'block') window.hideReverseModal();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (enemyModal.style.display === 'block') hideEnemyModal();
            if (reverseModal && reverseModal.style.display === 'block') window.hideReverseModal();
        }
    });

    /*
    ---------------
    enemy list load
    ---------------
    */
    window.addEventListener('load', function() {
        const catSelect = document.getElementById("category_select");
        const enemySelect = document.getElementById("Enemy_list");

        if (catSelect && enemySelect) {
            catSelect.addEventListener('change', function() { localStorage.setItem('gc_saved_category', this.value); });
            enemySelect.addEventListener('change', function() { localStorage.setItem('gc_saved_enemy', this.value); });

            const savedCat = localStorage.getItem('gc_saved_category');
            const savedEnemy = localStorage.getItem('gc_saved_enemy');
            
            if (savedCat) {
                catSelect.value = savedCat;
                catSelect.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    if (savedEnemy) {
                        const optionExists = Array.from(enemySelect.options).some(option => option.value === savedEnemy);
                        if (optionExists) {
                            enemySelect.value = savedEnemy;
                            enemySelect.dispatchEvent(new Event('change'));
                        }
                    }
                }, 100); 
            }
        }
    });
});