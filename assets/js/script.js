window.addEventListener('DOMContentLoaded', () => {

    let activeSidebarBtn = document.querySelector('.sidebar-btn.active');
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');

    if (!activeSidebarBtn) {
      sidebarButtons[1].classList.add('active');
      activeSidebarBtn = sidebarButtons[1];
    }

  for (let i = 0; i < sidebarButtons.length; i++) {
    sidebarButtons[i].addEventListener('click', () => {
      activeSidebarBtn.classList.remove('active');
      sidebarButtons[i].classList.add('active');
      activeSidebarBtn = sidebarButtons[i];
    });
  }
})