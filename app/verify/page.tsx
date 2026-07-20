import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle2, ShieldCheck } from "lucide-react";

export default function VerifyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Certificate Verification"
        description="Verify the authenticity of any YenTech certificate."
      />

      <div className="container mx-auto flex justify-center px-4 py-16 sm:px-8">
        <div className="w-full max-w-2xl">
          <div className="bg-background mb-8 rounded-3xl border p-8 shadow-md md:p-12">
            <h2 className="mb-2 text-center text-2xl font-bold">
              Enter Certificate ID
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              You can find the ID at the bottom right corner of the certificate.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-3 left-3 h-5 w-5" />
                <input
                  type="text"
                  placeholder="e.g. YT-2026-AB1234"
                  className="border-input bg-muted/30 focus-visible:ring-primary h-12 w-full rounded-xl border px-3 py-2 pl-10 text-sm focus-visible:ring-2 focus-visible:outline-none"
                  defaultValue="YT-2026-AB1234"
                />
              </div>
              <Button size="lg" className="h-12 shrink-0 rounded-xl px-8">
                Verify
              </Button>
            </div>
          </div>

          {/* Mock Result */}
          <div className="animate-in fade-in slide-in-from-bottom-4 flex items-start gap-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 duration-500">
            <div className="shrink-0 rounded-full bg-green-500 p-2 text-white">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 flex items-center gap-2 text-lg font-bold text-green-700">
                Valid Certificate
                <ShieldCheck className="h-4 w-4" />
              </h3>
              <p className="mb-4 text-sm text-green-800/80">
                This certificate was successfully verified in our database.
              </p>

              <div className="space-y-3 rounded-xl bg-white/50 p-4 text-sm">
                <div className="grid grid-cols-3 gap-2 border-b border-green-200 pb-2">
                  <span className="font-medium text-green-800/60">
                    Issued To
                  </span>
                  <span className="col-span-2 font-bold text-green-900">
                    Jane Doe
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-green-200 pb-2">
                  <span className="font-medium text-green-800/60">
                    Course/Event
                  </span>
                  <span className="col-span-2 font-bold text-green-900">
                    Advanced React Bootcamp
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="font-medium text-green-800/60">
                    Issue Date
                  </span>
                  <span className="col-span-2 font-bold text-green-900">
                    June 15, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
