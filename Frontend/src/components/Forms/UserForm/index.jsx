import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { sendData, useFetch } from "../../../Hooks/useFetch";
import MailConfirm from "../../MailConfirm";
import { Form, Formik, Field, useFormikContext } from "formik";


const City = () => {

  const { values } = useFormikContext();
  const { data } = useFetch(
    `https://calm-fjord-14795.herokuapp.com/api/villes/${values.region}`
  );
  
  return (
    <Field
      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none "
      as="select"
      name="city"
    >
      <option value="" disabled>
        Select a city
      </option>
      {data &&
        data?.map((el, index) => (
          <option key={index} value={el.ville}>
            {el.ville}
          </option>
        ))}
    </Field>
  );
};

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setStep , step , checkResult } = useContext(UserContext)

  const { data, loading } = useFetch(
    "https://calm-fjord-14795.herokuapp.com/api/regions"
  );
  const { data: center, loading: isLoading } = useFetch(
    "http://localhost:4000/api/urbanCenter"
  );

  
  return (
   <>
      <Formik
        initialValues={{
          lastName: "",
          firstName: "",
          region: "",
          phone: "",
          Cin: "",
          email: "",
          city: "",
          age: checkResult.age,
          chronicDisease: checkResult.chronicDisease,
        }}
        onSubmit={(values) => {
          sendData("appointments" ,values);
          setIsOpen(!isOpen)
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          /* and other goodies */
        }) => (
          <Form className=" pt-[5em] w-1/2 flex flex-col justify-between h-full">
           
              <div className="px-4 py-5  sm:p-6">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      id="phone"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>
                  <div className="">
                  <Field
                    className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    as="select"
                    name="region"
                  >
                    <option value="" disabled>
                      Select region
                    </option>
                    {data &&
                      data.map((el, index) => (
                        <option key={index} value={el.id}>
                          {el.id} - {el.region}
                        </option>
                      ))}
                  </Field>
                  </div>
                  {
                    values.region &&(
                      <div className="mt-4">
                        <City />
                      </div>
                    )
                  }
                  <div className="">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cin
                    </label>
                    <Field
                      type="text"
                      name="Cin"
                      id="Cin"
                      className="mt-1 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>                  
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Prev
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            
          </Form>
        )}
      </Formik>
      <MailConfirm setIsOpen={setIsOpen} isOpen={isOpen} />
      </>
  );
};
export default UserForm;
