import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';


export default function TabThreeScreen() {

    return (

        <View style={styles.container}>
            <Text style={styles.title}>To Do</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </View>

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
    checkbox: {
        margin: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        fontWeight: 500,
        fontSize: 18,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: 'coral',
    },
});
