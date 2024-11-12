import Layout from "@/components/Layout";
import Image from "next/image";

import vigFestival from "@/img/vig_festival.png"

export default function Projects() {
    return (
        <Layout current="Projects"> 
            <header className=" flex flex-col items-end">
                <h1 className="font-bold uppercase text-7xl w-min">Projects</h1>
                <p className="font-bold">&#40;some of them&#41;</p>
            </header>
            <section className="mx-10">
                <article className="flex justify-between">
                    <Image src={vigFestival} alt="Redesign of Vig Festival" className="w-2/5"/>
                    <section className="self-end">
                        <h2 className="font-bold uppercase text-4xl">Vig festival</h2>
                        <p className="w-3/4">Research, Visual identity, UX/UI, Website, Strategy, SoMe, Astro</p>
                    </section>
                </article>
            </section>
        </Layout>
    );
}