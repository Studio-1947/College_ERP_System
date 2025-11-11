import type { Metadata } from "next";
import { LoginScreen } from "../../components/auth/login-screen";

export const metadata: Metadata = {
  title: "Login Personas | College ERP"
};

export default function LoginPage() {
  return <LoginScreen />;
}

