import Header1 from "@/components/Header1";
import ScreenForm from "@/components/ScreenForm";
import ScreenWrapper from "@/components/ScreenWrapper";
import { schema } from "@/schema/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TextInput,Card ,Button} from "react-native-paper";
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
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <ScreenWrapper>
      <Header1 props={{ title: "Login" }} />
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
        {errors.firstName && <Text>This is required.</Text>}


   <Button
          icon="camera"
          mode="contained"
          onPress={() => router.push("(tabs)")}
        >
          Login{" "}
        </Button>
      </View>
      </ScreenForm>

    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: {
    height: 150,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
