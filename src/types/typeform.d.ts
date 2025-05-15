
interface Window {
  typeformEmbed?: {
    makeWidget: (element: HTMLElement, formId: string, options?: object) => void;
  };
  fbq?: (action: string, event: string, options?: object) => void;
}
