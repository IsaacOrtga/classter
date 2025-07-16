// ************************* INSIDE GET ***********************//
import type { User } from "@/types/user";

export async function login(email: string, password: string): Promise<User>{
    const response = await fetch("/api/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password }),
    });

    if(!response.ok){
        throw new Error('Error al iniciar sesión');
    }
    return response.json();
}


// ************************ END OF GET ***********************//