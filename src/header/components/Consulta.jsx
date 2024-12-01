import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Consulta = (props)=>{
    // console.log(props);
    const [nome, setNome] = useState('');
    const PACIENTE = 0;
    const MEDICO = 1;
    const server = 'http://192.168.0.8:3000';

    useEffect(()=>{
        async function retornarNome(){
            let tipoBuscado;
            let id;
            switch (props.tipo){
                case 0:
                    tipoBuscado = 'medico';
                    id = props.medico;
                    break;
                case 1:
                    tipoBuscado = 'paciente';
                    id = props.paciente;
                    break;
                default:
                    break;
            }
            const response = await fetch(`${server}/${tipoBuscado}/nome`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: id
                })
            });
            if(!response.ok){
                setNome('erro de request');
            }else{
                const data = await response.json();
                setNome(data.nome);
            }
        }
        retornarNome();
    }, []);

    function mostrarConsulta(){
            return (
                <View style={styles.consultaView}>
                    <Text style={styles.nomeText}>{nome}</Text>
                    <View style={styles.dataView}>
                        <Text style={styles.dataTituloText}>Data</Text>
                        <Text style={styles.dataConteudoText}>{props.data} - {props.hora}</Text>
                        {/* <Button title='teste' ></Button> */}
                    </View>
                </View>
            );
    }

    return (
        <>
            {mostrarConsulta()}
        </>
    );

};

const styles = StyleSheet.create({
    consultaView: {
        margin: 10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        boxShadow: "2x 2px 10px 3px rgba(0, 0, 0, 0.3)"
    },
    nomeText: {
        margin: 7,
        fontWeight: 700
    },
    dataView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
    },
    dataTituloText:  {
        // backgroundColor: 'blue',
        // flex: 1,
    },
    dataConteudoText: {
        flex: 0.9,
        // backgroundColor: 'orange',
        color: 'rgb(120, 120, 120)',
    }
});

export default Consulta;