# Card Component

A customizable React card component built with `styled-components` that supports multiple visual variants and flexible styling options.

## Installation

To use the `Card` component, first install the package via npm:

```bash
# Using npm
npm install react react-dom styled-components sudipta-styled-card-component

```

> **Note:** This package has `styled-components`, `react` ,`react-dom` as a peer dependency. Ensure it is installed in your project.

## Usage

Import the `Card` component into your project and use it as needed:

```tsx
import React from "react";
import { Card } from "sudipta-styled-card-component";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Card variant="outlined" padding="2rem" onClick={() => alert("Card clicked!")}>
        <h2>Outlined Card</h2>
        <p>This card has an outlined style.</p>
      </Card>

      <Card variant="elevated" elevation={3} padding="1.5rem">
        <h2>Elevated Card</h2>
        <p>This card has a shadow to indicate elevation.</p>
      </Card>
    </div>
  );
};

export default App;
```

## Props

The `Card` component supports the following props:

| Prop          | Type                              | Description                            |
|---------------|-----------------------------------|----------------------------------------|
| `children`    | `React.ReactNode`                 | The content to be displayed inside the card. |
| `variant`     | `"outlined" \| "elevated" \| "flat" \| "raised" \| "highlighted"` | The visual variant of the card.        |
| `padding`     | `string`                          | Padding to be applied inside the card. |
| `elevation`   | `number`                          | The elevation of the card, determines the shadow depth. |
| `borderradius`| `string`                          | Border radius for rounded corners.     |
| `onClick`     | `() => void`                      | Optional click handler for the card.   |
| `color`       | `string`                          | Custom color for highlighted variant.  |

## Variants

- `outlined`: Displays a border around the card.
- `elevated`: Adds a shadow to indicate depth.
- `flat`: No border or shadow.
- `raised`: Higher shadow depth for emphasis.
- `highlighted`: Displays a colored border with a shadow.
