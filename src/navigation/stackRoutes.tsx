import  { createStackNavigator } from '@react-navigation/stack';
import Home  from '../screens/Home';
import Gallery from '../screens/Gallery';
import Criar from '../screens/Criar';
import Servicos from '../screens/Servicos';


export function StackRoutes() {
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator>
            <Screen name= 'Bank' component={Home}/>
            <Screen name= 'Gallery' component={Gallery}/>
            <Screen name= 'Criar' component={Criar}/>
            <Screen name='Servicos' component={Servicos}/>
        </Navigator>
    );
} 