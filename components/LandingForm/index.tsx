import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from './styles';
import Input from '../Input';
import Button from '../Button';
import { IPostLeadLover } from '../../iterfaces/leadLovers';

interface FormData {
  name: string;
  email: string;
}

const LandingForm: React.FC<IPostLeadLover> = ({
  MachineCode,
  EmailSequenceCode,
  SequenceLevelCode,
}) => {
  const [hasInputError, setHasInputError] = useState({ Name: false, Email: false });

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
    const initialLeadData = {
      Name: '',
      Email: '',
      MachineCode,
      EmailSequenceCode,
      SequenceLevelCode,
    };
    formRef.current &&
      formRef.current?.setErrors({
        Name: 'aqui vai aparecer o erro do nome',
        Email: 'aqui vai aparecer o erro do email',
      });
    const formError = formRef.current && formRef.current?.getErrors();
    console.log(formRef.current);

    for (const error in formError) {
      insertInputError(error);
    }
    const LeadTopost = { ...initialLeadData, ...data };
    alert(JSON.stringify(LeadTopost));
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        hasError={hasInputError.Name}
        onFocus={() => clearInputError('Name')}
        name="Name"
        label="Nome:"
      />
      <Input
        hasError={hasInputError.Email}
        onFocus={() => clearInputError('Email')}
        type="Email"
        name="Email"
        label="E-mail:"
      />
      <Button type="submit"> Enviar </Button>
    </Form>
  );
};

export default LandingForm;
