import * as elements from 'typed-html'

import Navigation from './components/Navigation'

const App = ({ children: routeView }: elements.Children) => {
    return( 
        <div class='h-screen flex flex-col bg-background text-white'>
            <Navigation />
            <main class='flex-grow flex justify-center items-center'>
                {routeView}
            </main>
        </div>
    )
}

export default App