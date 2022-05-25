import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Delivery() {

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

            <h1>Контакты отдела продаж интернет-магазина:</h1>
            <p>Контактный номер: +38(095) 277-13-19  &emsp;(с 10:00 до 18:00 по будням)<br /><br />
                <a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Telegram.svg" alt="telegram" /> Мы в Telegram</a> <br /><br />
                Согласно действующему законодательству Украины, подлежит возврату и обмену в течение 14 дней.<br /><br />
                ПОСТАНОВА КАБІНЕТУ МІНІСТРІВ УКРАЇНИ від 19 березня 1994 р. N 172 "Про реалізацію окремих положень Закону України
                "Про захист прав споживачів".</p>

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

export default Delivery;