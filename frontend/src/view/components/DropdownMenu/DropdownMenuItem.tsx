import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../../app/utils/cn';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        `outline-none min-h-[48px] flex items-center p-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl cursor-pointer transition-colors `,
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
