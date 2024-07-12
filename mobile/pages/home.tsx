import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
    const user = {
        "id": 1,
        "role": 3,
        "number": "0612354681",
        "email": "student1@example.com",
        "password": "password1",
        "first_name": "Student",
        "last_name": "One",
        "class": "CP1"
    };

    return (
        <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image
            source={require('../assets/profile.png')}
            style={styles.avatar}
            />
            <Text style={[styles.name]}>{user.first_name} {user.last_name}</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user.email}</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Telephone:</Text>
            <Text style={styles.infoValue}>{user.number}</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Classe :</Text>
            <Text style={styles.infoValue}>{user.class}</Text>
            </View>
        </View>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    coverImage: {
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color:'black',
    },
    content: {
        marginTop: 20,
        borderWidth: 1,
        paddingBottom: 20,
        borderRadius: 10,
    },
    infoContainer: {
        marginTop: 20,
        textAlign: 'center',
    },
    infoLabel: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoValue: {
        marginTop: 5,
        textAlign: 'center',
    },
});