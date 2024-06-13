
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { UserOutlined } from '@ant-design/icons';
import { IconLocation } from "@tabler/icons-react";

export function Accordianforfooter() {
  return (
    <Accordion
      className="w-full max-w-md  "
      collapsible
    // type="single"
    >
      <AccordionItem defaultOpen value="item-1">
        <AccordionTrigger className="flex items-center justify-between  gap-4 rounded-t-lg  px-6 py-4 font-medium transition-colors hover:bg-gray-200  dark:hover:bg-gray-700">
          Ahmedabad
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center text-black dark:text-neutral-300">
            <IconLocation className="mr-4" />
            <span>B-1010, Infinity Tower<br />
              NR Ramada Hotel<br />
              SG Road, Ahmedabad
              Gujarat - 380015</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center justify-between gap-4  px-6 py-4 font-medium transition-colors hover:bg-gray-100  dark:hover:bg-gray-800">
          Palanpur
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center text-black dark:text-neutral-300">
            <IconLocation className="mr-4" />
            <span>
              206-Valkeshwar Complex, Cozy Road,<br /> Behind Gitanjali Complex, Palanpur,<br /> Gujarat 385001
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center justify-between gap-4 rounded-b-lg  px-6 py-4 font-medium transition-colors  dark:hover:bg-gray-800">
          Jaipur
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-gray-500 dark:text-gray-400"></AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
