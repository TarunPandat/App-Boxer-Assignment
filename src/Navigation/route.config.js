import {CreateTodo} from '../screens/CreateTodo'
import { Home } from '../screens/Home'

export const RouteName = {
    Home: 'Home',
    CreateTodo: 'CreateTodo',
}

const Routes = {
    Home: {
        component: Home,
        name: RouteName.Home,
        options: {headerShown: false}
    },
    CreateTodo: {
        component: CreateTodo,
        options: {}
    },
}

export default Routes
