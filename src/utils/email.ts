import {Linking} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
export const sendEmail = (subject: string, body: string) => {
  const currentUser = auth().currentUser;

  if (currentUser && currentUser?.email) {
    const recipientEmail = currentUser?.email;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(err =>
      ToastAndroid.show('Error opening email client', ToastAndroid.LONG),
    );
  } else {
    ToastAndroid.show('No email found for the current user', ToastAndroid.LONG);
  }
};
