(function () {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Active link
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Lightbox for images
  const lb = document.querySelector(".lightbox");
  const lbImg = document.querySelector(".lightbox img");
  const lbClose = document.querySelector(".lightbox .close");

  function openLB(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "صورة";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLB() {
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach((img) => {
    img.addEventListener("click", () => openLB(img.src, img.alt));
  });

  if (lbClose) lbClose.addEventListener("click", closeLB);
  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLB();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLB();
  });

  // WhatsApp form
  const waForm = document.querySelector("[data-wa-form]");
  if (waForm) {
    waForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = "966553206066"; // +966 بدون +
      const name = waForm.querySelector("[name='name']")?.value?.trim() || "";
      const service = waForm.querySelector("[name='service']")?.value?.trim() || "";
      const city = waForm.querySelector("[name='city']")?.value?.trim() || "";
      const msg = waForm.querySelector("[name='message']")?.value?.trim() || "";

      const text =
        `السلام عليكم\n` +
        `الاسم: ${name}\n` +
        `المدينة/الحي: ${city}\n` +
        `الخدمة المطلوبة: ${service}\n` +
        `تفاصيل: ${msg}\n\n` +
        `مرسل من موقع النطاق المتقن للنظافة والصيانة`;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();
