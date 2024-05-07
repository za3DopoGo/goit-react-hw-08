import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your name must be less than 50 characters!"),
  email: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
  password: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label>
          <p>Name</p>
          <Field className={css.name} type="text" name="name"></Field>
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label>
          <p>Email</p>
          <Field className={css.name} type="email" name="email"></Field>
          <ErrorMessage className={css.error} component="p" name="email" />
        </label>
        <label>
          <p>Password</p>
          <Field className={css.name} type="password" name="password"></Field>
          <ErrorMessage className={css.error} component="p" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
