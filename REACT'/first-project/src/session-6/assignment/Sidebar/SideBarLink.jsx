import { Link } from "react-router-dom";
const SideBarLink = ({ icon, text }) => {
  return (
    <Link className="link">
      {icon} {text}
    </Link>
  );
};

export default SideBarLink;
