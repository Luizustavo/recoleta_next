'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarComponent } from '@/components/organisms/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
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
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="dashboard">
                      Gerenciar Coletas{' '}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="collect">
                      Descartar Resíduos
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>{' '}
              <ModeToggle />
            </div>
            {children}
          </main>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
