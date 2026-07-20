import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact & Join"
        description="Get in touch with us or join the YenTech community."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Let's Talk</h2>
              <p className="text-muted-foreground text-lg">
                Have a question about our events or domains? Want to partner
                with us? Send us a message.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground">hello@yentech.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-muted-foreground">
                    Yenepoya Campus, Mangalore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl border p-8 shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  className="border-input bg-background flex w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
