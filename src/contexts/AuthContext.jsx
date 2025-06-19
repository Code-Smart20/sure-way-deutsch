import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function signup(email, password, displayName) {
    try {
      setError('');
      setLoading(true);

      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user, { displayName });

      await setDoc(doc(db, 'users', user.uid), {
        email,
        displayName,
        createdAt: serverTimestamp(),
        role: 'student',
        courses: [],
        progress: {},
      });

      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const value = {
    signup,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
