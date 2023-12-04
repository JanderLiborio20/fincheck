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
        `outline-none min-h-[40px] flex items-center px-4  py-2 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl cursor-pointer transition-colors `,
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
