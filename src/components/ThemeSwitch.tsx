import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThemeSwitch = ({ isDark = false }: { isDark?: boolean }) => (
  <Button
    asChild
    variant="ghost"
    size="icon"
    className={isDark ? "dark-control" : "rounded-full"}
  >
    <Link
      to={isDark ? "/" : "/dark"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </Link>
  </Button>
);

export default ThemeSwitch;