import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import Validation from "../../components/Error";

const initialValues = {
  title: "",
  description: "",
  priority: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Please enter title"),
  description: Yup.string().required("Please enter description"),
  priority: Yup.string().required("Please select priority"),
});

const Form = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      alert("form submitted");
    },
  });

  console.log(errors, "errors");

  return (
    <form className="lecture-add" id="lecture-add" onSubmit={handleSubmit}>
      <div className="row mb-2">
        <div className="col-md-6 p-1">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Enter your task "
            />
            <Validation errors={errors} name="title" />
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="form-group">
            <select
              name="priority"
              value={values.priority}
              onChange={handleChange}
              className="form-control"
              placeholder="Select your priority "
            >
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
            <Validation errors={errors} name="priority" />
          </div>
        </div>
        <div className="col-md-12 p-1">
          <div className="forn-group">
            <textarea
              className="form-control"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Enter your description "
              rows="4"
            ></textarea>
            <Validation errors={errors} name="description" />
          </div>
        </div>
      </div>
      <button className="success" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
