import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Boat component
const Boat = ({ name, description, icon_name, picture }) => {
    return (
        <View style={styles.container}>
            <Image source={picture} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Icon name={icon_name} size={24} color="#000" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    image: {
        width: 350,
        height: 250,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default Boat;
