
/// <reference types="vite/client" />

interface Window {
  fbq?: (event: string, eventName: string, options?: object) => void;
  dataLayer?: any[];
  tf?: {
    createWidget: (formId: string, options: any) => void;
  };
}
