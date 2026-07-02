function initFilter() {
    // 1. 宣告所有需要用到的 DOM 元素
    const groupSelect = document.getElementById('groupSelect');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.song-card');
    const songSelect = document.getElementById('songSelect'); // ✅ 補上這一行！

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // 2. 側邊欄選單邏輯
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

    // 3. 篩選邏輯
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

    // 4. 綁定按鈕與輸入事件
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

    // 5. 歌曲下拉選單平滑滾動（現在 songSelect 有定義了，安全！）
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