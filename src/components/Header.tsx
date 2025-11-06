import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface HeaderProps {
  variant?: "sage" | "ocean" | "terracotta" | "cream";
  showSearch?: boolean;
}

export const Header = ({ variant = "sage", showSearch = false }: HeaderProps) => {
  const bgColor = {
    sage: "bg-sage",
    ocean: "bg-ocean",
    terracotta: "bg-terracotta",
    cream: "bg-cream",
  }[variant];

  const textColor = variant === "cream" ? "text-foreground" : "text-white";

  return (
    <header className={`${bgColor} ${textColor} p-4 rounded-2xl mb-6`}>
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">!</Link>
        
        {showSearch && (
          <div className="flex-1 mx-4 max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-70" />
              <Input
                placeholder="Buscar"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        )}
        
        {!showSearch && <Search className="h-5 w-5" />}
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={textColor}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className={`${bgColor} ${textColor} border-none`}>
            <nav className="flex flex-col gap-6 mt-12">
              <Link to="/" className="text-xl font-semibold hover:opacity-80 transition">
                Home
              </Link>
              <Link to="/visite" className="text-xl font-semibold hover:opacity-80 transition">
                Visite
              </Link>
              <Link to="/exposicoes" className="text-xl font-semibold hover:opacity-80 transition">
                Exposições
              </Link>
              <Link to="/autor" className="text-xl font-semibold hover:opacity-80 transition">
                O autor
              </Link>
              <Link to="/historia" className="text-xl font-semibold hover:opacity-80 transition">
                História
              </Link>
              <Link to="/eventos" className="text-xl font-semibold hover:opacity-80 transition">
                Eventos
              </Link>
              <Link to="/rotas" className="text-xl font-semibold hover:opacity-80 transition">
                Rotas
              </Link>
              <Link to="/avisos" className="text-xl font-semibold hover:opacity-80 transition">
                Avisos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
