import { Form, Formik, Field } from "formik";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { sendData } from "../../../Hooks/useFetch";

const CheckForm = () => {
 
  const { setStep , step , setCheckResult } = useContext(UserContext)
  return (
      <Formik
        initialValues={{
          age: 0,
          VaccNumber: "",
          emailAdresse:"",
          chronicDisease: "",
          SideEffectDesc: "",
          phone: "",
          Cin: "",
          email: "",
        }}
        onSubmit={(values) => {
          setCheckResult(values)
          {values.VaccNumber === "firstVacc" ?(
              setStep(step + 1)
          ):
            sendData("sideEffect" ,values);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
        }) => (
          <Form className=" pt-[5em] w-1/2 flex flex-col justify-between h-full">

              <div className="px-4 py-5 sm:p-6">
            <div className="text-2xl font-bold pb-8">Condition check</div>
                <div className="flex flex-col gap-5">
                  
                <Field
                  name="VaccNumber"
                  as="select"
                  id="VaccNumber"
                  className="mt-1 pl-3   focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                >
                  <option value="">Select Vaccine</option>
                  <option value="firstVacc">First Vaccine</option>
                  <option value="secondVacc">Second Vaccine</option>
                  <option value="thirdVacc">Third Vaccine</option>
                </Field>

                  {/* age  */}
                {
                  values.VaccNumber === "firstVacc" ?(
                    <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Age
                    </label>
                    <Field
                      type="number"
                      name="age"
                      className="mt-1 pl-5 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>
                  ): values.VaccNumber === "secondVacc" ||  values.VaccNumber === "thirdVacc" ?(
                    <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      you have any side effect from the last vaccine ?
                    </label>
                    <Field
                      name="chronicDisease"
                      as="select"
                      id="chronicDisease"
                      className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    >
                      <option value="">Select</option>
                      <option value="noSideEffect">No</option>
                      <option value="sideEffect2">Yes</option>
                    </Field>
                  </div>
                ):null}

                {values.chronicDisease === "sideEffect2" &&
                  <div className="mb-3">
                    <Field
                      name="Cin"
                      placeholder="CIN "
                      className="mt-1 pl-3 mb-3 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                    <Field
                      name="phone"
                      placeholder="phone "
                      className="mt-1 pl-3 mb-3 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                    <Field
                      name="email"
                      placeholder="email "
                      className="mt-1 pl-3 mb-3 focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                    <Field
                      name="SideEffectDesc"
                      as="textarea"
                      placeholder="describe your side Effect from previous vaccine "
                      className="mt-1 pl-3   focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                    />
                  </div>
                }
                  {values.age > 12 ?( 
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      you have any chronic disease ?
                    </label>
                      <Field
                        name="chronicDisease"
                        as="select"
                        id="chronicDisease"
                        className="mt-1 pl-3  focus:ring-green-500 py-3 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md border border-green-300 outline-none  "
                      >
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </Field>
                    </div>
                  ): null}  
        
                  {/* treatment */}
                  {values.chronicDisease === "yes" && values.VaccNumber === "firstVacc" && (
                    <h1> find you treatment here sante.com</h1>
                  )}
                </div>
              </div>
              {values.VaccNumber === "firstVacc" ?(
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Next
                  </button>
                </div>
              ):values.VaccNumber === "secondVacc" ||  values.VaccNumber === "thirdVacc" ?(
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3 mb-2 rounded-tr-md rounded-br-md shadow-md">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send
                  </button>
                </div>
              ):null}
          </Form>
        )}
      </Formik>
    
  );
};
export default CheckForm;
