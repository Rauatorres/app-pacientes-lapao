import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = (props)=>{
    const navigation = useNavigation();

    return (
        <View style={ styles.navbar }>
            <Text>{props.username}</Text>
            {/* <Text>teste</Text> */}
            <Button title='Sair' onPress={() => navigation.goBack()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'red',
        height: 50
    }
});

export default Header;