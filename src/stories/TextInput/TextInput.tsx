import React from 'react';
import { Form, Formik } from 'formik';
import 'antd/dist/antd.css';
import './text-input.scss';
import TextInput, { TextInputProps } from '../../component/TextInput';

const ComponentTextInput = ({...props}: TextInputProps) => {
  return (
      <Formik
       initialValues={{ input: ''}}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {({values}) => (
         <Form>
           <TextInput {...props}/>
         </Form>
       )}
     </Formik>
  );
}

export default ComponentTextInput;
