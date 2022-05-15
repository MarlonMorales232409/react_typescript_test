import { createContext } from 'react';
import { Posts } from '../interfaces/interfaces';

// Types for createContext
export type ContextTypeProps = {
    post: Posts[],
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setBody:  React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleDelete: (id: number) => Promise<void>,
    filteredPost: () => Posts[],
    nextPage: () => void,
    prevPage: () => void,
}
  

export const StateContext = createContext<ContextTypeProps | any >({});
