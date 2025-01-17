import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FirebaseAuthUser } from '../types/types';

// Configure Google Sign-In with your web client ID
GoogleSignin.configure({
  webClientId: '578891259540-ep9m1tn5di0rkiv6if3ntomi7tlcs86n.apps.googleusercontent.com',
});

export const registerWithEmail = async (
  email: string,
  password: string,
  name: string
): Promise<FirebaseAuthUser> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await user.updateProfile({ displayName: name });

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (err) {
    const error = err as Error;
    throw new Error('ERROR: ' + error.message);
  }
};

// import auth from '@react-native-firebase/auth';

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};


export const logout = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

export const signInWithGoogle = async (): Promise<FirebaseAuthUser> => {
  try {
    // Get the Google user info
    const { idToken } = await GoogleSignin.signIn();

    // Create a Firebase credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign in with the credential
    const userCredential = await auth().signInWithCredential(googleCredential);
    const user = userCredential.user;

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (err) {
    const error = err as Error;
    throw new Error('Google Sign-In failed: ' + error.message);
  }
};

export const updateProfile = async ({
  name,
  email,
  password,
  photoURL,
}: {
  name?: string;
  email?: string;
  password?: string;
  photoURL?: string;
}): Promise<void> => {
  try {
    const user = auth().currentUser;

    if (!user) throw new Error('No user is signed in');

    if (name || photoURL) {
      await user.updateProfile({
        displayName: name || user.displayName,
        photoURL: photoURL || user.photoURL,
      });
    }

    if (email) await user.updateEmail(email);
    if (password) await user.updatePassword(password);
  } catch (err) {
    const error = err as Error;
    throw new Error('Profile update failed: ' + error.message);
  }
};
