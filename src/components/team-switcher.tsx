"use client";

import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import emonImg from "@/assets/emon.png";
import Image from "next/image";
import {
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex gap-2 justify-center items-center">
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image
                src={emonImg}
                width={20}
                height={20}
                alt="Icon"
                className="size-7 rounded-full"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Abdul Alim Emon</span>
              <span className="truncate text-xs">Front End Developer</span>
            </div>
          </SidebarMenuButton>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
