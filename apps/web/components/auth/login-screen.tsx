"use client";

import { useMemo, useState, useEffect, useId, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useAuth } from "./auth-context";

export function LoginScreen() {
  const router = useRouter();
  const { accounts, currentAccount, login, logout } = useAuth();
  const [selectedAccountId, setSelectedAccountId] = useState<string>(accounts[0]?.id ?? "");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const accountSelectId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();
  const errorMessageId = useId();
  const passwordHintId = useId();

  useEffect(() => {
    if (accounts.length && !selectedAccountId) {
      setSelectedAccountId(accounts[0].id);
    }
  }, [accounts, selectedAccountId]);

  const selectedAccount = useMemo(
    () => accounts.find((account) => account.id === selectedAccountId) ?? accounts[0],
    [accounts, selectedAccountId]
  );

  const handleAccountChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccountId(event.target.value);
    setPassword("");
    setFormError(null);
  }, []);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (formError) {
      setFormError(null);
    }
    setPassword(event.target.value);
  }, [formError]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedAccount) {
      setFormError("Please pick an account to continue.");
      return;
    }
    if (password.trim() !== selectedAccount.passcode) {
      setFormError("Incorrect password. Try again.");
      return;
    }

    setFormError(null);
    setSubmitting(true);
    login(selectedAccount.id);
    setPassword("");
    router.push(selectedAccount.home);
    setSubmitting(false);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:py-16">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
          Secure sign-in
        </p>
        <h1 className="text-3xl font-semibold text-surface-900 md:text-4xl">Access the ERP suites</h1>
        <p className="max-w-3xl text-base text-surface-600 md:text-lg">
          Choose your account from the dropdown, confirm the mock password shared for demos, and the UI
          will unlock the appropriate portal tier (super admin, ERP ops, admissions staff, or student).
        </p>
      </header>

      {currentAccount ? (
        <div className="rounded-2xl border border-success-100 bg-success-50 p-4 text-sm text-success-800">
          <p className="font-semibold">
            Active session: {currentAccount.name} ({currentAccount.title})
          </p>
          <p className="text-success-700">
            You can continue in the current workspace or sign out to log in as someone else.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Link
              href={currentAccount.home}
              className="inline-flex items-center justify-center rounded-md bg-success-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-success-500"
            >
              Go to workspace
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-md border border-success-300 px-4 py-2 text-sm font-semibold text-success-700 transition hover:border-success-400"
            >
              Log out
            </button>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor={accountSelectId} className="text-sm font-semibold text-surface-700">
                Select account
              </label>
              <div className="mt-2 rounded-lg border border-surface-200">
                <select
                  id={accountSelectId}
                  value={selectedAccount?.id ?? ""}
                  onChange={handleAccountChange}
                  className="w-full rounded-lg bg-transparent px-3 py-2 text-sm focus:outline-none"
                  aria-describedby={currentAccount ? undefined : "account-helper"}
                >
                  {accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} — {account.role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={emailInputId} className="text-sm font-semibold text-surface-700">
                Email
              </label>
              <input
                id={emailInputId}
                type="email"
                value={selectedAccount?.email ?? ""}
                readOnly
                aria-readonly="true"
                autoComplete="off"
                className="mt-2 w-full rounded-lg border border-surface-200 bg-surface-50 px-3 py-2 text-sm text-surface-600"
              />
            </div>

            <div>
              <label htmlFor={passwordInputId} className="text-sm font-semibold text-surface-700">
                Password
              </label>
              <div
                className={clsx(
                  "mt-2 flex items-center rounded-lg border px-3",
                  formError ? "border-danger-300" : "border-surface-200"
                )}
              >
                <input
                  id={passwordInputId}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter demo password"
                  aria-invalid={Boolean(formError)}
                  aria-describedby={`${passwordHintId}${formError ? ` ${errorMessageId}` : ""}`}
                  autoComplete="off"
                  className="w-full border-none bg-transparent py-2 text-sm focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-xs font-semibold uppercase tracking-wide text-primary-600"
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p id={passwordHintId} className="mt-1 text-xs text-surface-500">
                Use the mock password shared in the documentation (e.g. Principal@123).
              </p>
            </div>

            {formError ? (
              <p
                id={errorMessageId}
                role="alert"
                aria-live="assertive"
                className="text-sm font-semibold text-danger-600"
              >
                {formError}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
            Session details
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-surface-900">
            {selectedAccount?.title ?? "Role overview"}
          </h2>
          <p className="mt-1 text-sm text-surface-600">{selectedAccount?.department}</p>
          <p className="mt-4 text-sm text-surface-600">{selectedAccount?.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-surface-600">
            {selectedAccount?.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-surface-50 p-4 text-sm text-surface-600">
            <p className="font-semibold text-surface-900">Workspace entry</p>
            <p className="text-surface-600">{selectedAccount?.home}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
