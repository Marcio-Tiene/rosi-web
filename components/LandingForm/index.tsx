import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from './styles';
import Input from '../Input';

interface FormData {
  name: string;
  email: string;
}

const MyForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    formRef.current && formRef.current.setErrors({ name: 'alo alo', email: 'alo alo' });
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="Nome" />
      <Input type="email" name="email" label="E-mail" />
      <button type="submit"> enviar</button>
    </Form>
  );
};

export default MyForm;
