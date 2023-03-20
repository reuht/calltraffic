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

    return (
        <div className={style.form}>
            <div className={style.form__wrapper}>
                <div form__title>
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
                            />
                            <input
                                className={style.form__input}
                                placeholder="Asesor"
                                name="asesor"
                                value={data.asesor}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Nombre"
                                name="nombre"
                                value={data.nombre}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Cédula"
                                name="cedula"
                                value={data.cedula}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Dirección"
                                name="direccion"
                                value={data.direccion}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Barrio"
                                name="barrio"
                                value={data.barrio}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Télefono"
                                name="telefono"
                                value={data.telefono}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Contrato"
                                name="contrato"
                                value={data.contrato}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Email"
                                name="email"
                                value={data.email}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Dirección de residencia"
                                name="residencia"
                                value={data.referecia}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Dirección de entrega"
                                name="entrega"
                                value={data.entrega}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Estado de venta"
                                name="status"
                                value={data.status}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Tipo de cita"
                                name="tipocita"
                                value={data.tipocita}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Fecha de cita"
                                name="fechacita"
                                value={data.fechacita}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Hora"
                                name="hora"
                                value={data.hora}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Unidades"
                                name="unidades"
                                value={data.unidades}
                            />
                        </div>

                        <div className={style.form__row}>
                            <input
                                className={style.form__input}
                                placeholder="Artículo"
                                name="articulo"
                                value={data.articulo}
                            />
                            <input
                                className={style.form__input}
                                placeholder="Referencia"
                                name="referecia"
                                value={data.referecia}
                            />
                        </div>
                    </div>

                    <div className={style.form__row_textarea}>
                        <textarea
                            className={style.form__textarea}
                            placeholder="Observaciones"
                            name="observaciones"
                            value={data.observaciones}
                        ></textarea>

                        <input
                            className={style.form__textarea_referent}
                            placeholder="Convenio"
                            name="convenio"
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
