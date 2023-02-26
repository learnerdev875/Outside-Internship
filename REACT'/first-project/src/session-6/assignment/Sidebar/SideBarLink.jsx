import { Link } from "react-router-dom";
const SideBarLink = ({ icon, text }) => {
  return (
    <Link className="link" to="/dashboard">
      {icon} {text}
    </Link>
  );
};

export default SideBarLink;
