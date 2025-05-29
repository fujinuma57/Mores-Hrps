document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".background-slider img");
  let index = 0;

  function showSlide(i) {
    slides.forEach((img, idx) => {
      img.classList.remove("active");
      if (idx === i) img.classList.add("active");
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  showSlide(index);
  setInterval(nextSlide, 5000); // 5秒ごとに切替
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formspree.io/f/xldbvpbg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        document.getElementById("contactSuccess").style.display = "block";
        contactForm.reset();
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      alert("通信エラーが発生しました。");
    }
  });
});
