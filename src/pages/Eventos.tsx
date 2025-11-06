import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import patternSage from "@/assets/pattern-sage.jpg";

const Eventos = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Header variant="sage" />
      
      <div className="space-y-6 pb-8">
        <Card className="bg-sage text-white p-8 rounded-3xl text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Eventos</h1>
        </Card>

        <Card className="p-6 rounded-3xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-ocean text-white rounded-xl p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm">MAR</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Visita Guiada Especial</h3>
              <p className="text-muted-foreground text-sm">
                Acompanhamento com curador especializado pelas principais obras do parque.
              </p>
            </div>
          </div>
        </Card>

        <img 
          src={ceramicImage} 
          alt="Evento" 
          className="w-full h-48 object-cover rounded-3xl"
        />

        <Card className="p-6 rounded-3xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-terracotta text-white rounded-xl p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold">22</div>
              <div className="text-sm">ABR</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Workshop de Cerâmica</h3>
              <p className="text-muted-foreground text-sm">
                Aprenda técnicas básicas de modelagem em cerâmica inspiradas na obra de Brennand.
              </p>
            </div>
          </div>
        </Card>

        <div 
          className="h-48 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="p-6 rounded-3xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-sage text-white rounded-xl p-4 text-center min-w-[80px]">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm">MAI</div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Encontro Cultural</h3>
              <p className="text-muted-foreground text-sm">
                Mesa redonda sobre arte contemporânea e o legado de Francisco Brennand.
              </p>
            </div>
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Eventos;
