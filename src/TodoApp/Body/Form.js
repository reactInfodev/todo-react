import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import Validation from "../../components/Error";
import axios from "axios";
import { useState } from "react";
import Loader from "../../components/Loader";

const initialValues = {
  name: "",
  description: "",
  priority: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter title"),
  description: Yup.string().required("Please enter description"),
  priority: Yup.string().required("Please select priority"),
});

const Form = (props) => {
  const { fetchTodoList, editData, setEditData } = props;

  const [formData, setFormData] = useState(initialValues);

  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting } =
    useFormik({
      enableReinitialize: true,
      initialValues: formData,
      validationSchema,
      onSubmit: (_, { resetForm }) => {
        handleFormSubmit(resetForm);
      },
    });

  // const notify = () => toast("Wow so easy!");

  const handleFormSubmit = async (resetForm) => {
    let response;

    if (editData) {
      response = await axios.put(
        `https://infodev-server.herokuapp.com/api/todos/${editData?._id}`,
        values
      );
    } else {
      response = await axios.post("https://infodev-server.herokuapp.com/api/todos", values);
    }

    if (response?.data?._id) {
      // resetForm()
      fetchTodoList();
      setFormData(initialValues);
      setEditData(null);
      setSubmitting(false);
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  return (
    <form className="lecture-add" id="lecture-add" onSubmit={handleSubmit}>
      <div className="row mb-2">
        <div className="col-md-6 p-1">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your task "
            />
            <Validation errors={errors} name="name" />
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
              <option></option>
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
      <button className="success" type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : editData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
