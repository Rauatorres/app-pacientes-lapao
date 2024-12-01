import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, Text, Alert, StyleSheet } from 'react-native';
import Header from './header/Header';
import Consulta from './header/components/Consulta';
import Login from './tela_de_login/Login';

const MainView = ({route})=>{
    const [consultas, setConsultas] = useState([]);
    const { id, username, tipo, id_pessoa } = route.params;

    const server = 'http://192.168.0.8:3000';


    useEffect(()=>{
        async function request(){
            try{
                const response = await fetch(`${server}/consultas`, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        id_pessoa: id_pessoa,
                        tipo: tipo
                    })
                });

                if(!response.ok){
                    Alert.alert('falhou');
                }else{
                    const data = await response.json();
                    setConsultas(data.consultas);
                }
            }catch (erro){
                Alert.alert(`Não foi possível obter as consultas - ${erro}`);
            }

        }

        request();
    }, []);

    return (
        < >
            <Header username={username}/>
            <FlatList 
                style={styles.consultasList} 
                data={consultas}
                renderItem={({item}) => 
                    <Consulta 
                        id={item.id} 
                        paciente={item.idpaciente} 
                        medico={item.idmedico} 
                        data={item.data_fim} 
                        hora={item.hora} 
                        tipo={tipo}
                    />
                }
            />
        </>
    );
};

const styles = StyleSheet.create({
    consultasList: {
        padding: 20,
    }
});

export default MainView;