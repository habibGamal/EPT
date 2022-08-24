import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section className="bg-ov-white min-h-[91vh] flex  items-center">
            <div className="container py-16 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center justify-between">
                <div>
                    <h3 className="text-5xl mb-8 font-bold uppercase">Contact Us <br /> <span className="highlight-header"> any time</span></h3>
                    <ul className="flex gap-4 flex-wrap text-xl font-[500]">
                        <li><span className="highlight-text font-bold"> Phone</span> : 01098069075</li>
                        <li><span className="highlight-text font-bold"> Email</span> : youremail@domain.com</li>
                    </ul>
                    <div className="flex gap-8 my-4">
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size={'4x'} className="text-blue-600" />
                        </a>
                        <a href="http://www.whatsapp.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size={'4x'} className="text-green-600" />
                        </a>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img className="h-full mx-auto" src="./imgs/contact.png" alt="" />
                </div>
            </div>
        </section>
    )
}
