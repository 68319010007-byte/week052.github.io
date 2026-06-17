document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const primaryMenu = document.getElementById("primary-menu");
    const megaTrigger = document.getElementById("mega-trigger");
    const megaContent = document.querySelector(".mega-content-box");

    // 1. เปิด-ปิด เมนูหลักแฮมเบอร์เกอร์บนมือถือ
    mobileMenuBtn.addEventListener("click", () => {
        primaryMenu.classList.toggle("active");
        
        const icon = mobileMenuBtn.querySelector("i");
        if (primaryMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark"); // เปลี่ยนเป็นไอคอนกากบาท
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            
            // ปิดเมนูสินค้าข้างในเมื่อปิดเมนูหลัก
            megaContent.classList.remove("open");
            megaTrigger.classList.remove("arrow-rotate");
        }
    });

    // 2. ระบบคลิกเพื่อกาง/หุบ เมนูสินค้า (Mega Menu) บนจอมือถือ
    megaTrigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บกระตุกหรือโหลดใหม่
            megaContent.classList.toggle("open");
            megaTrigger.classList.toggle("arrow-rotate");
        }
    });

    // 3. ล้างสถานะเมื่อขยายหน้าจอกลับมาเป็น Desktop
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
