import { assets } from "../../assets/assets";
import "./style.css";

export default function AppDownload() {
  return (
    <section className="app_download-sec" id="app-download">
      <p>
        For Better Experience Download <br />
        TasteTheTomato App
      </p>
      <div className="app_download-platform">
        <img src={assets.play_store} alt="Playstore icon" />
        <img src={assets.app_store} alt="Appstore icon" />
      </div>
    </section>
  );
}
