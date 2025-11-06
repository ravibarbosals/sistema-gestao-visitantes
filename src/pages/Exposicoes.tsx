import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import boatsImage from "@/assets/boats.jpg";

const Exposicoes = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto bg-terracotta">
      <Header variant="terracotta" />
      
      <div className="space-y-6 pb-8">
        <Card className="bg-cream p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Exposições</h2>
          <p className="text-muted-foreground">
            Localizado no Bairro do Recife, lugar epicentro da arte local, o Espaço Esculturas Francisco Brennand vai além de Coluna de Cristal com 32 metros de altura, topo da Coluna de Cristal de arte e o mais querido na parte de cima e mais querido na parte superior.
          </p>
        </Card>

        <div 
          className="h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="bg-ocean-light p-6 rounded-3xl overflow-hidden">
          <img src={ceramicImage} alt="Coluna de Cristal" className="w-full h-48 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-bold mb-2 text-white">Coluna de Cristal</h3>
          <p className="text-white/90">
            Com 32 metros de altura, topo da Coluna de Cristal é uma das espaço caneta cristal. No corpo da estrutura, há quatro remos de casco e o mais querido na parte de cima e mais querido na parte superior.
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

        <div className="grid grid-cols-2 gap-4">
          <img src={boatsImage} alt="Detalhe 1" className="rounded-2xl w-full h-32 object-cover" />
          <img src={ceramicImage} alt="Detalhe 2" className="rounded-2xl w-full h-32 object-cover" />
        </div>

        <Card className="bg-cream p-6 rounded-3xl">
          <p className="text-muted-foreground">
            Para o artista, o ovo é como uma pedra que gera a vida quando é evocado. Para Brennand, é o símbolo maior da reprodução e da criação. Essa responsabilidade com a criação é tão séria que ele diz que os animais representados como oviparas, como pássaros, tartarugas e até peixes, são sempre evitárias, como pássaros, tartarugas e outros peixes.
          </p>
        </Card>

        <div 
          className="h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <footer className="text-center text-sm text-white py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Exposicoes;
