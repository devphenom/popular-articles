import { ArticleList } from './components/article/article-list';
import { Layout } from './components/layout/layout';
import { Period } from './types/article';
import { useState } from 'react';

function App() {
  const [period, setPeriod] = useState<Period>(1);

  return (
    <Layout period={period} onPeriodChange={setPeriod}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Most Popular Articles</h1>
        <ArticleList period={period} />
      </div>
    </Layout>
  );
}

export default App;
