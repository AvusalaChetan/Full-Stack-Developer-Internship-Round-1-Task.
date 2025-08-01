import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
const Sidebar = () => {

const [intern, setIntern] = useState([])
useEffect(() => {
  const getIntern = async () => {
    try {
      const res = await axios.get('/api/internData');
      setIntern(res.data)
      console.log(intern);
    } catch (error) {
      console.log(error);
    }
  };
  
  getIntern();
}, []);

useEffect(() => {
  console.log('intern',intern)

  return () => {
    if(!intern) return 
  }
}, [intern])


  return (
    
      <div className=" bg-white py-6 px-4 rounded-lg shadow-lg mt-2 border-gray-400  w-65 text-gray-800 m-auto">
     {intern.map((intern,idx)=>{
      return(
           <div className="profile-section" key={idx}>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-md">
             {intern.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {intern.name}
              </h2>
              <p className="text-sm text-gray-600">{intern.email}</p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-blue-600 font-medium">
              Referral Code: <span className="text-gray-900 font-semibold">{intern.referralCode}</span> {' '}
            </p>
            <p className="text-gray-700">
              Total Donation: <FaRupeeSign className="inline text-green-600" />{""}
              <span className="font-bold text-green-600">{intern.totalDonation}</span>
            </p>
          </div>
        </div>
      )
     })}
      </div>
    
  );
};

export default Sidebar;
