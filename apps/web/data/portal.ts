export interface PortalStat {
  label: string;
  value: string;
  change: string;
}

export interface StudentUpdate {
  name: string;
  program: string;
  action: string;
  time: string;
}

export interface FeeAlert {
  title: string;
  detail: string;
}

export interface EnquiryTicket {
  id: string;
  subject: string;
  sla: string;
  owner: string;
}

export interface ComplianceItem {
  title: string;
  status: string;
  due: string;
}

export interface ChangeDeskRequest {
  id: string;
  student: string;
  from: string;
  to: string;
  reason: string;
  status: string;
  sla: string;
}

export interface CampusImpactEntry {
  campus: string;
  seatsFree: number;
  seatsRequested: number;
  trend: string;
  status: string;
}

export const portalStats: PortalStat[] = [
  { label: "Active Students", value: "12,480", change: "+120 this week" },
  { label: "Pending Approvals", value: "38", change: "Student record updates" },
  { label: "Fee Collections (MTD)", value: "Rs 12.4 Cr", change: "92% of target" },
  { label: "Open Support Tickets", value: "64", change: "Avg SLA 3h 12m" }
];

export const studentUpdates: StudentUpdate[] = [
  {
    name: "Amrita Joseph",
    program: "BBA 2023",
    action: "Profile update awaiting registrar approval",
    time: "5 min ago"
  },
  {
    name: "Prakash N.",
    program: "MSc Physics 2022",
    action: "Document verification completed",
    time: "18 min ago"
  },
  {
    name: "Harshita Rao",
    program: "B.Tech CSE 2024",
    action: "New admission converted from applicant pool",
    time: "1 hr ago"
  }
];

export const feeAlerts: FeeAlert[] = [
  { title: "Fee Plan: B.Tech 2024", detail: "Installment #2 due 12 Nov - 86% paid" },
  { title: "Scholarship Reconciliation", detail: "Pending verification for 14 students" },
  { title: "UPI Gateway", detail: "Reconciliation mismatch detected - review now" }
];

export const enquiryQueue: EnquiryTicket[] = [
  { id: "FR-2045", subject: "Transcript attestation", sla: "Due in 1h", owner: "Front Office" },
  { id: "FR-2046", subject: "Hostel fee query", sla: "Due in 3h", owner: "Finance Desk" },
  { id: "FR-2047", subject: "Bonafide certificate", sla: "Due in 5h", owner: "Registrar" }
];

export const complianceChecklist: ComplianceItem[] = [
  { title: "NAAC AQAR 2024", status: "Draft ready - 18 sections", due: "Due 20 Nov" },
  { title: "NIRF Data Pack", status: "Pending HR metrics", due: "Due 30 Nov" },
  { title: "Scholarship Portal Sync", status: "Last sync 2h ago", due: "Daily" }
];

export const changeDeskRequests: ChangeDeskRequest[] = [
  {
    id: "CC-2041",
    student: "Niyati Sharma",
    from: "Central Campus",
    to: "North Satellite",
    reason: "Guardian relocation",
    status: "Awaiting registrar",
    sla: "Due in 2h"
  },
  {
    id: "CC-2042",
    student: "Raghav Iyer",
    from: "Durgapur Extension",
    to: "Central Campus",
    reason: "Research lab requirement",
    status: "Principal review",
    sla: "Due in 4h"
  },
  {
    id: "CC-2043",
    student: "Sahana Deb",
    from: "North Satellite",
    to: "Central Campus",
    reason: "Hostel availability",
    status: "Documents pending",
    sla: "Due tomorrow"
  }
];

export const campusImpact: CampusImpactEntry[] = [
  { campus: "Central Campus", seatsFree: 12, seatsRequested: 5, trend: "+3 seats", status: "Stable" },
  { campus: "North Satellite", seatsFree: 4, seatsRequested: 6, trend: "-2 seats", status: "Tight" },
  {
    campus: "Durgapur Extension",
    seatsFree: 9,
    seatsRequested: 4,
    trend: "+1 seat",
    status: "Healthy"
  }
];
