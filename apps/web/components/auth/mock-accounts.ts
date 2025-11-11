import type { Route } from "next";

export type Role = "principal" | "admin" | "staff" | "student";

export interface MockAccount {
  id: string;
  name: string;
  email: string;
  passcode: string;
  role: Role;
  title: string;
  department: string;
  description: string;
  home: Route;
  highlights: string[];
}

export const mockAccounts: MockAccount[] = [
  {
    id: "principal-001",
    name: "Dr. Radhika Bose",
    email: "principal@bethune-college.edu",
    passcode: "Principal@123",
    role: "principal",
    title: "College Principal",
    department: "Executive Office",
    description:
      "Full oversight over change-of-college approvals, policy overrides, and compliance monitors.",
    home: "/super-admin",
    highlights: ["Change-of-college desk", "Global monitoring", "Audit exports"]
  },
  {
    id: "admin-ops",
    name: "Sayan Mukherjee",
    email: "ops.admin@bethune-college.edu",
    passcode: "Admin@123",
    role: "admin",
    title: "Registrar Operations Lead",
    department: "Administration",
    description: "Manages daily ERP portal workflows spanning students, finance, and HR.",
    home: "/portal",
    highlights: ["Portal overview", "Student master control", "Finance approvals"]
  },
  {
    id: "staff-admissions",
    name: "Ankita Poddar",
    email: "admissions.staff@bethune-college.edu",
    passcode: "Staff@123",
    role: "staff",
    title: "Admissions Specialist",
    department: "Admissions",
    description: "Scoped access to application intake, verification, and student onboarding queues.",
    home: "/portal/students",
    highlights: ["Admissions queues", "Document review", "Workflow SLAs"]
  },
  {
    id: "student-2024",
    name: "Karan Gupta",
    email: "student2024@bethune-college.edu",
    passcode: "Student@123",
    role: "student",
    title: "B.Tech CSE 2024",
    department: "Student Community",
    description:
      "Student view restricted to learner dashboard, notices, and support ticketing experiences.",
    home: "/student",
    highlights: ["Student dashboard", "Fee receipts", "Support tickets"]
  }
];
