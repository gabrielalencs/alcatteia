import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router";

const InProgress = () => {
    return (
        <section className="mt-24">
            <div className="bg-[#7c50aa9a] p-5 flex items-center gap-5 rounded-xl w-full">
                <div className="h-9 w-9 rounded-full bg-yellow-400"></div>
                <span className="text-white text-xl font-semibold md:text-2xl">Reuniões em andamento:</span>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-10 lg:gap-16">
                <div className="bg-[#331A4E] text-white p-5 rounded-xl">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">Daily</h3>
                            <p className="opacity-80 md:text-lg">Administrador(a): Isabelle Gomes</p>
                        </div>

                        <div className="flex items-center h-max px-2 py-1 rounded-full italic gap-2 bg-yellow-950">
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            Ao vivo
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <FaRegClock />
                                <span className="opacity-80 md:text-lg">Qui, 05/05/2025, 07h30</span>
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                                <p className="md:text-lg">Hoje vamos alinhar o andamento das demandas do último projeto, verificando o status de cada etapa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7">
                        <Link
                            to="/calls"
                            className="py-2 w-full block text-center font-semibold bg-[#F4C712] rounded-full text-2xl text-black"
                        >
                            Juntar-se a reunião
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InProgress