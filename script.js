/* Interactive Photo Gallery - Final Project JavaScript */

// 1. Hàm tự động chạy khi trang load xong (Event: onload)
function initializeGallery() {
  console.log("Page loaded. Initializing gallery attributes...");

  // Lấy danh sách tất cả các ảnh có class 'preview'
  let images = document.querySelectorAll(".preview");

  // Vòng lặp for để tự động thêm thuộc tính tabindex="0" cho từng ảnh
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to image " + (i + 1));
  }
}

// 2. Hàm xử lý khi di chuột VÀO hoặc khi phím Tab FOCUS VÀO ảnh (onmouseover & onfocus)
function upDate(previewPic) {
  console.log("Event triggered: Focus / MouseOver");
  console.log("Alt text: " + previewPic.alt);
  console.log("Image source: " + previewPic.src);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// 3. Hàm xử lý khi di chuột RA hoặc khi phím Tab RỜI ĐI (onmouseleave & onblur)
function unDo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}