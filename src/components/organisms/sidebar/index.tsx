'use client';

import * as React from 'react';
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/organisms/sidebar/nav-main';
import { NavProjects } from '@/components/organisms/sidebar/nav-projects';
import { NavSecondary } from '@/components/organisms/sidebar/nav-secondary';
import { NavUser } from '@/components/organisms/sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';

const data = {
  user: {
    name: 'Jane Doe',
    email: 'janedoe@email.com',
    avatar: '/images/avatar.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Histórico de Coletas',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Minhas Coletas',
          url: '#',
        },
        {
          title: 'Coletas Pendentes',
          url: '#',
        },
        {
          title: 'Coletas Finalizadas',
          url: '#',
        },
      ],
    },
    {
      title: 'Parceiros de Reciclagem ',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Lista de Parceiros',
          url: '#',
        },
        {
          title: 'Adicionar Novo Parceiro',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Dicas de Reciclagem',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Impacto Ambiental',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Objetivos da ONU',
      url: '#',
      icon: Map,
    },
  ],
};

export function SidebarComponent({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    alt="logo-recoleta"
                    src="/images/logo_recoleta.svg"
                    width={32}
                    height={32}
                    className="bg-sidebar size-full"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">ReColeta</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
