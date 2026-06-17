document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const primaryMenu = document.getElementById("primary-menu");
    const megaTrigger = document.getElementById("mega-trigger");
    const megaContent = document.querySelector(".mega-content-box");

    // 1. เปิด-ปิด เมนูหลักบนมือถือ (Hamburger Menu)
    mobileMenuBtn.addEventListener("click", () => {
        primaryMenu.classList.toggle("active");
        
        // สลับไอคอนระหว่าง ขีดสามขีด (bars) กับ กากบาท (xmark)
        const icon = mobileMenuBtn.querySelector("i");
        if (primaryMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            
            // ถ้าปิดเมนูหลัก ให้สั่งปิดเมนูสินค้าข้างในด้วย
            megaContent.classList.remove("open");
            megaTrigger.classList.remove("arrow-rotate");
        }
    });

    // 2. ระบบ Click-to-Open เมนูสินค้า (Mega Menu) สำหรับขนาดจอมือถือ
    megaTrigger.addEventListener("click", (e) => {
        // ทำงานเฉพาะเมื่อความกว้างหน้าจอน้อยกว่าหรือเท่ากับ 992px เท่านั้น
        if (window.innerWidth <= 992) {
            e.preventDefault(); // ป้องกันการเปลี่ยนหน้าเพจทันที
            megaContent.classList.toggle("open");
            megaTrigger.classList.toggle("arrow-rotate");
        }
    });

    // 3. รีเซ็ตคลาสต่างๆ เมื่อผู้ใช้ขยายหน้าจอกลับไปเป็นเดสก์ท็อป
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            primaryMenu.classList.remove("active");
            megaContent.classList.remove("open");
            megaTrigger.classList.remove("arrow-rotate");
            
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
});
