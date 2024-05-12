import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image} from 'react-native'
import React, { useEffect, useState }  from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';;
import { ChevronDoubleLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import {styles} from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList'
import Loading from '../components/loading';

var {width, height} = Dimensions.get('window');
const android = Platform.OS == 'android';
const topMargin = android? '': ' mt-3';

export default function MovieScreen(){
        const {params: item} = useRoute();
        const {isFavourite, toggleFavourite} = useState(false);
        const navigation = useNavigation();
        const [cast, setCast] = useState([1,2,3,4,5]);
        const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
        const [loading, setLoading] = useState(false);
        let movieName = 'TLOZ: Tears of the Kingdom';
        useEffect(()=>{

        },[item])
    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900"
        >     
         <View clasName="w-full">
         <SafeAreaView style={{ position: 'absolute', top: 0, zIndex: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4, marginTop: topMargin }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.background, { marginTop: 8 }]}>
                <ChevronDoubleLeftIcon size={28} strokeWidth={2.5} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{ marginTop: 8 }}>
                <HeartIcon size={35} color={isFavourite ? theme.background : "white"} />
            </TouchableOpacity>
        </SafeAreaView>
        {
            loading? (
                <Loading/>
            ):(
                <View>
                    <Image
                        source={require('../assets/Images/poster1.jpg')}
                        style={{width, height: height*0.55}}
                    />
                        <LinearGradient
                            colors={['transparent', 'rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                            style={{width, height: height*0.40}}
                            start={{x: 0.5, y: 0}}
                            end={{x: 0.5, y: 1}}
                            className="absolute bottom-0"
                    />
                </View>
            )
        }   
         </View>
           <View style={{marginTop: -(height*0.09)}} className='space-y-3'>
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
               {
                movieName
               }
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
                Lanzamiento • 2023  Desarrolladora • Nintendo
            </Text>
            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Aventura •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Accion •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Rol
                </Text>
            </View>
            <Text className="text-neutral-400 mx-4 tracking-wide">
                Tras los acontecimientos de The Legend of Zelda: Breath of the Wild, la princesa Zelda junto a Link exploran los cimientos del castillo de Hyrule, en el que encuentran una sala donde reposa un cadáver momificado. Después de que el cadáver tome vida y se levante, ataca a Zelda y Link, dejando a este último malherido y rompiendo el filo de su Espada Maestra. Tras ello desata su poder rompiendo el sello que lo mantenía retenido y se eleva el castillo de Hyrule. Zelda sufre una caída mientras el sitio se derrumba y desaparece mágicamente. Link deberá encontrar a la princesa Zelda por cielo, tierra y subsuelo y así salvar al reino de Hyrule del resurgido Ganondorf, el rey demonio.
            </Text>
           </View>
           <Cast navigation={navigation} cast={cast} />
           <MovieList title="Juegos Similares"  hideSeeAll={true} data={similarMovies}/>
        </ScrollView>
    )
}