import React, { useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PinInsert from '../images/Pin.png';

export default function Home() {
    const navigation = useNavigation();

    const handlePageDetails = useCallback(() => {
        navigation.navigate('Accenture');
    }, [ navigation ]);

    return (
        <View style={styles.container}>
            <MapView 
            style={ styles.MapContainer } 
            provider={ PROVIDER_GOOGLE }
            initialRegion={{
                latitude: -24.959060,
                longitude: -53.465750,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
            }}
            >

            <Marker
                icon={PinInsert}
                coordinate={{
                latitude: -24.959060,
                longitude: -53.465750
                }}
            >
                <Callout
                    tooltip
                    onPress={ handlePageDetails }
                >
                <View style={ styles.CalloutContainer } >
                    <Text style={ styles.CalloutText }>Aqui estou</Text>
                </View>
                </Callout>
            </Marker>
            </MapView>

            <View style={ styles.SearchContainer } >
            <Text style={ styles.SearchText } >Texto qualquer</Text>
            <RectButton style={ styles.SearchButton } >
                <Feather name="search" size={20} color="#fff" />
            </RectButton>
            </View>
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
    MapContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    CalloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, .8)',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    CalloutText: {
      color: '#A100FF',
      textAlign: 'center',
      fontSize: 14
    },
    SearchContainer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 24,
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 24
    },
    SearchText: {
      color: '#8fa7b3'
    },
    SearchButton: {
      height: 56,
      width: 56,
      backgroundColor: '#a100ff',
      borderRadius: 15,

      justifyContent: 'center',
      alignItems: 'center'
    }
});
