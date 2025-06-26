// modal window setup
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var showInfoButton = document.getElementById('calc-info');
    var closeButton = document.querySelector('.close-button');
    var modalContent = modal.querySelector('.modal-content')
    var modalText = document.getElementById('modalText');
    var body = document.body;
  
    function showModal() {
        overlay.classList.add('show');
        modal.style.display = 'block';
        body.classList.add('no-scroll');
        setTimeout(function() {
            modalContent.classList.add('show');
        }, 10); // delay to trigger the transition
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
  
    // modal content
    modalText.innerHTML = `<div class="modal-calc-header">
                                 <div class="modal-name">Damage Calculator</div>
                               </div>
                               <div class="modal-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#F2F4F4;'>[Levels]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Character level:</b></span> enter the level of your character. This is not your chase level!</p></span></div>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Monster level:</b></span> enter the level of the monster. Monsters on the enemy list are set as level 85 automatically.</p></span></div>
                               </div>

                            <div class="title-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: #FFB347;'>[Stats]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Enter your character stats in this section.</p></span></div>

                            <div class="title-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#9370DB;'>[Taint]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Taint debuff:</b></span> enter the amount of taint debuff present in the desired dungeon. It is not necessary 
                                        to add it, if the desired dungeon doesn't have a taint debuff.</p></span></div>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Taint resistance:</b></span> enter your taint resistance stats. It is not necessary
                                        to add it, if the desired dungeon doesn't have a taint debuff.</p></span></div>

                            <div class="title-separator"></div>

                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#CE6363;'>[Buffs]</span>
                                    <div><span class='indent'><p class='justified'>Every buff has a checkbox. If marked, the calculator will consider that value to do the math. You can select which buffs to consider and which ones are appropriated for each calculation.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>All skill damage:</b></span> enter the amount of stats you have on your stats window.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Attack / attacked damage:</b></span> enter the amount of stats you have on your stats window.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Damage to bosses:</b></span> enter the amount of stats you have on your stats window. Remember that not every enemy is a boss!</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Back attack damage:</b></span> enter the amount of stats you have on your stats window. If you don't check it, the calculator will consider
                                    the base back attack damage the game uses (30%).</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Other buffs:</b></span> add the sum of every buff that is not present on the stats window such as GC club, runes, titles, character buffs, second gear ring etc, or buffs for
                                    specific skills such as Normal skill damage, Awakening skill damage and 4th bar skill damage.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Defense ignore debuffs:</b></span> add the sum of every ignore defense debuff applied to an enemy, such as Elesis' Provocation or Arme's Fear. It is not necessary to add it, if there are no
                                    debuffs applied.</p></span></div>
                            
                            <div class="title-separator"></div>
                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#5DADE2;'>[Base damage]</span>                                            
                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Base damage:</b></span> add the base damage for basic command, skill or pet you desire to test. You can find every base damage from the game on 
                                    <a class="one" href="https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=722314000" class="inline-link" target="_blank" rel="noopener noreferrer">this</a> sheet.<br>
                                    You can also enter a random value such as '100', just as a test value.</p></span></div>

                            <div class="title-separator"></div>
                            
                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#007BFF;'>[Damage source]</span>                                            
                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>In here you can select the desired damage source.</span></div>
                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Basic command damage:</b></span> applies to multiple actions that are made by pressing Z, X or C keys,
                                        such as basic attacks from characters.<br>The Special Attack property is not applied to this damage source.<br>
                                        Ronan's jump Z attack from the base job (Spell Knight) has a 5.01 base damage, for example.</p></span></div>

                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Skill damage:</b></span> applies to the absolute majority of skills and some special commands such as Ronan's weapon enchant, certain 
                                        active skills and summonings.<br>
                                        Kallia's Ultimate Smite Type 1 has a 324.55 single-hit base damage, for example.</p></span></div>
                                        
                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'><span class='yellow'><b>Pet damage:</b></span> applies exclusively to all pets. The Special Attack property is not applied to this damage source.<br>
                                        The pet Sirius, has 11.33 base damage per hit (first part, 30 hits total) and 0.43 base damage per hit (last part, 20 hits total).<br>
                                        Note: the Red pet stone <b>(Red Glyph)</b> multiplies the base pet damage by a specific ammount based on the rarity <b>(1.04, 1.08 or 1.10)</b>. This <b>is not</b> a damage buff.<br></p></span></div>`;
  
    showModal();
    });
  
    // events that closes the modal window
    closeButton.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          hideModal();
      }
    });
  });