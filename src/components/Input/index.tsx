

interface InputBaseProps {
    placeholder?: string
    type?: string
}

export function InputBase({placeholder,type}: InputBaseProps) {
    return (
        <input  placeholder={placeholder} type={type}  
           className='px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 rounded-md 
                      text-gray-900  border-[#ADADAD] bg-gray-200' 
        
    />
    )

}