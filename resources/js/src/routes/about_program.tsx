export default function AboutProgram() {
    return (
        <div className="container rtl py-8">
            <h1 className="text-4xl border-b-2 border-main w-fit pb-4 font-sans mx-auto mb-4 text-center">فكرة البرنامج</h1>
            <h2 className="text-center text-3xl font-bold font-sans">م.م/ مها أحمد قاسم </h2>
            <h3 className="text-3xl p-4 leading-tight border-2 rounded border-main bg-gray-50 w-fit pb-4 font-sans mx-auto my-8 text-center">
                البرنامج جزء من متطلبات الحصول على درجة دكتوراة في الفلسفة في التربية النوعية تخصص التربية الموسيقية ( بيانو )
                <br />
                تحت عنوان
                <br />
                " برنامج قائم على التعليم المدمج لرفع مستوى أداء الطلاب على آلة البيانو "
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
                <div className="block">
                    <h2 className="font-sans text-3xl bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">تحت إشراف كلاً من</h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name="أ.د/ علي حسين النجار"
                            title="أستاذ الأداء ( البيانو ) بقسم التربية الموسيقية – كلية التربية النوعية – جامعة عين شمس"
                        />
                        <IDCard
                            name="أ.د/ أبرار مصطفى إبراهيم"
                            title="أستاذ النظريات والتأليف بقسم التربية الموسيقية ووكيل شئون التعليم والطلاب – كلية التربية النوعية
                            جامعة أسيوط"
                        />
                        <IDCard
                            name="د/ سعد حسن"
                            title="مدرس تكنولوجيا التعليم – بقسم تكنولوجيا التعليم – كلية التربية النوعية – جامعة أسيوط"
                        />
                    </ul>
                </div>
                <div className="block">
                    <h2 className="font-sans text-3xl bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">وتحت رعاية كلاً من</h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name="أ.د/ وجدي رفعت فريد"
                            title="أستاذ الأشغال الفنية والتراث الشعبي بقسم التربية الفنية وعميد كلية التربية النوعية – جامعة أسيوط"
                        />
                        <IDCard
                            name="أ.د/ محمد جلال علي"
                            title="أستاذ النحت بقسم التربية الفنية ووكيل الكلية لشئون الدراسات العليا والبحوث بكلية التربية النوعية جامعة أسيوط"
                        />
                        <IDCard
                            name="أ.د/ أبرار مصطفى إبراهيم "
                            title="أستاذ النظريات والتأليف بقسم التربية الموسيقية ووكيل شئون التعليم والطلاب – كلية التربية النوعية
                            جامعة أسيوط"
                        />
                    </ul>
                </div>
                <div className="block">
                    <h2 className="font-sans text-3xl bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">ويسعدني أن أشكر كلاً من</h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name="أ.م.د/ رويدا صابر أحمد "
                            title="أستاذ النظريات والتأليف المساعد بقسم التربية الموسيقية – كلية التربية النوعية-  جامعة أسيوط "
                            highlight="على ماقدمته لي من دعم ومساعدة خلال تنفيذ البرنامج"
                        />
                        <IDCard
                            name="م/ فكتور اميل سعيد"
                            title="هندسة صوتية Sound Engineering"
                        />
                        <IDCard
                            name="م/ حبيب جمال حبيب"
                            title="Web Developer"
                        />
                        <IDCard
                            name="م/ روبرتو أيمن إيميل"
                            title="Graphic Designer, Monterey"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

const IDCard = ({ name, title, highlight = '' }: { name: string, title: string, highlight?: string }) => (
    <li className="text-xl shadow-gray-400 font-sans bg-gray-50 p-4 rounded w-fit">
        <h4 className="text-2xl font-bold font-sans">{name}</h4>
        {title}
        <br />
        <span className="font-bold font-sans">{highlight}</span>
    </li>
)
