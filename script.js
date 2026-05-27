const database = {
  positions: [
    { title: 'Bonsai', image: 'image/bonsai.png' },
    { title: 'Cactus', image: 'image/cactus.png' },
    { title: 'Creepers', image: 'image/creepers.png' },
    { title: 'Succulent', image: 'image/succulents.png' },
    { title: 'Seeds', image: 'image/seeds.png' },
    { title: 'Gifting', image: 'image/gift.png' }
  ],
  bestSelling: [
    { image: 'image/indoor.png', alt: 'flowering plants' },
    { image: 'image/air_pur.png', alt: 'air plants' },
    { image: 'image/flowering.png', alt: 'indoor plants' }
  ]
  };

/**
@param {Array} data
@param {String} containerId
@param {String} templateType
*/

function buildSection(data, containerId, templateType) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach(item => {
    let element;

    switch (templateType) {
      case 'position-figure': // Секція з круглими категоріями (твоя перша частина)
        element = document.createElement('figure');
        element.innerHTML = `
          <a href="#">
            <img src="${item.image}" alt="${item.title} photo">
            <figcaption>${item.title}</figcaption>
          </a>
        `;
        break;

      case 'sale-large': // Секція Best Selling
        element = document.createElement('div');
        element.className = 'sale-box sale-box-large';
        element.innerHTML = `
          <img src="${item.image}" alt="${item.alt || 'plant'}" class="sale-box-picture">
          <a href="#" class="btn">Shop Now</a>
        `;
        break;
    }

    if (element) container.appendChild(element);
  });
}

buildSection(database.positions, 'positionsMain', 'position-figure');
buildSection(database.bestSelling, 'bestPlantsContainer', 'sale-large');