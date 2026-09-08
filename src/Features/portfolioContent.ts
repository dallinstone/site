export const personalProfile = {
  eyebrow: "Beyond the keyboard",
  heading: "There’s more to life than software.",
  body: "I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.",
};

export const contactInvitation = {
  body: "An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.",
};

export const portfolioProjects = [
  {
    number: "01",
    code: "CF–001",
    id: "pf2e-equipment-tracker",
    name: "PF2e Equipment Tracker",
    kind: "Pathfinder 2e planning tool",
    category: "Pathfinder 2e planning tools",
    compactCategory: "Pathfinder 2e / React",
    label: "Pathfinder planning",
    url: "https://pf2e-equipment.com",
    displayUrl: "pf2e-equipment.com",
    visual: "equipment" as const,
    summary: "A character-equipment planner designed around level, item availability, and a finite pile of gold.",
    description: "A data-driven toolkit for planning Pathfinder 2e equipment around character level and available gold, with filtering, equipped-gear management, persistent budgets, and portable saves.",
    problem: "Other Pathfinder builders could list items, but they did not fit my one-shot workflow: tracking what was available, what I had selected, and how much gold remained.",
    engineering: "I transformed the Foundry VTT item corpus with Python, then built fast filtering, custom drag-and-drop, persistent budget state, and import/export in React.",
    result: "The finished tool turns equipment selection and budgeting into one repeatable planning workflow.",
    tags: ["React", "Vite", "Python", "Custom drag & drop"],
    evidence: ["Foundry VTT data", "Fast filtering", "Custom drag-and-drop", "Portable saves"],
  },
  {
    number: "02",
    code: "CF–002",
    id: "hst-designer",
    name: "HST Designer",
    kind: "Half-square triangle quilt designer",
    category: "Half-square triangle quilt design",
    compactCategory: "Half-square triangle quilts / React + Firebase",
    label: "Quilt composition",
    url: "https://half-square-triangle.com",
    displayUrl: "half-square-triangle.com",
    visual: "quilt" as const,
    summary: "A visual canvas for designing half-square triangle quilts in your own colors before cutting fabric.",
    description: "A visual workspace for composing half-square triangle quilts with custom palettes, transformations, undo and redo, configurable dimensions, and shareable Firebase-backed saves.",
    problem: "I could find plenty of quilt patterns, but I could not easily picture them outside the example palette. I wanted to experiment before committing fabric.",
    engineering: "I combined a direct-manipulation canvas with palette and transformation state, undo and redo, configurable dimensions, Firebase storage, and Google sign-in.",
    result: "The finished workspace lets a design be explored, saved, and shared before any fabric is cut.",
    next: "I see room to grow HST Designer beyond a personal planning tool and test a viable product model.",
    tags: ["React", "Vite", "Firebase", "Interactive canvas"],
    evidence: ["Direct manipulation", "Custom palettes", "Undo and redo", "Shareable saves"],
  },
];
