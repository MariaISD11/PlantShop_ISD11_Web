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
  ],
  trending: [
    { name: 'Jade Terrarium', price: 350, image: 'image/Jade_Terrarium.png' },
    { name: 'Ficus Benjamina', price: 350, image: 'image/Ficus_Benjamina.png' },
    { name: 'Syngorium Plant', price: 350, image: 'image/Syngorium_Plant.png' },
    { name: 'Cactus Peruvianus', price: 350, image: 'image/Cactus_Peruvianus.png' },
    { name: 'Chlorophytum Lemon', price: 350, image: 'image/Chlorophytum_Lemon.png' },
    { name: 'Aloe Rauhii', price: 350, image: 'image/Aloe_Rauhii.png' },
    { name: 'Areca Palm', price: 350, image: 'image/Areca_Palm.png' },
    { name: 'Sansevieria Black', price: 350, image: 'image/Sansevieria_Black.png' }
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
      
      case 'sale-mini': // Секція Trending Plants
        element = document.createElement('div');
        element.className = 'sale-box sale-box-mini';
        element.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="sale-box-picture">
          <div class="sale-box-info">
              <p class="name">${item.name}</p>
              <p class="price">$ ${item.price}</p>
          </div>
          <a href="#" class="btn">Buy</a>
        `;
        break;
    }

    if (element) container.appendChild(element);
  });
}

buildSection(database.positions, 'positionsMain', 'position-figure');
buildSection(database.bestSelling, 'bestPlantsContainer', 'sale-large');
buildSection(database.trending, 'trendingPlantsContainer', 'sale-mini');