import HeaderLogin from "@/components/HeaderLogin";
import ScreenWrapper from "@/components/ScreenWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from 'expo-image';
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
export default function Wallet() {
  const [AUTOKE, setAUTOKEN] = useState('');
  const [data,setData]=useState('')
  const setStringValue = async (keyName, value) => {
      await AsyncStorage.setItem(keyName, value);
      // save error
  };

  const getMyStringValue = async () => {
await AsyncStorage.getItem("@KKP_AUTH_TOKEN");

  };

  const loginKKP = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      memberId: process.env.EXPO_PUBLIC_KKP_memberId,
      memberPassword: process.env.EXPO_PUBLIC_KKP_memberPassword,
      loginKey: process.env.EXPO_PUBLIC_KKP_loginKey,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const result = await fetch(
      `${process.env.EXPO_PUBLIC_KKP_URL}/member/login`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const jsonValue = JSON.stringify(result.responseObj);

        setStringValue("@KKP_AUTH_TOKEN", jsonValue);
      })
      .catch((error) => console.error(error));
  };

  const WalletBalance = async () => {
    const myHeaders = new Headers();
    const a = JSON.parse(await AsyncStorage.getItem("@KKP_AUTH_TOKEN"))
console.log(a.memberToken)
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("AUTH_TOKEN", `${a.memberToken}`);
   
    const raw = JSON.stringify({
      memberId: "WHATDAY",
      custMobile: "2077977441",
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://kkuat.kokkokpay.com/member-api-service/v1.0.1/inquiry/balance/customer",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log(result)
        setData(result.responseObj)
        console.log(result)
      })
      .catch((error) => console.error(error));
  };

  return (
    <ScreenWrapper>
      <HeaderLogin props={{ title: "Wallet" }} />

      <View style={styles.container}>
        
<Image style={styles.image}
source={require('@/assets/images/card.png')}       contentFit="cover"
        transition={1000}
      >
        </Image>    

        <Button icon="camera" mode="contained" onPress={loginKKP}>
          Login{" "}
        </Button>
        <Button icon="camera" mode="contained" onPress={getMyStringValue}>
          Show Key
        </Button>
        <Button icon="camera" mode="contained" onPress={WalletBalance}>
          WalletBalance
        </Button>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    flexDirection:'column'
  },
  card:{
    width:'100%',
    height:'10%'

  }, image: {
    width: '100%',
    height:'20%',
    textAlign:'center'

  },

});
