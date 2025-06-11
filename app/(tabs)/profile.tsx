import Header1 from "@/components/HeaderLogin";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { accountOptionType } from "@/components/types";
import Animated, { FadeInDown } from "react-native-reanimated";
import ScrollExample from "@/components/ScrollView";
import { List, MD3Colors } from "react-native-paper";
import React from "react";
import Swipeable_Test from "@/components/Swipeable_Test";
import { Image } from 'expo-image';
import { ListItem } from "@react-native-material/core";
export default function Profile() {
  const router = useRouter();
 const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <ScreenWrapper>
      <Header1 props={{ title: "Profile" }} />
            <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

<View style={styles.container}>

 <ListItem
      title="Profile"
      leading={<MaterialIcons name='account-box' size={24} />}
      trailing={props => <MaterialIcons name="chevron-right" {...props} />}
    /> 
     <ListItem
      title="Setting"
      leading={<MaterialIcons name='settings' size={24} />}
      trailing={props => <MaterialIcons name="chevron-right" {...props} />}
    /> 
     <ListItem
      title="Contact"
      leading={<MaterialIcons name='contacts' size={24} />}
      trailing={props => <MaterialIcons name="chevron-right" {...props} />}
    /> 
     <ListItem
      title="Logout"
      leading={<MaterialIcons name='logout' size={24} />}
      trailing={props => <MaterialIcons name="chevron-right" {...props} />}
    /> 
      </View>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  
});
