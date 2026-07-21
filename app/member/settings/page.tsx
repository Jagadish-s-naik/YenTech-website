import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="max-w-2xl space-y-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8 shadow-xs">
        <div>
          <h3 className="mb-4 text-base font-bold text-foreground">Notifications</h3>
          <div className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 p-4">
            <div>
              <p className="font-medium text-foreground text-sm">Email Alerts</p>
              <p className="text-muted-foreground text-xs">
                Receive emails about new community events and announcements.
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#0CBAA6] h-4 w-4 cursor-pointer rounded"
              defaultChecked
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold text-destructive">Danger Zone</h3>
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-5">
            <p className="mb-4 text-xs sm:text-sm text-foreground/90 leading-relaxed">
              Once you delete your account, there is no going back. All saved projects and credentials will be permanently erased.
            </p>
            <Button variant="destructive" size="sm" className="rounded-xl font-semibold">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

