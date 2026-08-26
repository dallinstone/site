type ProjectVisualProps = {
  variant: "equipment" | "quilt";
};

const quiltTiles = ["a", "b", "c", "d", "b", "a", "d", "c", "c", "d", "a", "b"];

export default function ProjectVisual({ variant }: ProjectVisualProps) {
  if (variant === "equipment") {
    return (
      <div className="project-preview project-preview--equipment" aria-hidden="true">
        <div className="preview-window-bar"><span /><span /><span /></div>
        <div className="equipment-preview__header">
          <span>Character level</span>
          <strong>08</strong>
        </div>
        <div className="equipment-preview__budget">
          <span>Available budget</span>
          <strong>320 gp</strong>
        </div>
        <div className="equipment-preview__items">
          <span /><span /><span />
        </div>
        <div className="equipment-preview__total">
          <span>Selected equipment</span>
          <strong>214 gp</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview project-preview--quilt" aria-hidden="true">
      <div className="preview-window-bar"><span /><span /><span /></div>
      <div className="quilt-preview__toolbar">
        <span className="quilt-swatch quilt-swatch--green" />
        <span className="quilt-swatch quilt-swatch--cream" />
        <span className="quilt-swatch quilt-swatch--orange" />
      </div>
      <div className="quilt-preview__grid">
        {quiltTiles.map((tile, index) => <span className={`quilt-tile quilt-tile--${tile}`} key={`${tile}-${index}`} />)}
      </div>
    </div>
  );
}
