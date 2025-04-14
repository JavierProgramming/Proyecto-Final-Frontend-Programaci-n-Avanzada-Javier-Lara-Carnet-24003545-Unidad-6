'use client'
import { useEffect, useState } from 'react'
import { createHabit, getHabits } from '@/lib/api'
import HabitCard from '@/components/HabitCard'
import { useRouter } from 'next/navigation'

export default function HabitsPage() {
  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState('')
  const router = useRouter()

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const fetchHabits = async () => {
    if (!token) return router.push('/login')
    const res = await getHabits(token)
    setHabits(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createHabit(token, { name: newHabit })
    setNewHabit('')
    fetchHabits()
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tus Hábitos</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input value={newHabit} onChange={e => setNewHabit(e.target.value)} required placeholder="Nuevo hábito"
          className="border p-2 flex-1" />
        <button className="bg-blue-600 text-white px-4 py-2">Agregar</button>
      </form>
      {habits.map(habit => (
        <HabitCard key={habit._id} habit={habit} token={token} onComplete={fetchHabits} />
      ))}
    </div>
  )
}
