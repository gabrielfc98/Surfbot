document.addEventListener("DOMContentLoaded", function () {
  const timer = document.querySelector(".contact-Schedule h2");
  const currentTime = new Date().getHours();

  function HorarioFuncionamento() {
    if (currentTime >= 6 && currentTime < 13) {
      timer.style.setProperty("--after-color", "#36F126");
    } else if (currentTime >= 13 && currentTime < 14) {
      timer.style.setProperty("--after-color", "#F1DD26");
    } else {
      timer.style.setProperty("--after-color", "#F13226");
    }
  }
  HorarioFuncionamento();

  const infantilRadioButton = document.getElementById("infantil");
  const valueSpan = document.querySelector(
    ".confirmation-payment .value-class"
  );

  infantilRadioButton.addEventListener("change", () => {
    if (infantilRadioButton.checked) {
      valueSpan.innerHTML = "R$ 49,99";
    } else {
      valueSpan.innerHTML = ""; // Clear the value if another class is selected
    }
  });
});
