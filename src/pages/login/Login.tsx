import "./login.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/Centro de formação com sombra.png";

const Login: React.FC = () => {
  const handleClickLogin = (values: any) => console.log(values);

  const validationLogin = yup.object().shape({
    email:yup
    .string()
    .email("Não é um e-mail válido")
    .required("Este campo é obrigatório"),

    password:yup
    .string()
    .min(8, "A senha deve ter 8 caracteres")
    .required("Este campo é obrigatório"),

  })
  return (
    <>
      <body className="login">
        <div className="img-login">
          <img
            src={logo}
            alt="logo Centro de formação Carlos Kopcak"
            title="Centro de Fonmação Carlos Kopcak"
          />
        </div>
      <Formik
          initialValues={{}} 
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
            >
        <Form action="submit" className="container-form">
          <div className="container-inputs">
            <label htmlFor="email">E-mail</label>
            <Field name="email" placeholder="Digite seu e-mail" />

            <ErrorMessage
                        component='span'
                        name='email'
                        className='form-error'
                        />

            <label htmlFor="senha">Senha</label>
            <Field name="password" placeholder="Digite sua Senha" />

            <ErrorMessage
                        component='span'
                        name='password'
                        className='form-error'
                        />
          </div>
          <button className="form-login-btn" type="submit">
            Entrar
          </button>
        </Form>
      </Formik>
        <p>
          Ainda não tem conta?
          <Link to="/criar-conta">
            <strong>Cadastre-se aqui</strong>
          </Link>
        </p>
      </body>
    </>
  );
};

export default Login;
