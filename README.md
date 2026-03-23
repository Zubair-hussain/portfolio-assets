# 🖼️ portfolio-assets

Static image assets for **Zubair Hussain's** 3D personal portfolio website.  
Hosted on GitHub and fetched directly via raw URLs — zero cost, zero backend.

---

## 📁 Folder Structure


portfolio-assets/
└── frames/
├── ezgif-frame-001.jpg
├── ezgif-frame-002.jpg
├── ezgif-frame-003.jpg
│ ...
├── ezgif-frame-197.jpg
└── ezgif-frame-001.webp
└── ezgif-frame-002.webp
└── ...
└── ezgif-frame-197.webp


> **Total images:** 197  
> **Original Format:** JPG  
> **Optimized Format:** WebP  
> **Folders:** `frames/` & `frames-webp/`

---

## 🔗 Base Raw URLs

**JPG:**  

https://raw.githubusercontent.com/Zubair-hussain/portfolio-assets/main/frames/


**WebP:**  

https://raw.githubusercontent.com/Zubair-hussain/portfolio-assets/main/frames-webp/


---

## 🚀 How to Fetch in Next.js

### Generate All Image URLs

```js
const JPG_BASE = "https://raw.githubusercontent.com/Zubair-hussain/portfolio-assets/main/frames/"
const WEBP_BASE = "https://raw.githubusercontent.com/Zubair-hussain/portfolio-assets/main/frames-webp/"

// Generates: ezgif-frame-001 → ezgif-frame-197
const jpgImages = Array.from({ length: 197 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0')
  return `${JPG_BASE}ezgif-frame-${num}.jpg`
})

const webpImages = Array.from({ length: 197 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0')
  return `${WEBP_BASE}ezgif-frame-${num}.webp`
})

Use webpImages in production for faster loading.

⚡ Performance Tips
Tip	Benefit
Load first 10 frames	Fast initial render
Use WebP in production	Smaller file size, faster load
Lazy load remaining frames	Smooth scrolling / animation
Cache textures in a Map	Avoid re-fetching same frames
👤 Author

Zubair Hussain
Full Stack Developer & Co-Founder @ Xovato

📍 Hyderabad, Pakistan
🔗 GitHub: @Zubair-hussain


> Save the file after replacing the conflict markers.

---

## 2️⃣ Stage and continue rebase

```bash
git add README.md
git rebase --continue
