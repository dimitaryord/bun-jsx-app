import * as elements from 'typed-html'

const ButtonElement = ({ symbol }: {symbol: string}) => {
    return (
        <div>
            <button
                id='calc-btn'
                class=' w-20 h-20 shadow-lg shadow-white text-white font-bold text-2xl px-4 py-3 bg-background rounded-lg'
            >{symbol}</button>
        </div>
    )
}

export default ButtonElement