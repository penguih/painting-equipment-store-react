import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function About() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hangal9', 'template_4lxgeci', form.current, 'To8UwZDUHt8iKaYbP')
            .then((result) => {
                // console.log(result.text);
                alert('Ваше сообщение отправлено!')
            }, (error) => {
                alert('Ошибка при отправке сообщения:(')
                console.log(error.text);
            });
    };

    return (
        <div className="about">

            <h1>О нас:</h1>
            <p>Компания «AirBox» поставляет оборудования и профессионального инструмента для покраски в Украине. Компания основана в 2021 году и за это время стала обрела сотни довольних клиентов и представителей всемирно известных торговых марок.
                <br /><br />
                Наши консультанты в онлайн-режиме помогут определиться с заказом, а удобная служба доставки не заставит долго ждать. В каталоге можно найти всё для профессионального покрастчного оборудования.
                <br /><br />
                Предлагаем широкий ассортимент продукции, гарантируем ее наличие, гибкую систему скидок постоянным клиентам и доставку по всей территории Украине.</p>
            <p></p>
            <h1>Контакты отдела продаж интернет-магазина:</h1>
            <p><b>Контактный номер:</b> +38(095) 277-13-19&emsp;  <br />(с 10:00 до 18:00 по будням)<br /></p>
            <a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Telegram.svg" alt="telegram" /> Мы в Telegram</a> <br />


            <h1>Напишите нам:</h1>
            <form ref={form} onSubmit={sendEmail} className="contactUs" >
                <input name="name" placeholder="Имя" />
                <input name="email" type='email' placeholder="Почтовый адрес (email)" />
                <textarea name="message" placeholder="Ваше сообщение" />
                <button>Отправить сообщение</button>
            </form>
        </div>
    );
}

export default About;