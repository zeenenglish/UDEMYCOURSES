import Cards from "@/components/Cards";



export default function Home() {
  const lists = [{'id':1,'time': '5/18/2025 6:25 AM', 'title': 'Microsoft Azure Security (SC-900) Exam Questions May - 2025', 'description': 'الاستعداد للنجاح: 350 اختبار ممارسة SC-900 محدث مع تفسيرات لتحقيق أساسيات Microsoft Azure', 'rate': '0', 'type': 'IT & Software', 'link': 'https://udemyxpert.com/courses/microsoft-azure-security-sc-900-exam-questions-may-2025-7133'},
        {'id':2,'time': '5/18/2025 6:25 AM', 'title': 'Microsoft Azure Security (SC-900) Exam Questions May - 2025', 'description': 'الاستعداد للنجاح: 350 اختبار ممارسة SC-900 محدث مع تفسيرات لتحقيق أساسيات Microsoft Azure', 'rate': '0', 'type': 'IT & Software', 'link': 'https://udemyxpert.com/courses/microsoft-azure-security-sc-900-exam-questions-may-2025-7133'}
    ]
  return (
    <div className=" bg-red-500 flex m-[20px]">
    {/* <div className={'w-[100%] flex  justify-center'}> */}
      <Cards />
    </div>
  );
}
