import HeaderLogin from '@/components/HeaderLogin';
import ScreenWrapper from '@/components/ScreenWrapper';
import { StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (


    <ScreenWrapper>
      <HeaderLogin props={{ title: "Home" }} />

<View style={styles.container}>


  <Text>index </Text>
</View> 

    </ScreenWrapper>
 );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
    ,
    alignItems:'center'
  }
});
