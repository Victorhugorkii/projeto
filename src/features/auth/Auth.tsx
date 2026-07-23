"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Loader2, 
  Check, 
  Sparkles 
} from "lucide-react";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  // Cálculo simples de força da senha
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simulação de requisição
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#030305] text-zinc-100 overflow-hidden font-sans selection:bg-white/20 px-4 py-12">
      
      {/* 1. ILUMINAÇÃO & MÁSCARA DE FUNDO */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Orbs e Feixes Ambientais */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* 2. CARD PRINCIPAL */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[420px] rounded-[2.5rem] bg-zinc-950/70 backdrop-blur-2xl border border-white/10 p-7 sm:p-9 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden"
      >
        {/* Border Glow Top Accent */}
        <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* LOGO E CABEÇALHO */}
        <div className="flex flex-col items-center mb-7">
          <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Sparkles className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-2xl bg-white/10 blur-sm -z-10 opacity-50" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isSignUp ? "signup-header" : "login-header"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                {isSignUp ? "Criar nova conta" : "Bem-vindo de volta"}
              </h1>
              <p className="mt-1.5 text-xs text-zinc-400 max-w-[260px] mx-auto leading-relaxed">
                {isSignUp
                  ? "Insira seus dados para começar gratuitamente."
                  : "Acesse sua conta para continuar seus projetos."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. TABS SWAPPER ANIMADO */}
        <div className="relative flex p-1 mb-6 rounded-2xl bg-zinc-900/90 border border-white/5 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`relative flex-1 py-2 text-xs font-medium transition-colors duration-200 z-10 ${
              !isSignUp ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {!isSignUp && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-xl bg-zinc-800/90 border border-white/10 shadow-sm z-[-1]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            Entrar
          </button>
          
          <button
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`relative flex-1 py-2 text-xs font-medium transition-colors duration-200 z-10 ${
              isSignUp ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {isSignUp && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-xl bg-zinc-800/90 border border-white/10 shadow-sm z-[-1]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            Criar conta
          </button>
        </div>

        {/* 4. FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence initial={false}>
            {/* Nome Completo (Apenas no Sign Up) */}
            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-1.5 pb-1">
                  <label htmlFor="name" className="block text-[11px] font-medium text-zinc-300 ml-1">
                    Nome completo
                  </label>
                  <div className="relative flex items-center group">
                    <User className="absolute left-3.5 h-4 w-4 text-zinc-500 group-focus-within:text-white transition-colors" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Gabriel Silva"
                      required={isSignUp}
                      className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:border-white/30 focus:bg-zinc-900/90 focus:ring-4 focus:ring-white/5"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* E-mail */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-[11px] font-medium text-zinc-300 ml-1">
              Endereço de e-mail
            </label>
            <div className="relative flex items-center group">
              <Mail className="absolute left-3.5 h-4 w-4 text-zinc-500 group-focus-within:text-white transition-colors" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nome@exemplo.com"
                required
                className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:border-white/30 focus:bg-zinc-900/90 focus:ring-4 focus:ring-white/5"
              />
            </div>
          </div>

          {/* Senha */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label htmlFor="password" className="block text-[11px] font-medium text-zinc-300">
                Senha
              </label>
              {!isSignUp && (
                <a href="#" className="text-[11px] text-zinc-400 hover:text-white transition-colors">
                  Esqueceu a senha?
                </a>
              )}
            </div>
            <div className="relative flex items-center group">
              <Lock className="absolute left-3.5 h-4 w-4 text-zinc-500 group-focus-within:text-white transition-colors" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder="••••••••"
                required
                className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 pl-10 pr-10 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:border-white/30 focus:bg-zinc-900/90 focus:ring-4 focus:ring-white/5"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-zinc-500 hover:text-zinc-300 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Indicador de Força de Senha (Sign Up) */}
            {isSignUp && password.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-1 px-1 space-y-1"
              >
                <div className="flex gap-1 h-1">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-full flex-1 rounded-full transition-all duration-300 ${
                        strength >= step
                          ? strength <= 2
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                          : "bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-zinc-500 text-right">
                  {strength <= 1 && "Senha fraca"}
                  {strength === 2 && "Senha razoável"}
                  {strength >= 3 && "Senha forte"}
                </p>
              </motion.div>
            )}
          </div>

          {/* Opção "Lembrar de mim" no Login */}
          {!isSignUp && (
            <div className="flex items-center space-x-2 px-1 pt-0.5">
              <label className="relative flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-4 h-4 rounded-md border border-white/10 bg-zinc-900 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
                  <Check className="w-3 h-3 text-zinc-950 opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" />
                </div>
                <span className="ml-2 text-[11px] text-zinc-400">Lembrar deste dispositivo</span>
              </label>
            </div>
          )}

          {/* Botão Principal com Efeito Hover Light */}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full overflow-hidden rounded-2xl bg-white py-3 mt-2 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin text-zinc-950" />
            ) : (
              <>
                <span>{isSignUp ? "Criar minha conta" : "Entrar no sistema"}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>

        {/* DIVISOR */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-white/10" />
          <span className="absolute bg-[#08080a] px-3 text-[10px] font-medium tracking-wider text-zinc-500 uppercase rounded-full border border-white/5">
            OU
          </span>
        </div>

        {/* 5. BOTÃO GOOGLE PREMIUM */}
        <button
          type="button"
          className="group relative w-full rounded-2xl border border-white/10 bg-zinc-900/30 py-3 px-4 text-xs font-medium text-zinc-300 hover:bg-zinc-800/50 hover:border-white/20 hover:text-white transition-all duration-300 active:scale-[0.98] flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Continuar com o Google</span>
          </div>

          <ArrowRight className="h-4 w-4 text-zinc-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white" />
        </button>

        {/* RODAPÉ */}
        <p className="mt-6 text-center text-[10px] text-zinc-500 leading-relaxed">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="underline underline-offset-2 hover:text-zinc-300 transition-colors">Termos de Serviço</a>{" "}
          e{" "}
          <a href="#" className="underline underline-offset-2 hover:text-zinc-300 transition-colors">Política de Privacidade</a>.
        </p>

      </motion.div>
    </main>
  );
}