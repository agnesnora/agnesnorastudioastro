export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
declare module 'sanity:client' {
  import type { SanityClient } from '@sanity/client';
  const client: SanityClient;
  export { client as sanityClient };
}
