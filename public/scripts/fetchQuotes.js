const adviceApiURL = "https://api.adviceslip.com/advice";

window.onload = () => {
  const fetchAdvice = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data.slip))
      .catch((error) => console.log(error));
  };

  const rerollButtonElement = document.getElementById("advice-reroll");

  rerollButtonElement.addEventListener("click", () =>
    fetchAdvice(adviceApiURL)
  );
};
