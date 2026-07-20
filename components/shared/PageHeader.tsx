interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-muted/30 border-b py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="font-heading mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground max-w-2xl text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
