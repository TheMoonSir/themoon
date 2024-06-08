declare namespace JSX {
  interface IntrinsicElements {
    "ld-root": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "app-root": React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement> & { class?: string },
    HTMLElement
  >;
  }
}
