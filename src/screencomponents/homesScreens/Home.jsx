import { ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import bgImage from '../../assets/onboarding_img/header__image.jpg'
import QuickAccessList from '../QuickAccess/QuickAccessList'
import OfferSlider from '../QuickAccess/OfferSlider'
import BankListItem from '../QuickAccess/BankListItem'
import PayTransfer from '../QuickAccess/PayTransfer'
import PayLoans from '../QuickAccess/PayLoans'
import CardsBank from '../QuickAccess/CardsBank'
import InvestBank from '../QuickAccess/InvestBank'
import GlobalTheme from '../../../GlobalTheme'

const Home = ({navigation}) => {
    const [showBalance, setShowBalance] = useState(false); 
    const toggleBalanceVisibility = () => {
      setShowBalance(!showBalance);
    };


  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground source={bgImage} resizeMethod='auto' resizeMode='cover' style={styles.ImageBackgrounds}> 
                <View style={styles.SavingContainers}>
                    <View style={styles.flexDir}>
                        <View>
                            <Text style={styles.SavingsText}>Savings</Text>
                            <Text style={styles.SavingsNuText}>987654320</Text>
                        </View>
                        <View>
                            <Pressable style={styles.ViewBalanceBtn}  onPress={toggleBalanceVisibility}>
                                <Text style={styles.ViewBalanceText}>{showBalance ? <Text style={{fontWeight:'800'}}>INR 532.<Text style={{fontSize:12}}>04</Text></Text> : 'View Balance'}</Text>
                            </Pressable> 
                        </View>
                    </View>
                </View>  
            </ImageBackground>
            <View style={{padding:10}}>
                <View>
                    <Text style={styles.QuickAccessTitle}>Quick Access</Text>
                    <QuickAccessList navigation={navigation}  />
                </View>
            </View>
            <View style={{paddingHorizontal:10}}>
                <OfferSlider />
            </View>
            <View style={{paddingHorizontal:10, marginTop:7}}>
                <View style={styles.BankContainers}>
                    <Text style={[styles.QuickAccessTitle, {marginTop:7}]}>Bank</Text>
                    <BankListItem  />
                </View>
            </View>
            <View style={{paddingHorizontal:10, marginTop:10}}>
                <View style={styles.BankContainers}>
                    <Text style={[styles.QuickAccessTitle, {marginTop:7}]}>Pay & Transfer</Text>
                    <PayTransfer/>
                </View>
            </View>
            <View style={{paddingHorizontal:10, marginTop:10}}>
                <View style={styles.BankContainers}>
                    <Text style={[styles.QuickAccessTitle, {marginTop:7}]}>Loans</Text>
                    <PayLoans/>
                </View>
            </View>
            <View style={{paddingHorizontal:10, marginTop:10}}>
                <View style={styles.BankContainers}>
                    <Text style={[styles.QuickAccessTitle, {marginTop:7}]}>Cards</Text>
                    <CardsBank/>
                </View>
            </View> 
            <View style={{paddingHorizontal:10, marginVertical:10}}>
                <View style={styles.BankContainers}>
                    <Text style={[styles.QuickAccessTitle, {marginTop:7}]}>Invest</Text>
                    <InvestBank/>
                </View>
            </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    SafeAreaViewContainer:{
        flex:1,
        backgroundColor: '#fff5f5'
    },
    ImageBackgrounds:{ 
    },
    SavingContainers:{
        backgroundColor:'#ff000082',
        padding:15,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    flexDir:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    ViewBalanceBtn:{
        backgroundColor:'#b31111',
        paddingHorizontal:20,
        paddingVertical:10
    },
    ViewBalanceText:{
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontSize:15,
        fontWeight:'400'
    },
    SavingsText:{
        fontSize:14,
        fontWeight:'400',
        color: GlobalTheme.App_Theme.PrimaryWhite, 
    },
    SavingsNuText:{
        fontSize:18,
        fontWeight:'600',
        color: GlobalTheme.App_Theme.PrimaryWhite, 
    },
    QuickAccessTitle:{
        color: GlobalTheme.App_Theme.darkBlackColor,
        fontSize:16,
        fontWeight:'600'
    },
    BankContainers:{
        borderRadius:15, 
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        marginVertical:5,
        padding:13 ,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 2
    }
})