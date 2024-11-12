"use client";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between m-6">
            <header>
                <Link href="/">
                    MEK
                </Link>
            </header>
            <nav>
                <ul className="flex gap-5">
                    <li className="font-bold"><Link href="/projects">Projects</Link></li>
                    <li className="font-bold"><Link href="/about">About</Link></li>
                    <li>Dark mode</li>
                </ul>
            </nav>
        </div>
    );
}