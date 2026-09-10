export type SiteVersion = "01" | "02" | "03" | "04";

export const siteVersions: SiteVersion[] = ["01", "02", "03", "04"];

export default function VersionPicker({ version, onSelect }: { version: SiteVersion; onSelect: (version: SiteVersion) => void }) {
  return (
    <label className="version-switcher">
      <select aria-label="Choose site version" value={version} onChange={(event) => onSelect(event.target.value as SiteVersion)}>
        {siteVersions.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </label>
  );
}
