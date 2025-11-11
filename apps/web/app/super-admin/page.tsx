"use client";

import { useMemo, useState } from "react";
import { Modal } from "../../components/modal";
import { Reveal } from "../../components/reveal";
import { useAuth } from "../../components/auth/auth-context";
import { RoleGate } from "../../components/auth/role-gate";

const moduleKeys = ["students", "finance", "hostel", "exams", "infra"] as const;
type ModuleKey = (typeof moduleKeys)[number];

interface AccessMatrixRow {
  id: string;
  name: string;
  region: string;
  owner: string;
  access: Record<ModuleKey, boolean>;
}

interface QuickAction {
  id: string;
  title: string;
  target: string;
  actionLabel: string;
  impact: string;
  type: "change" | "edit" | "delete";
  badge: string;
}

interface MonitorStream {
  id: string;
  label: string;
  metric: string;
  status: string;
  detail: string;
  trend: string;
}

const initialAccessMatrix: AccessMatrixRow[] = [
  {
    id: "central",
    name: "Central Campus",
    region: "Kolkata HQ",
    owner: "Registrar Ops",
    access: { students: true, finance: true, hostel: true, exams: true, infra: true }
  },
  {
    id: "north",
    name: "North Satellite",
    region: "Siliguri",
    owner: "Dean Academics",
    access: { students: true, finance: false, hostel: true, exams: true, infra: false }
  },
  {
    id: "west",
    name: "West Extension",
    region: "Durgapur",
    owner: "Finance Controller",
    access: { students: true, finance: true, hostel: false, exams: true, infra: true }
  }
];

const quickActions: QuickAction[] = [
  {
    id: "student-edit",
    title: "Student master",
    target: "Profile BJ4821",
    actionLabel: "Edit & push",
    impact: "Propagates to LMS, hostel, and ID services instantly.",
    type: "edit",
    badge: "3 downstream systems"
  },
  {
    id: "fee-change",
    title: "Fee template",
    target: "B.Tech 2024",
    actionLabel: "Change policy",
    impact: "Impacts 1,420 invoices once approved.",
    type: "change",
    badge: "Finance workflow"
  },
  {
    id: "fac-delete",
    title: "Faculty directory",
    target: "Duplicate account",
    actionLabel: "Delete safely",
    impact: "Removes stale payroll + LMS mapping within 60s.",
    type: "delete",
    badge: "Cleanup mode"
  }
];

const monitorStreams: MonitorStream[] = [
  {
    id: "data-plane",
    label: "Data plane syncs",
    metric: "18/18 jobs healthy",
    status: "Synchronized",
    detail: "Last refresh 54 seconds ago",
    trend: "+2 new diffs resolved"
  },
  {
    id: "workflow",
    label: "Workflow approvals",
    metric: "92% auto-approved",
    status: "6 pending escalations",
    detail: "Turnaround 11m median",
    trend: "+4% faster vs yesterday"
  },
  {
    id: "security",
    label: "Security policies",
    metric: "Zero critical drifts",
    status: "2 warnings",
    detail: "Audit trail synced",
    trend: "Policy pack v3.8 live"
  }
];

const monitoringFeed = [
  {
    id: "MON-204",
    module: "Finance",
    summary: "Fee slab override executed",
    impact: "Auto-notified 248 guardians",
    severity: "medium",
    time: "2 min ago"
  },
  {
    id: "MON-205",
    module: "Security",
    summary: "New device flagged for registrar",
    impact: "Forced MFA challenge",
    severity: "high",
    time: "7 min ago"
  },
  {
    id: "MON-206",
    module: "Admissions",
    summary: "Bulk upload converted",
    impact: "42 new profiles staged",
    severity: "low",
    time: "15 min ago"
  }
];

const changeTimeline = [
  {
    id: "CL-9821",
    actor: "Sangita N.",
    module: "Admissions matrix",
    detail: "Edited 2024 merit bucket",
    time: "08:21 IST",
    risk: "Low"
  },
  {
    id: "CL-9822",
    actor: "Workflow bot",
    module: "Finance templates",
    detail: "Auto-approved scholarship sync",
    time: "08:10 IST",
    risk: "Info"
  },
  {
    id: "CL-9823",
    actor: "Arjun V.",
    module: "Payroll identities",
    detail: "Revoked temporary access",
    time: "07:58 IST",
    risk: "Medium"
  }
];

