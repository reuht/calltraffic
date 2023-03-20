import style from "./style.module.css";

const CardCompanie = (props) =>{
    return(
        <div className={style.card}>
            <img className={style.card__image} src={props.url} alt="logo-company" />
        </div>
    ); 
}

export default CardCompanie; 