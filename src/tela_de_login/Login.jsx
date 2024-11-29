import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Login = ({navigation})=>{
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    async function logar(){
        const server = 'http://192.168.0.115:3000';

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
        <View>
            <Text>Bem vindo ao consultas lapão</Text>
            <TextInput onChangeText={text => setNome(text)} placeholder='Nome'/>
            <TextInput onChangeText={text => setPassword(text)} placeholder='Senha' secureTextEntry/>
            <Button onPress={logar} title='Entrar'/>
            <Text>Teste</Text>
        </View>
    );
};

export default Login