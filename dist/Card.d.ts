import React from "react";
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
export declare const Card: React.FC<CardProps>;
