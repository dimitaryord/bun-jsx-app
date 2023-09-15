import * as elements from 'typed-html'

const Navigation = () => {
    return(
        <div class='flex justify-center items-center w-full'>
            <header class='flex w-11/12 border-b-2 my-5'>
                <nav class='flex-grow flex justify-center items-center mb-5'>
                    <ul class='flex space-x-10 text-xl'>
                        <li>
                            <button href='/' id='btn-navigation' class='p-5 hover:bg-slate-500'>Home</button>
                        </li>
                        <li>
                            <button href='/calculator' id='btn-navigation' class='p-5 hover:bg-slate-500'>Calculator</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation