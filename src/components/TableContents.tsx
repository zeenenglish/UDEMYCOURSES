import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table";
import Link from 'next/link'



const TableContents = () => {
    const lists = [{'id':1,'time': '5/18/2025 6:25 AM', 'title': 'Microsoft Azure Security (SC-900) Exam Questions May - 2025', 'description': 'الاستعداد للنجاح: 350 اختبار ممارسة SC-900 محدث مع تفسيرات لتحقيق أساسيات Microsoft Azure', 'rate': '0', 'type': 'IT & Software', 'link': 'https://udemyxpert.com/courses/microsoft-azure-security-sc-900-exam-questions-may-2025-7133'},
        {'id':2,'time': '5/18/2025 6:25 AM', 'title': 'Microsoft Azure Security (SC-900) Exam Questions May - 2025', 'description': 'الاستعداد للنجاح: 350 اختبار ممارسة SC-900 محدث مع تفسيرات لتحقيق أساسيات Microsoft Azure', 'rate': '0', 'type': 'IT & Software', 'link': 'https://udemyxpert.com/courses/microsoft-azure-security-sc-900-exam-questions-may-2025-7133'}
    ]


    return (
        <div className="w-[90%]">
            <Table className=''>
                <TableCaption>A list of Udemy Courses.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">Time</TableHead>
                        <TableHead>Titile</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>CHECK</TableHead>
                        <TableHead className="w-[100px]">Link</TableHead>
                    </TableRow>
                </TableHeader>
                 <TableBody>

                {lists.map((list) =>(
                    <TableRow key={list.id}>
                        <TableCell className="font-medium">{list.time}</TableCell>
                        <TableCell className="">{list.title}</TableCell>
                        <TableCell className="text-right">{list.description}</TableCell>
                        <TableCell className="">{list.rate}</TableCell>
                        <TableCell className="">{list.type}</TableCell>
                        <TableCell className="">CHECK</TableCell>
                        <TableCell className=""><Link href={list.link} target="_blank" >Click</Link></TableCell>
                    </TableRow>
                ))}
                </TableBody> 
                {/* <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody> */}
            </Table>
        </div>

    );
}

export default TableContents;