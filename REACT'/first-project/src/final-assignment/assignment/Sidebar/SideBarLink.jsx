import { NavLink } from "react-router-dom";
const SideBarLink = ({ icon, text, path }) => {
  let activeStyle = {
    backgroundColor: "#9fa2b4",
    color: "#dde2ff",
  };
  return (
    <NavLink
      className="link"
      to={path}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {icon} {text}
    </NavLink>
  );
};

export default SideBarLink;
