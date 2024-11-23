import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Msg = ()=>{
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Olá Mundo!</Text>
        </View>
        // <StyledView>
        //     <StyledText>Olá mundo!</StyledText>
        // </StyledView>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "rgb(15, 15, 15)",
        marginTop: 100
    },
    text: {
        color: "white"
    }
});

// const StyledView = styled.View`
//     background-color: rgb(15,15,15);
//     margin-top: 100px;
//     width: fit-content;
// `;

// const StyledText = styled.Text`
//     color: white;
// `;

export default Msg;