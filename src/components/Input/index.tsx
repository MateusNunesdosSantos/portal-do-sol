import { InputProps } from "@material-tailwind/react"
import { ChangeEventHandler } from "react"


interface InputBaseProps extends InputProps {
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value: string
}

export function InputBase({placeholder,type, onChange, value}: InputBaseProps) {
    return (
        <input  
            placeholder={placeholder} 
            type={type}
            onChange={onChange}
            value={value}
            className='px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md 
                      text-gray-900  border-gray-100 bg-gray-100/50' 
        
    />
    )

}