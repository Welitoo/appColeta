import React from 'react';

import {View, Image, ImageBackground, StyleSheet, Text} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    function handlerNavigationToPoints(){
        navigation.navigate('Points');
    }

    return(
        <ImageBackground source={require('../../assets/home-background.png')}
        Style={styles.container}
        imageStyle={{with: 274, height:368}}
        >
            <View style={styles.main}>
                <Image style={{ width: 274, height: 44 }} source={require('../../assets/logo.png')}/>
                <Text style={styles.title}>Seu marketplace de chocolate de residuos</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma e ficiente</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handlerNavigationToPoints}>
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right"color="#FFF" size={24}/>
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text> 
                </RectButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

container: { 
    flex:1, 
    padding: 32, 
    backgroundColor:'#F0F0F5' 
    },

main:{ 
        flex:1, 
        justifyContent:'center' 
        }, 
        
title:{ 
        color:'#322153', 
        fontSize:32, 
        fontFamily:'Ubuntu_700Bold', 
        maxWidth:260, 
        marginTop:64 
        }, 
        
description:{         
        color:'#6C6C80', 
        fontSize:16, 
        marginTop:16, 
        fontFamily:'Roboto_400Regular', 
        maxWidth:260, 
        lineHeight:24, 
    }, 
            
    footer:{}, 
                
    select:{}, 
        
input:{ 
        height:60, 
        backgroundColor:'#FFF', 
        borderRadius:10, 
        marginBottom:8, 
        paddingHorizontal:24, 
        fontSize:16, 
        }, 
        
button:{ 
        backgroundColor:'#34CB79', 
        height:60, 
        flexDirection:'row', 
        borderRadius:10, 
        overflow:'hidden', 
        alignItems:'center', 
        marginTop:8, 
        }, 
            
buttonIcon:{ 
        height:60, 
        width:60, 
        backgroundColor:'rgba(0,0,0,0.1)', 
        justifyContent:'center', 
        alignItems:'center' 
    }, 
        
buttonText:{ 
        flex:1, 
        justifyContent:'center', 
        textAlign:'center', 
        color:'#FFF', 
        fontFamily:'Roboto_500Medium', 
        fontSize:16, 
        }        
    }); 