import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';

import LogoAccenture from '../images/Accenture.png';

import gradientBall from '../animations/gradientBall.json';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const [ isMessageSent, setIsMessageSent ] = useState(false);

    const handleSubmit = useCallback(() => {
        setIsMessageSent(true);
    }, []);

    return (
        <ScrollView style={ styles.scrollView }>
            <View style={ styles.container } >

                {isMessageSent ? (
                    <>
                        <Text style={ styles.textSent }>Sua mensagem foi enviada!</Text>
                        <LottieView 
                            source={ gradientBall } 
                            autoPlay
                            loop
                            style={ styles.animationContent }
                        /> 
                    </>
                )
                :
                (
                <>
                    <Image 
                        source={ LogoAccenture } 
                        style={ styles.logo }
                    />

                    <Text style={ styles.title } >Formulário de contato</Text>
                    <View>
                        <Text style={ styles.labelForm } >Seu nome: </Text>
                        <TextInput 
                            value={ name }
                            
                            style={ styles.input }
                        />
                        <Text style={ styles.labelForm } >Seu telefone: </Text>
                        <TextInput 
                            style={ styles.input }
                        />
                        <Text style={ styles.labelForm } >Seu email: </Text>
                        <TextInput 
                            style={ styles.input }
                        />
                        <Text style={ styles.labelForm } >Deixe sua mensagem: </Text>
                        <TextInput
                            multiline
                            style={ styles.inputMultiline }
                        />

                        <TouchableOpacity 
                            style={ styles.sendButton } 
                            onPress={ handleSubmit }
                        >
                            <Text style={ styles.sendText } >Entrar em contato</Text>
                            <Feather name="send" size={20} color="#a100ff" />
                        </TouchableOpacity>
                    </View>
                </>
                )}
            </View>
        </ScrollView>
    );
}
''

const styles = StyleSheet.create({
    scrollView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    animationContent: {
        flex: 1,
        width: 200,
    },
    logo: {
        marginVertical: 6,
        width: 200,
        height: 53,

        marginTop: 24
    },
    title: {
        fontSize: 20,
        marginVertical: 30,
        color: '#a100ff'
    },
    input: {
        height: 50,
        width: Dimensions.get('window').width - 60,

        borderWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 4,
        
        marginVertical: 5,
        paddingHorizontal: 20
    },
    inputMultiline: {
        height: 120,
        width: Dimensions.get('window').width - 60,

        borderWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 4,
        
        marginVertical: 5,
    
        paddingHorizontal: 20
    },
    labelForm: {
        marginTop: 22
    },
    sendButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 20,
        paddingVertical: 8,
    },
    sendText: {
        color: '#a100ff',
        fontSize: 20,
        marginRight: 6
    },
    textSent: {
        color: '#a100ff',
        fontSize: 24,
        marginHorizontal: 48,
        textAlign: 'center'
    }
});