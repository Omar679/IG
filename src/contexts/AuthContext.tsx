import {CognitoUserPoolTokenProviderType} from 'aws-amplify/auth/cognito';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';

type UserType = CognitoUserPoolTokenProviderType | null | undefined | boolean;

type AuthContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  console.log('user', user);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await getCurrentUser();
        setUser(authUser);
      } catch (e) {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  useEffect(() => {
    const listner = data => {
      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
      console.log(data);
    };
    Hub.listen('auth', listner);
    return () => Hub.dispatch('auth', listner);
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
