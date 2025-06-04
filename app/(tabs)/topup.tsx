import axios from "@/api/ApiETL";
import HeaderLogin from "@/components/HeaderLogin";
import ScreenForm from "@/components/ScreenForm";
import ScreenWrapper from "@/components/ScreenWrapper";
import { schema } from "@/schema/Topup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Crypto from "expo-crypto";
import moment from "moment";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function TopUp() {

  const [phoneType, setPhontType] = useState();

  const data1 = {
    userID: process.env.EXPO_PUBLIC_USERID_ETL,
    msisdn: process.env.EXPO_PUBLIC_ETL_MSISN,
    transactionID: "" + Math.floor(Math.random() * 10000000),
    dateTimeProcess: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    amount: "0",
    sign_type: "SHA512",
    signkey: process.env.EXPO_PUBLIC_SING_KEY_ET ,
    url: "https://manage.etllao.com:8889/",
  };
  const Key = `charset=utf-8&userID=${process.env.EXPO_PUBLIC_USERID_ETL}&transactionID=${data1.transactionID}&msisdn=${data1.msisdn}&dateTimeProcess=${data1.dateTimeProcess}&amount=${data1.amount}&sign_type=${data1.sign_type}&signkey=${process.env.EXPO_PUBLIC_SING_KEY_ETL}&url=${process.env.EXPO_PUBLIC_URL_ETL}`;


  const QuerySubscriberType = async () => {
    console.log(Key);
    console.log(data1);
    const reslut = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      Key
    );
    console.log(reslut);

    let data =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"\nxmlns:web="http://webservice.etlpayemtandtopup.com">\n<soap:Header/>\n<soap:Body>\n<web:querySubscriberType>\n<web:userID>' +
      data1.userID +
      "</web:userID>\n<web:msisdn>" +
      data1.msisdn +
      "</web:msisdn>\n<web:transactionID>" +
      data1.transactionID +
      "</web:transactionID>\n<web:dateTimeProcess>" +
      data1.dateTimeProcess +
      "</web:dateTimeProcess>\n<web:keyCode>" +
      reslut.toLocaleUpperCase() +
      "</web:keyCode>\n<web:amount>" +
      data1.amount +
      "</web:amount>\n</web:querySubscriberType>\n</soap:Body>\n</soap:Envelope>";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/soap+xml");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

await fetch(
      "https://manage.etllao.com:8889/ETLPaymentTopup/services/ETLPaymentTopupWS?wsdl",
      requestOptions
    ).then((response) => response.text())
      .then((result) => {
        console.log("result:"+typeof(result))
        console.log("result:"+JSON.stringify(result))
const a= customXmlToJson(result)
console.log(a)
setPhontType(a)
      })
      .catch((error) => console.error(error));

console.log(phoneType)

  };


  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (

    <ScreenWrapper>
      <HeaderLogin props={{ title: "topup" }} />

      <ScreenForm>
        <View style={styles.container2}>
          <Text variant="titleLarge">Pnone number:</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Phone Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="outlined"
                left={<TextInput.Icon icon="phone" />}
                keyboardType="phone-pad"
              />
            )}
            name="Phonenumber"
          />
   
          <Button icon='' mode="contained" onPress={QuerySubscriberType}>
            Check your phone number
          </Button>
        </View>
      </ScreenForm>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  container2: {
    flex: 2,
  },
});
