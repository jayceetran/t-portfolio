import '../styles/about.css';

const members = [
    {
        name: 'Jaycee Tran.',
        avatar: './assets/teammembers/2.jpg',
        role: 'CEO & Founder',
        review: "John has over 20 years of experience in the tech industry and is a pioneer in blockchain technology."
    },
    {
        name: 'Jane Smith.',
        avatar: './assets/teammembers/3.jpg',
        role: 'Chief Technology Officer',
        review: "Jane is an expert in AI and machine learning, leading our technical team to create innovative solutions."
    },
    {
        name: 'Michael Brown.',
        avatar: './assets/teammembers/4.jpg',
        role: 'Lead Developer',
        review: "Michael specializes in web development and has a keen eye for design and user experience."
    },
    {
        name: 'Sasuke Uchiha.',
        avatar: './assets/teammembers/1.webp',
        role: 'Full Stack Developer',
        review: "John has over 20 years of experience in the tech industry and is a pioneer in blockchain technology."
    },
];

export default function About() {
    return (
        <div className="w-full">
            <main className="container mx-auto">
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row  pt-48 items-center">
                        <div className="w-4/5 md:w-2/4 animate-fade-down duration-700">
                            <img src="./assets/about.png" alt="about" />
                        </div>
                        <div className="w-4/5 md:w-2/4 animate-fade-left animate-delay-700">
                            <h2 className="text-4xl text-secondary font-bold mb-4 text-center">About Us</h2>
                            <p className="text-secondary text-center">We are a leading IT development team specializing in Blockchain, AI, and web development. Our mission is to deliver innovative and efficient solutions to meet our clients' needs.</p>
                        </div>
                    </div>

                </section>

                <section className="mb-12 flex flex-col items-center mt-40">
                    <h2 className="text-4xl font-bold mb-9 text-secondary">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member, key) => (
                            <div className="member-card" key={key}>
                                <div className="rounded-full border-secondary border w-48 h-48">
                                    <img src={member.avatar} alt="Team Member 1" className="w-48 h-48 object-cover rounded-full mb-4" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-secondary">{member.name}</h3>
                                <p className="text-secondary mb-4">{member.role}</p>
                                <p className="text-secondary text-center">{member.review}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}