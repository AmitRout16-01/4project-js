const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#result')

    if (height === isNaN(height) || height === '' || height < 0) {
        result.innerHTML = "nO WAY";
    } 
})