import * as elements from 'typed-html'

import DisplayElement from '../components/calculator/Display'
import ButtonElement from '../components/calculator/Button'

const calculatorButtons = [
    'Res',
    'Del',
    'Pow',
    'Sqrt',
    '+',
    '-',
    '*',
    '/',
    '%',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0',
    '.',
]


const CalculatorView = () => {

    return(<div class='shadow-lg shadow-white rounded-lg px-4 py-5'>
        <DisplayElement />
        <div class='mt-5 w-96 grid grid-cols-4 gap-6'>
            {calculatorButtons.map(calcButton => <ButtonElement symbol={calcButton} />)}
        </div>
    </div>)
}

export default CalculatorView