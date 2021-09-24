class Converter{
    constructor(root){
        this.celsius = root.querySelector('#celsius')
        this.fahrenheit = root.querySelector('#fahrenheit')

        this.init()
    }

    init(){
        this.celsius.addEventListener('input', () => this.printFahrenheit())
        this.fahrenheit.addEventListener('input', () => this.printCelsius())
        this.celsius.addEventListener('focus', () => this.clearInputs())
        this.fahrenheit.addEventListener('focus', () => this.clearInputs())
    }

    calcToFahrenheit(){
        let output = parseInt(this.celsius.value) * 9 / 5 + 32;
        return isNaN(output) ? '' : output.toFixed(2);
    }

    calcToCelsius(){
        let output = (parseInt(this.fahrenheit.value) - 32) * 5 / 9;
        return isNaN(output) ? '' : output.toFixed(2);
    }

    printCelsius(){
        this.celsius.value = this.calcToCelsius()
    }

    printFahrenheit(){
        this.fahrenheit.value = this.calcToFahrenheit()
    }

    clearInputs(){
        this.celsius.value = ''
        this.fahrenheit.value = ''
    }
}

new Converter(document.getElementById('converter'))
