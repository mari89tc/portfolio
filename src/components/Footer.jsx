import Link from "next/link";

export default function Footer() {

    return(
        <div className="flex justify-between bottom-0 bg-[var(--tertiary-color)] text-[var(--secondary-color)] p-10 px-20 mt-60">
            <section className="w-80">
                <p className="text-2xl">Reach out to me for any questions or simply just to have a talk over a cup of coffee <a className="cursor-pointer hover:text-[var(--accent-color)]" href="mailto:m.kjaerside@outlook.com">___________</a></p>
            </section>
            <div className="flex space-x-20">
                <section>
                    <h4 className="font-bold">Contact</h4>
                    <div className="space-y-3">
                        <Link href="https://github.com/mari89tc"><p>GitHub</p></Link>
                        <Link href="www.linkedin.com/in/marie-e-kjaerside-903482261"><p>LinkedIn</p></Link>
                        <Link href="mailto:m.kjaerside@outlook.com"><p>E-Mail</p></Link>
                        <Link href="tel:+4530339770"><p>Phone</p></Link>
                    </div>
                </section>
                <section>
                    <h4 className="font-bold">Located</h4>
                    <p>Copenhagen</p>
                </section>
            </div>
        </div>
    );
}