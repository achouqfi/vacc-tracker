import VaccinationTableAdmin from "../../components/VaccinationTableAdmin";
import Stat from '../../components/AdminStatistiques'
export default function vaccinationList() {

  return (
    <div className="w-[100%]">
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-black pl-12  py-14">Vaccination List</h1>
      </div>
      <div className="flex">
        <div className="w-full">
        <VaccinationTableAdmin />
        </div>
      </div> 
      <div>
          <Stat />
        </div>
    </div>
  )
}