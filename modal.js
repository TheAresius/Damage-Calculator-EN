// modal window setup
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var showInfoButton = document.getElementById('showInfoButton');
    var closeButton = document.querySelector('.close-button');
    var modalContent = modal.querySelector('.modal-content')
    var modalText = document.getElementById('modalText');
    var enemyList = document.getElementById('Enemy_list');
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
    var selectedOption = enemyList.value;
    var enemyInfo = enemyData[selectedOption];
  
    modalText.innerHTML = `<div class="modal-header">
                             <img src="${enemyInfo.path}" alt="${enemyInfo.name}" class="modal-image" oncontextmenu="return false;">
                             <div class="modal-name">${enemyInfo.name}</div>
                           </div>
                           <div class="modal-separator"></div>
                           <div class='modal-subtitle'>[Description]</div>
                           <div>${enemyInfo.description}</div>
                           <div class='modal-subtitle'>[Stats]</div>
                           <div>${enemyInfo.status.defense1}</div>
                           <div>${enemyInfo.status.defense2}</div>
                           <div>${enemyInfo.status.defense3}</div>
                           <div>${enemyInfo.status.health}</div>
                           <div class='modal-subtitle'>[Extra information]</div>
                           <div>${enemyInfo.extra}</div>`;
  
    showModal();
    });

    closeButton.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          hideModal();
      }
    });
  });