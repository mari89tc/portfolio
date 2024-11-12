import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export const metadata = {
    title: "My Portfolio | Marie E. Kjærside",
    description: "Webdevelopment student at KEA",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={poppins.className}>{children}</body>
    </html>
    );
}