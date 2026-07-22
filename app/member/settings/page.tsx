import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-foreground mb-1 text-2xl font-bold tracking-tight">
          Settings
        </h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="border-border/60 bg-card max-w-2xl space-y-8 rounded-2xl border p-6 shadow-xs sm:p-8">
        <div>
          <h3 className="text-foreground mb-4 text-base font-bold">
            Notifications
          </h3>
          <div className="border-border/60 bg-muted/20 flex items-center justify-between rounded-xl border p-4">
            <div>
              <p className="text-foreground text-sm font-medium">
                Email Alerts
              </p>
              <p className="text-muted-foreground text-xs">
                Receive emails about new community events and announcements.
              </p>
            </div>
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer rounded accent-[#0CBAA6]"
              defaultChecked
            />
          </div>
        </div>

        <div>
          <h3 className="text-destructive mb-4 text-base font-bold">
            Danger Zone
          </h3>
          <div className="border-destructive/30 bg-destructive/10 rounded-xl border p-5">
            <p className="text-foreground/90 mb-4 text-xs leading-relaxed sm:text-sm">
              Once you delete your account, there is no going back. All saved
              projects and credentials will be permanently erased.
            </p>
            <Button
              variant="destructive"
              size="sm"
              className="rounded-xl font-semibold"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
