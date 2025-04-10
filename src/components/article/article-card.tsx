import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

import { Article } from '../../types/article';
import { formatDate } from '../../utils/date';

interface ArticleCardProps {
  article: Article;
  onClick?: (article: Article) => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const imageUrl = article.media[0]?.['media-metadata']?.[article.media[0]?.['media-metadata'].length - 1]?.url;
  const formattedDate = formatDate(article.published_date);

  return (
    <Card className="h-full flex flex-col cursor-pointer transition-all hover:shadow-md" onClick={() => onClick?.(article)}>
      <CardHeader className="p-4">
        {imageUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <img src={imageUrl} alt={article.media[0]?.caption} className="object-cover w-[100%]" />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <h3 className="mb-2 text-lg font-semibold leading-tight">{article.title}</h3>
        <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">{article.abstract}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0 text-sm">
        <span className="text-[hsl(var(--muted-foreground))]">{formattedDate}</span>
        <span className="rounded-full bg-[hsl(var(--secondary))] px-2 py-1 text-xs">{article.section}</span>
      </CardFooter>
    </Card>
  );
}
