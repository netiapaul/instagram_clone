import "./login.css";
import { useFormik } from "formik";
import facebook from "../../assets/images/facebook.png";
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  return errors;
};

const Login = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="card mx-auto">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="email">Email Address</label> */}
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-3">
              {/* <label htmlFor="password">Last Name</label> */}
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="d-grid gap-2 col mx-auto">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>

          <div className="mx-auto my-3">
            <div className="row">
              <div className="col">
                <img
                  src={facebook}
                  className="img-fluid"
                  width="30"
                  alt="facebook logo"
                />
              </div>
              <div className="col">Login with Facebok</div>
            </div>
          </div>

          <div className="mx-auto my-3">
            <div className="row">
              <div className="col text-center">Forgot password?</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card my-3">
        <div className="card-body text-center">
          <p>Dont have an account? Sign up</p>
        </div>
      </div>
    </>
  );
};

export default Login;
