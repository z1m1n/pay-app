import { FormikErrors, FormikTouched } from "formik";

export const uniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export function fieldInvalidClass<T>(touched: FormikTouched<T> | undefined, errors: FormikErrors<T> | undefined, name: keyof T): string {
  return touched && errors && touched[name] && errors[name] ? 'is-invalid' : '';
};
