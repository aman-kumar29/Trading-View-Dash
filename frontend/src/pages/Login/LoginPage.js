import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import classes from './loginPage.module.css';
import Title from '../../components/Title/Title.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import { EMAIL } from '../../constants/patterns.js';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (user) {
      returnUrl ? navigate(returnUrl) : navigate('/');
    }
  }, [user, returnUrl, navigate]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.details}>
        <div className={classes.leftColumn}>
          <img src="./login_side.png" alt="Background Image" className={classes.image} />
        </div>
        <div className={classes.rightColumn}>
          <Title title="Sign in with Email" />
          <form onSubmit={handleSubmit(submit)} noValidate>
            <Input
              type="email"
              label="Email"
              {...register('email', {
                required: true,
                pattern: EMAIL,
              })}
              error={errors.email}
              className={classes.input}
            />

            <Input
              type="password"
              label="Password"
              {...register('password', {
                required: true,
              })}
              error={errors.password}
              showPasswordToggle // Add this prop for visibility toggle
              className={classes.input}
            />

            <div className={classes.register}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <Button type="submit" text="Login" className={classes.button} />
          </form>

          <div className={classes.register}>
            New user? &nbsp;
            <Link to={`/register${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
