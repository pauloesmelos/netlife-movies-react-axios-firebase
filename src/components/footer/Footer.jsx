import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }
  return (
    <footer className="w-full bg-[#111] pt-16">
      <div className="w-full max-w-[1200px] mx-auto px-10 xl:px-0">
        <div>
            <h2 className="text-red-600 font-bold text-4xl ">
                NETLIFE
            </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-3 justify-between text-gray-500 text-sm py-12">
            <ul className="flex flex-col gap-2">
                <li className="hover:text-red-500 cursor-pointer">Perguntas frequentes</li>
                <li className="hover:text-red-500 cursor-pointer">Relação com investidores</li>
                <li className="hover:text-red-500 cursor-pointer">Formas de assistir</li>
                <li className="hover:text-red-500 cursor-pointer">Informações corporativas</li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="hover:text-red-500 cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-red-500 cursor-pointer">Carreiras</li>
                <li className="hover:text-red-500 cursor-pointer">Termos de Uso</li>
                <li className="hover:text-red-500 cursor-pointer">Entre em contato</li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="hover:text-red-500 cursor-pointer">Conta</li>
                <li className="hover:text-red-500 cursor-pointer">Resgatar cartão pré-pago</li>
                <li className="hover:text-red-500 cursor-pointer">Privacidade</li>
                <li className="hover:text-red-500 cursor-pointer">Teste de velocidade</li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="hover:text-red-500 cursor-pointer">Media Center</li>
                <li className="hover:text-red-500 cursor-pointer">Comprar cartão pré-pago</li>
                <li className="hover:text-red-500 cursor-pointer">Cookies</li>
                <li>
                    <a className="text-red-600" target="_blank" href="https://github.com/pauloesmelos">
                      Desenvolvedor
                    </a>
                </li>
            </ul>
        </div>
        <div className="py-10">
            <FaRegArrowAltCircleUp
              className="text-5xl text-white animate-piscar cursor-pointer hover:text-red-600"
              onClick={toTop}
            />
        </div>
      </div>
    </footer>
  )
}

export default Footer;