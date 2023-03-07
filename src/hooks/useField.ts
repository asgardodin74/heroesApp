import { useState } from 'react';

/**
 * useField es una funcion que recibe un objeto
 * con atributo search: seleccionado atraves de un input
 * y el texto objeto de busqueda
 *  
 * 
 **/

export function useField<P={}>(initialform:P,name:string) {
  const [formState, setFormState] = useState(initialform);
  console.log("form STATE",formState);
  const onInputChange=(e:{target:{value:string}})=>{
      const{value}=e.target;
      setFormState({
                 ...formState,
                [name]:value
                })
  }//onInputChange

  const onResetForm=()=>{
    setFormState(initialform);
  }//onResetForm
  return{
        //Si desestructuramos el formState mandamos los atributos a el
        //componente padre (username,email)
        ...formState,
        formState,
        onInputChange,
        onResetForm,        
      }
}//useForm
