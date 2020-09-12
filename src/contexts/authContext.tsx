import {createContext} from 'react';
import { AuthInterface } from '../interfaces/auth';

export declare type AuthContextInterface = {
  login: ({}:AuthInterface) => void;
};

export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);
