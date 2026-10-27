const products = [
  { name: 'Hydrating Facial Cleanser', price: '$24.00', category: 'Cleanser', emoji: '🧴' },
  { name: 'Niacinamide Serum', price: '$32.00', category: 'Serum', emoji: '🧪' },
  { name: 'Daily Repair Moisturizer', price: '$28.00', category: 'Moisturizer', emoji: '🫧' },
  { name: 'SPF 50 Sunscreen Fluid', price: '$26.00', category: 'Sunscreen', emoji: '☀️' },
  { name: 'Cica Recovery Cream', price: '$28.00', category: 'Moisturizer', emoji: '🧴' },
  { name: 'Vitamin C Essence', price: '$36.00', category: 'Serum', emoji: '✨' }
];

const grid = document.getElementById('shopGrid');

if (grid) {
  grid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-visual" aria-hidden="true"></div>
      <h4>${product.name}</h4>
      <div class="product-meta">
        <span class="product-price">${product.price}</span>
        <span class="product-fav">♡</span>
      </div>
    </article>
  `).join('');
}
