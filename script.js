const products = [
  { name: 'Hydrating Facial Cleanser', price: '$24.00', category: 'Cleanser', emoji: '🧴' },
  { name: 'Niacinamide Serum', price: '$32.00', category: 'Serum', emoji: '🧪' },
  { name: 'Daily Repair Moisturizer', price: '$28.00', category: 'Moisturizer', emoji: '🫧' },
  { name: 'SPF 50 Sunscreen Fluid', price: '$26.00', category: 'Sunscreen', emoji: '☀️' },
  { name: 'Cica Recovery Cream', price: '$28.00', category: 'Moisturizer', emoji: '🧴' },
  { name: 'Vitamin C Essence', price: '$36.00', category: 'Serum', emoji: '✨' }
];

const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const textButtons = document.querySelectorAll('.text-btn');
const arrowButtons = document.querySelectorAll('.arrow-btn');
const productGrid = document.getElementById('shopGrid');
const detailName = document.getElementById('detailName');
const detailPrice = document.getElementById('detailPrice');

function setView(name) {
  views.forEach((view) => {
    view.classList.toggle('active', view.dataset.view === name);
  });

  navItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.target === name);
  });
}

navItems.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (target) setView(target);
  });
});

textButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (target) setView(target);
  });
});

arrowButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (target) setView(target);
  });
});

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card" data-name="${product.name}" data-price="${product.price}">
          <div class="product-visual" aria-hidden="true"></div>
          <h4>${product.name}</h4>
          <div class="product-meta">
            <span class="product-price">${product.price}</span>
            <span class="product-fav">♡</span>
          </div>
        </article>
      `
    )
    .join('');

  productGrid.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      const price = card.dataset.price;
      detailName.textContent = name;
      detailPrice.textContent = price;
      setView('detail');
    });
  });
}
