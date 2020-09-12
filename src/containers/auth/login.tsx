import React, { useContext, useCallback } from "react";
import { Button, Col, Card, Form, Row } from "react-bootstrap";
import CardComponent from "../../components/card";
import FormGroupComponent from "../../components/form/formGroupComponent";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { AuthInterface } from "../../interfaces/auth";
import useAuth from "../../hooks/auth/useAuth";

interface Props {}

const LoginContainer: React.FC<Props> = ({ ...props }) => {
  const { register, handleSubmit, errors } = useForm();
  const {doLogin, response} = useAuth();


  const onSubmit = useCallback( async (data: any) => {
    const creadential:AuthInterface = {username:data.username, password:data.password}
    await doLogin(creadential);
    
  },[]);


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
          {/* <button onClick={setNew}>aaaa</button> */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroupComponent
              controlId="username"
              error={response.status === 422 ? response.data.username : errors.username }
              label="Username"
              name="username"
              placeholder="Enter Username"
              type="text"
              validation={register({ required: "This is required." })}
            >

              {
                response.status === 422 ?  
                  <p className={response.data.username && "invalid-feedback"}>
                    {response.data.username[0]}
                  </p> 
                : '' 
              }

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

            <FormGroupComponent
              controlId="password"
              error={errors.password}
              label="password"
              name="password"
              placeholder="Enter password"
              type="password"
              validation={register({ required: "This is required." })}
            >
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </CardComponent>
      </Col>
    </Row>
  );
};

export default LoginContainer;
