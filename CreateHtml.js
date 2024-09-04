const fs = require('fs');
const path = require('path');

// 파일이 저장될 디렉토리 설정
const outputDir = path.join(__dirname, '/public/detail');

// 디렉토리 생성 (이미 존재하는 경우 에러가 발생하지 않도록 처리)
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// HTML 템플릿 생성 함수
const generateHTML = (index) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Detail Page ${index}</title>
    <link rel="stylesheet" href="detail_style.css"> <!-- 스타일시트 불러오기 -->
</head>
<body>
    <div class="header">
        ITEM${index}
    </div>
    <button class="toggle-button" onclick="toggleSidebar()">☰</button> <!-- 사이드바 토글 버튼 -->
    <div class="aside" id="sidebar">
        <ul id="lookList">
            <li data-tooltip="Layer Curve Denim Pants"><a href="/detail/detail_1.html">ITEM1</a></li>
            <li data-tooltip="Color Scheme Fleece Jacket"><a href="/detail/detail_2.html">ITEM2</a></li>
            <li data-tooltip="Nolc logo sweatpants"><a href="/detail/detail_3.html">ITEM3</a></li>
            <li data-tooltip="NM HAIRY BEANIE"><a href="/detail/detail_4.html">ITEM4</a></li>
            <li data-tooltip="GIRLFRIEND SLEEVELESS MINI DRESS"><a href="/detail/detail_5.html">ITEM5</a></li>
            <li data-tooltip="Authentic Workgear Sweater Natural"><a href="/detail/detail_6.html">ITEM6</a></li>
            <li data-tooltip="Satin Varsity Jacket"><a href="/detail/detail_7.html">ITEM7</a></li>
            <li data-tooltip="XTT061"><a href="/detail/detail_8.html">ITEM8</a></li>
            <li data-tooltip="SYMBOL LOGO BEANIE"><a href="/detail/detail_9.html">ITEM9</a></li>
            <li data-tooltip="Y.E.S Snail Logo Zip-up Hoodie"><a href="/detail/detail_10.html">ITEM10</a></li>
            <li data-tooltip="VINTAGE WASHING JEANS"><a href="/detail/detail_11.html">ITEM11</a></li>
            <li data-tooltip="Rhombus Lightweight Track Jacket"><a href="/detail/detail_12.html">ITEM12</a></li>
            <li data-tooltip="3 LAYER SUMMIT MORE LINING WIND BREAKER"><a href="/detail/detail_13.html">ITEM13</a></li>
            <li data-tooltip="Extra Fine Merino Wool Goggle Beanie"><a href="/detail/detail_14.html">ITEM14</a></li>
            <li data-tooltip="DWARF DENIM PANTS"><a href="/detail/detail_15.html">ITEM15</a></li>
            <li data-tooltip="Basic Safari Keyring Card Wallet"><a href="/detail/detail_16.html">ITEM16</a></li>
            <li data-tooltip="sheer collar top"><a href="/detail/detail_17.html">ITEM17</a></li>
            <li data-tooltip="Peterson OG Sole Canvas Low Sneakers"><a href="/detail/detail_18.html">ITEM18</a></li>
            <li data-tooltip="Index Track Pants"><a href="/detail/detail_19.html">ITEM19</a></li>
            <li data-tooltip="Y.E.S Windbreaker"><a href="/detail/detail_20.html">ITEM20</a></li>
            <li data-tooltip="Sk8-Mid Reissue 83 LX"><a href="/detail/detail_21.html">ITEM21</a></li>
            <li data-tooltip="PENON WIND SHELL"><a href="/detail/detail_22.html">ITEM22</a></li>
            <li data-tooltip="Soft Suede Twill Balloon Pants"><a href="/detail/detail_23.html">ITEM23</a></li>
            <li data-tooltip="Sporty Logo Sweater"><a href="/detail/detail_24.html">ITEM24</a></li>
            <li data-tooltip="Zipper Mesh Jacket"><a href="/detail/detail_25.html">ITEM25</a></li>
            <li data-tooltip="Tech Shield Windproof Hoodie Jacket"><a href="/detail/detail_26.html">ITEM26</a></li>
            <li data-tooltip="HATE MY EX TOP"><a href="/detail/detail_27.html">ITEM27</a></li>
            <li data-tooltip="dot frill hooded windbreaker jumper"><a href="/detail/detail_28.html">ITEM28</a></li>
            <li data-tooltip="lace cargo pants"><a href="/detail/detail_29.html">ITEM29</a></li>
            <li data-tooltip="Tooltip for ITEM30"><a href="/detail/detail_30.html">ITEM30</a></li>
            <li data-tooltip="Two Zipper Compact Backpack"><a href="/detail/detail_31.html">ITEM31</a></li>
            <li data-tooltip="PONY STRIPE KNIT"><a href="/detail/detail_32.html">ITEM32</a></li>
            <li data-tooltip="Beaded Waist Denim Pant"><a href="/detail/detail_33.html">ITEM33</a></li>
            <li data-tooltip="Isa Asymmetrical Knit Top"><a href="/detail/detail_34.html">ITEM34</a></li>
            <li data-tooltip="space watch"><a href="/detail/detail_35.html">ITEM35</a></li>
            <li data-tooltip="G CLASSIC RIB TRACK ZIP-UP"><a href="/detail/detail_36.html">ITEM36</a></li>
        </ul>        
    </div>
    <div class="content">
        <div class="main-content" id="mainContent">
            <div class="left">
                <button class="imgbutton" onclick="previousImage()">&#60;</button> <!-- 이전 이미지 버튼 -->
                <div class="image-container" onclick="toggleFlip()">
                    <div class="image-front">
                        <img id="image-0" src="/image/image_${index}_0.jpg" alt="Detailed Image ${index}" class="active">
                        <img id="image-1" src="/image/image_${index}_1.jpg" alt="Detailed Image ${index}">
                        <img id="image-2" src="/image/image_${index}_2.jpg" alt="Detailed Image ${index}">
                    </div>
                    <!-- 상품 구매처 링크 부분 -->
                    <div class="image-back">
                        <a href=""
                        target="_blank">ITEM🔗</a>
                        <a href=""
                        target="_blank">BRAND WEBSITE🔗</a>
                    </div>
                </div>
                <button class="imgbutton" onclick="nextImage()">&#62;</button> <!-- 다음 이미지 버튼 -->
            </div>
            <div class="right">
                <!-- LOOK 설명 -->
                <div class="description">
                    <a href ="" target="_blank"># 브랜드명</a><br>
                    <a>상품명</a>
                    <p>This is a detailed description of the image ${index}. You can describe the content, the context, or any other relevant information about the image here. This section can be as long as necessary to convey the message or story behind the image.</p>
                    <div class="button-container">
                        <button onclick="window.location.href='/detail/detail_${index - 1}.html';"> < Previous Post</button>
                        <button onclick="window.location.href='/detail/detail_${index + 1}.html';">Next Post > </button>
                        <button onclick="window.location.href='/?noAnim=true';">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const totalLooks = 36; // LOOK의 총 개수

        document.querySelectorAll('#lookList li').forEach(function (item) {
            // 마우스를 올렸을 때
            item.addEventListener('mouseenter', function () {
                const tooltipText = item.getAttribute('data-tooltip'); // 각 항목의 data-tooltip 속성 값을 가져옴
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
        
            // 말풍선 위치 설정 (글씨 바로 옆에 더 가깝게 위치)
                const rect = item.getBoundingClientRect();
                tooltip.style.left = rect.right + window.pageXOffset + -45 +'px'; // 오른쪽에 아주 작은 간격만 남김
                tooltip.style.top = rect.top + window.pageYOffset +'px';
        
                // 말풍선을 현재 항목에 참조로 저장
                item.tooltip = tooltip;
            });
        
            // 마우스를 뗐을 때
            item.addEventListener('mouseleave', function () {
                if (item.tooltip) {
                    document.body.removeChild(item.tooltip);
                    item.tooltip = null;
                }
            });
        });

        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');

        function toggleSidebar() {
            sidebar.classList.toggle('visible');
            mainContent.classList.toggle('shifted');
        }

        const images = document.querySelectorAll('.image-front img');
        let currentIndex = 0;

        function updateClasses() {
            images.forEach((img, index) => {
                img.classList.remove('active', 'prev', 'next');
                if (index === currentIndex) {
                    img.classList.add('active');
                } else if (index === (currentIndex + 1) % images.length) {
                    img.classList.add('next');
                } else if (index === (currentIndex - 1 + images.length) % images.length) {
                    img.classList.add('prev');
                }
            });
        }

        function previousImage() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateClasses();
        }

        function nextImage() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateClasses();
        }

        updateClasses(); // 초기화 호출

        function toggleFlip() {
            const container = document.querySelector('.image-container');
            container.classList.toggle('flipped');
        }
    </script>
</body>
</html>
`;

// 36개의 파일 생성
for (let i = 1; i <= 36; i++) {
    const content = generateHTML(i);
    const filePath = path.join(outputDir, `detail_${i}.html`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File created: ${filePath}`);
}
