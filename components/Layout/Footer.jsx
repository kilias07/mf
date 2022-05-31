import {AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                            Tailwind ELEMENTS
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">Angular</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">React</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">Vue</a>
                        </p>
                        <p>
                            <a href="#!" className="text-gray-600">Laravel</a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">Pricing</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">Settings</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-gray-600">Orders</a>
                        </p>
                        <p>
                            <a href="#!" className="text-gray-600">Help</a>
                        </p>
                    </div>
                    <div className="">
                        <Link href="/" >
                            <a >
                                <Image src='/assets/logo-myfloor.png' width='172' height='41' alt="Logo MyFloor" />
                            </a>
                        </Link>

                        <p className="flex items-center justify-center md:justify-start my-4">
                            PLANKO Sp. z o.o. Sp. k.
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            ul. Lipowa 12
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            62-080 Kokoszczyn
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            NIP PL7831786739
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            Tel.(22) 27-52-656
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-200">
                <span>© {new Date().getFullYear()} Copyright:
                     <a className="text-gray-600 font-semibold" href="https://developard.pl/"> Developard</a>
                </span>

            </div>
        </footer>
    );
};

