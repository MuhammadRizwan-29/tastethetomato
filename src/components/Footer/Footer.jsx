import { assets } from "./../../assets/assets";
import "./style.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="ft_wrapper">
        <div className="ft_left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at
            nobis minus voluptatibus! Labore et autem in ipsum nesciunt eos
            magnam, doloribus fugiat nam sequi reiciendis accusantium qui sed
            numquam!
          </p>
          <div className="ft_social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="ft_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="ft_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-304-3902756</li>
            <li>contact@tastethetomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <span className="ft_copy-right">
        Copyright 2025 &copy; tastethetomato.com - All rights are reserved
      </span>
    </footer>
  );
}
