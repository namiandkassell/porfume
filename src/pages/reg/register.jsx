import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import eye from '../../images/eye.png';

const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordType, setPasswordType] = useState('password');
  const [repassType, setRepassType] = useState('password');

  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const toggleRepass = () => {
    setRepassType(repassType === 'password' ? 'text' : 'password');
  };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container-1">
      <div className="reg-card">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            <input type="text" placeholder="Имя" {...register("name", { required: true })} />
            {errors.name && <span>Это поле обязательно</span>}
          </label>
          <label htmlFor="email">
            <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span>Введите правильный email адрес</span>}
          </label>
          <label htmlFor="password">
            <div className="password-wrapper">
              <input type={passwordType} className="password" placeholder="Введите пароль" {...register("password", { required: true, minLength: 6 })} />
              <img src={eye} alt="" onClick={togglePassword} className="show show-pass" />
            </div>
            {errors.password && <span>Пароль должен быть длиннее 6 символов</span>}
          </label>
          <label htmlFor="confirmPassword">
            <div className="password-wrapper">
              <input type={repassType} className="password-repass" placeholder="Подтвердите пароль" {...register("confirmPassword", { required: true, validate: value => value === watch("password") })} />
              <img src={eye} alt="" onClick={toggleRepass} className="show show-repass" />
            </div>
            {errors.confirmPassword && <span>Пароли не совпадают</span>}
          </label>
          <label htmlFor="notif">
            <input type="checkbox" id="notif-check" {...register("notif")} />
            <p>Да, я согласен(а) получать информацию о новых поступлениях, акциях и распродажах</p>
          </label>
          <label htmlFor="remember">
            <input type="checkbox" id="remember-check" {...register("remember")} />
            <p>Запомнить меня</p>
          </label>
          <label>
            <button type="submit">Зарегистрироваться</button>
          </label>
        </form>
      </div>
    </div>
  )

};


export default RegisterPage;
