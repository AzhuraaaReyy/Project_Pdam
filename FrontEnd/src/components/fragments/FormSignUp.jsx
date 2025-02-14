import { useForm } from "react-hook-form";
import LabeledInput from "../elements/labeledinput";
import Button from "../elements/button";
const FormSignUp = () => {
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
        {/* Wrapper untuk dua kolom */}
        <div className="grid grid-cols-2 gap-x-6">
          {/* Kolom 1 */}
          <div className="mb-6">
            <LabeledInput
              label="Nama Lengkap"
              type="text"
              placeholder="John Doe"
              name="name"
              register={{
                ...register("name", {
                  required: "Nama lengkap harus diisi!",
                  pattern: {
                    value: /^(?=.*[A-Z])/,
                    message:
                      "Nama harus mengandung minimal satu huruf kapital dan hanya boleh huruf!",
                  },
                }),
              }}
            />
            {errors?.name && (
              <div className="text-center text-red-500 text-[10px]">
                {errors.name.message}
              </div>
            )}
          </div>

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
                    message: "Email Tidak Valid!",
                  },
                }),
              }}
            />
            {errors?.email && (
              <div className="text-center text-red-500 text-[11px]">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Kolom 2 */}
          <div className="mb-6">
            <LabeledInput
              label="Password"
              type="password"
              placeholder="*************"
              name="password"
              register={{
                ...register("password", {
                  required: "password harus diisi!",
                  minLength: {
                    value: 8,
                    message: "Password harus berisi minimal 8 karakter!",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Password harus mengandung huruf dan angka!",
                  },
                }),
              }}
            />
            {errors?.password && (
              <div className="text-center text-red-500 text-[11px]">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-6">
            <LabeledInput
              label="Handphone"
              type="tel"
              placeholder="083162252525"
              name="telepon"
              register={{
                ...register("telepon", {
                  required: "No Handphone harus diisi!",
                  pattern: {
                    value: /^[0-9]{10,13}$/,
                    message:
                      "Nomor handphone harus 10-13 digit dan harus angka!",
                  },
                }),
              }}
            />
            {errors?.telepon && (
              <div className="text-center text-red-500 text-[11px]">
                {errors.telepon.message}
              </div>
            )}
          </div>

          {/* Alamat (Full Width) */}
          <div className="mb-6 col-span-2">
            <LabeledInput
              label="Alamat"
              type="text"
              placeholder="jln.Srikandi Raya RT02/RW04"
              name="alamat"
              register={{
                ...register("alamat", {
                  required: "Alamat harus diisi sesuai contoh!",
                  minLength: {
                    value: 10,
                    message: "Alamat tidak valid",
                  },
                }),
              }}
            />
            {errors?.alamat && (
              <div className="text-center text-red-500 text-[11px]">
                {errors.alamat.message}
              </div>
            )}
          </div>
        </div>

        {/* Tombol Sign Up (Full Width) */}

        <Button
          variant={`
          ${
            !isValid ? "bg-gray-05" : "bg-[#1e90ff] zoom-in"
          } w-full text-white"`}
          type="submit"
          disabled={!isValid ? "disabled" : ""}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
