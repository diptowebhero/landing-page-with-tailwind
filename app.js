function scrollToTop() {
  var topButton = document.createElement("button");
  topButton.innerHTML = "&uarr;";
  topButton.style.display = "none";
  topButton.style.position = "fixed";
  topButton.style.bottom = "20px";
  topButton.style.right = "30px";
  topButton.style.zIndex = "99";
  topButton.style.border = "none";
  topButton.style.outline = "none";
  topButton.style.backgroundColor = "#052D56";
  topButton.style.color = "#fff";
  topButton.style.cursor = "pointer";
  topButton.style.padding = "15px";
  topButton.style.width = "50px";
  topButton.style.height = "50px";
  topButton.style.display = "flex";
  topButton.style.alignItems = "center";
  topButton.style.justifyContent = "center";
  topButton.style.borderRadius = "50%";
  topButton.classList.add("animate-bounce");

  document.body.appendChild(topButton);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  topButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}

scrollToTop();
