import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const services = [
  "Photography",
  "Videography",
  "Photo & Video Package",
  "Event Coverage",
  "Commercial / Product",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Simulate sending — replace with actual backend later
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  const inputClass =
    "w-full bg-secondary border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground";

  return (
    <main className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
            Ready to bring your vision to life? Send us your enquiry and we'll be in touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-medium text-foreground mb-1">Email</p>
                <p className="font-body text-sm text-muted-foreground">hello@high17.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-medium text-foreground mb-1">Phone</p>
                <p className="font-body text-sm text-muted-foreground">+1 (555) 017-1717</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-medium text-foreground mb-1">Location</p>
                <p className="font-body text-sm text-muted-foreground">Available worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass}
                />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={inputClass}
                />
                {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
              </div>
            </div>

            <div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Select a Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="text-destructive text-xs mt-1 font-body">{errors.service}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-[var(--gold-glow)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Enquiry"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
