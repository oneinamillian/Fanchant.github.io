function initFilter() {
    const groupSelect = document.getElementById('groupSelect');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.song-card');

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

       const menuLinks = document.querySelectorAll('.nav-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // performFilter 先定義，後面才能呼叫
    let activeCompany = 'all';

    function performFilter() {
    const selectedGroup = groupSelect ? groupSelect.value.toLowerCase() : 'all';
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';

    cards.forEach(card => {
        const cardGroup = (card.getAttribute('data-group') || '').toLowerCase();
        const cardTitle = card.querySelector('.card-title') ? card.querySelector('.card-title').innerText.toLowerCase() : '';
        const cardCompany = card.getAttribute('data-company') || '';

        const matchGroup = (selectedGroup === 'all' || cardGroup.includes(selectedGroup));
        const matchText = cardTitle.includes(searchText);
        const matchCompany = (activeCompany === 'all' || cardCompany === activeCompany);

        card.style.display = (matchGroup && matchText && matchCompany) ? '' : 'none';
    });
}

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCompany = btn.dataset.filter;
            performFilter();
        });
    });

    if (groupSelect) {
        groupSelect.addEventListener('change', performFilter);
    }
    if (searchInput) {
        searchInput.addEventListener('input', performFilter);
    }

    if (songSelect) {
    songSelect.addEventListener('change', () => {
        const value = songSelect.value;
        if (value === 'all') return;
        const target = document.getElementById(value);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
}

initFilter();