import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-5">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className={
                currentPath === "/dashboard"
                  ? "decoration-none font-semibold text-link"
                  : "decoration-none font-semibold hover:text-color-yellow"
              }
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
