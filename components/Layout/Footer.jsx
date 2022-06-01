import {AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-footerGray text-zinc-100">
            <div className="mx-auto py-20 text-center md:text-left max-w-screen-3xl container footer-logo">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
                    <div className="mt-6">
                        <p className="uppercase mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a>blog</a>
                            </Link>
                        </p>
                        <p className="uppercase mb-2 flex justify-center md:justify-start">
                            <Link href="/strefa-architekta">
                                <a>strefa architekta</a>
                            </Link>
                        </p>
                        <p className="uppercase mb-2 flex justify-center md:justify-start">
                            <Link href="/zastosowanie">
                                <a>zastosowanie</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a className="">Podłogi do salonu</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a className="">Podłogi do kuchni</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a className="">Podłogi do sypialni</a>
                            </Link>
                        </p>
                    </div>


                    <div className="mt-6">
                        <p className="uppercase mb-2 flex justify-center md:justify-start">
                            <Link href="/infromacje">
                                <a>informacje</a>
                            </Link>
                        </p>
                        <p className="capitalize mb-2 flex justify-center md:justify-start">
                            <Link href="/strefa-architekta">
                                <a>strefa architekta</a>
                            </Link>
                        </p>
                        <p className="capitalize mb-2 flex justify-center md:justify-start">
                            <Link href="/powierzchnie-i-struktury">
                                <a>do pobrania</a>
                            </Link>
                        </p>
                        <p className="capitalize mb-2 flex justify-center md:justify-start">
                            <Link href="/akcesoria">
                                <a>akcesoria</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a>Specyfikacja techniczna</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/blog">
                                <a>Gwarancja jakości</a>
                            </Link>
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="uppercase mb-2 flex justify-center md:justify-start">
                            <Link href="/">
                                <a>my floor</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/znajdz-salon">
                                <a>Znajdź salon</a>
                            </Link>
                        </p>
                        <p className="capitalize mb-2 flex justify-center md:justify-start">
                            <Link href="/kontakt">
                                <a>kontakt</a>
                            </Link>
                        </p>
                        <p className="mb-2 flex justify-center md:justify-start">
                            <Link href="/mapa-strony">
                                <a>Mapa strony</a>
                            </Link>
                        </p>

                    </div>


                    <div className="mt-6">
                        <Link href="/" >
                            <a>
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
            <div className="text-center p-4 bg-copyRight">
                <span>© {new Date().getFullYear()} Copyright:
                     <a className="font-semibold" href="https://developard.pl/"> Developard</a>
                </span>

            </div>
        </footer>
    );
};

