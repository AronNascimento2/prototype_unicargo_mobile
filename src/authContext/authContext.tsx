import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  username: string;
}

interface AuthContextData {
  user: User | null;
  signIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user from AsyncStorage:', error);
      }
    };
    loadUser();
  }, []);

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // Simulação de autenticação
    if (username === 'mockUser' && password === '1234') {
      setUser({username});
      // Salvar o usuário no AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify({username}));
    } else {
      throw new Error('Credenciais inválidas');
    }
  };

  const signOut = async () => {
    setUser(null);
    // Limpar o usuário do AsyncStorage
    await AsyncStorage.removeItem('user');
  };

  const authContextValue = useMemo(() => ({user, signIn, signOut}), [user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
