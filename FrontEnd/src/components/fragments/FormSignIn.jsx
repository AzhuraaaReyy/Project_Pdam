import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LabeledInput from "../elements/labeledinput";
import CheckBox from "../elements/checkbox";
import Button from "../elements/button";
const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onErrors = (errors) => console.error(errors);

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onErrors)}>
        <div className="mb-6">
          <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
            register={{
              ...register("email", {
                required: "Email address harus diisi!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email address tidak valid!",
                },
              }),
            }}
          />
          {errors?.email && (
            <div className="text-center text-red-500">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="*************"
            name="password"
            register={{
              ...register("password", {
                required: "Password harus diisi!",
              }),
            }}
          />

          {errors?.password && (
            <div className="text-center text-red-500">
              {errors.password.message}{" "}
            </div>
          )}

          <Link
            to="/forgetpassword"
            className="text-black text-sm mt-2 block text-right underline"
          >
            Forget Your Password?
          </Link>
        </div>
        <div className="mb-3">
          <CheckBox label="Keep me signed in" name="status" />
        </div>
        <Button
          variant={`
          ${
            !isValid ? "bg-gray-05" : "bg-[#1e90ff] zoom-in"
          } w-full text-white"`}
          type="submit"
          disabled={!isValid ? "disabled" : ""}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormSignIn;
