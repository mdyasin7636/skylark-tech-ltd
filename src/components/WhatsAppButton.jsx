import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappNumber = "016047350"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="w-10 h-10 animate-heartbeat" />
        </a>
    );
};

export default WhatsAppButton;
