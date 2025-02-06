'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarComponent } from '@/components/organisms/sidebar';

import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { AuthProvider } from '@/context/auth-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AuthProvider>
          <SidebarComponent />
          <main className="w-screen">
            <div className="flex gap-3 items-center pt-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />

              <ModeToggle />
            </div>
            {children}
          </main>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
