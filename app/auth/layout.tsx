import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import { Suspense } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center">
        <nav className="w-full fixed top-0 flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full flex justify-between items-center px-2 text-sm">
            <div className="flex items-center font-semibold">
              <h1 className="text-2xl font-black">Joblo</h1>
              <div className="flex items-center gap-2"></div>
            </div>
            {!hasEnvVars && <EnvVarWarning />}
            <ThemeSwitcher />
          </div>
        </nav>
        <div className="flex flex-col w-dvw">{children}</div>
      </div>
    </main>
  );
}
