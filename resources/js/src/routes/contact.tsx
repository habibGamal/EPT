import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section className="bg-ov-white min-h-[91vh] flex  items-center">
            <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center justify-center">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">Contact Us <br /> <span className="highlight-header"> any time</span></h2>
                    <ul className="flex gap-4 justify-center lg:justify-start flex-wrap sm:text-xl font-[500]">
                        <li><span className="highlight-text font-bold"> Phone</span> : 01098069075</li>
                        <li><span className="highlight-text font-bold"> Email</span> : youremail@domain.com</li>
                    </ul>
                    <div className="flex gap-8 my-4 justify-center lg:justify-start">
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size={'4x'} className="text-blue-600" />
                        </a>
                        <a href="http://www.whatsapp.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size={'4x'} className="text-green-600" />
                        </a>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img className="h-full w-full object-contain mx-auto" src="./imgs/contact.png" alt="" />
                </div>
            </div>
        </section>
    )
}
