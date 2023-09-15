'use strict'

const navigationButtons = document.querySelectorAll('#btn-navigation')

navigationButtons.forEach(navigationButton => {
    navigationButton.addEventListener('click', () => {
        const origin = window.location.origin
        window.location.href = origin + navigationButton.getAttribute('href')
    })
})


import { initCalcValue, setCalcValue, setSymbolValue } from '/store'


const calcButtons = document.querySelectorAll('#calc-btn')
const calcDisplay = document.querySelector('#calc-display')

window.addEventListener('DOMContentLoaded', () => {initCalcValue(calcDisplay)})


calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        switch(button.textContent){
            case 'Sqrt': setCalcValue(calcDisplay, value => Math.sqrt(value), true); break;
            case 'Pow': setCalcValue(calcDisplay, value => Math.pow(value, 2), true); break;
            case 'Res': setCalcValue(calcDisplay, () => 0, true); break;
            case 'Del': setCalcValue(calcDisplay, value => {
                const stringValue = value.toString()
                return Number(stringValue.substring(0, stringValue.length - 1))
            }, true); break;
            case '+': setSymbolValue('+'); break;
            case '-': setSymbolValue('-'); break;
            case '*': setSymbolValue('*'); break;
            case '/': setSymbolValue('/'); break;
            case '%': setSymbolValue('%'); break;
            case '.': console.log('dot'); break;
            default: setCalcValue(calcDisplay, () => Number(button.textContent)); break;       
        }
    })
})
