import { useState } from "react";

const reviews = [
    {
        name: 'John D.',
        avatar: './assets/clients/client-1.jpg',
        review: "Working with this IT development team has been an absolute pleasure. They built a custom blockchain solution for our financial transactions, which has significantly increased our security and efficiency. Their expertise in blockchain technology is unmatched. Highly recommended!"
    },
    {
        name: 'Sarah K.',
        avatar: './assets/clients/client-2.jpg',
        review: "We hired this team to develop an AI-powered recommendation system for our online store. The results were phenomenal! Our sales have increased by 30% since implementing their solution. They were professional, responsive, and delivered on time. We couldn't be happier."
    },
    {
        name: 'Michael S.',
        avatar: './assets/clients/client-3.jpg',
        review: "Our website needed a complete overhaul, and this team delivered beyond our expectations. They created a sleek, responsive, and user-friendly website that has greatly improved our online presence. Their attention to detail and creativity are commendable. We will definitely be working with them again in the future."
    },
    {
        name: 'Emily R.',
        avatar: './assets/clients/client-4.jpg',
        review: "The blockchain-based patient record system developed by this team has transformed the way we handle data. It's secure, efficient, and easy to use. Their understanding of our needs and their technical expertise were evident throughout the project. We highly recommend their services!"
    },
    {
        name: 'David L.',
        avatar: './assets/clients/client-1.jpg',
        review: "We wanted to integrate AI-driven analytics into our media platform, and this team delivered exceptional results. The insights we've gained have been invaluable for our business strategy. They were professional, knowledgeable, and always available for support. A fantastic team to work with."
    },
];

export default function Home() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center h-[100vh]">
                <div className=" w-full md:w-2/4 flex justify-center">
                    <img className="animate-jump-in animate-once" src="./assets/pngegg.png" alt="devs" />
                </div>
                <div className="w-full md:w-2/4 gap-6 flex flex-col animate-fade-up animate-delay-500">
                    <p className="text-secondary font-semibold text-center text-2xl md:text-3xl lg:text-4xl">Meet Our Expert Software Development Team</p>
                    <p className="text-secondary text-center text-xl">Innovative solutions powered by a dedicated team of tech professionals.</p>
                </div>
            </div>
            <div className="flex flex-col items-center mb-48">
                <p className="text-secondary text-4xl sm:text-6xl font-bold text-shadow">Our Services</p>
                <div className="flex flex-row flex-wrap w-full gap-6 mt-36 justify-center">
                    <div className="service-card text-secondary">
                        <div className="card hover:scale-110 duration-500">
                            <img width={350} alt="blockchain" className="h-[calc(100%-96px)] rounded-t-xl" src="./assets/services/blockchain.png" />
                            <div className="h-24 flex justify-center items-center border border-secondary rounded-b-xl">
                                <p className="text-secondary font-bold">Blockchain Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card text-secondary">
                        <div className="card hover:-hue-rotate-180 duration-[5s]">
                            <img width={350} alt="ai" className="h-[calc(100%-96px)] rounded-t-xl" src="./assets/services/ai.png" />
                            <div className="h-24 flex justify-center items-center border border-secondary rounded-b-xl">
                                <p className="text-secondary font-bold">AI & Machine Learning Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card text-secondary">
                        <div className="card hover:animate-wiggle duration-500">
                            <img width={350} alt="web" className="rounded-t-xl h-[calc(100%-96px)]" src="./assets/services/web.png" />
                            <div className="h-24 flex justify-center items-center border border-secondary rounded-b-xl">
                                <p className="text-secondary font-bold">Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center h-[90vh]">
                <p className="text-secondary text-4xl sm:text-6xl font-bold text-shadow mb-10">Clients reviews</p>
                <div className="relative w-full max-w-3xl mx-auto p-4">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="w-full flex-shrink-0 sm:w-full p-4 text-center flex items-center flex-col gap-6">
                                    <img src={review.avatar} width={300} className="rounded-full" alt="avatar" />
                                    <p className="text-lg italic text-secondary">"{review.review}"</p>
                                    <p className="mt-2 text-blue-300 font-bold text-2xl">- {review.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute top-1/2 left-0 md:-left-5 border border-secondary transform -translate-y-1/2 hover:bg-gray-800 duration-500 text-secondary w-12 h-12 rounded-[50%]"
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 right-0 md:-right-5 border border-secondary transform -translate-y-1/2 hover:bg-gray-800 duration-500 text-secondary w-12 h-12 rounded-[50%]"
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}