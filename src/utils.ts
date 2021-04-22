import { FormikErrors, FormikTouched } from "formik";

export const uniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const formatCardNumber = (value: string) => {
  return value.replace(/[^\d*]/g, '').replace(/(.{4})/g, '$1 ').trim();
};

export const maskCardNumber = (number: string, from: number = 4, to: number = 14): string => {
  return formatCardNumber(number.split('').map((char: string, i: number) => i < from || i >= to ? '*' : char).join(''));
};

export function fieldInvalidClass<T>(touched: FormikTouched<T> | undefined, errors: FormikErrors<T> | undefined, name: keyof T): string {
  return touched && errors && touched[name] && errors[name] ? 'is-invalid' : '';
};
