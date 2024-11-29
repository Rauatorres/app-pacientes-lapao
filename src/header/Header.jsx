import { View, Text, StyleSheet, Button } from 'react-native';

const Header = (props)=>{
    return (
        <View style={ styles.navbar }>
            <Text>{props.username}</Text>
            {/* <Text>teste</Text> */}
            <Button title='Sair'/>
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