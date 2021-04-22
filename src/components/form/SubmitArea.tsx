import { useFormikContext } from "formik";
import { useEffect, Dispatch, SetStateAction } from "react";

interface SubmitAreaProps {
  setSubmitForm: Dispatch<SetStateAction<() => Promise<void>>>;
};

function SubmitArea<T extends any>({ setSubmitForm }: SubmitAreaProps): null {
  const { submitForm } = useFormikContext<T>();

  useEffect(() => {
    if (!submitForm) return;

    setSubmitForm(() => submitForm);
  }, [submitForm, setSubmitForm]);

  return null;
};

export default SubmitArea;