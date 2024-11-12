// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function LandingPage() {
    return (
        <>
            {/* <Header/> */}
            <Layout current="Home">
            <main>
                <header>
                    <h1 className="font-bold uppercase text-7xl w-min">Marie Engestoft Kj&AElig;rside</h1>
                </header>
                <p>Hi there! I am Webdevelopment student at KEA - Copenhagen School of design and Technology with a passion for creating digital solutions that stands out.</p>
            </main>
            {/* <Footer/> */}
            </Layout>
        </>
    );
} 