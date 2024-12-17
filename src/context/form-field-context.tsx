import { ReactNode, createContext, useContext } from 'react';

interface FormFieldProps {
  children: ReactNode;
  field?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

interface FormFieldContextData {
  field?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const FormFieldContext = createContext({} as FormFieldContextData);

function FormFieldProvider({
  children,
  field,
  disabled,
  readOnly,
}: FormFieldProps) {
  return (
    <FormFieldContext.Provider value={{ field, disabled, readOnly }}>
      {children}
    </FormFieldContext.Provider>
  );
}

const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);

  return context;
};

export { FormFieldProvider, useFormFieldContext };
