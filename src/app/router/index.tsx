import App from '../App'
import HomeView from '../views/HomeView'
import CalculatorView from '../views/CalculatorView'

interface Router{
    root: any,
    path?: string,
    router: Array<Router>
}

const AppRouter: Router = {
    root: App,
    router: [
        {
            path: '/',
            root: HomeView,
        } as Router,
        {
            path: '/calculator',
            root: CalculatorView,
        } as Router
    ]
}

export default AppRouter