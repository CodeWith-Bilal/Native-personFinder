export interface User {
    email: string | null;
    name: string | null;
  }
  export interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
  }
