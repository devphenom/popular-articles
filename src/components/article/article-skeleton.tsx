import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface ArticleSkeletonProps {
  count?: number;
}

export function ArticleSkeleton({ count = 6 }: ArticleSkeletonProps) {
  return (
    <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="h-full flex flex-col">
          <CardHeader className="p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-[hsl(var(--muted))] animate-pulse" />
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-0">
            <div className="mb-2 h-6 w-3/4 rounded-md bg-[hsl(var(--muted))] animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded-md bg-[hsl(var(--muted))] animate-pulse" />
              <div className="h-4 w-5/6 rounded-md bg-[hsl(var(--muted))] animate-pulse" />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4 pt-0 text-sm">
            <div className="h-4 w-1/4 rounded-md bg-[hsl(var(--muted))] animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-[hsl(var(--muted))] animate-pulse" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
