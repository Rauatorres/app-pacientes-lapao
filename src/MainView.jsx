import { View, StyleSheet } from 'react-native';
import Msg from './Msg';

const MainView = ()=>{
    return (
        <View style={style}>
            <Msg/>
        </View>
    )
};

const style = StyleSheet.create({
    flex: 1,
    backgroundColor: "rgb(233, 233, 233)",
});

export default MainView;