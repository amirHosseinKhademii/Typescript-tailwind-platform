import { memo } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Button, Form, Input } from "components";

export const LoginForm = memo(() => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-20 grid grid-cols-1 gap-y-8 rounded shadow-xl "
      onSubmit={handleSubmit((state) => console.log(state))}
    >
      <div className="text-center pt-6 pb-3  bg-cyan-600 h-18 text-white rounded-t text-lg font-semibold ">
        Login
      </div>
      <div className="grid grid-cols-1 gap-y-10 px-10 py-4 bg-cyan-100 rounded-b ">
        <Input
          register={register}
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          error={errors["email"]?.message}
          className="mt-10"
        />
        <Input
          register={register}
          name="password"
          type="password"
          required
          placeholder="Enter your Password"
          error={errors["password"]?.message}
        />
        <div className="col-center space-y-6 w-full mb-6" slot="actions">
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
            className="w-full h-10 text-cyan-600"
            type="button"
            onClick={() => push("/authentication/password")}
          >
            Forgot password
          </Button>
        </div>
      </div>
    </Form>
  );
});
