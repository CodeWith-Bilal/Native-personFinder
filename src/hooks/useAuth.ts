import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from './useDispatch';
import {RootState} from '../redux/store';

import {
  loginAsync,
  googleLoginAsync,
  forgotPasswordAsync,
  selectForgotPasswordState,
  registerAsync,
} from '../redux/slice/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');
  const [isSelected, setSelection] = useState(false);

  const {
    loading: forgotPasswordLoading,
    error: forgotPasswordError,
    success: forgotPasswordSuccess,
  } = useSelector(selectForgotPasswordState);

  const {loading, error, user} = useSelector((state: RootState) => state.auth);

  const onLogin = () => {
    dispatch(loginAsync({email, password}));
  };

  const onGoogleButtonPress = async () => {
    dispatch(googleLoginAsync());
  };

  const onregister = () => {
    dispatch(registerAsync({email, password, username}));
  };

  const sendResetCode = () => {
    if (email.trim() !== '') {
      dispatch(forgotPasswordAsync({email}));
    }
  };

  const resetError = () => {};

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
    onregister,
    forgotPasswordLoading,
    forgotPasswordError,
    forgotPasswordSuccess,
    sendResetCode,
    resetError,
  };
};
