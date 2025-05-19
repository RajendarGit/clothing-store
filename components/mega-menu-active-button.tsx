import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface MegaMenuActiveButtonProps {
  menuKey: "women" | "men" | "kids" | "accessories";
  activeMegaMenu: "women" | "men" | "kids" | "accessories" | null;
  toggleMegaMenu: (category: "women" | "men" | "kids" | "accessories") => void;
}

const MegaMenuActiveButton: React.FC<MegaMenuActiveButtonProps> = ({
  menuKey,
  activeMegaMenu,
  toggleMegaMenu,
}) => {
  const isActive = activeMegaMenu === menuKey;

  return (
    <Button
      variant="ghost"
      className={`flex items-center space-x-1 ${isActive ? "white" : "text-foreground"}`}
      onClick={() => toggleMegaMenu(menuKey)}
    >
      <span className="capitalize">{menuKey}</span>
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
};

export default MegaMenuActiveButton;