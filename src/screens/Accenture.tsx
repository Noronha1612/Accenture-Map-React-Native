import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';

export default function Accenture() {
    return(
      <View style={ styles.container } >
        <Image 
            style={ styles.logo }
            source={ AccentureLogo }
            width={230}
            height={60}
        />
        <Text style={ styles.title } >Accenture</Text>
        <Text style={ styles.paragraph } >Texto complementar</Text>

        <RectButton 
            style={ styles.ContactButton }
            onPress={ () => alert('Hey!!') }
        >
        <Text style={ styles.ContactText }>Entrar em contato</Text>
        <Feather 
            name="send"
            size={20}
        />
        </RectButton>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        marginBottom: 20,
        width: 232,
        height: 60
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: '#b8b8b8'
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'left',
        color: '#b8b8b8'
    },
    ContactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a100ff',
        marginTop: 22
    },
    ContactText: {
        color: '#a100ff',
        fontSize: 18,
        marginRight: 8
    }
});