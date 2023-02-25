import React, { useState } from "react";
import { useForm } from "react-hook-form";
import eye from "../../images/eye.png";

const Authenticate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordType, setPasswordType] = useState("password");
  const [repassType, setRepassType] = useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleRepass = () => {
    setRepassType(repassType === "password" ? "text" : "password");
  };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container-1">
      <div className="reg-card">
        <h2>Вход в личный кабинет</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Введите правильный email адрес</span>}
          </label>
          <label htmlFor="password">
            <div className="password-wrapper">
              <input
                type={passwordType}
                className="password"
                placeholder="Введите пароль"
                {...register("password", { required: true, minLength: 6 })}
              />
              <img
                src={eye}
                alt=""
                onClick={togglePassword}
                className="show show-pass"
              />
            </div>
            {errors.password && (
              <span>Пароль должен быть длиннее 6 символов</span>
            )}
          </label>
          <label>
            <button type="submit">Войти</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Authenticate;
