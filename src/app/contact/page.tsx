"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle, 
  Github, 
  Twitter, 
  Copy, 
  Check,
  Send,
  Terminal,
  Mail
} from "lucide-react";
import { useState } from "react";

const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 100;

// Get from env vars with fallbacks
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "aminuadeshola2005@gmail.com";
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xjgebedn";

const contactMethods = [
  {
    label: "Telegram",
    value: "@thebidfr",
    href: "https://t.me/thebidfr",
    icon: MessageCircle,
    color: "text-blue-400",
    description: "Fastest response for inquiries",
  },
  {
    label: "GitHub",
    value: "thebid1",
    href: "https://github.com/thebid1",
    icon: Github,
    color: "text-zinc-100",
    description: "View my open source work",
  },
  {
    label: "X (Twitter)",
    value: "@thebidfr_",
    href: "https://x.com/thebidfr_",
    icon: Twitter,
    color: "text-sky-400",
    description: "Follow for updates",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/50 transition-colors"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formState.name.trim()) return "Please enter your name.";
    if (formState.name.length > MAX_NAME_LENGTH) return `Name must be less than ${MAX_NAME_LENGTH} characters.`;
    if (!formState.email.trim()) return "Please enter your email.";
    if (!emailRegex.test(formState.email)) return "Please enter a valid email address.";
    if (!formState.message.trim()) return "Please enter a message.";
    if (formState.message.length > MAX_MESSAGE_LENGTH) return `Message must be less than ${MAX_MESSAGE_LENGTH} characters.`;
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setError("Failed to send message. Please email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-zinc-400 font-mono">$ contact --init</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 font-mono">
            Let&apos;s Build Together
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Have a project in mind? Looking for a Web3 engineer? 
            Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
              Direct Contact
            </h2>
            
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.label} variant="glass" hover={false}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-zinc-800/50 ${method.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-zinc-200">{method.label}</h3>
                          {method.label === "Telegram" && (
                            <CopyButton text={method.value} />
                          )}
                        </div>
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 text-sm"
                        >
                          {method.value}
                        </a>
                        <p className="text-xs text-zinc-500 mt-1">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Email Card */}
            <Card variant="glass" hover={false}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-zinc-800/50 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-zinc-200">Email</h3>
                    <a 
                      href={`mailto:${EMAIL}`}
                      className="text-emerald-400 hover:text-emerald-300 text-sm break-all"
                    >
                      {EMAIL}
                    </a>
                    <p className="text-xs text-zinc-500 mt-1">
                      For detailed project discussions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="text-sm font-medium text-zinc-400 mb-3">Response Time</h3>
              <div className="flex items-center gap-2">
                <div className="status-dot" />
                <span className="text-sm text-zinc-300">Usually within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader className="pb-6">
                <h2 className="text-xl font-bold text-zinc-100">Send a Message</h2>
                <p className="text-sm text-zinc-500">
                  Fill out the form below and I&apos;ll get back to you shortly.
                </p>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
                    <p className="text-zinc-400">Thanks for reaching out. I&apos;ll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {error && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm" role="alert">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          maxLength={MAX_NAME_LENGTH}
                          value={formState.name}
                          onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          maxLength={100}
                          value={formState.email}
                          onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        autoComplete="off"
                        rows={5}
                        maxLength={MAX_MESSAGE_LENGTH}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                      <div className="text-right text-xs text-zinc-600 mt-1">
                        {formState.message.length}/{MAX_MESSAGE_LENGTH}
                      </div>
                    </div>

                    {/* Honeypot field for spam protection */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        value=""
                        readOnly
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-zinc-600 text-center">
                      Or email me directly at{" "}
                      <a href={`mailto:${EMAIL}`} className="text-emerald-400 hover:text-emerald-300">
                        {EMAIL}
                      </a>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
