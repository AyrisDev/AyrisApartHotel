import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import faqq from "@/hooks/faq.json";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="relative mt-20 w-full">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-start">
          <span className="text-[#7b4718] text-[24px] font-monte font-semibold">
            Ayris Apart Hotel
          </span>
          <span className="text-[#292524] text-[56px] font-cormo">
            Sık Sorulan Sorular
          </span>
          <span className="text-[#292524] text-[20px] font-cormo ">
            Sorunuzu listede bulamıyor musunuz? Sorularınızı bize bildirin.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex  flex-col space-y-6 w-full font-monte">
            <Fragment>
              {faqq.map((faqq: any) => (
                <Accordion
                  key={faqq.id}
                  className="w-full bg-white p-4 rounded-lg "
                  open={open === faqq.id}
                  icon={<Icon id={faqq.id} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(faqq.id)}>
                    {faqq.title}
                  </AccordionHeader>
                  <AccordionBody className="mt-4">{faqq.desc}</AccordionBody>
                </Accordion>
              ))}
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
