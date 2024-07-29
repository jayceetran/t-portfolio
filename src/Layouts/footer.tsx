export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-10">
            <div className="container mx-auto flex flex-wrap justify-between gap-5 text-secondary">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">About Us</h4>
                    <p>We are a leading IT development team specializing in Blockchain, AI, and web development. Our mission is to deliver innovative and efficient solutions to meet our clients' needs.</p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                    <ul>
                        <li><span className="font-semibold">Phone:</span> (123) 456-7890</li>
                        <li><span className="font-semibold">Email:</span> info@yourcompany.com</li>
                        <li><span className="font-semibold">Address:</span> 123 Main St, Anytown, USA</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto text-center mt-8 text-secondary font-bold">
                <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    )
}