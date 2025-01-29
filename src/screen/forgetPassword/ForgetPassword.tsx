import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Button from '../../component/button/Button';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../component/header/Header';
import {useAppNavigation} from '../../utils/AppNavigation';
import { FORGOT_PASSWORD } from '../../constants/constants';
import { IMAGES } from '../../constants/constants';
import { colors } from '../../constants/colors';
export default function ForgotPassword() {
  const navigation = useAppNavigation();
  const { email, setEmail, sendResetCode } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Header
            title="Forgot Password"
            onBackPress={() => navigation.goBack()}
          />
        </View>

        <Image
          source={IMAGES.forgotPas}
          style={styles.image}
        />

        <Text style={styles.instructions}>
        {FORGOT_PASSWORD.instructions}
        </Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Image
            source={IMAGES.icon}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.black}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
<<<<<<< HEAD
<View style={styles.btn}>
<Button title="Send Reset Code" onPress={sendResetCode}/>
</View>
=======

        <Button title="Send Reset Code" onPress={sendResetCode} />
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
<<<<<<< HEAD
  btn:{
width: 280,
  },
=======
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      alignItems: 'center',
      flex: 1,
      padding: 20,
      backgroundColor: colors.white,
    },
    headerWrapper: {
      width: '100%',
      alignItems: 'flex-start',
      marginBottom: 20,
      marginLeft: 30,
    },
    image: {
      alignSelf: 'center',
      marginBottom: 34,
    },
    instructions: {
      fontFamily: 'Familjen Grotesk',
      fontSize: 16,
      fontWeight: '400',
      color: colors.onyx,
      marginBottom: 24,
      paddingHorizontal: 20,
      textAlign: 'center',
    },
    label: {
      fontSize: 14,
      marginBottom: 6,
      color: colors.jetBlack,
      fontWeight: '500',
      alignSelf: 'flex-start',
      marginLeft: '10%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.borderGray,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 14,
      marginBottom: 20,
      width: '80%',
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.slateGray,
      height: 40,
    },
  });
