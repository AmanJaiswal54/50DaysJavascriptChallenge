(function () {
  const CURRENCY = {
    "en-US": "USD",
    "en-GB": "GBP",
    "en-IN": "INR",
    "en-DE": "EUR",
  };

  let selectedOption = "";
  let selectedPrice = "";

  let convertedPrice = document.querySelector("#converted-price");
  const options = document.querySelector("#lang");
  const inputPrice = document.querySelector(".price");
  const submit = document.querySelector("#submit");

  options.addEventListener("click", function (e) {
    selectedOption = e.target.value;
  });
  inputPrice.addEventListener("keyup", function (e) {
    selectedPrice = e.target.value;
  });

  inputPrice.addEventListener("change", function (e) {
    selectedPrice = e.target.value;
  });

  submit.addEventListener("click", function (e) {
    const locale = selectedOption;
    const options = {
      style: "currency",
      currency: CURRENCY[locale],
    };
    const formatter = new Intl.NumberFormat(locale, options);
    formatter.format(selectedPrice);
    convertedPrice.innerHTML = formatter.format(selectedPrice);
  });
})();
