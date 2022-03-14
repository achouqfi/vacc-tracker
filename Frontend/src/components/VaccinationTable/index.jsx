import { useState } from "react";
import { useQuery } from "react-query";
import Modal from "../Modals";
import axios from "axios";
import UpdateStatusForm from '../Forms/UpdateStatus'
import { useCookies } from 'react-cookie';

const VaccinationTable = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [open, setIsOpen] = useState(false);
  const [vaccinationId, setVaccinationId] = useState("");
  console.log(cookies.region);

  const query = useQuery("appointments", async () => {
    const { data } = await axios.get(`http://localhost:4000/api/appointments/${cookies.region}`);
    return data;
  });

  return (
    <div>
      <div className="inline-block py-2 w-full">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  FirstName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  LastName
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Cin
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  first vaccin
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  first second
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  first thirt
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  phone
                </th>
                <th scope="col" className="">
                  <span className="text-white  text-xs uppercase dark:text-gray-400">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((appointement, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {appointement.firstName}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {appointement.lastName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {appointement.email}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {appointement.Cin}
                    </td>
                    {
                      appointement.vacc1Status === 'vaccined' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-green-400  text-white text-center sm:rounded-lg dark:text-light">{appointement.vacc1}</p>
                        </td>
                      ): appointement.vacc1Status === 'not yet' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-yellow-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc1}</p>
                        </td>
                      ): appointement.vacc1Status === 'not vaccined' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-red-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc1}</p>
                        </td>
                      ):null
                    }
                    {
                      appointement.vacc2Status === 'vaccined' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-green-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc2}</p>
                        </td>
                      ): appointement.vacc2Status === 'not yet' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-yellow-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc2}</p>
                        </td>
                      ): appointement.vacc2Status === 'not vaccinated' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-red-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc2}</p>
                        </td>
                      ):null
                    }
                    {
                      appointement.vacc3Status === 'vaccined' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-green-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc3}</p>
                        </td>
                      ): appointement.vacc3Status === 'not vaccinated' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-red-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc3}</p>
                        </td>
                      ): appointement.vacc3Status === 'not yet' ?(
                        <td className="">
                          <p className=" px-2 mx-2 bg-yellow-400  text-white text-center  sm:rounded-lg dark:text-light">{appointement.vacc3}</p>
                        </td>
                      ):null
                    }
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {appointement.phone}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <div className="space-x-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(!open);
                            setVaccinationId(appointement._id)
                          }}
                          
                          className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-400 dark:text-blue-400 blue:hover:text-white dark:hover:bg-blue-400 dark:focus:ring-blue-400"
                        >
                          Status
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Modal
            isOpen={open}
            title="Update Status"
            setIsOpen={setIsOpen}
            component={
              <UpdateStatusForm 
                isOpen={open} 
                appointement= {vaccinationId}
                setIsOpen={setIsOpen} 
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
export default VaccinationTable;
