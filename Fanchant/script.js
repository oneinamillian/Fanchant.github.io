/* script.js */

// 使用一個函式封裝，避免變數污染
function initFilter() {
    const groupSelect = document.getElementById('groupSelect');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.song-card');

    // 檢查元素是否存在，避免報錯
    if (!groupSelect || !cards.length) {
        console.warn("找不到篩選選單或歌曲卡片");
        return;
    }

    function performFilter() {
        const selectedGroup = groupSelect.value.toLowerCase();
        const searchText = (searchInput ? searchInput.value.toLowerCase() : "");

        cards.forEach(card => {
            const cardGroup = card.getAttribute('data-group').toLowerCase();
            const cardTitle = card.querySelector('.card-title').innerText.toLowerCase();

            // 判斷邏輯
            const matchGroup = (selectedGroup === 'all' || cardGroup.includes(selectedGroup));
        const matchText = cardTitle.includes(searchText);

            // 執行顯示或隱藏
            if (matchGroup && matchText) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log(`篩選完成：${selectedGroup}`);
    }

    // 綁定事件
    groupSelect.addEventListener('change', performFilter);
    if (searchInput) {
        searchInput.addEventListener('input', performFilter);
    }
}

// 執行初始化
initFilter();