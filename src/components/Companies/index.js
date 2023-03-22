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
                        companies.map((e, index) => <CardCompanie key={index} url={"https://pbs.twimg.com/profile_images/830660512304226304/jzA-Vg27_400x400.jpg"}/>)
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