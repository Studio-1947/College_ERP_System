import { AdmissionsDashboard } from "./_components/admissions-dashboard";
import { RoleGate } from "../../components/auth/role-gate";

export const metadata = {
  title: "Admissions Portal | College ERP"
};

export default function AdmissionsHomePage() {
  return (
    <RoleGate
      allowedRoles={["principal", "admin", "staff"]}
      description="Admissions workspace is limited to leadership and admissions staff."
    >
      <AdmissionsDashboard />
    </RoleGate>
  );
}
