import { PortalDashboard } from "./_components/portal-dashboard";
import { RoleGate } from "../../components/auth/role-gate";

export const metadata = {
  title: "ERP Portal | College ERP"
};

export default function PortalHomePage() {
  return (
    <RoleGate
      allowedRoles={["principal", "admin", "staff"]}
      description="Portal modules are available to principal, registrar admins, and admissions staff."
    >
      <PortalDashboard />
    </RoleGate>
  );
}
