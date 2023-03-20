import CallTrafficLogo from "../../svgcomponets/calltraffic";
import style from "./style.module.css";

const Login = (props) => {
    return (
        <div className={style.login}>
            <div className={style.login__form}>
                <div className={style.wrapper}>
                    <CallTrafficLogo />
                    <div className={style.login__poins}>Poins</div>
                    
                    {/* Login first element */}
                    <form id="form" className={style.form}>
                        <div className={style.form__wrapper}>
                            <h3 className={style.form__title}>Iniciar Sesión</h3>
                            <input className={style.form__input} placeholder="Ingresar Usuario" />
                            <input className={style.form__input} placeholder="Ingresar Contraseña" />
                            <a href="/" className={style.form__legen}>¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" form="form" className={style.form__button} >Iniciar Sesión</button>
                    </form>

                    {/* Login second element */}
                </div>
            </div>
            <div className={style.footer}>
                <p className={style.footer__text}>Copyright 2023 <span className={style.text__details}>Calltraffic</span> <i>Todos los derechos reservados</i></p>
                <p className={style.footer__text}>Versión 0.001</p>
            </div>
        </div>
    );
}


export default Login; 
