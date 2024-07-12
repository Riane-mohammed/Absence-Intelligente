import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function Absense() {
    const data = {
        labels: ['flou', 'securité', 'tec', 'anglais'],
        datasets: [{
            data: [2, 5, 8, 1],
        }]
    };

    return (
        <View style={styles.container}>
            <Text>Absense</Text>
            <BarChart
                data={data}
                width={350}
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 12,
                    borderWidth: 1,
                }}
            />
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
});
