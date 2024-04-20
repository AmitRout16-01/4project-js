const form = document.querySelector('form')

console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weights = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = "Please enter a valid height in number."
    } else if (weights === '' || weights < 0 || isNaN(weights)) {
        results.innerHTML = "Please enter valid weight in number."
    } else {
        const bmi = (weights / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})