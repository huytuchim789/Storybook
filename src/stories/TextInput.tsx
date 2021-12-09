import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'antd';
import TextInput, { TextInputProps } from '../component/common-component/TextInput';

const componentTextInput = ({...props}: TextInputProps) => {
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
           <Button htmlType="submit">submit</Button>
         </Form>
       )}
     </Formik>
  );
}

export default componentTextInput;
