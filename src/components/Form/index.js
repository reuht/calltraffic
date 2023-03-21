import { useState } from "react";
import style from "./style.module.css";

const Form = () => {
    const [data, setData] = useState({

        fecha: "",
        asesor: "",
        nombre: "",
        cedula: "",
        direccion: "",
        barrio: "",
        telefono: "",
        contrato: "",
        email: "",
        residencia: "",
        entrega: "",
        status: "",
        tipocita: "",
        fechacita: "",
        hora: "",
        unidades: "",
        articulo: "",
        referecia: "",
        observaciones: "",
        convenio: ""

    });

    const handlerDataForm = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        });

    };

    console.log(data); 

    return (
        <div className={style.form}>
            <div className={style.form__wrapper}>
                <div className={style.form__title_wrapper}>
                    <h3 className={style.form__title}>Registros</h3>
                    <p className={style.form__title_legen}>Hope you have a good day</p>
                </div>
                <form id="data" className={style.form__col}>
                    <div className={style.form__wrapper}>
                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Fecha"
                                name="fecha"
                                value={data.fecha}
                                onChange={handlerDataForm}
                                type="date"
                            />
                            <input
                                className={style.form__input}
                                placeholder="Asesor"
                                name="asesor"
                                onChange={handlerDataForm}
                                value={data.asesor}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Nombre"
                                name="nombre"
                                onChange={handlerDataForm}
                                value={data.nombre}
                               
                            />
                            <input
                                className={style.form__input}
                                placeholder="Cédula"
                                name="cedula"
                                onChange={handlerDataForm}
                                value={data.cedula}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Dirección"
                                name="direccion"
                                onChange={handlerDataForm}
                                value={data.direccion}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Barrio"
                                name="barrio"
                                onChange={handlerDataForm}
                                value={data.barrio}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Télefono"
                                name="telefono"
                                onChange={handlerDataForm}
                                value={data.telefono}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Contrato"
                                name="contrato"
                                onChange={handlerDataForm}
                                value={data.contrato}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Email"
                                name="email"
                                onChange={handlerDataForm}
                                value={data.email}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Dirección de residencia"
                                name="residencia"
                                onChange={handlerDataForm}
                                value={data.referecia}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Dirección de entrega"
                                name="entrega"
                                onChange={handlerDataForm}
                                value={data.entrega}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Estado de venta"
                                name="status"
                                onChange={handlerDataForm}
                                value={data.status}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Tipo de cita"
                                name="tipocita"
                                onChange={handlerDataForm}
                                value={data.tipocita}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Fecha de cita"
                                name="fechacita"
                                onChange={handlerDataForm}
                                value={data.fechacita}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Hora"
                                name="hora"
                                onChange={handlerDataForm}
                                value={data.hora}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Unidades"
                                name="unidades"
                                onChange={handlerDataForm}
                                value={data.unidades}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Artículo"
                                name="articulo"
                                onChange={handlerDataForm}
                                value={data.articulo}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Referencia"
                                name="referecia"
                                onChange={handlerDataForm}
                                value={data.referecia}
                            />
                        </div>
                    </div>

                    <div className={style.form__row_textarea}>
                        <textarea
                            className={style.form__textarea}
                            placeholder="Observaciones"
                            name="observaciones"
                            onChange={handlerDataForm}
                            value={data.observaciones}
                        ></textarea>

                        <input
                            className={style.form__textarea_referent}
                            placeholder="Convenio"
                            name="convenio"
                            onChange={handlerDataForm}
                            value={data.convenio}
                        />
                    </div>
                </form>
            </div>
            <div className={style.form__col_button}>
                <button className={style.form__button} type="sudmit" form="data">
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default Form;
