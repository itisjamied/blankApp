import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';
import { setBackgroundColorAsync } from 'expo-system-ui';

export default function TabTestScreen() {

    return (

        <View style={styles.container}>

            <View style={styles.block}>
                <Text style={styles.text}> work folder </Text>
            </View >
            <View style={styles.block}>
                <Text style={styles.text}> work folder </Text>
            </View >
            <View style={styles.block}>
                <Text style={styles.text}> work folder </Text>
            </View >
            <Button
                title="Open Modal"
            />
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    block: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        width: '90%',
        height: '12%',
        margin: 8,
        backgroundColor: '#95A78D',
    },
    text: {
        textAlign: 'center',
        paddingTop: 32,
        color: 'black',
        fontWeight: 'bold'
    }

});
