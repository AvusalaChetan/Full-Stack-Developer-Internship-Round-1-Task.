import React from 'react'
import { CiTrophy } from "react-icons/ci";

const Rewards = () => {
  return (
<div className="bg-white rounded-lg shadow-lg border border-gray-400 p-4 mt-2 w-full max-w-md mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-3">
                  <CiTrophy className="text-white font-bolder text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Rewards
                </h3>
    
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-sm text-gray-600">Points Earned</p>
                    <p className="text-xl font-bold text-green-600">1,250</p>
                  </div>
    
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm text-gray-600">Current Level</p>
                    <p className="text-lg font-semibold text-blue-600">Rookie</p>
                  </div>
    
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-sm text-gray-600">Tasks Completed</p>
                    <p className="text-lg font-semibold text-yellow-600">12</p>
                  </div>
    
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-sm text-gray-600">Referrals</p>
                    <p className="text-lg font-semibold text-purple-600">3</p>
                  </div>
    
                  <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                    <p className="text-sm text-gray-600">Total Fundraised</p>
                    <p className="text-lg font-semibold text-pink-600">₹9,000</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Rewards