import Header1 from "@/components/Header1";
import HeaderLogin from "@/components/HeaderLogin";
import RaoundButton from "@/components/RaoundButton";
import ScreenForm from "@/components/ScreenForm";
import ScreenWrapper from "@/components/ScreenWrapper";
import { schema } from "@/schema/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
const login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <ScreenWrapper>
      <ScreenForm>
        <View style={styles.container}>
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
          /> <Controller
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

          <Button
            icon="login"
            mode="contained"
            onPress={() => router.push("(tabs)")}
          >
            Login{" "}
          </Button>

          <View style={styles.continuerText}>
            <Button mode="text" onPress={() => router.push("/(auth)/register")}>
              Register{" "}
            </Button>
            <Button
              mode="text"
              onPress={() => router.push("/(auth)/forgot_password")}
            >
              Forgot Password{" "}
            </Button>
          </View>
        </View>
      </ScreenForm>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: { flex: 1, 
    flexDirection: "column",
  justifyContent:'center', },
  continuerText: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
