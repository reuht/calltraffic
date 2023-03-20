import { useState } from "react";
import ButtonMore from "../../svgcomponets/buttonMore";
import style from "./style.module.css";
import CardCompanie from "../CardCompanie";

const Companies = (props) =>{
    
    const [companies, setCompanies] = useState([]); 


    function count() {
        let n = 0; 
        return function(){
            n += 1; 
            return n; 
        }
    }


    

    const handlerbuttonAdd = () =>{
       
        let a = count()

        setCompanies([...companies, a()])
       
    }

  

    return(
        <div className={style.companies}>
            <div className={style.companies__buttons}>
                <ButtonMore className={style.buttonMore} onClick={handlerbuttonAdd} />
                {/* <ButtonMore onClick={handlerbuttonAdd} /> */}
            </div>
            <div className={style.companies__container_cards}>
                <div className={style.companies__cards}>
                    {
                        companies.map((e, index) => <CardCompanie key={index} url={"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"}/>)
                    }
                </div>
            </div>
            <div className={style.footer}>
                <p className={style.footer__text}>Copyright 2023 <span className={style.text__details}>Calltraffic</span> <i>Todos los derechos reservados</i></p>
                <p className={style.footer__text}>Versión 0.001</p>
            </div>
        </div>
    );
}

export default Companies;