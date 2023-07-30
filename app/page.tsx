import Navbar from "@/app/navbar";
import Container from "@/app/container";

export default function Home() {
    return (
        <div>
            <header className="w-10/12 mx-auto pt-4">
                <Navbar />
            </header>
            <main className="lg:pt-16 relative w-10/12 mx-auto pt-4">
                <Container />
            </main>
        </div>
    );
}