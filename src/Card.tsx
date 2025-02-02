import React from "react";
import styled, { css } from "styled-components";

/**
 * Props for the Card component.
 * 
 * @interface CardProps
 * @property {React.ReactNode} children - The content to be displayed inside the card.
 * @property {("outlined" | "elevated" | "flat" | "raised" | "highlighted")} [variant="elevated"] - The visual variant of the card.
 * @property {string} [padding="1rem"] - Padding to be applied inside the card.
 * @property {number} [elevation=1] - The elevation of the card, determines the shadow depth.
 * @property {string} [borderradius="8px"] - Border radius for rounded corners.
 * @property {() => void} [onClick] - Optional click handler for the card.
 * @property {string} [color] - Custom color for highlighted variant. Defaults to "#f39c12".
 */
export interface CardProps {
  children: React.ReactNode;
  variant?: "outlined" | "elevated" | "flat" | "raised" | "highlighted";
  padding?: string;
  elevation?: number;
  borderradius?: string;
  onClick?: () => void;
  color?: string;
}

/**
 * Styled component for the Card. This component dynamically adjusts its styles
 * based on the props provided.
 * 
 * @param {CardProps} props - The properties passed to the Card component.
 * @returns {JSX.Element} A styled div element representing the card.
 */
const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding || "1rem"};
  border-radius: ${({ borderradius }) => borderradius || "8px"};
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  
  ${({ variant, elevation, color }) =>
    variant === "outlined" &&
    css`
      border: 5px solid #ccc;
      box-shadow: none;
    `}

  ${({ variant, elevation, color }) =>
    variant === "elevated" &&
    css`
      border: none;
      box-shadow: ${elevation ? `0px ${elevation * 2}px ${elevation * 4}px rgba(0, 0, 0, 0.1)` : 'none'};
    `}

  ${({ variant }) =>
    variant === "flat" &&
    css`
      border: none;
      box-shadow: none;
    `}
    
  ${({ variant, elevation }) =>
    variant === "raised" &&
    css`
      border: none;
      box-shadow: ${elevation ? `0px ${elevation * 4}px ${elevation * 8}px rgba(0, 0, 0, 0.2)` : 'none'};
    `}
    
  ${({ variant, color }) =>
    variant === "highlighted" &&
    css`
      border: 3px solid ${color || "#f39c12"};
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `}
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ elevation = 1 }) =>
      `0px ${elevation * 3}px ${elevation * 6}px rgba(0, 0, 0, 0.15)`};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${({ elevation = 1 }) =>
      `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.05)`};
  }
`;

/**
 * Card component renders a customizable styled card with various visual variants.
 * The card can respond to clicks and provides a flexible layout.
 * 
 * @param {CardProps} props - The props used to customize the card.
 * @returns {JSX.Element} A rendered Card component.
 * 
 * @example
 * <Card variant="outlined" padding="2rem" elevation={2} onClick={() => alert('Clicked!')}>
 *   <h1>Hello World</h1>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = "elevated",
  padding,
  elevation = 1,
  borderradius,
  onClick,
  color,
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      elevation={elevation}
      borderradius={borderradius}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledCard>
  );
};
