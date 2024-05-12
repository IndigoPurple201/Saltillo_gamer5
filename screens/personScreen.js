import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState, version } from 'react'
import { ChevronDoubleLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import { HeartIcon } from 'react-native-heroicons/solid';
import MovieList from '../components/movieList'
import Loading from '../components/loading';

var {width, height} = Dimensions.get('window');
const android = Platform.OS == 'android';
const verticalMargin = android? '': 'my-3';
export default function PersonScreen(){
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4])
    const [loading, setLoading] = useState(false);
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#121212' }} contentContainerStyle={{paddingBottom: 20}}>
            <SafeAreaView style={{ zIndex: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4, marginTop: verticalMargin }}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.background, { marginTop: 45 }]}>
                    <ChevronDoubleLeftIcon size={28} strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{ marginTop: 45 }}>
                    <HeartIcon size={35} color = {isFavourite? 'red' : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            {
                loading?(
                    <Loading />
                ):(
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 40,
                                shadowOffset: {width: 0, height: 5},
                                shadowOpacity: 1,
                                alignItems: 'center',
                                backgroundColor: '#121212',
                            }}
                        >           
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: height*0.36, overflow: 'hidden', borderWidth: 2, borderColor: '#4F4F4F' }}>
                            <Image source={require('../assets/Images/poster5.jpg')}
                                style={{height: height*0.43, width: width*0.74}}
                            />
                        </View>
                            <View style={{ marginTop: 6 }}>
                                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                    TLOZ: Breath of The Wild  
                                </Text>
                                <Text style={{ fontSize: 16, color: '#A0A0A0', textAlign: 'center' }}>
                                    Nintendo • 2017
                                </Text>
                            </View>
                            <View style={{ marginHorizontal: 3, marginTop: 6, flexDirection: 'row', backgroundColor: '#2F2F2F', borderRadius: 9999, paddingVertical: 15, paddingHorizontal: 16, width: width }}>
                                <View className="border-r-2 corder-r-neutral-400 px-2 items-center">
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Genero</Text>
                                    <Text style={{ color: '#7C7C7C', fontSize: 12 }}>Aventura</Text>
                                </View>
                                <View className="border-r-2 corder-r-neutral-400 px-2 items-center">
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Desarrollador</Text>
                                    <Text style={{ color: '#7C7C7C', fontSize: 12 }}>Nintendo</Text>
                                </View>
                                <View className="border-r-2 corder-r-neutral-400 px-2 items-center">
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Año</Text>
                                    <Text style={{ color: '#7C7C7C', fontSize: 12 }}>2017</Text>
                                </View>
                                <View className="px-2 items-center">
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Director</Text>
                                    <Text style={{ color: '#7C7C7C', fontSize: 12 }}>Hidemaro Fujibayashi</Text>
                                </View>
                            </View>
                            <View className="my-6 mx-4 space-2-2">
                                <Text className="text-white text-lg">Informacion</Text>
                                <Text className="text-neutral-400 tracking-wide">
                                    El jugador controla a Link, que despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal.
                                </Text>
                            </View>
                            <MovieList title={'Mas de Nintendo'} hideSeeAll={true} data={personMovies}/>
                        </View>
                    </View>
                )
            } 
        </ScrollView> 
    )
}

