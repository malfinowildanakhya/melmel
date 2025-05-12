function startWebsite() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".container").style.display = "block";
  typingEffect("typing", "Selamat Ulang Tahun, Cintaku 💖");
}

function typingEffect(id, text, i = 0) {
  if (i < text.length) {
    document.getElementById(id).innerHTML += text.charAt(i);
    setTimeout(() => typingEffect(id, text, i + 1), 100);
  }
}

function toggleSurat() {
  const surat = document.getElementById("isiSurat");
  if (surat.style.display === "none" || surat.style.display === "") {
    surat.style.display = "block";
  } else {
    surat.style.display = "none";
  }
}
