export interface User {
    email: string | null;
    name: string | null;
  }
  export interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
  }
  export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Signup: undefined;
  };
  export interface FirebaseAuthUser {
    uid: string;
    email: string | null;
    displayName: string | null;

  }
