import HeaderLogin from '@/components/HeaderLogin';
import RaoundButton from '@/components/RaoundButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import { StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (


    <ScreenWrapper>
      <HeaderLogin props={{ title: "Home" }} />

<View style={styles.container}>
<View style={styles.actionRow}>

  <RaoundButton icon={'add'} text={'Addmoney'} />

</View>




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
