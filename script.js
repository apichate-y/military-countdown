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
let dischargeDate = null;
let startDate = null;
let countdownInterval = null;
let quoteInterval = null;

function updateMotivationalQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    if (!quoteElement) return;

    quoteElement.style.opacity = '0';

    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % motivationalQuotes.length;
        quoteElement.textContent = `"${motivationalQuotes[currentQuoteIndex]}"`;
        quoteElement.style.opacity = '0.8';
    }, 250);
}

// คำนวณปี เดือน วัน ชั่วโมง นาที วินาที
function calculateTimeUnits(timeLeft) {
    const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
}

function updateCountdown() {
    if (!dischargeDate || !startDate) return;

    const now = new Date();
    const timeLeft = dischargeDate - now;

    // ถ้าวันปลดมาถึงแล้ว
    if (timeLeft <= 0) {
        document.getElementById('celebration').style.display = 'block';
        document.getElementById('years').textContent = '0';
        document.getElementById('months').textContent = '0';
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('progress').style.width = '100%';
        document.getElementById('progress-text').textContent = 'ปลดทหารแล้ว! 🎉';
        return;
    }

    // คำนวณเวลาที่เหลือ
    const timeUnits = calculateTimeUnits(timeLeft);

    // อัพเดทการแสดงผล
    document.getElementById('years').textContent = timeUnits.years.toString();
    document.getElementById('months').textContent = timeUnits.months.toString();
    document.getElementById('days').textContent = timeUnits.days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = timeUnits.hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = timeUnits.minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = timeUnits.seconds.toString().padStart(2, '0');

    // คำนวณ progress bar และจำนวนวันที่รับราชการ
    const totalTime = dischargeDate - startDate;
    const timePassed = now - startDate;
    const progressPercentage = Math.max(0, Math.min(100, (timePassed / totalTime) * 100));
    const daysServed = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    const daysLeft = totalDays - daysServed;

    document.getElementById('progress').style.width = progressPercentage + '%';
    document.getElementById('progress-text').textContent =
        `รับราชการมาแล้ว ${daysServed} วัน • เหลืออีก ${daysLeft} วัน`;
}

// บันทึกข้อมูลลง LocalStorage
function saveToStorage(dischargeDateStr, startDateStr) {
    localStorage.setItem('militaryDischargeDates', JSON.stringify({
        dischargeDate: dischargeDateStr,
        startDate: startDateStr
    }));
}

// โหลดข้อมูลจาก LocalStorage
function loadFromStorage() {
    const saved = localStorage.getItem('militaryDischargeDates');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            return {
                dischargeDate: data.dischargeDate,
                startDate: data.startDate
            };
        } catch (e) {
            console.error('Error loading saved dates:', e);
            return null;
        }
    }
    return null;
}

// แสดงหน้าเคาดาวน์
function showCountdownPage() {
    document.getElementById('setup-container').style.display = 'none';
    document.getElementById('countdown-container').style.display = 'block';

    // เริ่ม interval สำหรับอัพเดท
    countdownInterval = setInterval(updateCountdown, 1000);
    quoteInterval = setInterval(updateMotivationalQuote, 5000);

    // อัพเดทครั้งแรก
    updateCountdown();
}

// แสดงหน้าตั้งค่า
function showSetupPage() {
    document.getElementById('countdown-container').style.display = 'none';
    document.getElementById('setup-container').style.display = 'block';

    // หยุด interval
    if (countdownInterval) clearInterval(countdownInterval);
    if (quoteInterval) clearInterval(quoteInterval);
}

// จัดการฟอร์มกรอกข้อมูล
function handleFormSubmit(event) {
    event.preventDefault();

    const dischargeDateInput = document.getElementById('discharge-date').value;
    const startDateInput = document.getElementById('start-date').value;

    if (!dischargeDateInput || !startDateInput) {
        alert('กรุณากรอกวันที่ให้ครบถ้วน');
        return;
    }

    // ตรวจสอบวันที่
    const dischargeDateTime = new Date(dischargeDateInput);
    const startDateTime = new Date(startDateInput);

    if (startDateTime >= dischargeDateTime) {
        alert('วันที่เริ่มรับราชการต้องมาก่อนวันที่ปลด');
        return;
    }

    // บันทึกข้อมูล
    dischargeDate = dischargeDateTime;
    startDate = startDateTime;

    saveToStorage(dischargeDateInput, startDateInput);
    showCountdownPage();
}

// ตั้งค่าวันที่ใหม่
function resetDates() {
    localStorage.removeItem('militaryDischargeDates');
    dischargeDate = null;
    startDate = null;
    showSetupPage();
}

// เพิ่มเอฟเฟกต์พิเศษ
function addEntryAnimation() {
    const containers = document.querySelectorAll('.setup-container, .countdown-container');
    containers.forEach(container => {
        if (container.style.display !== 'none') {
            container.style.opacity = '0';
            container.style.transform = 'translateY(50px)';

            setTimeout(() => {
                container.style.transition = 'all 1s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

// เริ่มต้นแอป
function initApp() {
    createStars();

    // ตรวจสอบข้อมูลที่บันทึกไว้
    const savedData = loadFromStorage();

    if (savedData) {
        // มีข้อมูลบันทึกไว้แล้ว
        dischargeDate = new Date(savedData.dischargeDate);
        startDate = new Date(savedData.startDate);
        showCountdownPage();
    } else {
        // ยังไม่มีข้อมูล แสดงหน้าตั้งค่า
        showSetupPage();
    }

    // เพิ่ม event listeners
    document.getElementById('setup-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('reset-btn').addEventListener('click', resetDates);

    // เพิ่มเอฟเฟกต์
    setTimeout(addEntryAnimation, 100);
}

// เริ่มต้นเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', initApp);