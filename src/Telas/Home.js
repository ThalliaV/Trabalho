import React, { useState } from 'react';
import { View, Button, Pressable, Text, StyleSheet } from 'react-native';

export default function Home({navigation}){
    const [likes, setLikes] = useState(0);

    return (

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Missões" onPress={()=> navigation.navigate('Missoes')}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Temporada" onPress={()=> navigation.navigate('Temporada')}/>
            </View>

            <Pressable style={({ pressed }) => [styles.likeButton, pressed && { opacity: 0.6 }]}
            onPress={() => setLikes(likes + 1)}>
                <Text style={styles.likeText}>Like: {likes}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '60%'
    },
    likeButton: {
        marginTop: 20,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    likeText: { color: '#000', fontSize: 18, fontWeight: 'bold'},
});
