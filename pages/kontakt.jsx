import {Path} from "../components/Path";
import {useForm} from "react-hook-form";
import Image from "next/image";

const contact = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = async (data) => {
        await fetch('api/mail', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    return (
        <div>
            <Path pathTitle="kontakt"/>

            <div className="mx-auto flex flex-wrap justify-center w-5/6 mt-32 content-inside pb-4">
                <div className="flex flex-col justify-center items-center w-min-[30rem]">
                    <div className="relative w-[30rem] h-36">
                        <Image src="/PLANKO.png"
                               alt="Logo Planko"
                               layout="fill"
                               objectFit="contain"
                        />
                    </div>
                    <h1 className="mb-28">Skontaktuj się z nami</h1>
                </div>
                <form className="w-min-[30rem] lg:px-24 font-sans" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="name">
                                Imię
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="name"
                                id="name"
                                {...register('name', {required: true})}
                            />
                            {errors.name && <p className="text-red-500 text-xs italic">Proszę wypełnij dane.</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="subject">
                                Temat
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                id="subject"
                                {...register('subject', {required: true})}

                            />
                            {errors.subject && <p className="text-red-500 text-xs italic">Proszę wypełnij dane.</p>}

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="mail">
                                E-mail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                {...register('mail', {required: true})}
                            />
                            {errors.mail && <p className="text-red-500 text-xs italic">Proszę wypełnij dane.</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="message">
                                Wiadomość
                            </label>
                            <textarea
                                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="message"
                                {...register('message', {required: true})}
                            />
                            {errors.message && <p className="text-red-500 text-xs italic">Proszę wypełnij dane.</p>}

                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button
                                className="shadow bg-copyRight hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Wyślij
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default contact;