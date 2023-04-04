  const textFiles = [
    "text1.txt",
    "text2.txt",
    "text3.txt"
  ];

  let currentTextIndex = 0;
  const textDisplay = document.getElementById("text-display");

  function nextText() {
    currentTextIndex = (currentTextIndex + 1) % textFiles.length;
    fetch(textFiles[currentTextIndex])
      .then(response => response.text())
      .then(data => {
        textDisplay.textContent = data;
      });}