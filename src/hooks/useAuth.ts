import { useState } from "react"
import { User } from "@/types/user";
import { login } from "@/services/api";

const useAuth = () => {
    const [user, setUser ] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    async function signIn(email: string, password: string){
        setLoading(true);
        setError(null);
        try{
            const userData = await login(email, password);
            setUser(userData);
        }catch (err: any){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }
  return {user, loading, error, signIn};
}

export default useAuth
