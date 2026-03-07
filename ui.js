document.addEventListener('DOMContentLoaded', () => {
    
    // collapsible side menu
    const menuTrigger = document.getElementById('menuTrigger');
    const menuClose = document.getElementById('menuClose');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if(menuTrigger) menuTrigger.addEventListener('click', openMenu);
    if(menuClose)   menuClose.addEventListener('click', closeMenu);
    if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // scroll to top
    const btnTop = document.getElementById("btnTop");

        function scrollFunction() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            
            if (scrollTop > 300) {
                btnTop.classList.add("show");
            } else {
                btnTop.classList.remove("show");
            }
        }

        window.addEventListener('scroll', scrollFunction);

        btnTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
});

function initCategories() {
    const categorySelect = document.getElementById("category_select");
    const enemySelect = document.getElementById("Enemy_list");

    categorySelect.addEventListener("change", loadEnemies);
    categorySelect.innerHTML = ""; 
    
    for (let categoryName in categoryMap) {
        let option = document.createElement("option");
        option.value = categoryName;
        option.text = categoryName;
        categorySelect.appendChild(option);
    }
    
    loadEnemies();
}

function loadEnemies() {
    const categorySelect = document.getElementById("category_select");
    const enemySelect = document.getElementById("Enemy_list");

    if (!categorySelect || !enemySelect) return;

    const selectedCategory = categorySelect.value;
    const enemyIds = categoryMap[selectedCategory]; 
    
    enemySelect.innerHTML = ""; 
    
    if (enemyIds) {
        enemyIds.forEach(id => {
            if (enemyData[id]) {
                let option = document.createElement("option");
                option.value = id;
                option.text = enemyData[id].name;
                enemySelect.appendChild(option);
            }
        });
    }

    enemySelect.dispatchEvent(new Event('change'));
}

// dropdown list icon flip
    const wrappers = document.querySelectorAll(".select-wrapper");

    wrappers.forEach(wrapper => {
        const select = wrapper.querySelector("select");
        if (!select) return;
        let ignoreClick = false;
        select.addEventListener("click", function() {
            if (ignoreClick) {
                ignoreClick = false; 
                return;
            }

            requestAnimationFrame(() => {
                wrapper.classList.toggle("active");
            });
        });

        select.addEventListener("change", function() {
            wrapper.classList.remove("active");
            this.blur();
            
            ignoreClick = true;
            
            setTimeout(() => { ignoreClick = false; }, 200);
        });

        select.addEventListener("blur", function() {
            wrapper.classList.remove("active");
        });

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                wrapper.classList.remove("active");
                select.blur();
            }
        };
        select.addEventListener("keydown", handleEscape);
        select.addEventListener("keyup", handleEscape);
    });

window.addEventListener('load', function() {
    initCategories();
});

function resetAllInputErrors() {
    const errorElements = document.querySelectorAll('.input-error');
    errorElements.forEach(el => {
        el.classList.remove('input-error');
    });
}

function setErrorOnInputById(inputId) {
    const element = document.getElementById(inputId);
    if (!element) return;

    const inputContainer = element.closest('.input-container');
    const selectWrapper = element.closest('.select-wrapper');

    if (inputContainer) {
        inputContainer.classList.add('input-error');
    } else if (selectWrapper) {
        selectWrapper.classList.add('input-error');
    } else {
        element.classList.add('input-error');
    }
}

function baseDmgUpdateFlash(inputId) {
    const element = document.getElementById(inputId);
    if (!element) return;

    let target = element;
    const inputContainer = element.closest('.input-container');
    const selectWrapper = element.closest('.select-wrapper');

    if (inputContainer) {
        target = inputContainer;
    } else if (selectWrapper) {
        target = selectWrapper;
    }

    target.classList.remove('input-success');
    
    // reflow
    void target.offsetWidth; 
    target.classList.add('input-success');

    setTimeout(() => {
        target.classList.remove('input-success');
    }, 1500);
}

function showResultOnUi(ui_final_dmg, ui_corrected_final_dmg, avgCritDmg, ui_back_normal, ui_back_critical, ui_back_average) {
    const frontColumn = document.getElementById('front-column');
    const backColumn = document.getElementById('back-column');

    frontColumn.innerHTML = '';
    backColumn.innerHTML = '';

    const frontContent = `
        <div class="result-card">
            <div class="result-header header-front">
                <i class="fas fa-gavel"></i> Front Damage
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsNormalHitDamage}</span>
                <span class="result-value val-yellow">${ui_final_dmg.toLocaleString('en-US')}</span>
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsCriticalHitDamage}</span>
                <span class="result-value val-yellow">${ui_corrected_final_dmg.toLocaleString('en-US')}</span>
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsAverageDamage}</span>
                <span class="result-value val-yellow">${avgCritDmg.toLocaleString('en-US')}</span>
            </div>
        </div>
    `;

    const backContent = `
        <div class="result-card">
            <div class="result-header header-back">
                <i class="fas fa-shield-alt"></i> Back Damage
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsBackNormal || "Normal"}</span>
                <span class="result-value val-yellow">${ui_back_normal.toLocaleString('en-US')}</span>
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsBackCritical || "Crítico"}</span>
                <span class="result-value val-yellow">${ui_back_critical.toLocaleString('en-US')}</span>
            </div>
            
            <div class="result-row">
                <span class="result-label">${stringsBackAverage || "Médio"}</span>
                <span class="result-value val-yellow">${ui_back_average.toLocaleString('en-US')}</span>
            </div>
        </div>
    `;

    frontColumn.innerHTML = frontContent;
    backColumn.innerHTML = backContent;
}