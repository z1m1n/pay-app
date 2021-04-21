import { FC } from 'react';
import { ErrorMessage } from 'formik';

interface FormErrorProps {
  name: string;
};

const FormError: FC<FormErrorProps> = ({ name }: FormErrorProps) => (
  <ErrorMessage 
    name={name} 
    render={(message: string) => (
      <div className="invalid-feedback">
        {message}
      </div>
    )}
  />
);

export default FormError;