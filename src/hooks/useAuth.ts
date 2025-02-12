import {useState} from 'react';
import {RootState} from '../redux/store';
import {
  login,
  googleLogin,
  registerUser,
  forgotPassword,
  setLoading,
  setError,
  setSuccess,
  loginUser,
} from '../redux/slice/authSlice';
import {useAppDispatch, useAppSelector} from './useRedux';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSelected, setSelection] = useState(false);

  const {loading, error, user} = useAppSelector(
    (state: RootState) => state.auth,
  );

  const onLogin = async () => {
    try {
      dispatch(setLoading(true));
      const User = await loginUser(email, password);
      dispatch(login(User));
    } catch (err) {
      dispatch(setError(error as string));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      dispatch(setLoading(true));
      const User = await googleLogin();
      dispatch(login(User));
    } catch (err) {
      dispatch(setError(error as string));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onRegister = async () => {
    try {
      dispatch(setLoading(true));
      const User = await registerUser(email, password, username);
      dispatch(login(User));
    } catch (err) {
      dispatch(setError(error as string));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const sendResetCode = async () => {
    if (email.trim() !== '') {
      try {
        dispatch(setLoading(true));
        await forgotPassword(email);
        dispatch(setSuccess(true));
      } catch (err) {
        dispatch(setError(error as string));
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onGoogleButtonPress,
    username,
    setUsername,
    isSelected,
    setSelection,
    loading,
    error,
    user,
    onRegister,
    sendResetCode,
  };
};
