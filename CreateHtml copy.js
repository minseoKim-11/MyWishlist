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
        <!-- 사이드바 내용 -->
        <ul id="lookList"></ul>
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
                    <a href=""># 브랜드명/a><br>
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
        const listContainer = document.getElementById('lookList');

        for (let i = 1; i <= totalLooks; i++) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = \`/detail/detail_\${i}.html\`;
            link.textContent = \`ITEM\${i}\`;
            listItem.appendChild(link);
            listContainer.appendChild(listItem);
        }
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
