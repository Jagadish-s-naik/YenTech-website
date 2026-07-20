import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">My Profile</h1>
        <p className="text-muted-foreground text-sm">
          Update your personal information.
        </p>
      </div>
      <div className="bg-background max-w-2xl rounded-2xl border p-8 shadow-sm">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              defaultValue="Jane Smith"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              defaultValue="jane@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea
              rows={4}
              className="border-input bg-background flex w-full rounded-md border px-3 py-2 text-sm"
              defaultValue="Enthusiastic developer learning React and Next.js."
            ></textarea>
          </div>
          <Button>Save Changes</Button>
        </form>
      </div>
    </div>
  );
}
