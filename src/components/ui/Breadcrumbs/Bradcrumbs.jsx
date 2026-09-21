import './Breadcrumbs.scss'
import { Link } from "react-router-dom";
const Breadcrumbs = ({currentSection}) => {
  return (    
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Inicio</Link> 
      <span className="divider">/</span>
      <span>{ currentSection } </span>
      {currentSection && (
        <>
          <span className="divider">/</span>
          <span>{ currentSection } </span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;