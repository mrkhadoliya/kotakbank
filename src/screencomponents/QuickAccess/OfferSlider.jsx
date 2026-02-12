import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../../data/OfferVoucher'

const OfferSlider = () => {
    return (
        <View style={{ flex: 1,}}>
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <View key={index} style={{ width: 410, height: 120,overflow: 'hidden',}}>
                        <Image source={item.img} resizeMode='cover' style={styles.ImageFlatList} />
                    </View>
                }
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default OfferSlider

const styles = StyleSheet.create({
    ImageFlatList:{
        width:'100%',
        height:'100%',
        borderRadius:2,
    }
})