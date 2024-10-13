import PropTypes from "prop-types";
import { useGlobalStore } from "../store/global";

const Header = ({ customTextSize = "text-4xl", text = "Header Name" }) => {
  const { darkMode } = useGlobalStore();

  return <h1 className={`${darkMode ? "text-white" : "text-black"} text-center ` + customTextSize}>{text}</h1>;
};

Header.propTypes = {
  customTextSize: PropTypes.string,
  text: PropTypes.string,
};
export default Header;
