import { Form, Formik, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const validationSchema = Yup.object({
    query: Yup.string().required("Please enter a search query"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    setQuery(values.query);
    resetForm();
  };

  return (
    <div className={s.search}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="query"
              placeholder="Search images and photos"
              type="text"
              autoComplete="off"
              autoFocus
            />
            {errors.query && touched.query ? (
              <div className={s.error}>{errors.query}</div>
            ) : null}
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default SearchBar;
