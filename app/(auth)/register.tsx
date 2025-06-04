import Header1 from "@/components/Header1";
import { schema } from "@/schema/Register";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "expo-router";
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, TextInput } from "react-native-paper";

const register = () => {
const router = useRouter();
    const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <View>
<Header1 porps={{title:"Login"}}/>
  <Card>

<Text variant="titleMedium">Phone Number</Text>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
         <TextInput
            placeholder="Phone Number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode='outlined'
          />
        )}
        name="Phonenumber"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode='outlined'
            right={<TextInput.Icon icon="eye" />}
          />
        )}
        name="Password"
      />
          {errors.firstName && <Text>This is required.</Text>}
  </Card>

    
     <Button
          icon="camera"
          mode="contained"
          onPress={() => router.push("(auth)/login")}
        >
          Login{" "}
        </Button>
    </View>
  )
}

export default register

const styles = StyleSheet.create({})