interface ErrorMessageProps {
  error: Error | string;
  className?: string;
}

export function ErrorMessage({ error, className }: ErrorMessageProps) {
  const errorMessage = error instanceof Error ? error.message : error;

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 p-4 text-center ${className}`}>
      <div className="rounded-full bg-destructive/10 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-destructive">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold">Something went wrong</h3>
      <p className="text-sm text-muted-foreground">{errorMessage}</p>
    </div>
  );
}
