"use client";
import Link from "next/link";
import Image from "next/image";

import modeSwitch from "@/utilities/mode-switch.png"

export default function Header() {
    return (
        <div className="flex justify-between m-6">
            <header>
                <Link href="/" className="font-bold text-xl">
                    MEK
                </Link>
            </header>
            <div>
                <nav>
                    <ul className="flex gap-7 items-center">
                        <li className="font-bold"><Link href="/projects">Projects</Link></li>
                        <li className="font-bold"><Link href="/about">About</Link></li>
                        <Image src={modeSwitch} alt="mode switcher" className="w-full"/>
                    </ul>
                </nav>
            </div>
        </div>
    );
}