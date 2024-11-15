import Layout from "@/components/Layout";
import Image from "next/image";

import vigFestival from "@/img/vig_festival.png"
import fooFest from "@/img/foofest.png"
import luItems from "@/img/luitems.png"
import personalProfile from "@/img/personal_profile.png"

export default function Projects() {
    return (
        <Layout current="Projects"> 
            <div className="mx-20">
                <header className=" flex flex-col items-end">
                    <h1 className="font-bold uppercase text-8xl w-min">Projects</h1>
                    <p className="font-bold">&#40;some of them&#41;</p>
                </header>
                <section className="mx-10">
                    <article className="flex justify-between border-b-2 border-b-[var(--accent-color)] py-8">
                        <Image src={vigFestival} alt="Redesign of Vig Festival" className="w-2/5"/>
                        <section className="self-end">
                            <h2 className="font-bold uppercase text-4xl">Vig festival</h2>
                            <p className="w-3/4">Research, Visual identity, UX/UI, Website, Strategy, SoMe, Astro</p>
                        </section>
                    </article>
                    <article className="flex justify-between border-b-2 border-b-[var(--accent-color)] py-8">
                        <Image src={fooFest} alt="FooFest festival" className="w-2/5"/>
                        <section className="self-end">
                            <h2 className="font-bold uppercase text-4xl">Foofest</h2>
                            <p className="w-3/4">Visual Identity, UX/UI, Website, Accessibility, Database, Next.js</p>
                        </section>
                    </article>
                    <article className="flex justify-between border-b-2 border-b-[var(--accent-color)] py-8">
                        <Image src={luItems} alt="Redesign of LÜ Items" className="w-2/5"/>
                        <section className="self-end">
                            <h2 className="font-bold uppercase text-4xl">LÜ Items</h2>
                            <p className="w-3/4">Research, Visual identity, UX/UI, Website, Strategy, SoMe, Astro</p>
                        </section>
                    </article>
                    <article className="flex justify-between border-b-2 border-b-[var(--accent-color)] py-8">
                        <Image src={personalProfile} alt="Personal Profile" className="w-2/5"/>
                        <section className="self-end">
                            <h2 className="font-bold uppercase text-4xl">Personal Profile</h2>
                            <p className="w-3/4">UX/UI, Website, Animations, Visual Identity, Website, UX/UI</p>
                        </section>
                    </article>
                </section>
            </div>
        </Layout>
    );
}