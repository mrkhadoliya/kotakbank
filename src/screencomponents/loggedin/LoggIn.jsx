import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import userLog from "../../assets/users-b.png";
import fingerImg from "../../assets/fingerprint-transparent.png";
import logo from "../../assets/logo/kotak-logo.webp";
import bgImage from "../../assets/onboarding_img/bg-images-family.jpg";
import GlobalTheme from "../../../GlobalTheme";

const LoggIn = ({ navigation }) => {
    return (
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.ImageBackgrounds}>
            <SafeAreaView style={styles.ContainerSafeView}>
                <StatusBar backgroundColor="#000" barStyle={"light-content"} />
                <View style={{ alignSelf: "center" }}>
                    <Image source={logo} style={styles.LogoImage} resizeMode="contain" />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%", padding: 15 }}>
                    <View style={styles.bgContainerUser}>
                        <View style={{ paddingHorizontal: 15 }}>
                            <View style={styles.flexDirectionContainer}>
                                <View>
                                    <Image source={userLog} resizeMode="contain" style={styles.ImagesUser} />
                                </View>
                                <View>
                                    <Text style={styles.UserNameText}>NARESH KUMAR</Text>
                                    <Text style={styles.UserAcoount}>
                                        <Text style={{ color: "#74737b", fontWeight: "400" }}>CRN </Text> - XXXX6506
                                    </Text>
                                    <Text styles={styles.UserPrimary}>(Primary)</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.DividerLine} />
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <View style={[styles.flexDirectionContainer, { gap: 0 }]}>
                                <Pressable onPress={() => navigation.navigate("homes")}>
                                    <Image source={fingerImg} resizeMode="contain" style={styles.fingerImage} />
                                </Pressable>
                                <Text style={styles.FingerprintText}>Use Fingerprint or MPIN to login</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <TextInput style={styles.InputType} placeholder="Enter 6 digit MPIN" keyboardType="email-address" />
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Text style={styles.choosingTExt}> 
                                By choosing to login, ypu agree & accept all the applicable <Text style={styles.TCPPText}>Terms & Conditions, Privacy Policy, Security, Tips</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addContainerFor}>
                    <View style={[styles.flexDirectionContainer, { justifyContent: "space-around" }]}>
                        <Pressable style={styles.addBtnBoth}>
                            <AntDesign name="plus" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />
                            <Text style={styles.textCRN}>Add CNR</Text>
                        </Pressable>
                        <Pressable style={styles.addBtnBoth}>
                            <MaterialCommunityIcons name="shield-lock-open-outline" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />
                            <Text style={styles.textCRN}>Forgot MPIN?</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default LoggIn;

const styles = StyleSheet.create({
    ImageBackgrounds: {
        flex: 1,
    },
    ContainerSafeView: {
        flex: 1,
        backgroundColor: "#ff000082",
    },
    flexDirectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    LogoImage: {
        width: 160,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    bgContainerUser: {
        width: "100%",
        backgroundColor: "#f2f2f2",
        paddingVertical: 15,
        borderRadius: 12,
    },
    ImagesUser: {
        width: 60,
        height: 60,
    },
    UserNameText: {
        color: GlobalTheme.App_Theme.darkBlackColor,
        fontSize: 14,
        fontWeight: "700", 
    },
    UserAcoount: {
        color: GlobalTheme.App_Theme.darkBlackColor,
        fontSize: 14,
        fontWeight: "700", 
    },
    UserPrimary: {
        color: GlobalTheme.App_Theme.GreyTextColor,
        fontWeight: "300",
        fontSize:13
    },
    DividerLine: {
        borderBottomColor: GlobalTheme.App_Theme.GreyTextColor,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    fingerImage: {
        width: 65,
        height: 40,
    },
    FingerprintText: {
        color: GlobalTheme.App_Theme.darkBlackColor,
        fontSize: 14,
        fontWeight: "500",
    },
    InputType: {
        width: "100%", 
        paddingHorizontal: 15,
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        height: 50,
        borderWidth: 2,
        borderColor: '#fb8c00',
        fontSize: 16,
        textAlign: "center",
        fontWeight: "600",
    },
    choosingTExt: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
    },
    TCPPText: {
        borderBottomWidth: 1,
        borderBottomColor: "#a7a7b4",
        color: GlobalTheme.App_Theme.darkBlackColor,
        fontWeight: "400",
    },
    addContainerFor: {
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        padding: 10,
    },
    addBtnBoth: {
        alignItems: "center",
        justifyContent: "center",
    },
    textCRN: {
        fontWeight: "500",
        marginTop: 2,
        fontSize: 13,
        color: GlobalTheme.App_Theme.darkBlackColor,
    },
});
