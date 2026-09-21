import "./SectionHeader.scss";
import Breadcrumbs from "../Breadcrumbs/Bradcrumbs";

const SectionHeader = ({ currentSection, sectionTitle }) => {
  return (
    <header className="section-header">
      <div className="inner-header container">
        <Breadcrumbs currentSection={currentSection} />
        <h1 className="section-title">{sectionTitle}</h1>
      </div>
    </header>
  );
};

export default SectionHeader;