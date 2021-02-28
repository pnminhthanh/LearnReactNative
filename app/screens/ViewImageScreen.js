import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config';

function ViewImageScreen(props) {
    return <View style={styles.container}>
        <View style={styles.closeIcon} >
            <MaterialCommunityIcons
                name="close"
                color="white"
                size={35}
            />
        </View>
        <View style={styles.deleteIcon} >
            <MaterialCommunityIcons
                name="trash-can-outline"
                color="white"
                size={35}
            />
        </View>
        <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/glass.jpeg')}></Image>
    </View>
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 50,
        left: 40
    },
    deleteIcon: {
        position: 'absolute',
        top: 50,
        right: 40
    },
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    }
})

export default ViewImageScreen;