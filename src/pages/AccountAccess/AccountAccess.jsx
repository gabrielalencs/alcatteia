import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FiAtSign } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Input from "./Input";
import Lobo from "../../assets/login/logo_login.svg";
import userService from "../../services/userservice";
import { setSessionUser } from "../../utils/sessionUser";
import { useNavigate } from "react-router";

const AccountAccess = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputRole, setInputRole] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.loginUsuario({
                email: inputEmail,
                senha: inputPassword,
            });
            console.log("Logado!", response.data);
            setSessionUser(response.data);
            navigate("/kanban");
        } catch (erro) {
            console.error("Erro ao logar:", erro);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.criarUsuario({
                nome: inputName,
                email: inputEmail,
                senha: inputPassword,
                tipo_usuario: inputRole,
            });
            console.log("Cadastrado!", response.data);
            navigate("/kanban");
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="h-screen bg-image w-full flex items-center justify-center px-4 bg-gradient-to-bl from-gray-900 via-[#2f0846] to-black">
            <div className="relative z-10 w-full max-w-4xl h-[500px] bg-[#1F132E] rounded-xl overflow-hidden shadow-2xl transition-all duration-700">
                <div
                    className={`absolute w-1/2 h-full flex flex-col items-center justify-center text-white top-0 transition-transform duration-700 ease-in-out ${isLogin ? "translate-x-0" : "translate-x-full"} z-10 p-10`}
                >
                    <h2 className={`text-3xl font-bold mb-6 text-white  ${isLogin ? "mb-6" : "mb-9"}`}>
                        {isLogin ? "Faça seu login" : "Cadastrar"}
                    </h2>

                    {isLogin && (
                        <div className="text-2xl text-[#7F4BE6] flex items-center gap-5 mb-9 mt-6">
                            <BsInstagram />
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    )}

                    <form className="flex flex-col w-9/12" onSubmit={(e) => isLogin ? handleLogin(e) : handleRegister(e)}>
                        {!isLogin && (
                            <Input
                                text="Nome"
                                type="name"
                                icon={<IoMdPerson />}
                                inputValue={inputName}
                                setInpuValue={setInputName}
                            />
                        )}

                        <Input
                            text="Email"
                            type="email"
                            icon={<FiAtSign />}
                            inputValue={inputEmail}
                            setInpuValue={setInputEmail}
                        />

                        <Input
                            text="Senha"
                            type="password"
                            icon={<FaLock />}
                            inputValue={inputPassword}
                            setInpuValue={setInputPassword}
                        />

                        {!isLogin && (
                            <>
                                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecione uma opção</label>
                                <select
                                    id="role"
                                    className="peer dark:text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-zinc-500 border-solid dark:bg-[#140e1b] rounded-[10px] m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-[#9160cb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[##9060cb45 dark:focus-visible:ring-[#9060cb18]"
                                    value={inputRole}
                                    onChange={(e) => setInputRole(e.target.value)}
                                >
                                    <option value="" disabled>Selecione seu cargo</option>
                                    <option value="RH">Recursos Humanos (RH)</option>
                                    <option value="LIDER">Líder</option>
                                    <option value="FUNC">Funcionário</option>
                                </select>
                            </>
                        )}

                        <button
                            type="submit"
                            className="bg-purple-700 text-white py-2 rounded-md mt-8 hover:bg-purple-800 transition"
                        >
                            {isLogin ? "Entrar" : "Criar Conta"}
                        </button>
                    </form>
                </div>

                <div
                    className={`absolute top-0 w-1/2 h-full bg-black z-50 text-white flex flex-col items-center justify-center p-10 transition-transform duration-700 ease-in-out
                        ${isLogin ? "translate-x-full" : "translate-x-0"}
                    `}
                >
                    <img src={Lobo} alt="Nosso Icon" />
                    <h2 className="text-3xl font-bold mb-4">
                        {isLogin ? "Bem-vindo de volta!" : "Já tem uma conta?"}
                    </h2>

                    <p className="mb-5 text-center max-w-[350px]">
                        {isLogin
                            ? "Acesse sua conta novamente para continuar usando nossos serviços"
                            : "Faça login com sua conta existente para continuar."}
                    </p>
                    <p className="mb-6 text-center max-w-sm font-semibold">
                        {isLogin ? "Ainda não tem uma conta?" : "Já possui uma conta?"}
                    </p>

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#0EA6C3] py-2 px-6 rounded-full bg-transparent border-2 border-[#0EA6C3] shadow-[#0ea5c362] shadow-lg font-semibold"
                    >
                        {isLogin ? "Criar Conta" : "Entrar"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountAccess;