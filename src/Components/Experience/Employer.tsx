import { EmploymentItem } from "../../Features/Models/EmploymentItem";

interface Props {
  employer: EmploymentItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Employer({ employer, index, isOpen, onToggle }: Props) {
  const panelId = `experience-panel-${index}`;
  const buttonId = `experience-button-${index}`;

  return (
    <article className={`experience-card${isOpen ? " experience-card--open" : ""}`}>
      <button
        id={buttonId}
        className="experience-summary"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="experience-summary__text">
          <strong>{employer.name}</strong>
          <span>{employer.title}</span>
          <span>{employer.dates}</span>
        </span>
        <span className="experience-summary__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <section
        id={panelId}
        className="experience-panel"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{employer.summary}</p>
        <ul>
          {employer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>
    </article>
  );
}
