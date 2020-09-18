import React, { useCallback, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash";

import CardComponent from "../../components/card";
import FormGroupComponent from "../../components/form/formGroupComponent";
import { RegisterInterface } from "../../interfaces/auth";
import useAuth from "../../hooks/auth/useAuth";
import { ResponseInterface, initialResponse } from "../../interfaces/response/errorInterface";

export interface Props extends RouteComponentProps<any> {}

const LoginPage: React.FC<Props> = ({ ...props }) => {
  const [response, setResponse] = useState<ResponseInterface>(initialResponse);
  const { doRegister } = useAuth();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    criteriaMode: "firstError",
  });

  // register
  const password = useRef({});
  password.current = watch("password", "");

  // action register
  const onSubmit = useCallback(
    async ({ username, password, email, firstName }: any) => {
      const creadential: RegisterInterface = {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
      };
      await doRegister(creadential);
    },
    [doRegister]
  );

  // if (response.message === 'OK') {
  //   props.history.push("/login");
  // }

  return (
    <Row>
      <Col
        md={{ span: 4, offset: 4 }}
        lg={{ span: 4, offset: 4 }}
        sm={{ span: 12 }}
        xs={{ span: 12 }}
        className="mt-5"
      >
        <CardComponent style={{ width: "20rem" }} title={"Add"}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroupComponent
              controlId="email"
              error={response.status === 422 ? response.data.email : errors.email}
              label="email"
              name="email"
              placeholder="Enter email"
              type="text"
              validation={register({
                required: "This is required.",
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Entered value does not match email format",
                },
              })}
            >
              {response.status === 422 ? (
                <p className={response.data.email && "invalid-feedback"}>
                  {_.has(response.data, "email") ? response.data.email[0] : ""}
                </p>
              ) : (
                ""
              )}

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className={errors.email && "invalid-feedback"}>
                    {message}
                  </p>
                )}
              />
            </FormGroupComponent>

            {/* Name */}
            <FormGroupComponent
              controlId="firstName"
              error={response.status === 422 ? response.data.firstName : errors.firstName
              }
              label="First Name"
              name="firstName"
              placeholder="Enter firstName"
              type="text"
              validation={register({ required: "This is required." })}
            >
              {response.status === 422 ? (
                <p className={response.data.firstName && "invalid-feedback"}>
                  {_.has(response.data, "firstName")
                    ? response.data.firstName[0]
                    : ""}
                </p>
              ) : (
                ""
              )}

              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <p className={errors.firstName && "invalid-feedback"}>
                    {message}
                  </p>
                )}
              />
            </FormGroupComponent>

            {/* Usernaem */}
            <FormGroupComponent
              controlId="username"
              error={response.status === 422 ? response.data.username : errors.username}
              label="Username"
              name="username"
              placeholder="Enter Username"
              type="text"
              validation={register({ required: "This is required." })}
            >
              {response.status === 422 ? (
                <p className={response.data.username && "invalid-feedback"}>
                  {_.has(response.data, "username")
                    ? response.data.username[0]
                    : ""}
                </p>
              ) : (
                ""
              )}

              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => (
                  <p className={errors.username && "invalid-feedback"}>
                    {message}
                  </p>
                )}
              />
            </FormGroupComponent>

            {/* Password */}
            <FormGroupComponent
              controlId="password"
              error={response.status === 422 ? response.data.password : errors.password}
              label="password"
              name="password"
              placeholder="Enter password"
              type="password"
              validation={register({ required: "This is required." })}
            >
              {response.status === 422 ? (
                <p className={response.data.password && "invalid-feedback"}>
                  {_.has(response.data, "password")
                    ? response.data.password[0]
                    : ""}
                </p>
              ) : (
                ""
              )}

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className={errors.password && "invalid-feedback"}>
                    {message}
                  </p>
                )}
              />
            </FormGroupComponent>

            {/* Password confirm */}
            <FormGroupComponent
              controlId="passwordConfirm"
              error={errors.password_confirm}
              label="passwordConfirm"
              name="passwordConfirm"
              placeholder="Enter passwordConfirm"
              type="password"
              validation={register({
                validate: (value) => {
                  return (
                    value === password.current || "The passwords do not match"
                  ); // value is from password2 and watch will return value from password1
                },
              })}
            >
              <ErrorMessage
                errors={errors}
                name="passwordConfirm"
                render={({ message }) => (
                  <p className={errors.passwordConfirm && "invalid-feedback"}>
                    {message}
                  </p>
                )}
              />
            </FormGroupComponent>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </CardComponent>
      </Col>
    </Row>
  );
};

export default LoginPage;
