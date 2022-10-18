import axios from 'axios'

export const sendContactMail = async (
  name: string,
  email: string,
  message: string,
  phone: string,
) => {
  const data = {
    name,
    email,
    message,
    phone,
  }

  try {
    return await axios.post('/api/contact', data)
  } catch (error) {
    return error
  }
}
