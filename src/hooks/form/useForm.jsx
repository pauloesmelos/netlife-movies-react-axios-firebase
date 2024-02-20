import React from "react";
const inputs = {
    name: {
        regexp: /^(?=.*[a-zA-Z_])\w*$/,
        erro: "Dont fill only numbers.",
    },
    email: {
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        erro: "This is invalid e-mail."
    },
    password: {
        regexp: /^.{6,}$/,
        erro: "Password should be more than 6 characters."
    },
}
/* type = name, email or password */
const useForm = (type) => { // ideia: criar mais regexp p/ cada e mudar as msg de erro conforme preenchimento
  const [input, setInput] = React.useState("");
  const [erro, setErro] = React.useState("");

  const firstLetterCapitalize = (text) => {
    let firstLetter = text.substring(0,1).toString();
    return text.replace(firstLetter, firstLetter.toUpperCase());
  }
  const verify = (text) => {
    let retorno = null;
    if(inputs[type].regexp.test(text)) {
        setErro("");
        retorno = true;
    }
    else if(text.length === 0) {
        setErro(`${firstLetterCapitalize(type)} dont can be empty.`);
        retorno = false;
    }
    else {
      setErro(inputs[type].erro);
      retorno = false;
    }
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
  return { input, onBlur, handleInput, erro, verify: () => verify(input) }
}

export default useForm;