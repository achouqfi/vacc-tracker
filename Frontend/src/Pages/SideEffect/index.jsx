import { useState } from "react"
import AddUrbanCenterForm from "../../components/Forms/AddUrbanCenter"
import Modal from "../../components/Modals"
import SideEffectTable from "../../components/SideEffectTable"
import { useQuery } from "react-query";
import axios from "axios";

export default function index() {
  const [open , setIsOpen]  = useState(false)

  return (
      <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black  py-14"> Side Effect List </h1>
      </div>
      <SideEffectTable />
    </div>
  )
}
