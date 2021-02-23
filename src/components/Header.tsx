import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { HeaderProps } from '../interfaces';
import { useNavigation } from '@react-navigation/native';

export default function Header({ showCancel = true, title, ...props }: HeaderProps) {
    const navigation = useNavigation()

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, [ navigation ]);

    const handleCancel = useCallback(() => {
        navigation.navigate('Home');
    }, []);

    return (
        <View  { ...props } style={ styles.container } >
            <BorderlessButton 
                style={ styles.backButton } 
                onPress={ handleGoBack }
            >
                <Feather name="arrow-left" size={ 20 } color="#a100ff" />
            </BorderlessButton>

            <Text style={ styles.title }>{ title }</Text> 


            { showCancel ? (
                <BorderlessButton
                    onPress={ handleCancel }
                >
                    <Feather name="x" size={ 20 } color="#a100ff" />
                </BorderlessButton>
            ) : (
                <View style={{ width: 20 }}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderBottomColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#797979',
        fontSize: 18,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});