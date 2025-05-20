import React from 'react'

const NoProducts = () => {
  return (
    <div className="text-center py-16 border rounded-lg">
      <h3 className="text-lg font-medium mb-2">generalMessages.noProducts</h3>
      <p className="text-muted-foreground mb-6">
        generalMessages.noProductsDescription
      </p>
    </div>
  );
}

export default NoProducts