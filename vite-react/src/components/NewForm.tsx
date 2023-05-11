import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

const schemaValidate = yup.object({
name: yup.string().required("Name is empty"),
email: yup.string().email("Ivalid email").required("Email is empty"),
});

const initialValues = {
name: "",
email: "",
};

const onSubmit = (data: any) => {

console.log(data); //отправка данных

};

const NewForm = () => {

return (

<Formik initialValues={initialValues} validationSchema={schemaValidate} onSubmit={onSubmit}>
<Form>
<label>
    Name:
    <Field type="text" name="name" />
    <ErrorMessage name="name" />
 </label>
<br />
<label>
    Email:
    <Field type="email" name="email" />
    <ErrorMessage name="email" />
</label>
<button type="submit">Submit</button>
</Form>
</Formik>
);
};

export default NewForm;