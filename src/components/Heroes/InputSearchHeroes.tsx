import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import { UiContext } from "../../context/UiContext";
import { getHeroByName } from "../../services/getHeroByName";
import { FormSearchHeroesValue } from "../../types/types";

interface Props {
  setHeroesSearched: (heroes: any) => void;
}

const validate = (values: FormSearchHeroesValue) => {
  const errors: Partial<FormSearchHeroesValue> = {};
  if (!values.search) {
    errors.search = "Required";
  }
  return errors;
};

export const InputSearchHeroes: React.FC<Props> = ({ setHeroesSearched }) => {
  const { handleOpenNotification } = useContext(UiContext);
  const handleSubmit = async (data: FormSearchHeroesValue) => {
    const result = await getHeroByName(data.search);
    if (result.data.response === "success") {
      setHeroesSearched(result.data.results);
    } else {
      handleOpenNotification(result.data.error, "danger");
      setHeroesSearched([]);
    }
  };
  return (
    <Formik
      initialValues={{ search: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, touched }) => (
        <>
          <Form className="search-form-container">
            <Field
              name="search"
              className="form-control mb-2"
              placeholder="Write a name of a hero..."
              onBlur={handleBlur}
            />
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </Form>
          {touched.search && errors.search ? (
            <p className="lead text-danger">{errors.search}</p>
          ) : null}
        </>
      )}
    </Formik>
  );
};
