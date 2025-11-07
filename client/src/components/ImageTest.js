import React from 'react';

const ImageTest = () => {
  const testImages = [
    '/images/products/espresso.svg',
    '/images/products/cappuccino.svg',
    '/images/products/latte.svg',
    '/images/products/americano.svg'
  ];

  return (
    <div style={{ padding: '2rem', background: '#f8f9fa' }}>
      <h2>Image Test - Coffee Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
        {testImages.map((imagePath, index) => (
          <div key={index} style={{ border: '2px solid #ddd', padding: '1rem', borderRadius: '8px', background: 'white' }}>
            <h3>{imagePath.split('/').pop().replace('.svg', '').replace('-', ' ')}</h3>
            <img 
              src={imagePath}
              alt={`Test ${index}`}
              style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
              onLoad={() => console.log(`✅ Loaded: ${imagePath}`)}
              onError={(e) => {
                console.log(`❌ Failed: ${imagePath}`);
                e.target.style.border = '2px solid red';
              }}
            />
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
              Path: {imagePath}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;