const watchers = [
  {
    name: "Observability bot",
    focus: "Infra",
    status: "Watching automation",
    detail: "No drift detected"
  },
  {
    name: "Compliance desk",
    focus: "UGC / NAAC",
    status: "Manual review",
    detail: "Awaiting HR metrics"
  },
  {
    name: "Security pod",
    focus: "Devices",
    status: "Active sweep",
    detail: "New policy draft ready"
  }
];

export default function SuperAdminPage() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [modalPayload, setModalPayload] = useState<QuickAction | null>(null);
  const [monitorFocus, setMonitorFocus] = useState<string>("data-plane");
  const [accessMatrix, setAccessMatrix] = useState<AccessMatrixRow[]>(
    () => initialAccessMatrix.map((row) => ({ ...row, access: { ...row.access } }))
  );
  const { currentAccount } = useAuth();

  const selectedMonitor = useMemo(() => {
    return monitorStreams.find((stream) => stream.id === monitorFocus) ?? monitorStreams[0];
  }, [monitorFocus]);

  const complianceScore = useMemo(() => {
    const totalSwitches = accessMatrix.length * moduleKeys.length;
    const enabled = accessMatrix.reduce((sum, row) => {
      return sum + moduleKeys.filter((key) => row.access[key]).length;
    }, 0);
    return Math.round((enabled / totalSwitches) * 100);
  }, [accessMatrix]);

  const togglePermission = (campusId: string, module: ModuleKey) => {
    setAccessMatrix((prev) =>
      prev.map((row) => {
        if (row.id !== campusId) return row;
        return {
          ...row,
          access: { ...row.access, [module]: !row.access[module] }
        };
      })
    );
  };

  const triggerModal = (action: QuickAction) => {
    setSelectedAction(action.id);
    setModalPayload(action);
  };

  return (
    <RoleGate
      allowedRoles={["principal", "admin"]}
      heading="Super admin permissions required"
      description="Only principal and registrar admins can reach the control tower."
    >
      <section className="flex flex-col gap-8">
      <Reveal as="header" className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
          Super admin control tower
        </p>
        <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">
          One-click command surface
        </h2>
        <p className="max-w-3xl text-base text-surface-600 md:text-lg">
          Elevates registrar, finance, and infra privileges into a single responsive view. Toggle access,
          run edits, push policy changes, or delete stale data with audit-ready guardrails and immediate
          monitoring feedback.
        </p>
        {currentAccount ? (
          <p className="text-sm text-surface-500">
            Acting as {currentAccount.name} ({currentAccount.title})
          </p>
        ) : null}
      </Reveal>

      <Reveal as="section" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Unified compliance", value: `${complianceScore}%`, detail: "Modules aligned" },
          { label: "Escalations open", value: "6", detail: "Across HR, Finance" },
          { label: "Live overrides", value: selectedAction ? "Active" : "Idle", detail: "Quick actions" },
          { label: "Monitors armed", value: "12 feeds", detail: "4 realtime + 8 batch" }
        ].map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{stat.label}</p>
            <p className="mt-3 text-2xl font-semibold text-surface-900">{stat.value}</p>
            <p className="mt-1 text-xs text-surface-500">{stat.detail}</p>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">One-click execution</h3>
            <p className="text-sm text-surface-600">
              Instant edit/change/delete actions with automatic dependency checks.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
            Live sandbox + production
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <article
              key={action.id}
              className="flex flex-col rounded-xl border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-surface-500">
                <span>{action.title}</span>
                <span className="rounded-full bg-surface-100 px-2 py-0.5 text-[10px] text-surface-600">
                  {action.badge}
                </span>
              </div>
              <p className="mt-3 text-xl font-semibold text-surface-900">{action.target}</p>
              <p className="mt-2 text-sm text-surface-600">{action.impact}</p>
              <button
                type="button"
                onClick={() => triggerModal(action)}
                className="mt-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-surface-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-surface-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400"
              >
                {action.actionLabel}
              </button>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            {monitorStreams.map((stream) => {
              const isActive = stream.id === monitorFocus;
              return (
                <button
                  key={stream.id}
                  type="button"
                  onClick={() => setMonitorFocus(stream.id)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    isActive
                      ? "border-primary-200 bg-primary-50 text-primary-700"
                      : "border-surface-200 text-surface-600 hover:border-primary-200 hover:text-primary-700"
                  }`}
                >
                  {stream.label}
                </button>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl border border-surface-100 bg-surface-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
              {selectedMonitor.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-surface-900">{selectedMonitor.metric}</p>
            <p className="mt-2 text-sm text-surface-600">{selectedMonitor.detail}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-medium text-success-700">{selectedMonitor.status}</span>
              <span className="text-surface-500">{selectedMonitor.trend}</span>
            </div>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {monitoringFeed.map((item) => (
              <li
                key={item.id}
                className="rounded-xl border border-surface-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-surface-500">
                  <span>{item.module}</span>
                  <time>{item.time}</time>
                </div>
                <p className="mt-2 text-base font-semibold text-surface-900">{item.summary}</p>
                <p className="text-sm text-surface-600">{item.impact}</p>
                <span
                  className={`mt-3 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${
                    item.severity === "high"
                      ? "bg-danger-50 text-danger-700"
                      : item.severity === "medium"
                        ? "bg-warning-50 text-warning-700"
                        : "bg-success-50 text-success-700"
                  }`}
                >
                  {item.severity} alert
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-surface-900">Audit timeline</h3>
              <p className="text-sm text-surface-600">Every edit/change/delete logged</p>
            </div>
            <span className="text-xs font-semibold text-surface-500">Auto-synced</span>
          </div>
          <ol className="mt-6 space-y-6">
            {changeTimeline.map((entry) => (
              <li key={entry.id} className="relative pl-6">
                <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary-500" />
                <p className="text-xs uppercase tracking-wide text-surface-500">
                  {entry.time} • {entry.id}
                </p>
                <p className="mt-1 text-sm font-semibold text-surface-900">
                  {entry.actor} / {entry.module}
                </p>
                <p className="text-sm text-surface-600">{entry.detail}</p>
                <span className="mt-1 inline-flex rounded-full bg-surface-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-surface-600">
                  {entry.risk} risk
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-xl bg-surface-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">Watchers</p>
            <ul className="mt-3 space-y-3 text-sm">
              {watchers.map((watcher) => (
                <li key={watcher.name} className="rounded-lg border border-surface-100 bg-white p-3">
                  <p className="font-semibold text-surface-900">{watcher.name}</p>
                  <p className="text-xs uppercase tracking-wide text-surface-500">{watcher.focus}</p>
                  <p className="text-sm text-surface-600">{watcher.status}</p>
                  <p className="text-xs text-surface-500">{watcher.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <Reveal as="section" className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Access matrix</h3>
            <p className="text-sm text-surface-600">
              Toggle which modules each campus can change, edit, or delete.
            </p>
          </div>
          <span className="text-xs text-surface-500">Tap buttons to grant or revoke rights</span>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-3">Campus</th>
                <th className="pb-3">Region</th>
                <th className="pb-3">Owner</th>
                {moduleKeys.map((module) => (
                  <th key={module} className="pb-3 text-center capitalize">
                    {module}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {accessMatrix.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-surface-50">
                  <td className="py-3 font-semibold text-surface-900">{row.name}</td>
                  <td className="py-3">{row.region}</td>
                  <td className="py-3 text-surface-600">{row.owner}</td>
                  {moduleKeys.map((module) => {
                    const enabled = row.access[module];
                    return (
                      <td key={module} className="py-3 text-center">
                        <button
                          type="button"
                          onClick={() => togglePermission(row.id, module)}
                          className={`inline-flex h-8 w-20 items-center justify-center rounded-full border text-xs font-semibold uppercase transition ${
                            enabled
                              ? "border-success-200 bg-success-50 text-success-700"
                              : "border-surface-200 text-surface-500 hover:border-surface-300"
                          }`}
                        >
                          {enabled ? "Granted" : "Locked"}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Modal
        open={Boolean(modalPayload)}
        onClose={() => setModalPayload(null)}
        title={
          modalPayload ? `${modalPayload.actionLabel} • ${modalPayload.title}` : "Quick action details"
        }
        description={modalPayload?.impact ?? "Review the change before broadcasting."}
      >
        {modalPayload ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-surface-100 bg-surface-50 p-3 text-sm text-surface-600">
              <p className="text-xs uppercase tracking-wide text-surface-500">Target</p>
              <p className="text-base font-semibold text-surface-900">{modalPayload.target}</p>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Pre-check dependencies and notify impacted downstream systems.</li>
              <li>Queue the action in both sandbox and production with rollback tokens.</li>
              <li>Publish the audit entry so monitoring tiles react within seconds.</li>
            </ul>
            <p className="text-xs text-surface-500">
              Continue once validations return green to finish the {modalPayload.type} cycle.
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
    </RoleGate>
  );
}
