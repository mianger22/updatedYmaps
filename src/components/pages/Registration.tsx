import { Formik } from 'formik';
import Layout from '../Layout';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type ErrorsType = {
  login?: string;
  email?: string;
  password?: string;
  repeat_password?: string;
}

// type DefaultFormValuesType = {
//   login: string, email: string, password: string, repeat_password: string
// }


const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (localStorage.getItem('authToken') && location === "/registration") {
      // редиректим на главную
      navigate('/');
    }
  })

  return (
    <Layout>
      <Formik
        initialValues={{ login: '', password: '', repeat_password: '', email: '' }}
        validate={values=> {
          const errors: ErrorsType = {};

          if (!values.email) {
            errors.email = 'Обязательно для заполнения';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный email';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          localStorage.setItem("authToken", "authToken");

          // редиректим на главную
          navigate('/');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  placeholder='Псевдоним'
                  className="form-control"
                />
                {errors.login && touched.login && errors.login}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Пароль'
                  className="form-control"
                />
                {errors.password && touched.password && errors.password}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="repeat_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeat_password}
                  placeholder='Повтор пароля'
                  className="form-control"
                />
                {errors.repeat_password && touched.repeat_password && errors.repeat_password}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Адрес электронной почты'
                  className="form-control"
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div className='mt-4'>
                <button type="submit" disabled={isSubmitting} className="btn btn-dark">
                  Зарегистрироваться
                </button>
              </div>
          </form>
        )}
      </Formik>

      <div className='mt-3'>
        <Link to="/authorization">← Назад</Link>
      </div>
    </Layout>
  )
};

export default Registration;