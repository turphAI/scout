import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export function Sidebar({ className, children }: SidebarProps) {
  return (
    <aside className={cn(
      "w-64 bg-gray-50 border-r border-gray-200 p-4",
      className
    )}>
      {children}
    </aside>
  );
}

interface SidebarItemProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export function SidebarItem({ className, children, onClick, active }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-md cursor-pointer transition-colors",
        active 
          ? "bg-blue-100 text-blue-700" 
          : "hover:bg-gray-100 text-gray-700",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
