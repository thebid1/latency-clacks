export const env = {
  FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
} as const;

export function validateEnv(): { valid: boolean; missing: string[] } {
  const missing: string[] = [];

  if (!env.FORMSPREE_ENDPOINT) {
    missing.push("NEXT_PUBLIC_FORMSPREE_ENDPOINT");
  }

  return {
    valid: missing.length === 0,
    missing,
  };
}
