import "./index.scss";
import LogoS from "../../../assets/images/logo-s.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solod-logo" src={LogoS} alt="S" />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g></g>
      </svg>
    </div>
  );
};
export default Logo;
