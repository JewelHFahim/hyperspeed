// app/(dashboard)/products/layout.tsx
import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Products Management</h1>
        {/* Add your navbar or sidebar for the admin dashboard */}
      </header>

      <main>{children}</main> {/* This will render the content of 'page.tsx' */}
    </div>
  );
};

export default ProductsLayout;
