import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function TabThreeScreen() {
    const [normalCheckbox, setNormalCheckbox] = useState(false);
    const [customCheckbox, setCustomCheckbox] = useState(false);
    const [disabledCheckbox] = useState(false);

    return (

        <View style={styles.container}>
            <Text style={styles.title}>To Do</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View>
                <View style={styles.section}>
                    <Checkbox style={styles.checkbox} value={normalCheckbox} onValueChange={setNormalCheckbox} />
                    <Text>Normal checkbox</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={customCheckbox}
                        onValueChange={setCustomCheckbox}
                        //can use name, hex, or rgb
                        color={customCheckbox ? 'red' : undefined}
                    />
                    <Text>Custom colored checkbox</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox style={styles.checkbox} disabled value={disabledCheckbox} />
                    <Text>Disabled checkbox</Text>
                </View>
            </View>
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
        borderRadius: 6,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
