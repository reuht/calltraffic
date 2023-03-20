import style from "./style.module.css";
import LogoCalltraffic from "../../svgcomponets/logoCalltraffic";
import { Link, Outlet } from "react-router-dom";
//icons
import Logout from "../../icons/loguot";
import Dashboard from "../../icons/dashboard";
import Company from "../../icons/Company";
import Record from "../../icons/Registro";
import Download from "../../icons/Download";

const Panel = (props) => {
  return (
    <div className={style.panel}>
      <div className={style.table}>
        <div className={style.sidebar}>
          <div className={style.sidebar__wrapper}>
            <LogoCalltraffic />
            <div className={style.user}>
              <figure className={style.user__image_container}>
                <img
                  className={style.user__image}
                  src={
                    "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_1200.jpg"
                  }
                  alt="user-avatar"
                />
                <figcaption className={style.user__name}>
                  <span>Joseph Villalba</span>
                  <br />
                  <span className={style.user__name_rol}>Administrador</span>
                </figcaption>
              </figure>
            </div>
            <div className={style.navegate}>
              <nav className={style.navegate__nav}>
                <ul className={style.navegate__list_link}>
                  <li className={style.nav__link}>
                    <Link className={style.nav__link_anchor} to="/panel/dashboard">
                      <Dashboard />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className={style.nav__link}>
                    <Link className={style.nav__link_anchor} to="/panel/companies">
                      <Company />
                      <span>Compañias</span>
                    </Link>
                  </li>
                  <li className={style.nav__link}>
                    <Link className={style.nav__link_anchor} to="/panel/records">
                      <Record />
                      <span>Registro</span>
                    </Link>
                  </li>
                  <li className={style.nav__link}>
                    <Link className={style.nav__link_anchor} to="/panel/download">
                      <Download />
                      <span>Descargas</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.sidebar__button_close}>
            <Logout />
            <span>Cerrar sesión</span>
          </div>
        </div>
        <div className={style.elements}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Panel;
