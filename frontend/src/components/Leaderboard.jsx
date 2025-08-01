import axios from "axios"
import { useEffect,useState } from "react"
import { FaRupeeSign } from "react-icons/fa";

const Leaderboard = () => {
  
const [leaderboardData, setleaderboardData] = useState([])

  useEffect(() => {
  const getLeadBoardData = async ()=>{
    try {
      const res = await axios.get('/api/leadboard')
      setleaderboardData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  getLeadBoardData()
  }, [])
  
 

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mt-2 ">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2"> Leaderboard</h2>
        <p className="text-gray-600">Top performing interns</p>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((intern) => (
          <div 
            key={intern._id} 
            className={`flex items-center justify-between p-4 rounded-lg border-2 ${
              intern.rank <= 3 
                ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                intern.rank === 1 ? 'bg-yellow-500' :
                intern.rank === 2 ? 'bg-gray-400' :
                intern.rank === 3 ? 'bg-orange-400' :
                'bg-blue-600'
              }`}>
                {intern.rank}
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">{intern.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  intern.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                  intern.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {intern.level}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-green-600"><FaRupeeSign className="inline text-green-600" />{intern.totalDonation.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Total Raised</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Leaderboard