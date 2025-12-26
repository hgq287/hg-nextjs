'use client';

import { useState } from 'react';
import { authService } from '@/services/authService';
import { SignInPayload } from '@/types/auth';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (data: SignInPayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.signIn(data);
      return res;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
}
