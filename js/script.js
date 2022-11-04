{
    const calculateResult = (amount, currency) => {
        const EUR = 4.81;
        const USD = 4.95;
        const GBP = 5.52;

        switch (currency) {
            case "EUR":
                return amount * EUR;

            case "USD":
                return amount * USD;

            case "GBP":
                return amount * GBP;
        }
    };
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const currency = currencyElement.value;
        const amount = amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}