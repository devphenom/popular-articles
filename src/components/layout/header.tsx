import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import { Period } from '../../types/article';

interface HeaderProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
}

export function Header({ period, onPeriodChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-2 md:px-0 mx-auto flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Popular Articles</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Select value={period.toString()} onValueChange={value => onPeriodChange(Number(value) as Period)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="1">Last 24 hours</SelectItem>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
