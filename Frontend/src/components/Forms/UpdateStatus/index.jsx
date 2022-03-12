import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {  useMutation } from "react-query";
import axios from "axios";

const Status = Yup.object().shape({
    vaccNumber: Yup.string().required("Required"),
    id: Yup.string().required("Required"),
    status:Yup.string().required("Required"),
  });
  
export default function index({ setIsOpen, isOpen, appointement }) {

  const updateStatus = useMutation(
    (values) => 
    axios
      .put(`http://localhost:4000/api/appointments/status/${appointement}` , values),
      {
      onSuccess: () => {
        navigate("/adminDash");
      },
      onError: () => {
        setError("wrong creds");
        console.log(value);
      },
    }
  );

  return (
    <Formik
    initialValues={{
      vaccNumber: "",
      id: appointement,
      status: "",
    }}
    onSubmit={(values) => {
      updateStatus.mutate(values)
      window.location.reload();
    }}
  >
    {({ errors, touched }) => (
      <Form>
          <div className="mt-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Vaccin number
          </label>
          <Field
              className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              as="select"
              name="vaccNumber"
            >
                <option value="" disabled>
                    Select region
                </option>
                <option value='1'>
                    vacc 1
                </option>
                <option value='2'>
                    vacc 2
                </option>
                <option value='3'>
                    vacc 3
                </option>

            </Field>
          {errors.status && touched.status ? (
            <div className="text-red-500 font-semibold dark:text-red-400">
              {errors.status}
            </div>
          ) : null}
        </div>
        <div className="mt-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            FirstName
          </label>
            <Field
                className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                as="select"
                name="status"
            >
                <option  value="" disabled>
                    Select Status
                </option>
                <option className="bg-green-400 w-full p-2.5" value='vaccined'>
                    Vaccined
                </option>
                <option className="bg-red-400 w-full p-2.5" value='not vaccinated'>
                    not vaccinated
                </option>
                <option className="bg-yellow-400 w-full p-2.5" value='not yet'>
                    not yet
                </option>

            </Field>
          {errors.vaccNumber && touched.vaccNumber ? (
            <div className="text-red-500 font-semibold dark:text-red-400">
              {errors.vaccNumber}
            </div>
          ) : null}
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            type="submit"
            className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-[12em] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            cancel
          </button>
        </div>
      </Form>
    )}
  </Formik>  
  )
}