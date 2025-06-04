import ScreenWrapper from '@/components/ScreenWrapper';
import { StyleSheet, Text, View } from 'react-native';
export default function Profile() {
  return (

    <ScreenWrapper>

<View style={styles.container}>
  <Text>profile </Text>
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
