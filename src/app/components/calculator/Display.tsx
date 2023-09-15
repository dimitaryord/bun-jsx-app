import * as elements from 'typed-html'

const DisplayElement = () => {
    return(
        <div>
            <textarea 
            id='calc-display'
            placeholder='0' readonly='true' 
            class='px-2 pt-10 resize-none rounded-lg shadow-lg shadow-white text-white text-5xl font-bold bg-background w-96 h-24'
            >0</textarea>
        </div>
    )
}

export default DisplayElement