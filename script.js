document.addEventListener("DOMContentLoaded", () => {
  const captchaElement = document.getElementById("captcha-img");
  const captchaInput = document.getElementById("captcha-input");
  const captchaResult = document.getElementById("captcha-result");
  const refreshCaptchaBtn = document.getElementById("refresh-captcha");
  const verifyCaptchaBtn = document.getElementById("verify-captcha");
  const captchaContainer = document.getElementById("captcha-container");

  let currentCaptcha;

  function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * 12); 
    const captchaImage = `images/captcha${randomIndex + 1}.png`; 
    const captchaCode = generateRandomCode(randomIndex); 
    currentCaptcha = { src: captchaImage, code: captchaCode };
    captchaElement.src = `${captchaImage}`; 
    captchaResult.textContent = "";
    captchaInput.value = "";
    updateUI(); 
  }
  

  function generateRandomCode(index) {
    const codes = [
      "ReCAptChA",
      "iMKiZ",
      "4cz8JyAz",
      "smwm",
      "CAPTCHA",
      "W68HP",
      "706DE",
      "WWM3GP",
      "NPQ6",
      "1MQW",
      "2W4M",
      "upord"
    ];
    return codes[index];
  }
  
  

  function verifyCaptcha() {
    const userInput = captchaInput.value;
    if (userInput === currentCaptcha.code) {
      captchaResult.textContent = "CAPTCHA verified!";
      captchaResult.classList.remove("error");
      captchaResult.classList.add("success");
      alert("CAPTCHA verified!");
    } else {
      captchaResult.textContent = "Incorrect CAPTCHA. Please try again.";
      captchaResult.classList.remove("success");
      captchaResult.classList.add("error");
      alert("Incorrect CAPTCHA. Please try again.");
    }
  }

  function updateUI() {
    const dynamicColor = getRandomColor();
    document.body.style.background = `linear-gradient(135deg, ${dynamicColor}, ${getContrastingColor(dynamicColor)})`;
    captchaElement.style.borderRadius = "15px";
    captchaElement.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.3)`;
    refreshCaptchaBtn.style.background = dynamicColor;
    verifyCaptchaBtn.style.background = dynamicColor;
    captchaContainer.classList.add("dynamic");
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getContrastingColor(color) {
    const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const r = parseInt(rgb[1], 10);
    const g = parseInt(rgb[2], 10);
    const b = parseInt(rgb[3], 10);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.5 ? "#000" : "#fff";
  }

  refreshCaptchaBtn.addEventListener("click", generateCaptcha);
  verifyCaptchaBtn.addEventListener("click", verifyCaptcha);

  
  generateCaptcha();
});