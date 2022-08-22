export default function About() {
    return (
        <div className="container rtl">
            <div className="flex justify-center my-8">
                <div className="rounded-full w-48 aspect-square overflow-hidden border-2 border-solid border-white outline-3 outline-gray-200 outline">
                    <img className="w-full" src="./imgs/personal_photo.png" alt="" />
                </div>
            </div>
            <h1 className="text-4xl font-bold font-sans m-4 mb-16 text-center">نواتج التعلم المستهدفة من الموقع</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className="block">
                    <h2 className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">المعرفة والفهم</h2>
                    <ol className="list-decimal m-6">
                        <li>
                            أن يتعرف الطالب على الجلسة الصحيحة ووضع اليدين علي الة البيانو
                        </li>
                        <li>
                            أن يتعرف الطالب على أساسيات العزف على آلة البيانو وقراءة النوتة الموسيقية
                        </li>
                    </ol>
                </div>
                <div className="block">
                    <h2 className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">المهارات الذهنية</h2>
                    <ol className="list-decimal m-6">
                        <li>
                            القدرة على التأزر العضلي والتحكم في كلتا اليدين
                        </li>
                        <li>
                            القدرة على قرائة النغمات في المدرج الكبير في مفتاحين
                        </li>
                        <li>
                            القدرة على التأزر بين القراءة والعزف من خلال القراءة الوهلية
                        </li>
                        <li>
                            القدرة على التذكر (الفوتوغرافي - التحليلي - السمعى)
                        </li>
                    </ol>
                </div>
                <div className="block">
                    <h2 className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">المهارات المهنية والعملية</h2>
                    <ol className="list-decimal m-6">
                        <li>
                            القدرة على تقوية الأصابع الخمس لليدين وليونتها وخاصة الإبهام والأداء بشكل سليم
                        </li>
                        <li>
                            القدرة على أداء السلالم والأربيجات في حدود الأوكتاف الواحد في السلالم الكبيرة والصغيرة
                        </li>
                        <li>
                            القدرة على الأداء السليم للمقطوعات الموسيقية المقررة.
                        </li>
                    </ol>
                </div>
                <div className="block">
                    <h2 className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main"> المهارات العامة والقابلة للانتقال</h2>
                    <ol className="list-decimal m-6">
                        <li>
                            توجيه اهتمامات الطلاب لهواية محببه إليهم مثل العزف على الآلات الموسيقية واستخدامها الاستخدام الأمثل
                        </li>
                        <li>
                            تبادل الثقة بالنفس لدي الطلاب من خلال عزف الآلة والتمكن من الأداء الجيد
                        </li>
                    </ol>
                </div>
            </div>
            <h1 className="text-4xl font-bold font-sans m-4 mb-16 text-center">محتويات الموقع</h1>
            <div className="grid grid-cols-1 gap-8 ">
                <TableItem
                    title="تمارين تمهيدية للاصابع علي لوحة المفاتيح والجلسة الصحيحة من كتاب john Thomson"
                    s1="الأسلوب الصحيح للجلسة الصحيحية ووضع اليدين علي الة البيانو"
                    s2="انتقال اثر التعلم للجلسة الصحيحة ووضع اليدين للمواد التي يستخدم فيها عزف البيانو"
                    s3="تصحيح الجلسة الخاطئة ووضع اليدين الخاطئ"
                />
                <TableItem
                    title="تمارين من كتاب Longo Book One A"
                    s1="اكساب المرونة العضلية للاصابع الخمس"
                    s2="انتقال اثر التعلم الي المواد الموسيقية الاخري"
                    s3="تطبيق المرونة العضلية في باقي بنود مقرر البيانو"
                />
                <TableItem
                    title="تمارين من كتاب Bartok Vol 1"
                    s1="اكساب المرونة العضلية عن طريق اداء تمارين بسيطة"
                    s2="اكتساب المرونة والتحكم في الاداء"
                    s3="السيطرة علي الاداء العضلي والنغمي"
                />
                
            </div>
        </div>
    )
}

const TableItem = ({ title, s1, s2, s3 }: { title: string, s1: string, s2: string, s3: string }) => (
    <div className="block">
        <h2 className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main">{title}</h2>
        <ol className="list-decimal m-6">
            <li>
                <span className="font-bold">المعارف الرئيسية : </span>{s1}
            </li>
            <li>
                <span className="font-bold">مهارات مهنية : </span>{s2}
            </li>
            <li>
                <span className="font-bold">مهارات عامة : </span>{s3}
            </li>
        </ol>
    </div>
)