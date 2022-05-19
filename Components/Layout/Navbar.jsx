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
            link: "/wspolpraca",
            title: "Współpraca B2B",
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
        <nav ref={ref} className="flex flex-wrap items-center justify-between h-20 shadow-bottom">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="h-full w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <div className="pt-5">
                        <Link href="/">
                            <a>
                                <Image src='/assets/logo-myfloor.png' width='172' height='41' alt="Logo MyFloor"/>
                            </a>
                        </Link>
                    </div>
                    <button
                        className="cursor-pointer text-3xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={openCloseHamburger}>
                        {isModalOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
                    </button>
                </div>
                <div className={"lg:flex flex-grow items-center" + (isModalOpen ? " flex" : " hidden")}>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {menuItems.map((item,index) => (
                            <li
                                key={index}
                                className="nav-item">
                                <Link href={item.link}>
                                    <a
                                        onClick={openCloseHamburger}
                                        className="mx-3 py-2 flex items-center text-sm font-bold hover:opacity-75">{item.title}
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

