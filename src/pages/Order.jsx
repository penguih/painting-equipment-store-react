import React from 'react';
import './Order.scss';
import { useForm } from "react-hook-form";
import { useCart } from '../hooks/useCart';

function Order() {
    const { addCart, cartCost } = useCart();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        let allData = [data].concat(addCart)
        allData[0].cartCost = cartCost;
        allData[0].deliveryCost = (cartCost / 100 * 2 + 20);
        alert(JSON.stringify(allData))
        console.log(allData)
        reset();
    }

    return (
        <>
            <h1>Оформление заказа</h1>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                <div className='inputForm'>

                    <h2>Имя:</h2>
                    <input placeholder="*Иван" required {...register('firstName')} />

                    <h2>Фамилия:</h2>
                    <input placeholder="*Иванов" required {...register('lastName')} />

                    <h2>Телефон:</h2>
                    <input placeholder="+38(095)123-45-67" required
                        {...register('phoneNumber', { minLength: { value: 10, message: 'Минимум 10 цифр', valueAsNumber: true } })} />
                    <div style={{ color: 'red' }}><p>{errors?.phoneNumber?.message}</p></div><p></p>

                    <h2>Почта:</h2>
                    <input type="email" placeholder="*e-mail" required {...register('email')} />

                    <h2>Город:</h2>
                    <input placeholder="*Киев" required {...register('city')} />

                    <h2>Отделение новой почты:</h2>
                    <input type='number' placeholder="*12" required {...register('novaposhta')} />

                    <h2>Комментарий к заказу:</h2>
                    <textarea placeholder="Ваши пожелания" {...register('comment')} />


                </div>
                <div className='rightSide'>
                    <div className='cardWrap'>
                        {addCart.length > 0 ?
                            <>
                                {addCart.map((obj) => ( //вивід даних товарів доданих в корзину
                                    <div key={obj.id} className="itemFlex">
                                        <div className='imgWrap'>
                                            <img height={100} width={100} src={obj.imgUrl} alt={obj.id} />
                                        </div>
                                        <div>
                                            <p>{obj.title}</p>
                                            <h6>{obj.cost} грн.</h6>
                                        </div>
                                    </div >
                                ))}
                            </>
                            : <>
                                <img className='emptyCart' src="img\emptyCart.png" alt="emptyCart" />
                                <h1 > Ваша корзина пуста...</h1>
                            </>}
                    </div>

                    <p>Стоимость товаров: {cartCost} грн.</p>
                    <p>Цена доставки: {cartCost / 100 * 2 + 20} грн.</p>
                    <p><span>Итого: {cartCost + (cartCost / 100 * 2 + 20)} грн.</span></p>

                    <button >Подтвердить заказ</button>
                </div>
            </form>
        </>
    );
}

export default Order;