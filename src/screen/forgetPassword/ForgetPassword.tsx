import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import Button from '../../component/button/Button';
import {useAuth} from '../../hooks/useAuth';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {FORGOT_PASSWORD} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {COLORS} from '../../constants/colors';
import {styles} from './ForgetPasswordStyle';
import {Header} from 'react-native/Libraries/NewAppScreen';
export default function ForgotPassword() {
  const navigation = useAppNavigation();
  const {email, setEmail, sendResetCode} = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Header
            title="Forgot Password"
            onBackPress={() => navigation.goBack()}
          />
        </View>

        <Image source={IMAGES.forgotPas} style={styles.image} />

        <Text style={styles.instructions}>{FORGOT_PASSWORD.instructions}</Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Image source={IMAGES.icon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.btn}>
          <Button title="Send Reset Code" onPress={sendResetCode} />
        </View>
      </View>
    </ScrollView>
  );
}
