import { View, ScrollView, Text } from 'react-native';
import Header from './header/Header';
import Consulta from './header/components/Consulta';
import Login from './tela_de_login/Login';

const MainView = ({route})=>{
    const { username } = route.params;

    return (
        <View>
            <Header username={username}/>
            <ScrollView>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
                <Consulta/>
            </ScrollView>
        </View>
    );
};



export default MainView;