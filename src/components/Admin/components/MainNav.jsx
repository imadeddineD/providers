import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Menu } from "lucide-react";

export function MainNav({ className, lng }) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const location = useLocation(); // Get the current location

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const routess =
    lng === "en"
      ? ["Dashboard", "Home", "Categories", "Subcategories", "Users"]
      : ["لوحة التحكم", "الرئيسية", "الفئات", "الفئات الفرعية", "المستخدمون"];

  const routes = [
    {
      href: `/dashboard/admin`,
      label: routess[0],
    },
    {
      href: `/dashboard/admin/categories`,
      label: routess[2],
    },
    {
      href: `/dashboard/admin/subcategories`,
      label: routess[3],
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="flex items-center justify-center ml-2 visible md:invisible gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="h-8 w-8 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <nav>
                {routes.map((route) => (
                  <DropdownMenuItem key={route.href} asChild>
                    <a
                      href={route.href}
                      className={cn(
                        "text-[18px] font-medium transition-colors hover:text-primary px-1",
                        location.pathname === route.href
                          ? "text-black dark:text-white"
                          : "text-gray-700"
                      )}
                    >
                      {route.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </nav>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <nav
          className={cn(
            "flex items-center gap-4 lg:space-x-6 invisible md:visible",
            className
          )}
        >
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className={cn(
                "text-[16px] transition-colors hover:text-primary font-semibold",
                location.pathname === route.href
                  ? "text-black dark:text-white text-[18px]"
                  : "text-gray-700"
              )}
            >
              {route.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
