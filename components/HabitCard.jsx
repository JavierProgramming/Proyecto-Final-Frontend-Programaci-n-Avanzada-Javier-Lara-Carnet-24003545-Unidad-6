'use client'
import { completeHabit } from '@/lib/api'

export default function HabitCard({ habit, token, onComplete }) {
  const progress = Math.min((habit.currentStreak / 66) * 100, 100)

  const handleClick = async () => {
    await completeHabit(token, habit._id)
    onComplete()
  }

  return (
    <div className="p-4 border mb-2 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{habit.name}</h3>
        <button onClick={handleClick} className="bg-green-600 text-white px-2 py-1 rounded">
          Completar
        </button>
      </div>
      <div className="w-full bg-gray-300 h-2 mt-2 rounded">
        <div
          className={`h-2 rounded ${progress < 33 ? 'bg-red-500' : progress < 66 ? 'bg-yellow-500' : 'bg-green-500'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm mt-1">Racha: {habit.currentStreak} / 66 días</p>
    </div>
  )
}
