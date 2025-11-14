import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import heroImage from "@/assets/hero-park.jpg";
import api from "@/services/api";
import axios from "axios";
import CryptoJS from "crypto-js";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // 🔐 SENHA SEM VALUE (não aparece no HTML)
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value || "";

    if (!email || !password || (!isLogin && !name)) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // 🔐 Criptografar antes de enviar
    const hashedPassword = CryptoJS.SHA256(password).toString();

    try {
      if (isLogin) {
        // LOGIN
        const response = await api.post("/auth/login", {
          email,
          password: hashedPassword,
        });

        toast.success("Login realizado com sucesso!");

        localStorage.setItem("brennand_auth", "true");

        if (response.data?.token) {
          localStorage.setItem("brennand_token", response.data.token);
        }

        navigate("/");
      } else {
        // CADASTRO
        const response = await api.post("/users", {
          userName: name,
          email,
          password: hashedPassword,
        });

        if (response.status === 201 || response.status === 200) {
          toast.success("Cadastro realizado com sucesso!");
          setIsLogin(true);
        } else {
          toast.error("Erro ao cadastrar. Tente novamente.");
        }
      }
    } catch (err) {
      console.error("Erro ao conectar com backend:", err);

      if (axios.isAxiosError(err)) {
        const msg =
          err.response?.data?.message ||
          err.response?.data ||
          "Erro ao realizar operação.";
        toast.error(msg);
      } else {
        toast.error("Erro inesperado!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Card */}
      <Card className="w-full max-w-md z-10 bg-card/95 backdrop-blur">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Brennand Digital
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin ? "Entre com sua conta" : "Crie sua conta para continuar"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome apenas no cadastro */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Senha SEGURA */}
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                ref={passwordRef} // sem value!
              />
            </div>

            {/* Botão */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>

            {/* Alternar login/cadastro */}
            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin
                  ? "Não tem conta? Cadastre-se"
                  : "Já tem conta? Faça login"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
