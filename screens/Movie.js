import React, { useEffect, useState } from 'react'
import Favorites from '../screens/Favorites'
import { axiosInstance } from '../config/axios'
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'

export default function Movie()
{
    const dispatch = useDispatch();
    const [movie, setMovie] = useState([])
    useEffect(() =>
    {

        axiosInstance.get('/movie/popular').then((res) =>
        {
            // console.log(res.data)
            setMovie(res.data.results)
        })
    }, [])

    function addToFavorite()
    {
        dispatch(addToFavorite({ ...item }));
    }

    return (
        <View style={styles.con}>
            <FlatList
                numColumns={2}
                data={movie}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <View style={styles.card}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} style={{ width: 90, height: 90, borderRadius: 90 }} />
                    <AntDesign name="hearto" size={24} color="black" onPress={() => addToFavorite(item)} />
                </View>}
            />

        </View>

    )
}


const styles = StyleSheet.create({
    con:
    {
        backgroundColor: 'grey',
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    card:
    {
        width: 175,
        height: 200,
        backgroundColor: 'white',
        margin: 5,
        marginVertical: 25,
        borderRadius: 30
    },
    price:
    {
        fontSize: 20,
        fontWeight: "bold",
        color: "orange",
    }



})

