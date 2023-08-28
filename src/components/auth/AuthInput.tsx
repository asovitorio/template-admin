type Type = 'text' | 'number' | 'password' | 'email'
interface AuthInputProps {
  label: string
  placeholder?: string
  onChange?: (value: any) => void
  type: Type
  value: any
}
export default function AuthInputs(props: AuthInputProps) {
  return (
    // div
    <div
      className={`
            flex flex-col
            `}
    >
      {/* label */}
      <label
        className={`
            
            `}
      >
        {props.label}
      </label>
      {/* Input */}
      <input
    
     
        className={`
            px-4 py-3 rounded-lg bg-gray-200 mb-4
            border-2 focus:border-blue-500
            outline-none focus:bg-white
            `}
        type={props.type ?? 'text'}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  )
}
