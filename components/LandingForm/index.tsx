import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from './styles';
import Input from '../Input';
import Button from '../Button';
import { IPostLeadLover } from '../../iterfaces/leadLovers';
import { LandinPageFormValidation } from './services/FormValidation';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import LoadingSpiner from '../LoadingSpiner';
interface FormData {
  Name: string;
  Email: string;
}

const LandingForm: React.FC<IPostLeadLover> = ({
  MachineCode,
  EmailSequenceCode,
  SequenceLevelCode,
  Score,
  Source,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { setIsPageThanksOpen } = ThanksPageModalHook();
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

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    setIsLoading(true);
    const initialLeadData = {
      Name: '',
      Email: '',
      MachineCode,
      EmailSequenceCode,
      SequenceLevelCode,
      Score,
      Source,
    };

    try {
      await LandinPageFormValidation(data);
      const LeadTopost = { ...initialLeadData, ...data };
      alert(JSON.stringify(LeadTopost));
      reset();
      setIsPageThanksOpen(true);
      setIsLoading(false);
    } catch (err) {
      let formError = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          formError = {
            ...formError,
            [`${error.path}`]: error.message,
          };
          formRef.current && formRef.current?.setErrors(formError);

          for (const error in formError) {
            insertInputError(error);
          }
        });
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <Input
          hasError={hasInputError.Name}
          onFocus={() => clearInputError('Name')}
          name="Name"
          label="Nome:"
        />
        <Input
          hasError={hasInputError.Email}
          onFocus={() => clearInputError('Email')}
          name="Email"
          label="E-mail:"
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <LoadingSpiner height="1rem" color="white" containerWidth="5ch" />
          ) : (
            'Enviar'
          )}{' '}
        </Button>
      </Form>
    </>
  );
};

export default LandingForm;
