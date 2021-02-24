import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PinInsert from '../images/Pin.png';
import { getData } from '../services';
import { AccenturePoint, IInitialMarker } from '../interfaces';

export default function Home() {
    const navigation = useNavigation();

    const [ accenturePoints, setAccenturePoints ] = useState<AccenturePoint[]>([]);
    const [ initialMarker, setInitialMarker ] = useState<IInitialMarker>({
      latitude: -23.4852324,
      longitude: -46.864544433009236,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008
    });

    const handlePageDetails = useCallback(( id: number ) => {
        navigation.navigate('Accenture', { id });
    }, [ navigation ]);
    

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setInitialMarker({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          });
        }
      );
    }, []);

    useEffect(() => {
      const getAccenturePoints = async () => {
        const response = await getData.get<AccenturePoint[]>('all');

        setAccenturePoints(response.data);
      }

      getAccenturePoints();
    }, []);

    return (
        <View style={styles.container}>
            <MapView 
              style={ styles.MapContainer } 
              provider={ PROVIDER_GOOGLE }
              initialRegion={initialMarker}
            >
            { accenturePoints.map((point, index) => (
              <Marker
                icon={PinInsert}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude
                }}
                key={ index }
              >
                <Callout
                    tooltip
                    onPress={ () => handlePageDetails(point.id) }
                >
                <View style={ styles.CalloutContainer } >
                    <Text style={ styles.CalloutText }>{ point.name }</Text>
                </View>
                </Callout>
              </Marker>
            ))}
            </MapView>

            <View style={ styles.SearchContainer } >
              
            <TextInput 
              style={ styles.SearchText } 
              placeholder="Pesquise aqui"
            />
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
