import { useForm } from "react-hook-form";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="cta">
        <Try />
        <Form />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header__section">
      <h1 className="header__heading">Learn to code by watching others</h1>
      <p className="header__p">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}

function Try() {
  return (
    <p className="try__p">
      <span className="try__span">Try it free 7 days</span> then $20/mo.
      thereafter
    </p>
  );
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="form__section" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <input
            style={errors.firstName && { border: "2px solid red" }}
            className="input"
            type="text"
            placeholder={errors.firstName ? "" : "First Name"}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <div className="error-box">
              <span className="error">First Name cannot be empty</span>
              <img
                className="icon-error"
                src="../public/images/icon-error.svg"
                alt="Error"
              />
            </div>
          )}
        </div>

        <div className="input-wrapper">
          <input
            style={errors.lastName && { border: "2px solid red" }}
            className="input"
            type="text"
            placeholder={errors.lastName ? "" : "Last Name"}
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <>
              <span className="error">Last Name cannot be empty</span>
              <img
                className="icon-error"
                src="../public/images/icon-error.svg"
                alt="Error"
              />
            </>
          )}
        </div>

        <div className="input-wrapper">
          <input
            style={errors.email && { border: "2px solid red" }}
            className="input"
            type="email"
            placeholder={errors.email ? "" : "Email Address"}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <>
              <span className="error">Looks like this is not an email</span>
              <img
                className="icon-error"
                src="../public/images/icon-error.svg"
                alt="Error"
              />
            </>
          )}
        </div>

        <div className="input-wrapper">
          <input
            style={errors.password && { border: "2px solid red" }}
            className="input"
            type="password"
            placeholder={errors.password ? "" : "Password"}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <>
              <span className="error">Password cannot be empty</span>
              <img
                className="icon-error"
                src="../public/images/icon-error.svg"
                alt="Error"
              />
            </>
          )}
        </div>

        <button type="submit" className="form__btn">
          Claim your free trial
        </button>
        <p className="form__p">
          By clicking the button, you are agreeing to our{" "}
          <span className="form__span">Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
