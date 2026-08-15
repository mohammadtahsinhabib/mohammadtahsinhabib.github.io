(function () {
  var STORAGE_KEY = 'sidebarCollapsed';
  var DESKTOP_BREAKPOINT = 850;
  var root = document.documentElement;
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.createElement('button');

  function getIsDesktop() {
    return window.matchMedia('(min-width: ' + DESKTOP_BREAKPOINT + 'px)').matches;
  }

  function applyState(collapsed) {
    if (!sidebar) return;

    sidebar.classList.toggle('collapsed', collapsed);
    root.setAttribute('data-sidebar-collapsed', collapsed ? 'true' : 'false');

    if (collapsed) {
      localStorage.setItem(STORAGE_KEY, '1');
    } else {
      localStorage.setItem(STORAGE_KEY, '0');
    }
  }

  function init() {
    if (!sidebar) return;

    toggleButton.type = 'button';
    toggleButton.className = 'sidebar-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle sidebar');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';

    toggleButton.addEventListener('click', function () {
      if (!getIsDesktop()) return;

      var isCollapsed = sidebar.classList.contains('collapsed');
      applyState(!isCollapsed);
      toggleButton.setAttribute('aria-expanded', String(!isCollapsed));
      toggleButton.innerHTML = isCollapsed
        ? '<i class="fas fa-chevron-left"></i>'
        : '<i class="fas fa-chevron-right"></i>';
    });

    document.body.appendChild(toggleButton);

    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      var collapsed = saved === '1';
      applyState(collapsed);
      toggleButton.setAttribute('aria-expanded', String(collapsed ? false : true));
      toggleButton.innerHTML = collapsed
        ? '<i class="fas fa-chevron-right"></i>'
        : '<i class="fas fa-chevron-left"></i>';
    } catch (e) {
      applyState(false);
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }

    window.addEventListener('resize', function () {
      if (!getIsDesktop()) {
        toggleButton.style.display = 'none';
      } else {
        toggleButton.style.display = 'flex';
      }
    });

    if (!getIsDesktop()) {
      toggleButton.style.display = 'none';
    } else {
      toggleButton.style.display = 'flex';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
