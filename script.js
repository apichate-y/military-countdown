// สร้างดาวในพื้นหลัง
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// คำคมแรงบันดาลใจ
const motivationalQuotes = [
    "ทุกวันที่ผ่านไปคือก้าวหนึ่งสู่อิสรภาพ",
    "การอดทนวันนี้ คือความสุขของพรุ่งนี้",
    "เวลาที่เหลืออยู่แต่ละวิ คือความหวังที่ใกล้เข้ามา",
    "ความแข็งแกร่งมาจากการฝ่าฟันความยากลำบาก",
    "ทุกรุ่งอรุณคือโอกาสใหม่ที่จะใกล้เป้าหมายมากขึ้น",
    "ความมุ่งมั่นของวันนี้ คือประสบการณ์ที่ล้ำค่าตลอดชีวิต",
    "การรอคอยที่มีความหมาย คือการรอคอยที่คุ้มค่า",
    "ทุกท้าทายที่ผ่านมา ทำให้เราแข็งแกร่งขึ้น",
    "อิสรภาพที่แท้จริง คือผลตอบแทนของความอดทน",
    "วันดีๆ กำลังรอเราอยู่ที่ข้างหน้า"
];

let currentQuoteIndex = 0;

function updateMotivationalQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    quoteElement.style.opacity = '0';

    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % motivationalQuotes.length;
        quoteElement.textContent = `"${motivationalQuotes[currentQuoteIndex]}"`;
        quoteElement.style.opacity = '0.8';
    }, 250);
}

// กำหนดวันที่ปลดทหาร (1 พฤศจิกายน 2568)
const dischargeDate = new Date('2025-11-01T00:00:00');
const startDate = new Date('2024-11-01T00:00:00'); // วันเริ่มต้นรับราชการ (1 พฤศจิกายน 2567)

function updateCountdown() {
    const now = new Date();
    const timeLeft = dischargeDate - now;

    // ถ้าวันปลดมาถึงแล้ว
    if (timeLeft <= 0) {
        document.getElementById('celebration').style.display = 'block';
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('progress').style.width = '100%';
        document.getElementById('progress-text').textContent = 'ปลดทหารแล้ว! 🎉';
        return;
    }

    // คำนวณเวลาที่เหลือ
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // อัพเดทการแสดงผล
    document.getElementById('days').textContent = days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // คำนวณ progress bar และจำนวนวันที่รับราชการ
    const totalTime = dischargeDate - startDate;
    const timePassed = now - startDate;
    const progressPercentage = Math.max(0, Math.min(100, (timePassed / totalTime) * 100));
    const daysServed = Math.floor(timePassed / (1000 * 60 * 60 * 24));

    document.getElementById('progress').style.width = progressPercentage + '%';
    document.getElementById('progress-text').textContent =
        `รับราชการมาแล้ว ${daysServed} วัน • เหลืออีก ${days} วัน`;
}

// เริ่มต้น
createStars();
updateCountdown();

// อัพเดททุกวินาที
setInterval(updateCountdown, 1000);

// เปลี่ยนคำคมทุก 5 วินาที
setInterval(updateMotivationalQuote, 5000);

// เพิ่มเอฟเฟกต์พิเศษ
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(50px)';

    setTimeout(() => {
        container.style.transition = 'all 1s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});