import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form, FormTitle } from './styles';
import Input from '../Input';
import Button from '../Button';
import { IPostLeadLover } from '../../iterfaces/leadLovers';
import { LandinPageFormValidation } from './services/FormValidation';
import ThanksPageModalHook from '../../hooks/ThanksPageModalHook';
import ServerErrorHook from '../../hooks/ServerErrorHook';
import LoadingSpiner from '../LoadingSpiner';
import Phonehandler from './services/PhoneHandler';
import leadLoversapi from '../../services/leadeLoversApi';
interface FormData {
  Name: string;
  Email: string;
  Phone: string;
}

interface ILandingFormProps {
  buttonText: string;
}

const LandingForm: React.FC<IPostLeadLover & ILandingFormProps> = ({
  children,
  MachineCode,
  EmailSequenceCode,
  SequenceLevelCode,

  Score,
  Source,
  buttonText,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { setIsServerErrorOpen } = ServerErrorHook();
  const { setIsPageThanksOpen } = ThanksPageModalHook();
  const hasNoInputerros = { Name: false, Email: false, Phone: false };
  const [hasInputError, setHasInputError] = useState(hasNoInputerros);

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
      Phone: '',
      MachineCode,
      EmailSequenceCode,
      SequenceLevelCode,
      Score,
      Source,
    };

    const formatedPhone = Phonehandler(data.Phone);

    const formatedData = { ...data, Phone: formatedPhone };
    let formError = {};
    try {
      await LandinPageFormValidation(formatedData);
      const LeadTopost = { ...initialLeadData, ...formatedData };
      await leadLoversapi.post(
        `/Lead?token=${process.env.NEXT_PUBLIC_LEAD_LOVERS_TOKEN}`,
        LeadTopost,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${process.env.NEXT_PUBLIC_LEAD_LOVERS_ACCESS_TOKEN} `,
          },
        }
      );

      reset();
      setIsPageThanksOpen(true);
      setIsLoading(false);
      formRef.current?.setErrors({ Name: '', Email: '', Phone: '' });
      setHasInputError(hasNoInputerros);
    } catch (err) {
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
          setIsLoading(false);
        });
      } else {
        setIsServerErrorOpen(true);
        console.error(err.message);
        setTimeout(() => {
          setIsServerErrorOpen(false);
          setIsLoading(false);
        }, 5000);
      }
    }
  };

  return (
    <>
      <Form id="quero-participar" autoComplete="on" ref={formRef} onSubmit={handleSubmit}>
        <FormTitle>
          {children}
          <br />
        </FormTitle>
        <Input
          hasError={hasInputError.Name}
          onFocus={() => clearInputError('Name')}
          name="Name"
          label="Nome completo*"
        />
        <Input
          hasError={hasInputError.Email}
          placeholder="exemplo@exemplo.com"
          onFocus={() => clearInputError('Email')}
          name="Email"
          label="E-mail*"
        />
        <Input
          hasError={hasInputError.Phone}
          onFocus={() => clearInputError('Phone')}
          placeholder="Só números"
          name="Phone"
          label="Telefone*"
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <LoadingSpiner height="1rem" color="white" containerWidth="5ch" />
          ) : (
            buttonText
          )}{' '}
        </Button>
      </Form>
    </>
  );
};

export default LandingForm;
