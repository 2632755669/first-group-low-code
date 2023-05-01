/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.json' {
  const content: any;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}

declare module "react/jsx-runtime" {
  export default any;
}
