import { View, Text, Platform, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';;
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import MovieList2 from '../components/movieList2';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';

const android = Platform.OS == 'android';
export default function HomeScreen() {
  const [trending, setTrending]  = useState([1,2,3]);
  const [upcoming, setUpcoming]  = useState([1,2,3]);
  const [topRated, setTopRated]  = useState([1,2,3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className={android? "-mb-2": 'mb-3'}>
        <StatusBar style="light"/>
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text 
          className="text-white text-3xl font-bold">
            <Text>JUEGOS</Text>
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading? (
          <Loading/>
        ):(
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
          >
            <TrendingMovies data={trending} />
            <MovieList title="Proximamente" data={upcoming} />
            <MovieList2 title="Mas votados" data={topRated} />
          </ScrollView>
        )
      }
    </View>
  );
}