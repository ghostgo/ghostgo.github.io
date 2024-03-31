window.addEventListener('DOMContentLoaded', () => {

    let activeSidebarBtn = document.querySelector('.sidebar-btn--active');
    const sidebarButtons = document.querySelectorAll('.sidebar-btn, .sidebar-top-btn');

    if (!activeSidebarBtn) {
      sidebarButtons[0].classList.add('sidebar-btn--active');
      activeSidebarBtn = sidebarButtons[0];
    }

  for (let i = 0; i < sidebarButtons.length; i++) {
    sidebarButtons[i].addEventListener('click', () => {
      activeSidebarBtn.classList.remove('sidebar-btn--active');
      sidebarButtons[i].classList.add('sidebar-btn--active');
      activeSidebarBtn = sidebarButtons[i];
    });
  }
})