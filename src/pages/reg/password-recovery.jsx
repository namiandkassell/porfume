import React from "react";
import { useForm } from "react-hook-form";
import eye from "../../images/eye.png";

const PasswordRecovery = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [passwordType, setPasswordType] = React.useState("password");
  const [repassType, setRepassType] = React.useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleRepass = () => {
    setRepassType(repassType === "password" ? "text" : "password");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reg-card">
          <h2>Создайте новый пароль</h2>
          <label htmlFor="password">
            <div className="password-wrapper">
              <input
                type={passwordType}
                id="password"
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
          <label htmlFor="confirmPassword">
            <div className="password-wrapper">
              <input
                type={repassType}
                id="confirmPassword"
                className="password-repass"
                placeholder="Подтвердите пароль"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === watch("password"),
                })}
              />
              <img
                src={eye}
                alt=""
                onClick={toggleRepass}
                className="show show-repass"
              />
            </div>
            {errors.confirmPassword && <span>Пароли не совпадают</span>}
          </label>
          <label>
            <button type="submit">Войти</button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecovery;
