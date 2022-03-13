import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const LinkStyle ='pl-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline';
const Navigation = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    function logout(){
        cookies.role === 'admin' ? navigate("/adminLogin"): navigate("/managerLogin")
        removeCookie('role');
    }

    return (
        <>
            <nav className="px-5 bg-ehe-900 w-[15em] z-10  h-screen fixed justify-between py-5 dark:bg-gray-800 mr-10">
                <div className="flex flex-col flex-wrap justify-between  mx-auto h-full">
                    <div className="flex flex-col mt-4  md:mt-0 md:text-sm md:font-medium">
                        <div className="flex">
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Gestion de vaccination</span>
                        </div>
                        <div className="flex flex-col  bg-yellow-800  mt-4 w-full py-2 px-4 rounded-lg  mb-12">

                            <div className="text-lg font-semibold text-white">{cookies.role}</div>
                        </div>
                        {cookies.role  === 'admin' ? (
                            <>
                                <Link to="/Manager" className={`${LinkStyle}`}>
                                    Managers
                                </Link>
                                <Link to="/vaccinationList" className={`${LinkStyle}`}>
                                    Vaccinations
                                </Link>
                            </>
                        ) : cookies.role === 'manager'? (
                            <>
                                <Link to="/sideEffect" className={`${LinkStyle}`}>
                                    Side Effect
                                </Link>
                                <Link to="/VaccinationListe" className={`${LinkStyle}`}>
                                    Vaccinations
                                </Link>
                                <Link to="/urbanCenterListe" className={`${LinkStyle}`}>
                                    Urban Centers
                                </Link>

                            </>
                        ) : null}
                        
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={logout}
                            className="text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10  w-full py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;