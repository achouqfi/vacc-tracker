import { Link, Navigate } from 'react-router-dom';

const LinkStyle ='pl-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline';
const Navigation = () => {
    const user="admin"

    return (
        <nav className="px-5 bg-ehe-900 w-[15em] z-10  h-screen fixed justify-between py-5 dark:bg-gray-800 mr-10">
            <div className="flex flex-col flex-wrap justify-between  mx-auto h-full">
                <div className="flex flex-col mt-4  md:mt-0 md:text-sm md:font-medium">
                    <div className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Gestion de vaccination</span>
                    </div>
                    <div className="flex flex-col  bg-slate-700  mt-4 w-full py-6 px-4 rounded-lg  mb-4">

                        <div className="text-sm font-semibold mt-3 text-white">{user}</div>
                        <div className="px-2 text-xs bg-blue-300 mt-3 rounded-md uppercase">{user}</div>
                    </div>
                    {user === 'admin' ? (
                        <>
                            <Link to="/" className={`${LinkStyle}`}>
                                Dashboard
                            </Link>
                            <Link to="/Recruit" className={`${LinkStyle}`}>
                                Drivers Recruiting
                            </Link>
                            <Link to="/Managers" className={`${LinkStyle}`}>
                                Managers
                            </Link>
                            <Link to="/Drivers" className={`${LinkStyle}`}>
                                Drivers
                            </Link>
                        </>
                    ) : user === 'manager' || 'admin' ? (
                        <>
                            <Link to="/DeliveryMangers" className={`${LinkStyle}`}>
                                Manage Delivery Managers
                            </Link>
                        </>
                    ) : user === 'admin' ? (
                        <Link to="/deliveries" className={`${LinkStyle}`}>
                            Manage Deliveries
                        </Link>
                    ) : user === 'driver' ? (
                        <Link to="/AcceptDeliveries" className={`${LinkStyle}`}>
                            Accept Deliveries
                        </Link>
                    ) : null}
                    <Link to="/deliveries" className={`${LinkStyle}`}>
                            Manage Deliveries
                        </Link>
                </div>
                <div>
                    <button
                        type="button"
                      
                        className="text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10  w-full py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;