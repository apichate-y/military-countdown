# 🎖️ เคาดาวน์วันปลดทหารไทย
## Thai Military Discharge Countdown

เว็บไซต์เคาดาวน์แบบเรียลไทม์สำหรับนับถอยหลังสู่วันปลดทหารกองประจำการ พร้อมดีไซน์สวยงามและคำคมให้กำลังใจ

A beautiful real-time countdown website for Thai military discharge day with motivational quotes and stunning glassmorphism design.

## ✨ Features / คุณสมบัติ

- 🕐 **Real-time Countdown** - เคาดาวน์แบบเรียลไทม์ (วัน ชั่วโมง นาที วินาที)
- 📊 **Progress Tracking** - แสดงจำนวนวันที่รับราชการมาแล้วและเหลืออีกกี่วัน
- 💫 **Beautiful UI** - ดีไซน์สวยงามด้วย Glassmorphism และ Gradient Background
- ⭐ **Animated Stars** - พื้นหลังดาวกระพริบสวยงาม
- 💬 **Motivational Quotes** - คำคมให้กำลังใจหมุนเวียนทุก 5 วินาที (10 ประโยค)
- 📱 **Responsive Design** - รองรับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- 🎨 **Smooth Animations** - เอฟเฟกต์และการเคลื่อนไหวที่นุ่มนวล
- 🎉 **Celebration Mode** - แสดงข้อความแสดงความยินดีเมื่อถึงวันปลดทหาร

## 🚀 Demo

**Live Demo:** [https://apichate-y.github.io/military-countdown](https://github.com/apichate-y/military-countdown)

## 🛠️ Technologies Used / เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - สไตล์และ Responsive Design
  - Flexbox & CSS Grid
  - CSS Animations & Transitions
  - Glassmorphism Effect
  - Media Queries
- **JavaScript (ES6+)** - Logic และ Real-time Updates
  - Date/Time Calculations
  - DOM Manipulation
  - Interval Functions
- **Google Fonts** - Kanit Font สำหรับภาษาไทย

## 📁 Project Structure / โครงสร้างโปรเจค

```
military-countdown/
├── index.html          # หน้าหลัก HTML
├── styles.css          # ไฟล์ CSS ทั้งหมด
├── script.js           # JavaScript Logic
├── README.md           # เอกสารนี้
└── assets/            # โฟลเดอร์สำหรับไฟล์เสริม (ถ้ามี)
    └── images/        # รูปภาพ
```

## 🚀 Getting Started / วิธีการใช้งาน

### Option 1: GitHub Pages (แนะนำ)

1. **Fork Repository นี้**
   ```bash
   # หรือสร้าง repository ใหม่และ clone
   git clone https://github.com/apichate-y/military-countdown.git
   cd military-countdown
   ```

2. **Upload ไฟล์ไปยัง GitHub Repository**
   - อัปโหลด `index.html`, `styles.css`, `script.js`

3. **เปิดใช้งาน GitHub Pages**
   - ไป Settings > Pages
   - เลือก Source: "Deploy from a branch"
   - เลือก Branch: `main` และ Folder: `/ (root)`
   - Save

4. **เข้าถึงเว็บไซต์**
   - URL: `https://apichate-y.github.io/repository-name`

### Option 2: Local Development

1. **Clone Repository**
   ```bash
   git clone https://github.com/apichate-y/military-countdown.git
   cd military-countdown
   ```

2. **เปิดด้วย Live Server**
   - ใช้ VS Code Extension: Live Server
   - หรือเปิดไฟล์ `index.html` ในเบราว์เซอร์โดยตรง

## ⚙️ Customization / การปรับแต่ง

### เปลี่ยนวันที่ปลดทหาร

แก้ไขในไฟล์ `script.js`:

```javascript
// เปลี่ยนวันที่ปลดทหาร (ปัจจุบัน: 1 พฤศจิกายน 2568)
const dischargeDate = new Date('2025-11-01T00:00:00');

// เปลี่ยนวันที่เริ่มรับราชการ (ปัจจุบัน: 1 พฤศจิกายน 2567)
const startDate = new Date('2024-11-01T00:00:00');
```

### เพิ่มคำคมใหม่

แก้ไขในไฟล์ `script.js`:

```javascript
const motivationalQuotes = [
    "ทุกวันที่ผ่านไปคือก้าวหนึ่งสู่อิสรภาพ",
    "เพิ่มคำคมใหม่ของคุณที่นี่",
    // เพิ่มคำคมอื่นๆ...
];
```

### เปลี่ยนสีธีม

แก้ไขในไฟล์ `styles.css`:

```css
body {
    /* เปลี่ยน Gradient Background */
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}

.time-number {
    /* เปลี่ยนสีตัวเลข */
    color: #your-accent-color;
}
```

## 🎯 Roadmap / แผนพัฒนา

- [ ] 🔔 เพิ่มระบบแจ้งเตือน (Push Notifications)
- [ ] 🎵 เพิ่มเสียงเอฟเฟกต์
- [ ] 📊 เพิ่มสถิติและกราฟต่างๆ
- [ ] 🌙 เพิ่ม Dark/Light Mode Toggle
- [ ] 📱 สร้าง Progressive Web App (PWA)
- [ ] 🎨 เพิ่มธีมสีให้เลือก
- [ ] 💾 บันทึกข้อมูลใน Local Storage
- [ ] 🌍 เพิ่มการแปลภาษาอังกฤษ

## 📝 License / ลิขสิทธิ์

โปรเจคนี้ใช้ลิขสิทธิ์ [MIT License](LICENSE) - ดูรายละเอียดในไฟล์ LICENSE

## 👨‍💻 Author / ผู้พัฒนา

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/apichate-y)

## 🙏 Acknowledgments / กิตติกรรมประกาศ

- แรงบันดาลใจจากทหารกองประจำการทุกคนที่รอคอยวันอิสรภาพ
- ขุ้นขอบคุณ [Google Fonts](https://fonts.google.com/) สำหรับฟอนต์ Kanit
- ขอบคุณชุมชน GitHub สำหรับแพลตฟอร์มที่ยอดเยี่ยม

## 📞 Contact / ติดต่อ

- GitHub: [@yourusername](https://github.com/apichate-y)
- Email: your.email@example.com

---

⭐ **หากโปรเจคนี้มีประโยชน์ อย่าลืมกด Star ให้กับเราด้วยนะครับ!**

**"ทุกวันที่ผ่านไปคือก้าวหนึ่งสู่อิสรภาพ"** 🎖️