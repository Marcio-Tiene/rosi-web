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
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LandinPageFormValidation = async (data: ILandingPageFormValidation) =>
  await landingPageValidationSchema.validate(data, { abortEarly: false });
