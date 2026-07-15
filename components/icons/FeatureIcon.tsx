// Inline stroke icons for the feature grid — same set as the static landing
// (orlegitech-landing-static), approximations of the material-symbols glyphs
// referenced in the Figma file, drawn in leaf-green.

const paths: Record<string, React.ReactNode> = {
  // Drone / aerial reports
  drone: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M8 8l1.6 1.6M16 8l-1.6 1.6M8 16l1.6-1.6M16 16l-1.6-1.6" />
    </>
  ),
  // Task management / checklist
  tasks: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8l1.5 1.5L12 7M8 15l1.5 1.5L12 14M14.5 8.5H17M14.5 15.5H17" />
    </>
  ),
  // Vehicle fleet (golf cart)
  vehicle: (
    <>
      <path d="M3 16V9h7l3 4h6a2 2 0 0 1 2 2v1" />
      <path d="M3 16h3M14 16h3" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 9V6h3" />
    </>
  ),
  // Irrigation planning (water drop)
  water: (
    <>
      <path d="M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
  // Project control (kanban board)
  projects: (
    <>
      <rect x="3" y="4" width="7" height="16" rx="1.5" />
      <rect x="14" y="4" width="7" height="10" rx="1.5" />
      <path d="M3 9h7M14 9h7" />
    </>
  ),
  // Employee management (people)
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2A4.6 4.6 0 0 1 21 18.6" />
    </>
  ),
  // Budgets (euro)
  euro: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5a4 4 0 0 0-3-1.5c-2.5 0-4.5 2.2-4.5 5s2 5 4.5 5a4 4 0 0 0 3-1.5M6.5 11h6M6.5 13.5h5" />
    </>
  ),
  // User clock-in (time)
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
};

export const FeatureIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.tasks}
    </svg>
  );
};
