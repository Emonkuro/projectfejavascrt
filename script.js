/* Interactive Photo Gallery - Modified Theme */

// 1. Tự động gán tabindex khi tải trang (Event: onload)
function initializeGallery() {
  console.log("Gallery initialized successfully.");

  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to preview element " + (i + 1));
  }
}

// 2. Xử lý khi di chuột VÀO hoặc phím Tab FOCUS VÀO (onmouseover & onfocus)
function upDate(previewPic) {
  console.log("Event triggered for:", previewPic.alt);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// 3. Xử lý khi di chuột RA hoặc phím Tab RỜI ĐI (onmouseleave & onblur)
function unDo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover or focus on a dish below to view!";
}
