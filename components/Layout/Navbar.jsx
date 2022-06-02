import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef, useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setModalOpen(false));

    function openCloseHamburger() {
        setModalOpen(prev => !prev);
    }


    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Do nothing if clicking ref's element or descendent elements
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [ref, handler]
        );
    }

    const menuItems = [
        {
            link: "/kolekcje",
            title: "Kolekcje",
        },
        {
            link: "/informacje",
            title: "Informacje",
        },
        {
            link: "/blog",
            title: "Blog",
        },
        {
            link: "/strefa-architekta",
            title: "Strefa Architekta",
        },
        {
            link: "/kontakt",
            title: "Kontakt",
        },
        {
            link: "/znajdz-salon",
            title: "Znajdź salon",
        },
        {
            link: "/do-pobrania",
            title: "Do pobrania",
        },
    ];

    return (
        <nav className="shadow-bottom" ref={ref}>
            <div className="lg:flex items-center justify-between h-22 items-center container mx-auto">
                <div className="mx-auto flex flex-wrap justify-between xl:basis-4/12">
                    <div className="pt-5 pb-2">
                        <Link href='/' passHref>
                            <a>
                                <Image src='/assets/logo-mf-czarne.png'
                                       width='172'
                                       height='41'
                                       alt="Logo MyFloor"
                                       priority/>
                            </a>
                        </Link>
                    </div>
                    <div className="pt-3 pb-2">
                        <button
                            className="cursor-pointer text-3xl leading-none mx-3 my-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            aria-label="menu"
                            onClick={openCloseHamburger}>
                            {isModalOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
                        </button>
                    </div>
                </div>
                <div className={`lg:flex items-center ${(isModalOpen ? "block" : " hidden")}`}>
                    <ul className="flex flex-col lg:flex-row lg:ml-auto">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="md:flex-none flex justify-center">
                                <Link href={item.link}>
                                    <a
                                        onClick={openCloseHamburger}
                                        className="mx-3 py-2 flex items-center uppercase text-sm font-bold hover:opacity-75 leading-snug text-center">{item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

