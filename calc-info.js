document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var showInfoButton = document.getElementById('calc-info');
    var closeButton = document.querySelector('.close-button');
    var modalContent = modal.querySelector('.modal-content');
    var modalText = document.getElementById('modalText');
    var body = document.body;
  
    function showModal() {
        overlay.classList.add('show');
        modal.style.display = 'block';
        body.classList.add('no-scroll');
        setTimeout(function() {
            modalContent.classList.add('show');
        }, 10);
    }
  
    function hideModal() {
        modalContent.classList.remove('show');
        modalContent.classList.add('hide');
  
        setTimeout(function() {
            modal.style.display = 'none';
            modalContent.classList.remove('hide');
            overlay.classList.remove('show');
            body.classList.remove('no-scroll');
        }, 300);
    }

    showInfoButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        modalText.innerHTML = `
            <div class="modal-header-custom">
                <h2 class="modal-title-main">Damage Calculator</h2>
                <div class="modal-separator"></div>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#F2F4F4;">[Levels]</h3>
                <ul class="info-list">
                    <li>In <b class="highlight-yellow">Character level</b> you will input your character's level. It is not the Chase Level!</li>
                    <li>In <b class="highlight-yellow">Monster level</b> you will input the monster's level. Monsters from the enemy list are automatically considered level 90.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color: #FFB347;">[Stats]</h3>
                <ul class="info-list">
                    <li>Here you will input your character's stat values.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#9370DB;">[Taint]</h3>
                <ul class="info-list">
                    <li>In <b class="highlight-yellow">Taint debuff</b>, input the dungeon's value. It is not necessary to fill this if the dungeon has no taint.</li>
                    <li>In <b class="highlight-yellow">Taint resistance</b>, input your resistance stats.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#CE6363;">[Buffs]</h3>
                <p class="info-desc">All buffs have a checkbox. Check it for the calculator to consider that value.</p>
                <ul class="info-list">
                    <li><b class="highlight-yellow">All skill damage:</b> Value found in your character's stat window.</li>
                    <li><b class="highlight-yellow">Attack / attacked damage:</b> Value found in your character's stat window.</li>
                    <li><b class="highlight-yellow">Damage to bosses:</b> Remember that not all enemies are bosses!</li>
                    <li><b class="highlight-yellow">Back attack damage:</b> If unchecked, only the game's base value (30%) will be used.</li>
                    <li><b class="highlight-yellow">Other buffs:</b> Sum of extra buffs not present in the buffs window (+ Button).</li>
                    <li><b class="highlight-yellow">Defense ignore debuffs:</b> Sum of debuffs not present in the debuffs window (+ Button).</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#5DADE2;">[Base Damage]</h3>
                <ul class="info-list">
                    <li><b class="highlight-yellow">Specific tier buff:</b> Sum of awakening/rune properties that strengthen a tier (e.g., Normal Skill Damage, MP3 Damage).</li>
                    <li><b class="highlight-yellow">Specific skill buff:</b> Sum of runes that strengthen a specific skill.</li>
                    <li><b class="highlight-yellow">Base damage:</b> The base damage value the game uses for a skill/basic command/pet (or any random value for testing). You can consult the <a href="https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=722314000" target="_blank" class="inline-link">Base Damage Sheet</a>.</li>
                    <li><b class="highlight-yellow">Find base damage<ion-icon name="swap-horizontal-outline"></ion-icon></b>: If you can't find some skill/basic command/pet in the base damage sheet, it's possible to estimate it by inputting the game damage seen on screen.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#2effa8;">[Damage Type]</h3>
                <ul class="info-list">
                    <li><b class="highlight-yellow">Basic Command:</b> Hits with Z, X, or C. (Special Attack does not apply).</li>
                    <li><b class="highlight-yellow">Skill Damage:</b> Most skills, active techniques, and summons.</li>
                    <li><b class="highlight-yellow">Pet Damage:</b> Exclusive for pets. (Special Attack does not apply).</li>
                </ul>
            </div>
            <div class="section-footer"><br></div>
        `;
        showModal();
    });

    closeButton.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') hideModal();
    });
});