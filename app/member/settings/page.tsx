import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="bg-background max-w-2xl space-y-8 rounded-2xl border p-8 shadow-sm">
        <div>
          <h3 className="mb-4 font-bold">Notifications</h3>
          <div className="flex items-center justify-between rounded-xl border p-4">
            <div>
              <p className="font-medium">Email Alerts</p>
              <p className="text-muted-foreground text-sm">
                Receive emails about new events.
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-primary h-5 w-5"
              defaultChecked
            />
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-red-500">Danger Zone</h3>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-4 text-sm text-red-800">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
