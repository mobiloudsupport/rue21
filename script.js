document.addEventListener('DOMContentLoaded', function () {
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');

    submenuTriggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const subItemsList = this.closest('.menu-item').querySelector('.sub-items-list');
        const itemIcon = this.querySelector('.item-icon');

        // Toggle the expanded class for transition
        subItemsList.classList.toggle('expanded');
        
        // Toggle the flip class for rotating the item-icon
        if(this.classList.contains('item-icon')){
          this.classList.toggle('flip')
        } else {
        this.nextElementSibling.classList.toggle('flip')
        };
      
      });
    });
  });