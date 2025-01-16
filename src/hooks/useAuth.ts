import auth from '@react-native-firebase/auth';
import { FirebaseAuthUser } from '../types/types';

export const registerWithEmail = async (email: string, password: string, name:string): Promise<FirebaseAuthUser> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await user.updateProfile({ displayName: name });
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (err) {
    const error = err as Error; // Explicitly cast the error to the `Error` type
    throw new Error('ERROR: ' + error.message);
  }
};

export const loginWithEmail = async (email: string, password: string): Promise<FirebaseAuthUser> => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (err) {
    const error = err as Error; // Explicitly cast the error to the `Error` type
    throw new Error(error.message);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (err) {
    const error = err as Error; // Explicitly cast the error to the `Error` type
    throw new Error(error.message);
  }
};
