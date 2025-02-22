import { DefaultTheme, styled } from "solid-styled-components";

interface Props {
  /**
   * Gap between child elements.
   */
  gap?: keyof DefaultTheme["gap"];

  /**
   * Item alignment
   */
  align?: AlignSetting | true;

  /**
   * Content justification
   */
  justify?: AlignSetting | true;

  /**
   * This row should grow to fit parent container.
   */
  grow?: boolean;
}

/**
 * Generic Flex Row
 */
export const Row = styled("div")<Props>`
  display: flex;
  flex-direction: row;
  flex-grow: ${(props) => (props.grow ? 1 : "initial")};
  gap: ${(props) => props.theme!.gap[props.gap ?? "md"]};

  align-items: ${(props) =>
    props.align
      ? typeof props.align === "string"
        ? props.align
        : "center"
      : "initial"};

  justify-content: ${(props) =>
    props.justify
      ? typeof props.justify === "string"
        ? props.justify
        : "center"
      : "initial"};
`;
