import Link from "next/link";

import {
  CircleUser,
  LinkedinIcon,
  MailIcon,
  Menu,
  Package2,
  Search,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Logo from "../Logo/Logo";
import { ToggleTheme } from "@/components/custom/toggle-theme";
import { GithubIconTwo } from "../SVGS/Svgs";

const navigation = [
  { name: "Home", link: "#" },
  { name: "Projetos", link: "#projetos" },
  { name: "Conhecimentos", link: "#conhecimentos" },
  { name: "Experiência", link: "#experiencia" },
  { name: "Sobre", link: "#sobre" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky z-20 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full items-center justify-between">
        <Logo height={100} width={100} />
        <div className="flex items-center gap-6">
          {navigation.map((item, index) => {
            return (
              <Link
                href={item.link}
                className="text-muted-foreground transition-colors hover:text-foreground"
                key={index}
              >
                {item.name}
              </Link>
            );
          })}

          <ToggleTheme />
        </div>
      </nav>
      <Sheet>
        <div className="flex w-full items-center justify-between md:hidden">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <ToggleTheme className="md:hidden" />
        </div>
        <SheetContent
          className="flex w-[80%] flex-col justify-between"
          side="left"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Logo height={70} width={70} />
            </Link>

            {navigation.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2">
            <a
              className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
              href="https://www.linkedin.com/in/danilo-gomes76/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedinIcon className="h-6 w-6" />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
              href="https://github.com/Danilogomes76/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIconTwo className="h-6 w-6" />
              GitHub
            </a>
            <a
              className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
              href="mailto:danilo.gomes.job@gmail.com"
            >
              <MailIcon className="h-6 w-6" />
              danilo.gomes.job@gmail.com
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
