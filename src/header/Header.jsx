import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = (props)=>{
    const navigation = useNavigation();

    return (
        <View style={ styles.navbar }>
            <Text style={ styles.nomeUsuario }>{props.username}</Text>
            {/* <Text>teste</Text> */}
            <TouchableOpacity style={ styles.botaoSair } onPress={() => navigation.goBack()}>
                <Text style={ styles.textoBotaoSair }>sair</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(20, 200, 250)',
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        padding: 10,
        // height: 100,
    },
    nomeUsuario: {
        color: 'white',
        flex: 1,
        // flexDirection: 'column',
        // textAlign: 'center',
        // justifyContent: 'center',
        fontSize: 15,
        fontWeight: 600,
        // backgroundColor: 'green',
    },
    botaoSair: {
        flex: 0,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        borderRadius: 7,
    },
    textoBotaoSair: {
        // backgroundColor: 'green',
        fontSize: 15,
    }
});

export default Header;