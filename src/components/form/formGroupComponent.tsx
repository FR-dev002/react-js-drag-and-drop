import React from "react";
import { Form } from "react-bootstrap";


export declare type registerFunction = () => void;

interface Props {
  controlId: string;
  error: string,
  label: string;
  placeholder: string;
  name: string;
  control?: any;
  type: string;
  validation?: any;
}

const FormGroupComponent: React.FC<Props> = React.memo(({
  controlId,
  children,
  error,
  label,
  name,
  placeholder,
  type,
  validation
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={error && 'is-invalid' }
        type={type}
        name={name}
        placeholder={placeholder}
        ref={validation}
      />
    {children}

    </Form.Group>
  );
}, (prevProps, CurrProps) => {
  const prev = prevProps.error;
    const next = CurrProps.error;
    if (prev !== next) {
        return false;
    }
    return true;
});

export default FormGroupComponent;
