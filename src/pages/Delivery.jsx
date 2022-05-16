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
        <div className="delivery">
            <h1>Доставка и оплата</h1>
            <p>Доставка осуществляется во все регионы Украины службой доставки <b>"Новая Почта"</b>.</p>
            <h2>Адресная доставка</h2>
            <p>Также возможна адресная доставка с помощью курьерской службы "Новая почта". Для этого необходимо в комментарии к заказу указать адрес доставки.</p>
            <h2>Способ доставки</h2>
            <p><b>Наложенным платежом</b> при заказе с доставкой "Новая Почта" (комиссия за услуги по переводу средств Продавцу оплачивается Покупателем при получении заказа в отделении "Новой Почты").</p>
            <h2>Сроки доставки</h2>
            <p>Обработка и отправка заказов: по будням с 10:00 до 18:00 суббота и воскресенье - выходные.<br></br>
                Скорость доставки завитит от "Новой Почты", уточняйте в отделениях или в мобильном приложении. </p>

            <h1>Контакты отдела продаж интернет-магазина:</h1>
            <p>+38(095) 277-13-19 &emsp;
                <a href="https://t.me/Jabka" target="_blank" rel="noreferrer">Telegram</a> &emsp;(с 10:00 до 18:00 по будням)<br></br><br></br>
                Согласно действующему законодательству Украины, подлежит возврату и обмену в течение 14 дней.<br></br><br></br>
                ПОСТАНОВА КАБІНЕТУ МІНІСТРІВ УКРАЇНИ від 19 березня 1994 р. N 172 "Про реалізацію окремих положень Закону України
                "Про захист прав споживачів".</p>

            <h1>Напишите нам:</h1>
            <form ref={form} onSubmit={sendEmail} className="contactUs" >
                <input name="name" placeholder="Имя" />
                <input name="email" type='email' placeholder="Почтовый адрес" />
                <textarea name="message" placeholder="Ваше сообщение" />
                <button>Отправить сообщение</button>
            </form>
        </div>
    );
}

export default Delivery;