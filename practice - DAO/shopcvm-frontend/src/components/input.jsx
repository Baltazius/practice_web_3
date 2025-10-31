export default function Input({value, type="text", name, placeholder, onChange, required, className}) {


    return <input value={value} onChange={onChange} type={type} name={name} required={required} placeholder={placeholder} className={"border border-b-black mb-1 " + className}/>
}