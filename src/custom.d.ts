import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      action: string;
      text: string;
    };

    fontSizes: {
      title: string;
      default: string;
      paragraph: string
    };
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}
