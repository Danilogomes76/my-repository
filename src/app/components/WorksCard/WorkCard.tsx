import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/custom/credenza";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const linkify = (text: string) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part, index) =>
    urlPattern.test(part) ? (
      <Link
        key={index}
        href={part}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </Link>
    ) : (
      part
    )
  );
};

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface WorkCardProps {
  work: {
    title: string;
    location: string;
    work_time: string;
    details: string;
    technologies: string[];
  };
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const { details, location, title, work_time, technologies } = work;
  return (
    <>
      <Card className="w-full" data-aos="fade-up" data-aos-duration="500">
        <CardContent className="flex flex-col items-start justify-between space-y-4">
          <div className="w-full">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{work_time}</p>
            <p className="line-clamp-3">{details}</p>

            <Credenza>
              <CredenzaTrigger asChild>
                <p className=" text-blue-300  dark:text-blue-200">
                  More Details...
                </p>
              </CredenzaTrigger>
              <CredenzaContent className="max-h-[80%] lg:overflow-auto">
                <CredenzaHeader>
                  <CredenzaTitle>Details</CredenzaTitle>
                  <CredenzaDescription>
                    A responsive modal component for shadcn/ui.
                  </CredenzaDescription>
                </CredenzaHeader>
                <CredenzaBody className="overflow-auto">
                  <pre className="whitespace-pre-wrap">{linkify(details)}</pre>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
          </div>
          <div className="flex items-center flex-wrap space-x-2">
            {technologies.map((item, index) => {
              return (
                <>
                  <Badge key={index} variant="secondary">
                    {item}
                  </Badge>
                </>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WorkCard;
