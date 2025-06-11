import Header1 from "@/components/Header1";
import ScreenForm from "@/components/ScreenForm";
import ScreenWrapper from "@/components/ScreenWrapper";
import { schema } from "@/schema/Register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
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
    <ScreenWrapper>
      <Header1 props={{ title: "Login" }} />

      <Text variant="titleMedium">Phone Number</Text>

      <ScreenForm>
        <View>
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
                mode="outlined"
              />
            )}
            name="Phonenumber"
          />

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
                mode="outlined"
                right={<TextInput.Icon icon="eye" />}
              />
            )}
            name="Password"
          />

          <Button
            icon="camera"
            mode="contained"
            onPress={() => router.push("(auth)/verification")}
          >
            Login{" "}
          </Button>
        </View>
      </ScreenForm>
    </ScreenWrapper>
  );
};

export default register;

const styles = StyleSheet.create({
   container: { flex: 1 },
  form:{
    padding:10,
    
  }
  });
