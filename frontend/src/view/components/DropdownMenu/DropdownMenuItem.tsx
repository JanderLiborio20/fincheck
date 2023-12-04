import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../../app/utils/cn';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuItem({
  children,
  className,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      className={cn(
        `outline-none min-h-[48px] flex items-center p-4 text-sm text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors`,
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
