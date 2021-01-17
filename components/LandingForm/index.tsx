import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from './styles';
import Input from '../Input';
import Button from '../Button';

interface FormData {
  name: string;
  email: string;
}

const LandingForm: React.FC = () => {
  const [hasInputError, setHasInputError] = useState({ name: false, email: false });

  const clearInputError = (inputName: string): void => {
    setHasInputError({ ...hasInputError, [inputName]: false });
    formRef.current?.setFieldError(inputName, '');
  };

  const insertInputError = (inputName: string): void => {
    setHasInputError((prevState) => {
      return { ...prevState, [inputName]: true };
    });
  };
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    formRef.current?.setErrors({ name: 'alo alo', email: 'erro de email' });
    const formError = formRef.current?.getErrors();

    for (const error in formError) {
      insertInputError(error);
    }
    alert(JSON.stringify(data));
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        hasError={hasInputError.name}
        onFocus={() => clearInputError('name')}
        name="name"
        label="Nome:"
      />
      <Input
        hasError={hasInputError.email}
        onFocus={() => clearInputError('email')}
        type="email"
        name="email"
        label="E-mail:"
      />
      <Button type="submit"> enviar</Button>
    </Form>
  );
};

export default LandingForm;
