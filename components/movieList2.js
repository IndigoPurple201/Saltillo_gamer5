import React from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";;

var {width, height} = Dimensions.get('window');


export default function MovieList2({title, data}){
    let movieName = 'Persona 3: Reload';
    const navigation = useNavigation();
    return(
        <View className = "mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className = "text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className="text-lg">Ver todos</Text>    
                </TouchableOpacity>
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    data.map((items, index)=>{
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.navigate('Movie', item)}
                            >
                                <View className = "spay-y-1 mr-4">
                                    <Image
                                        source={require('../assets/Images/poster3.jpg')}
                                        className="rounded-3xl"
                                        style={{width:width*0.33, height:height*0.22}}
                                    />
                                    <Text className='text-neutral-300 ml-1'>
                                        {movieName}
                                    </Text>
                                </View> 
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}