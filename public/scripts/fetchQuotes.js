const adviceApiURL = "https://api.adviceslip.com/advice";

window.onload = () => {
  const rerollButtonElement = document.getElementById("advice-reroll");
  const quoteElement = document.getElementById("advice-quote");
  const adviceNumberElement = document.getElementById("advice-number");

  const updateAdvice = (data) => {
    quoteElement.innerHTML = `"${data.advice}"`;
    adviceNumberElement.innerHTML = `ADVICE # ${data.id}`;
  };

  const fetchAdvice = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => updateAdvice(data.slip))
      .catch((error) => console.log(error));
  };

  rerollButtonElement.addEventListener("click", () => {
    fetchAdvice(adviceApiURL);
  });
};
