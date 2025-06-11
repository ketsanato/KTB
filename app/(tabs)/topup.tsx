import axios from "@/api/ApiETL";
import HeaderLogin from "@/components/HeaderLogin";
import ScreenForm from "@/components/ScreenForm";
import ScreenWrapper from "@/components/ScreenWrapper";
import { schema } from "@/schema/Topup";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Crypto from "expo-crypto";
import moment from "moment";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";
import ScrollExample from "@/components/ScrollView";
import { MySelection } from "@/components/Selection";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TopUp() {
  const [phoneType, setPhontType] = useState();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const data1 = {
    userID: process.env.EXPO_PUBLIC_USERID_ETL,
    msisdn: process.env.EXPO_PUBLIC_ETL_MSISN,
    transactionID: "" + Math.floor(Math.random() * 10000000),
    dateTimeProcess: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    amount: "0",
    sign_type: "SHA512",
    signkey: process.env.EXPO_PUBLIC_SING_KEY_ET,
    url: "https://manage.etllao.com:8889/",
  };

  const Key = `charset=utf-8&userID=${process.env.EXPO_PUBLIC_USERID_ETL}&transactionID=${data1.transactionID}&msisdn=${data1.msisdn}&dateTimeProcess=${data1.dateTimeProcess}&amount=${data1.amount}&sign_type=${data1.sign_type}&signkey=${process.env.EXPO_PUBLIC_SING_KEY_ETL}&url=${process.env.EXPO_PUBLIC_URL_ETL}`;

  function customXmlToJson(xml) {
    const obj = {};
    const regex = /<([^/]+?)>([^<]+)<\/\1>/g;
    let match;
    while ((match = regex.exec(xml))) {
      obj[match[1]] = match[2];
    }
    return obj;
  }

  const QuerySubscriberType = async (data) => {
    console.log(data.phoneNumber);
    const result = schema.safeParse(data);
    if (!result.success) {
      console.error("Validation failed:", result.error);
      return;
    }
    const reslut = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      Key
    );
    console.log(reslut);

    let data2 =
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
      body: data2,
      redirect: "follow",
    };

    await fetch(
      "https://manage.etllao.com:8889/ETLPaymentTopup/services/ETLPaymentTopupWS?wsdl",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("result:" + typeof result);
        console.log("result:" + JSON.stringify(result));
        const a = customXmlToJson(result);
        console.log(a);
        setPhontType(a);
      })
      .catch((error) => console.error(error));

    console.log(phoneType);
  };

  const SubmitData = (data) => {
    const result = schema.safeParse(data);
    console.log(result.data?.Phonenumber);

    console.log(result);
  };
  const BRAND_COLORS = ["#fa7f7c", "#b58df1", "#ffe780", "#82cab2", "#87cce8"];

  const content = BRAND_COLORS.map((color, index) => (
    <View
      key={index}
      style={[
        styles.section,
        {
          backgroundColor: color,
        },
      ]}
    />
  ));
  
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <ScreenWrapper>
      <HeaderLogin props={{ title: "topup" }} />
      <View style={styles.container}>

  <Card>
     <Card.Title
    title="Phonenumber: +85620 77777441"
    subtitle="Subscriber Type: Prepaid"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <MaterialIcons {...props} icon="dots-vertical" onPress={() => {}} />}
  />
    <Card.Content>
      <Text variant="titleLarge">Balance: 100,000 K</Text>
      <Text variant="bodyMedium"></Text>
    </Card.Content>
  </Card>

        <View style={styles.InputPhone}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="+856"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="outlined"
              />
            )}
            name="Code"
          />

          <Controller
            control={control}
            name="Phonenumber"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Phone Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="outlined"
                left={<TextInput.Icon icon="phone" />}
              />
            )}
          />
        </View>

        <Button
          icon=""
          mode="contained"
          onPress={handleSubmit(QuerySubscriberType)}
        />
        <Text style={styles.textimage} variant="titleSmall">
          Recharge history
        </Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  container2: {
    flex: 2,
  },

  InputPhone: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: "100%",
    height:200,
     shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "grey",
    elevation: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  box:{


  },
  textimage: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
});
