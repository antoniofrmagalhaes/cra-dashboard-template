import React from 'react'
import api from '../services/api'

interface IUser {
  name: string
  email: string
}

interface IAuthContextProps {
  isAuthenticated: boolean
  user: IUser | null
  loading: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = React.createContext<IAuthContextProps>(
  {} as IAuthContextProps
)

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContextProps => {
  return React.useContext(AuthContext)
}

export function useProvideAuth(): IAuthContextProps {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {}, [])

  const login = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      setLoading(true)
      const {
        data: { user, token }
      } = await api.post('sessions', {
        email,
        password
      })
      api.defaults.headers.Authorization = `Bearer ${token}`
      setUser(user)
      setLoading(false)
    },
    []
  )

  const logout = React.useCallback(() => {
    setUser(null)
    delete api.defaults.headers.Authorization
  }, [])

  return {
    isAuthenticated: true,
    user,
    loading,
    login,
    logout
  }
}

export default AuthProvider
