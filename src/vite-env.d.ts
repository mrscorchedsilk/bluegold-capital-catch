
/// <reference types="vite/client" />

interface Window {
  fbq?: (event: string, eventName: string, options?: object) => void;
}
