import axios from 'axios'


export const sendScheduleMail =  async (name: string, day: string, quantity: string, phone: string) => {
    const data = {
        name,
        day,
        quantity,
        phone,
    }

    try {
        return await axios.post("/api/schedule", data)
    } catch (error) {
        return error
    }
}