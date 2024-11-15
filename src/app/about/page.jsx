import Image from "next/image";
import Layout from "@/components/Layout";

import profileImage from "@/img/profile.JPG"

export default function About() {
    return (
        <Layout current="About">
            <div className="mx-20">
                <header className="flex flex-col items-end">
                    <h1 className="font-bold uppercase text-8xl w-min">About</h1>
                </header>
                <div className="grid">
                    <p className="w-2/5 my-10">I&apos;m passionate about building dynamic, user-friendly websites, and I enjoy blending my technical expertise with a keen interest in digital and web design. My goal is to create solutions that not only perform well but also deliver a visually engaging experience for users.</p>
                    <section className="flex flex-col space-y-10">
                        <article className="w-1/5">
                            <h2 className="font-bold uppercase">My skills</h2>
                            <p>Python, React, Next.js, Astro, Bottle, Git, Vercel, Netlify, CSS3, HTML5, Javascript, UX, Figma</p>
                        </article>
                        <article className="justify-self-end self-end w-1/5">
                            <h2 className="font-bold uppercase">What i aspire to do?</h2>
                            <p>Design driven, Accessibility, Mobile first, Creative web applications, </p>
                        </article>
                    </section>
                    <section className="px-8 border-l-2 border-l-[var(--accent-color)]">
                        <div>
                            <Image src={profileImage} alt="" className="w-1/2"/>
                            <p>(this is me)</p>
                        </div>
                        <article>
                            <h3 className="font-bold">Education</h3>
                            <div>
                                <h4>2024 -</h4>
                                <p>Webdevelopment - KEA</p>
                            </div>
                            <div>
                                <h4>2022-2024</h4>
                                <p>Multimediadesign - KEA</p>
                            </div>
                            <div>
                                <h4>2022</h4>
                                <p>Graphic Design - Krabbesholm Højskole</p>
                            </div>
                            <div>
                                <h4>2016-2019</h4>
                                <p>STX - Lemvig Gymnasium</p>
                            </div>
                        </article>
                        <article className="">
                            <h3 className="font-bold">Work experience</h3>
                            <div>
                                <h4>2023-</h4>
                                <p>Editorial Assistent - Wunderkind</p>
                            </div>
                            <div>
                                <h4>2024</h4>
                                <p>Intern - Squarely Copenhagen</p>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </Layout>
    );
}