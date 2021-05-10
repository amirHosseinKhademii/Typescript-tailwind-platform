import { memo } from "react";
import { useHistory } from "react-router";
import { Button, Form, Input, Tab } from "components";

import { useLogin } from "./use-login";

export const LoginForm = memo(() => {
  const { push } = useHistory();
  const { register, handleSubmit, errors, isLoading, onSubmit } = useLogin();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-20 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Tab text="Login" justify="center">
        <div className="col-center space-y-8 ">
          <Input
            register={register}
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            error={errors["email"]?.message}
            className="mt-10"
            interactive
          />
          <Input
            register={register}
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            error={errors["password"]?.message}
            interactive
          />
          <div className="col-center space-y-4 w-full mb-6" slot="actions">
            <Button
              className="w-full h-12  bg-pink-700 text-white"
              role="confirm"
              type="submit"
              loading={isLoading}
            >
              login
            </Button>
            <Button
              icon
              role="cancel"
              className="w-full h-12 text-secondary"
              type="button"
              onClick={() => push("/authentication/password")}
            >
              Forgot password
            </Button>
          </div>
        </div>
      </Tab>
    </Form>
  );
});
