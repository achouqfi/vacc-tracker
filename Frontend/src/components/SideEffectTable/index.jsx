import axios from "axios";
import { useQuery } from "react-query";

export default function index() {
  
  // Queries
  const query = useQuery("sideEffect", async () => {
    const { data } = await axios.get( `http://localhost:4000/api/sideEffect/`);
    return data;
  });
  console.log(query.data);

  return (
    <div>
      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Emasssil
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  region
                </th>
                
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((center, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {center.email}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {center.SideEffectDesc}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {center.phone}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {center.Cin}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
