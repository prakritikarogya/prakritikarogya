import React from 'react'
import { FaRegHospital } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { GiHospital } from "react-icons/gi";
import { RiHospitalLine } from "react-icons/ri";
import { FaHospitalSymbol } from "react-icons/fa";
import { CiHospital1 } from "react-icons/ci";
import { GiAmbulance } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
const Service = () => {
  return (
    <div className='md:mx-10 mx-2 my-5'>
      <h1 className='font-bold my-10 text-2xl'>Our Service</h1>
      <div className='sm:flex'>
        <div className='sm:w-7/12 sm:flex flex-wrap '>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm'>
            <span><FaRegHospital className='text-2xl' /></span>
            Diagnostics and emergency treatment
          </div>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm'>
            <span><FaHospitalAlt className='text-2xl' /></span>
            Home medical appointments</div>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm'>
            <span><GiHospital className='text-2xl' /></span>
            Pharmacy refunded from hospital</div>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm'>
            <span><RiHospitalLine className='text-2xl' /></span>
            Long term medical care in a hospital</div>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm'>
            <span><FaHospitalSymbol className='text-2xl' /></span>
            The correct diagnosis is half the battle</div>
          <div className='sm:w-3/12 p-9 shadow-lg border border-l-2 text-sm flex-1 flex items-center'>
            <span><CiHospital1 className='text-2xl' /></span>
            We refund 50% of the cost of medicines</div>
        </div>
        <div className='sm:flex flex-wrap flex-col flex-1'>
          <div className='p-9 shadow-lg border border-l-2 sm:font-bold flex-1'>
            <span><MdOutlineMedicalServices className='text-4xl' /></span>
            Services for our patients</div>
          <div className='sm:flex'>
            <div className='p-9 shadow-lg border border-l-2 text-sm'>
              <span><MdLocalHospital className='text-4xl' /></span>
              A specialized laboratory research</div>
            <div className='p-9 shadow-lg border border-l-2 text-sm flex-1'>
              <span><GiAmbulance className='text-4xl' /></span>
              Medical transport to the hospital</div>
          </div>
        </div>

      </div>
      <div>
        <h1 className='font-bold my-10 text-2xl'>Rate List of Treatement</h1>
        <div className='sm:flex gap-5 mb-5'>
          <a href="#" className="block sm:w-6/12 w-full p-6 bg-green-600 border border-gray-200 rounded-lg shadow-md hover:bg-green-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 sm:text-2xl text-lg font-bold tracking-tight text-white dark:text-white text-center">Consultation Fee : 200/- Per Day</h5>
          </a>
          <a href="#" className="block sm:w-6/12 w-full p-6 bg-green-600 border border-gray-200 rounded-lg shadow hover:bg-green-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 sm:text-2xl text-lg font-bold tracking-tight text-white dark:text-white text-center">Follow Up Fee : 100/- Per Day</h5>
          </a>
          {/* <a href="#" className="block sm:w-4/12 w-full p-6 bg-green-600 border border-gray-200 rounded-lg shadow hover:bg-green-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 sm:text-2xl text-lg font-bold tracking-tight text-white dark:text-white">Medical Certificate Fee : 300/- Per Day</h5>
          </a> */}
        </div>

        <div className='sm:flex gap-5'>
          <div className="relative overflow-x-auto sm:w-4/12 w-full sm:mb-0 mb-5">
            <span className='absolute bg-green-600 text-white rounded px-5'>Cleaning</span>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-7">
                    TREATMENTS NAME
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sinus Cleaning
                    <span className='text-red-600'>(Jal Neti + Rubber Neti)</span>
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Upper GI Cleaning
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Lower GI Cleaning
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Lemon Water
                  </th>
                  <td className="px-6 py-4">
                    20/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Neem Water
                  </th>
                  <td className="px-6 py-4">
                    20/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Butter Milk
                  </th>
                  <td className="px-6 py-4">
                    50/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Shankh Prakshalan
                  </th>
                  <td className="px-6 py-4">
                    500/- Per Day
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto sm:w-4/12 w-full max-h-[445px] overflow-y-auto sm:mb-0 mb-5">
            <table className="w-full min-w-full divide-y divide-gray-200 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <span className='absolute bg-green-600 text-white rounded px-5'>MUD PACK</span>
                <tr>
                  <th scope="col" className="px-6 py-7">
                    TREATMENTS NAME
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mud Pack
                  </th>
                  <td className="px-6 py-4">
                    50/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hot Mud Pack
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Local Mud Application
                  </th>
                  <td className="px-6 py-4">
                    50/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Full Mud Bath
                  </th>
                  <td className="px-6 py-4">
                    300/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Neem Turmeric Mud Bath
                  </th>
                  <td className="px-6 py-4">
                    600/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ganji Turmeric Bath
                  </th>
                  <td className="px-6 py-4">
                    600/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Neem Alovera Mud Bath
                  </th>
                  <td className="px-6 py-4">
                    600/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sand Bath
                  </th>
                  <td className="px-6 py-4">
                    400/- Per Day
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto sm:w-4/12 w-full max-h-[445px] overflow-y-auto sm:mb-0 mb-5">
            <table className="w-full min-w-full divide-y divide-gray-200 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <span className='absolute bg-green-600 text-white rounded px-5'>HYDRO THERAPY</span>
                <tr>
                  <th scope="col" className="px-6 py-7">
                    TREATMENTS NAME
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hip Bath (Hot)
                  </th>
                  <td className="px-6 py-4">
                    150/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hip Bath (Cold)
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Neutral Hip Bath
                  </th>
                  <td className="px-6 py-4">
                    30/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sitz Bath (Hot)
                  </th>
                  <td className="px-6 py-4">
                    150/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sitz Bath (Cold)
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sitz Bath (Neutral)
                  </th>
                  <td className="px-6 py-4">
                    30/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Steam Bath
                  </th>
                  <td className="px-6 py-4">
                    300/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Steam Bath (Neem)
                  </th>
                  <td className="px-6 py-4">
                    400/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Steam Bath (Pain Relief)
                  </th>
                  <td className="px-6 py-4">
                    400/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Local Steam
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Foot Bath (Hot)
                  </th>
                  <td className="px-6 py-4">
                    100/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Foot Bath (Cold)
                  </th>
                  <td className="px-6 py-4">
                    50/- Per Day
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Foot Bath (Neutral)
                  </th>
                  <td className="px-6 py-4">
                    30/- Per Day
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mx-auto p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-b-2">General Package</h5>
  </a>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 sm:font-normal font-medium text-gray-900 whitespace-nowrap dark:text-white">
            NaturoPathy Treatment
          </th>
          <td className="px-6  py-4">
            800/- Per Day
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            15 Days NaturoPathy Treatment Package
          </th>
          <td className="px-6 py-4">
            11000/- Only
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            PanchKarma Treatment
          </th>
          <td className="px-6 py-4">
            1000/- Per Day
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            7 Days PanchKarma Treatment Package
          </th>
          <td className="px-6 py-4">
            6100/- Only
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="py-2 mb-3 font-normal text-gray-700 dark:text-gray-400">A special Discount of 20% of treatment is available to helpless, handicapped, and old people</p>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An additional discount of 10% will be given if treatment is done for more than 15 days</p>
  <p className="mb-3 font-black text-gray-700 dark:text-gray-400">Panchkarma treatment charge will be taken separately</p>
</div>

    </div>
  )
}

export default Service