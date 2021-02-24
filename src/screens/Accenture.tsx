import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import AccentureLogo from '../images/Accenture.png';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AccenturePoint, GetUnit } from '../interfaces';

import { getData } from '../services';

export default function Accenture() {

    const route = useRoute();
    const { id } = route.params as GetUnit;
    const navigation = useNavigation();

    const [ point, setPoint ] = useState<AccenturePoint>();

    const handleContact = useCallback(() => {
        navigation.navigate('Contact');
    }, []);

    useEffect(() => {
        const getPoint = async () => {
            const response = await getData.get<AccenturePoint>(`find?id=${ id }`);

            setPoint(response.data)
        }
        
        getPoint();
    }, [ id ]);

    if( point ) return(
        <ScrollView style={ styles.scrollView }>
            <View style={ styles.container } >
                <Image 
                    style={ styles.topImage }
                    source={{ uri: point.profile }} 
                />
                <Image 
                    style={ styles.logo }
                    source={ AccentureLogo }
                    width={230}
                    height={60}
                />
                
                <Text style={ styles.title } >{ point.name }</Text>
                <Text style={ styles.paragraph } >{ point.describle }</Text>

                <Text style={ styles.details } >País: { point.country } </Text>
                <Text style={ styles.details } >Estado: { point.state } </Text>
                <Text style={ styles.details } >Cidade: { point.city } </Text>
                <Text style={ styles.details } >Endereço: { point.address.street }, { point.address.number } </Text>

                <TouchableOpacity 
                    style={ styles.ContactButton }
                    onPress={ handleContact }
                >
                    <Text style={ styles.ContactText }>Entrar em contato</Text>
                    <Feather 
                        name="send"
                        size={20}
                        color="#a100ff"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
    else return (
        <LottieView 
            source={require('../animations/gradientBall.json')}
            autoPlay
            loop
        />
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 40
    },
    logo: {
        marginVertical: 40,
        width: 226,
        height: 60
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: 300
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: '#8f8f8f'
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'left',
        color: '#8f8f8f',
        marginBottom: 10
    },
    ContactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a100ff',
        marginVertical: 44
    },
    ContactText: {
        color: '#a100ff',
        fontSize: 18,
        marginRight: 8
    },
    scrollView: {
    },
    details: {
        marginVertical: 8,
        color: '#8f8f8f'
    }
});