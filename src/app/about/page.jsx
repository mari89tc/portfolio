import Layout from "@/components/Layout";

export default function About() {
    return (
        <Layout current="About"> 
            <header>
                <h1 className="font-bold uppercase text-7xl w-min">About</h1>
            </header>
            <p>I&apos;m passionate about building dynamic, user-friendly websites, and I enjoy blending my technical expertise with a keen interest in digital and web design. My goal is to create solutions that not only perform well but also deliver a visually engaging experience for users.</p>
            <article>
                <h2>MY SKILLS</h2>
                <p>Python, React, Next.js, Astro, Bottle, Git, Vercel, Netlify, CSS3, HTML5, Javascript, UX, Figma</p>
            </article>
            <article>
                <h2>WHAT I ASPIRE TO DO?</h2>
                <p>Design driven, Accessibility, Mobile first, Creative web applications, </p>
            </article>
        </Layout>
    );
}