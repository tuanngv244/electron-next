'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Role } from '@prisma/client'

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role: Role
}

interface AuthContextType {
  user: User | null
  status: 'loading' | 'authenticated' | 'unauthenticated'
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => Promise<void>
  isAdmin: boolean
  isTeacher: boolean
  isStudent: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      setUser(session.user as User)
    } else {
      setUser(null)
    }
  }, [session])

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })

      return !result?.error
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push('/auth/signin')
  }

  const isAdmin = user?.role === 'ADMIN'
  const isTeacher = user?.role === 'TEACHER'
  const isStudent = user?.role === 'STUDENT'

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        signIn: login,
        signOut: logout,
        isAdmin,
        isTeacher,
        isStudent
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
