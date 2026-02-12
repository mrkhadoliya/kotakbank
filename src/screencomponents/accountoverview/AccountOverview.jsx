import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GlobalTheme from "../../../GlobalTheme";
import GoogleAss from '../../assets/logo/google-assistant-logo.png'
import SavingAccount from "../savingAccounts/SavingAccount";
import BGDotimg from '../../assets/white-dotted-bg.png'



const AccountOverview = ({navigation}) => {
    return (
        <ImageBackground source={BGDotimg} resizeMode='cover' style={{flex:1,}}>
            <ScrollView style={{ flex: 1, backgroundColor:'#ffffffbd', }} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    <View style={{marginBottom:15}}>
                        <SavingAccount navigation={navigation} />
                    </View> 
                    <View>
                        <View style={styles.paddingHorizontal}>
                            <View style={styles.FlexViewWithdra}>
                                <View>
                                    <Text style={styles.WithdraNameText}>Withdrawable Balance (INR)</Text>
                                    <Text style={styles.WithdraPriceText}>
                                        2,927.<Text style={{ fontSize: 16 }}>88</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.activeHeadingText}>Active</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.DividerLine} />
                        <View style={styles.paddingHorizontal}>
                            <View style={[styles.FlexViewWithdra, styles.GreebBor]}>
                                <View>
                                    <Text style={styles.WithdraNameText}>Available Balance (INR)</Text>
                                    <Text style={[styles.WithdraPriceText, { color: GlobalTheme.App_Theme.greenText }]}>
                                        2,927.<Text style={{ fontSize: 16 }}>88</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[styles.activeHeadingText, { textAlign: "right", color: GlobalTheme.App_Theme.GreyTextColor }]}>Uncleared (INR)</Text>
                                    <Text style={[styles.WithdraPriceText, { textAlign: "right", color: GlobalTheme.App_Theme.PrimaryBgRed }]}>
                                        0.<Text style={{ fontSize: 16 }}>00</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.DividerLine} />

                        <View style={[styles.mmIDView, styles.flexDirectionRow]}>
                            <View>
                                <Text style={styles.MMIDHeadding}>MMID</Text>
                                <Text style={styles.MMIDNumberText}>9485965</Text>
                            </View>
                            <View>
                                <Text style={styles.AccountNameText}>Account Name</Text>
                                <Text style={styles.AccountHolderName}>NARESH CHIMANLAL</Text>
                                <Text style={styles.AccountHolderName}>SIGAR</Text>
                            </View>
                        </View>
                        <View style={styles.DividerLine} />
                        <View style={[styles.mmIDView, styles.flexDirectionRow]}>
                            <View>
                                <Text style={styles.NomineeText}>Nominee</Text>
                                <Text style={styles.NomineeYesText}>Yes</Text>
                            </View>
                            <View>
                                <Text style={styles.IFSCText}>IFSC</Text>
                                <Text style={styles.IFSCNumbers}>KKBK0003554</Text>
                            </View>
                        </View>
                        <View style={styles.DividerLine} />

                        <View style={{ padding: 15 }}>
                            <TouchableOpacity style={styles.TransactionsButtons}>
                                <Text style={styles.TransactionsTextHeading}>View Transactions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TransactionsButtons}>
                                <Text style={styles.TransactionsTextHeading}>Transfer Money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <View style={{padding:15, marginVertical:8}}>
                    <View style={[styles.flexDirectionRow, {justifyContent:'center', gap:20}]}>
                        <View>
                        <Image source={GoogleAss} resizeMode="contain" style={styles.Image}/>
                        </View>
                        <TouchableOpacity style={styles.AllowAccessButton}>
                        <Text style={styles.AllowAccessHeadeing}>Allow</Text>
                        <Text style={styles.AllowAccessHeadeing}>Access</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:15}}>
                    <Text style={styles.GoogleVoiceTExt}>You can use your voice to check your balance by</Text>
                    <Text style={styles.GoogleVoiceTExt}>saying "OK Google, show my Kotak balance"</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default AccountOverview;

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1, 
        paddingBottom: 10,
    },
    flexDirectionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    paddingHorizontal: {
        paddingHorizontal: 10,
        backgroundColor: "#e7e4e4",
    },  
    FlexViewWithdra: {
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
        borderLeftWidth: 5,
        borderLeftColor: GlobalTheme.App_Theme.blueDarkTEXT,
    },
    GreebBor: {
        borderLeftColor: GlobalTheme.App_Theme.greenText,
        borderRightColor: GlobalTheme.App_Theme.PrimaryBgRed,
        borderRightWidth: 5,
    },
    WithdraNameText: {
        fontSize: 14,
        fontWeight: "400", 
        color: GlobalTheme.App_Theme.GreyTextColor,
    },
    WithdraPriceText: {
        fontSize: 25,
        color: GlobalTheme.App_Theme.blueDarkTEXT,
        fontWeight: "900",
    },
    activeHeadingText: {
        color: GlobalTheme.App_Theme.greenText,
        fontSize: 14,
        fontWeight: "500",
    },
    DividerLine: {
        borderBottomWidth: 1,
        borderBottomColor: "#c1c1c1",
    },
    mmIDView: {
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    MMIDHeadding: {
        fontSize: 13,
        color: GlobalTheme.App_Theme.GreyTextColor, 
    },
    MMIDNumberText: {
        fontWeight: "500",
        fontSize: 14,
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
    AccountNameText: {
        textAlign: "right",
        fontSize: 14,
        color: GlobalTheme.App_Theme.GreyTextColor, 
    },
    AccountHolderName: {
        textAlign: "right",
        fontWeight: "500",
        fontSize: 14,
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
    NomineeText: {
        fontSize: 14,
        color: GlobalTheme.App_Theme.GreyTextColor, 
    },
    NomineeYesText: {
        fontWeight: "500",
        fontSize: 15,
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
    IFSCText: {
        textAlign: "right",
        fontSize: 15,
        color: GlobalTheme.App_Theme.GreyTextColor, 
    },
    IFSCNumbers: {
        textAlign: "right",
        fontWeight: "500",
        fontSize: 15,
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
    TransactionsButtons: {
        borderRadius: 7,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e7e4e4",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: GlobalTheme.App_Theme.GreyTextColor,
        borderBottomWidth: 4,
        borderBottomColor: GlobalTheme.App_Theme.GreyTextColor,
    },
    TransactionsTextHeading: {
        fontSize: 15,
        fontWeight: "600",
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
    Image:{
      width:170,
      height:50
    },
    AllowAccessButton:{
      borderWidth:1,
      borderColor:GlobalTheme.App_Theme.GreyTextColor,
      borderRadius:12,
      paddingHorizontal:15,
      paddingVertical:6
    },
    AllowAccessHeadeing:{
      fontWeight:'500',
      textAlign:'center',
      fontSize:14,
      color:GlobalTheme.App_Theme.GreyTextColor
    },
    GoogleVoiceTExt:{
      textAlign:'center',
      lineHeight:25,
      fontSize:16,
      color:GlobalTheme.App_Theme.GreyTextColor
    }
});
