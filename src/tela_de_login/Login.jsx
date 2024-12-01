import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({navigation})=>{
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    async function logar(){
        const server = 'http://192.168.0.8:3000';

        try{
            const response = await fetch(`${server}/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: nome,
                    senha: password
                })
            });

            if(!response.ok){
                Alert.alert('falhou');
            }else{
                const { success, data, msg } = await response.json();
                if(success){
                    navigation.navigate('main', data);
                    // console.log(data);
                }else{
                    Alert.alert(`Não foi possível realizar o login - ${msg}`);
                    
                }
            }
        }catch (erro){
            console.error(erro);
            Alert.alert('Erro de conexão, tente novamente mais tarde');
        }
    };

    return (
        <View style={styles.loginView}>
            <Text style={styles.loginTitulo}>Bem vindo ao consultas lapão</Text>
            <TextInput style={styles.inputs} onChangeText={text => setNome(text)} placeholder='Nome'/>
            <TextInput style={styles.inputs} onChangeText={text => setPassword(text)} placeholder='Senha' secureTextEntry/>
            <TouchableOpacity style={styles.botaoLogin} onPress={logar}>
                <Text style={styles.botaoLoginTexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginView: {
        backgroundColor: 'white',
        margin: 20,
        marginTop: 40,
        flex: 0.3,
        paddingBottom: 50,
    },
    loginTitulo: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    inputs: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        width: 300,
        margin: 10,
    },
    botaoLogin: {
        backgroundColor: 'rgb(20, 200, 250)',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    botaoLoginTexto: {
        flex: 0,
        fontSize: 20,
        color: 'white',
    }
});

export default Login