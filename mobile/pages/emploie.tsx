import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function Emploie() {
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraRef, setCameraRef] = useState();
    const [photo, setPhoto] = useState();
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync({ base64: true });
            setPhoto(photo.uri);
            sendPhotoToApi(photo);
        }
    };

    const sendPhotoToApi = async (photo) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('photo', {
                uri: photo.uri,
                type: 'image/jpeg',
                name: 'photo.jpg',
            });

            const response = await fetch('YOUR_API_URL_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

            const data = await response.json();
            setApiResponse(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                ref={ref => setCameraRef(ref)}
            />
            <Button title="Take Picture" onPress={takePicture} />
            {photo && <Image source={{ uri: photo }} style={styles.preview} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    preview: {
        flex: 1,
        width: '100%',
    },
});
