'use client'
import { useState } from 'react'
import { login } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login({ email, password })
    localStorage.setItem('token', res.data.token)
    router.push('/habits')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Iniciar Sesión</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Correo"
        className="border p-2 w-full" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Contraseña"
        className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Entrar</button>
    </form>
  )
}
