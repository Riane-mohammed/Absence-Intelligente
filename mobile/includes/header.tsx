import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function Header({ title, navigation }: any) {
    const [isVisible, setIsVisible] = useState(false);
    const pages = ['Details'];
    
    const handleBack = () => {
        navigation.goBack();
    };

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity>
                {pages.includes(title) ?
                    <AntDesign name="arrowleft" size={24} color="black" onPress={handleBack} /> :
                    <Feather name="menu" size={24} color="black" onPress={openMenu} />
                }
            </TouchableOpacity>
            <View style={styles.logo}>
                <Text style={styles.title}>{title}</Text>
                <Image source={require('../assets/logo-ensas.png')} style={styles.img} />
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 85,
        backgroundColor: '#DCF0EA',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    img: {
        width: 60,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    option: {
        padding: 10,
    },
});

