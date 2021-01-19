/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Yup from 'yup';
interface ILandingPageFormValidation {
  Name: string;
  Email: string;
}
const landingPageValidationSchema = Yup.object().shape({
  Name: Yup.string()
    .required('Nós adorariamos te conhecer melhor')
    .max(100, 'O nome deve conter no máximo 100 caracteres'),
  Email: Yup.string()
    .email('Verifique se o E-mail está correto')
    .max(50, 'O Email deve conter no máximo 50 cararteres')
    .required('Precisamos desse dado para entrar em contato'),
  Phone: Yup.number()
    .required('Fique em contato direto conosco ')

    .min(100000000000, 'O telefeone deve conter no minimo 10 dígitos numéricos')
    .max(9999999999999, 'O telefone deve conter no máximo 11 dígitos numéricos')
    .test(
      'is-required',
      'Fique em contato direto conosco preenchendo o telefone',
      (value) => value !== 0
    ),
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LandinPageFormValidation = async (data: ILandingPageFormValidation) =>
  await landingPageValidationSchema.validate(data, { abortEarly: false });
