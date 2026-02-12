import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SavingAccount from '../savingAccounts/SavingAccount'
import GlobalTheme from '../../../GlobalTheme'
import ClosingBalance from './ClosingBalance'
import AccountActivityTransList from './AccountActivityTransList'
import data from '../../data/AccountActivityTransData'
import LinearGradient from 'react-native-linear-gradient'
import BGDotimg from '../../assets/white-dotted-bg.png'


const AccountActivity = ({navigation}) => {
  return (
    <ImageBackground source={BGDotimg} resizeMode='cover' style={{flex:1,}}>
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <View style={{marginBottom:15}}>
            <SavingAccount navigation={navigation} />
        </View>
        <View style={styles.ClosingBalanceView}>
            <ClosingBalance/>
        </View>
        <View style={{flex:1, padding:10}}>
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("")} style={[styles.TouchableOpacityBtn, styles.flexDirection]}>
                        <View style={[styles.flexDirection, {justifyContent:'flex-start', gap:6, width:'60%'}]}>
                            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1.0}} locations={[0.3,0]} colors={['#6e6c6c', '#4c4c4c']} style={styles.MonthDayContainer}>
                                <Text style={styles.DayText}>04</Text>
                                <Text style={styles.MonthText}>Mar'24</Text>
                            </LinearGradient>
                            <View>
                                <View style={{marginBottom:5}}>
                                    <Text style={styles.UPIUserName}>UPI/Naresh Chimanla/</Text>
                                    <Text style={styles.UPIUserName}>406416580023/MB UPI</Text> 
                                </View>
                                <View>
                                    <Text style={styles.refText}>Chq/Ref No.: UPI-406434709210</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.paymentSend}>-35,000.<Text style={{fontSize:16}}>00</Text></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            /> 
        </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default AccountActivity

const styles = StyleSheet.create({
    SafeAreaViewContainer:{
        flex: 1,
        backgroundColor: '#ffffff57',
        paddingBottom: 10,
    },
    ClosingBalanceView:{
        paddingHorizontal:10,
        paddingVertical:6,
        backgroundColor: "#e7e4e4",
        position:'relative',
        zIndex:9
    },
    TouchableOpacityBtn:{ 
        marginBottom:5,
        borderBottomWidth:1,
        borderBottomColor:'#c1c1c1',
        paddingVertical:6
    },
    flexDirection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    MonthDayContainer:{
        borderRadius:4,
        padding:3
    },
    DayText:{
        color:GlobalTheme.App_Theme.PrimaryWhite, 
        textAlign:'center',
        padding:3,
        fontWeight:'600',
        fontSize:15,
    },
    MonthText:{
        color:GlobalTheme.App_Theme.PrimaryWhite, 
        textAlign:'center',
        padding:3,
        fontWeight:'600',
        fontSize:15,
    },
    UPIUserName:{
        color:GlobalTheme.App_Theme.darkBlackColor,
        fontSize:15,
        fontWeight:'400'
    },
    refText:{
        fontSize:13
    },
    paymentSend:{
        fontSize:16,
        fontWeight:'700',
        color:GlobalTheme.App_Theme.PrimaryBgRed,
        textAlign:'right'
    }
})