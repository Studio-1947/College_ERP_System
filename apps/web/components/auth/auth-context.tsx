"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { mockAccounts, type MockAccount } from "./mock-accounts";

interface AuthContextValue {
  currentAccount: MockAccount | null;
  accounts: MockAccount[];
  login: (accountId: MockAccount["id"]) => void;
  logout: () => void;
  hydrated: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accountId, setAccountId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem("college-erp-account") : null;
    if (stored) {
      setAccountId(stored);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") {
      return;
    }
    if (accountId) {
      window.localStorage.setItem("college-erp-account", accountId);
    } else {
      window.localStorage.removeItem("college-erp-account");
    }
  }, [accountId, hydrated]);

  const login = useCallback((id: string) => {
    setAccountId(id);
  }, []);

  const logout = useCallback(() => {
    setAccountId(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const currentAccount = mockAccounts.find((account) => account.id === accountId) ?? null;
    return {
      currentAccount,
      accounts: mockAccounts,
      login,
      logout,
      hydrated
    };
  }, [accountId, hydrated, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
