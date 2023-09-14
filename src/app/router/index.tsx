import * as elements from 'typed-html'
import App from '../App'
import HomeView from '../views/HomeView'

const AppRouter = {
    root: App,
    router: [
        {
            path: '/',
            root: HomeView,
        }
    ]
}

export default AppRouter