import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import userImage from "../assets/users-b.png";
import GlobalTheme from "../../GlobalTheme";
import Ionicons from 'react-native-vector-icons/Ionicons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 


const DrawerMenuCustom = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.drawerUserContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <View style={styles.UserImgContainer}>
                        <Image source={userImage} style={styles.UserIImages} resizeMode="contain" />
                    </View>
                    <View>
                        <Text style={styles.userName}>NARESH SIGAR</Text>
                        <Text style={styles.userCRN}>CRN 673092406</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.UserLastLoged}>Last Login: 06-03-2024 22:41:30 (IST)</Text>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.HomeLogoutContainer}>
            <View style={styles.lineVertical} />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent:'space-around', width:'100%'}}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={20} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.powerOffText}>Home</Text>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <AntDesign name="poweroff" size={18} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.powerOffText}>Logout</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default DrawerMenuCustom;

const styles = StyleSheet.create({
    drawerUserContainer: {
        backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed,
        width: "100%",
        padding: 15,
    },
    UserImgContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#ffffff91",
        alignItems: "center",
        justifyContent: "center",
    },
    UserIImages: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    userName: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "800",
        fontSize: 15,
    },
    userCRN: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "400",
        fontSize: 14,
    },

    UserLastLoged: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "400",
        fontSize: 12,
    },

    userImage: {
        width: 120,
        height: 50,
        resizeMode: "contain",
    },

    HomeLogoutContainer:{
        backgroundColor: '#0e2f4d',
        padding:15,
        alignItems:'center',
        justifyContent:'center', 
        position:'relative',
        overflow:'hidden'
    },

    powerOffText:{
        color:GlobalTheme.App_Theme.PrimaryWhite,
        fontSize:15,
        fontWeight:'400', 
    },

    lineVertical:{
        position:'absolute',
        // top:0, 
        // bottom:0,
        width:0.4,
        height: 80,
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
});
