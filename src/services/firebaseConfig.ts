import auth from '@react-native-firebase/auth';

export const registerWithEmail = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await user.updateProfile({ displayName: name });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};
