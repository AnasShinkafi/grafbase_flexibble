type Props = {
    type?: string;
    title: string;
    state: string;
    placeholder: string;
    isTextArea?: boolean;
    setState: (value: string) => void;
} 

const FormField = ({type, title, state, placeholder, isTextArea, setState}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
        
    </div>
  )
}

export default FormField