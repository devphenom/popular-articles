import { Article } from '../../types/article';
import { ArticleCard } from './article-card';
import { ArticleSkeleton } from './article-skeleton';
import { ErrorMessage } from '../ui/error-message';
import { Period } from '../../types/article';
import { useArticles } from '../../hooks/useArticles';

interface ArticleListProps {
  period: Period;
}

export function ArticleList({ period }: ArticleListProps) {
  const { data, isLoading, error } = useArticles(period);

  if (isLoading) {
    return <ArticleSkeleton />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!data?.results?.length) {
    return (
      <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
        <h3 className="text-lg font-semibold">No articles found</h3>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">Try selecting a different time period</p>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.results.map((article: Article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
}
