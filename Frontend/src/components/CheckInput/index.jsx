import { Field } from "formik";
const CheckInput = ({ values }) => {
  return (
    <>
      {/* vaccinate type  */}
      {values.VaccNumber === "firstVacc" ? (
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
        <h1> find you treatment here google.com</h1>
      )}
    </>
  );
};
export default CheckInput;
