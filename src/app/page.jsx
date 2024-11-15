import Layout from "@/components/Layout";


export default function LandingPage() {
    return (
        <>
            <Layout current="Home">
            <section className="mx-20">
                <header className="flex flex-col space-y-20">
                    <h1 className="font-bold uppercase text-8xl w-min">Marie Engestoft Kj&AElig;rside</h1>
                    <p className="w-2/6 text-right text-xl self-end">Hi there! I am Webdevelopment student at KEA - Copenhagen School of design and Technology with a passion for creating digital solutions that stands out.</p>
                </header>
            </section>
            </Layout>
        </>
    );
} 