import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import patternSage from "@/assets/pattern-sage.jpg";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";

const Autor = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Header variant="sage" />
      
      <div className="space-y-6 pb-8">
        <Card className="bg-sage text-white p-8 rounded-3xl text-center">
          <h1 className="text-3xl font-bold mb-2">Francisco Brennand</h1>
          <p className="text-lg opacity-90">Artista Pernambucano</p>
        </Card>

        <img 
          src={ceramicImage} 
          alt="Obra de Brennand" 
          className="w-full h-64 object-cover rounded-3xl"
        />

        <Card className="p-6 rounded-3xl">
          <p className="text-muted-foreground leading-relaxed">
            Francisco Brennand (1927-2019) foi um dos mais importantes artistas plásticos brasileiros. Nascido no Recife, dedicou sua vida à criação de esculturas monumentais em cerâmica, pinturas e instalações artísticas que dialogam com temas universais como a criação, a vida e a morte.
          </p>
        </Card>

        <div 
          className="h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="p-6 rounded-3xl bg-sage-light">
          <h2 className="text-xl font-bold mb-4 text-foreground">Legado</h2>
          <p className="text-muted-foreground leading-relaxed">
            O Parque das Esculturas é um dos principais legados do artista, reunindo obras monumentais que transformaram o Marco Zero do Recife em um museu a céu aberto, democratizando o acesso à arte e à cultura.
          </p>
        </Card>

        <footer className="text-center text-sm text-muted-foreground py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Autor;
