import { memo } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Button, Form, Input, Tab } from "components";

export const LoginForm = memo(() => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-20 shadow-xl "
      onSubmit={handleSubmit((state) => console.log(state))}
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
            placeholder="Enter your Password"
            error={errors["password"]?.message}
            interactive
          />
          <div className="col-center space-y-4 w-full mb-6" slot="actions">
            <Button
              className="w-full h-10  bg-pink-700 text-white"
              role="confirm"
              type="submit"
            >
              login
            </Button>
            <Button
              icon
              role="cancel"
              className="w-full h-10 text-secondary"
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
