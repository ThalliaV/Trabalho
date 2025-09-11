//import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rodape from '../Components/Rodape';

export default function Missoes({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Missões Diárias</Text>
            <Rodape navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});