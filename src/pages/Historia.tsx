import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-park.jpg";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";

const Historia = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Header variant="terracotta" />
      
      <div className="space-y-6 pb-8">
        <div 
          className="h-64 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl font-bold text-white">História</h1>
          </div>
        </div>

        <Card className="p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-4 text-foreground">O Parque das Esculturas</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Inaugurado em 2000, o Parque das Esculturas Francisco Brennand é um marco cultural para Pernambuco e para o Brasil. Localizado no Bairro do Recife, o espaço reúne obras monumentais do artista em um ambiente que une arte, arquitetura e natureza.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O parque representa a materialização do sonho de Francisco Brennand de criar um espaço público onde suas esculturas pudessem ser apreciadas livremente, promovendo o encontro entre arte e povo.
          </p>
        </Card>

        <div 
          className="h-48 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="p-6 rounded-3xl bg-terracotta-light">
          <h2 className="text-xl font-bold mb-4 text-white">Marco Zero</h2>
          <p className="text-white/90 leading-relaxed">
            O Marco Zero do Recife, onde está localizado o parque, é o ponto de fundação da cidade. A escolha deste local por Brennand simboliza a conexão entre passado e presente, tradição e inovação, consolidando o Recife como polo cultural do Nordeste.
          </p>
        </Card>

        <footer className="text-center text-sm text-muted-foreground py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Historia;
