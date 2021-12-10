import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'antd';
import TextInput from './component/TextInput';

function App() {
  return (
    <div className="App">
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
           <TextInput label="TextArea" containerClassName="aaaaa" required  name="textarea" typeInput='textarea' placeholder="something" showCount rows={8} />
           <Button htmlType="submit">submit</Button>
         </Form>
       )}
     </Formik>
    </div>
  );
}

export default App;
