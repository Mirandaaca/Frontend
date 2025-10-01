
const API_URL = import.meta.env.VITE_URL

export const getUserList = async ()=>{

    try {
        const response = await fetch(`${API_URL}/users`)
        if(!response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        throw new Error("error fetching")
    }

}

export const createUserList = async (form)=>{

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        if(!response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        throw new Error("error fetching")
    }

}


export const updateUser = async (form)=>{

    try {
        const response = await fetch(`${API_URL}/users/${form.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        if(!response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        throw new Error("error fetching")
    }


}

export const deleteUser = async (form)=>{

    try {
        const response = await fetch(`${API_URL}/users/${form.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        if(!response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        throw new Error("error fetching")
    }


}
