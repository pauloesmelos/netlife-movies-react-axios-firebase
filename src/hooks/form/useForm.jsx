import React from "react";
const inputs = {
    name: {
        regexp: /^[a-zA-Z_]{3,}$/,
        erro: "Invalid name, dont fill only numbers."
    },
    email: {
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        erro: "Invalid email, try again."
    },
    password: {
        regexp: /^.{3,}$/,
        erro: "Password should be more than 3 characters."
    },
}
/* type = name, email or password */
const useForm = (type) => { // ideia: criar mais regexp p/ cada e mudar as msg de erro conforme preenchimento
  const [input, setInput] = React.useState("");
  const [erro, setErro] = React.useState("");

  const verify = (text) => {
    let retorno = null;
    if(inputs[type].regexp.test(text)) {
        setErro("");
        retorno = true;
    }
    else if(text.length === 0){
        setErro(`${type} dont can be empty.`);
        retorno = false;
    }
    else {
        setErro(inputs[type].erro);
        retorno = false;
    }
    console.log(retorno);
    return retorno;
  }
  const handleInput = ({ target }) => {
    if(erro) {
        verify(target.value);
    }
    setInput(target.value);
  }
  const onBlur = ({ target }) => {
    verify(target.value);
  }
  return { input, onBlur, handleInput }
}

export default useForm;