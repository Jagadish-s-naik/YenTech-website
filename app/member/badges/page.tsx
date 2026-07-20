export default function MyBadgesPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">My Badges</h1>
        <p className="text-muted-foreground text-sm">
          View your earned badges and achievements.
        </p>
      </div>
      <div className="bg-background min-h-[40vh] rounded-2xl border p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Mock badges */}
          <div className="bg-muted/50 text-muted-foreground flex aspect-square items-center justify-center rounded-xl border-2 border-dashed font-bold">
            Badge 1
          </div>
          <div className="bg-muted/50 text-muted-foreground flex aspect-square items-center justify-center rounded-xl border-2 border-dashed font-bold">
            Badge 2
          </div>
        </div>
      </div>
    </div>
  );
}
