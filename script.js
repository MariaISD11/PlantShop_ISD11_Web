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
  ],
  blogs: [
    { text: '8 Best <br>Low Maintenance Plants <br>For a Busy Home', image: 'image/back_photo1.png' },
    { text: 'Air Purifying Plants <br>You Should Take Home <br>Today', image: 'image/back_photo2.png' }
  ],
  hotSale: [
    { name: 'Adenium Plant', newPrice: 350, oldPrice: 450, image: 'image/Adenium_Plant.png' },
    { name: 'Ficus Twilight', newPrice: 350, oldPrice: 450, image: 'image/Ficus_Twilight.png' },
    { name: 'Rhoeo Plant', newPrice: 350, oldPrice: 450, image: 'image/Rhoeo_Plant.png' },
    { name: 'Ctenanthe burle', newPrice: 350, oldPrice: 450, image: 'image/Ctenanthe_burle.png' }
  ],
  planters: [
    { name: 'Tale Pot', newPrice: 350, oldPrice: 450, image: 'image/Tale_Pot.png' },
    { name: 'Ice Cream Pot', newPrice: 350, oldPrice: 450, image: 'image/Ice_Cream_Pot.png' },
    { name: 'Beige Fracture', newPrice: 350, oldPrice: 450, image: 'image/Beige_Fracture.png' },
    { name: 'Mint Fusion', newPrice: 350, oldPrice: 450, image: 'image/Mint_Fusion.png' }
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
      case 'position-figure': 
        element = document.createElement('figure');
        element.innerHTML = `
          <a href="#">
            <img src="${item.image}" alt="${item.title} photo">
            <figcaption>${item.title}</figcaption>
          </a>
        `;
        break;

      case 'sale-large': 
        element = document.createElement('div');
        element.className = 'sale-box sale-box-large';
        element.innerHTML = `
          <img src="${item.image}" alt="${item.alt || 'plant'}" class="sale-box-picture">
          <a href="#" class="btn">Shop Now</a>
        `;
        break;
      
      case 'sale-mini': 
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

      case 'blog-card': 
        element = document.createElement('div');
        element.className = 'blog-box';
        element.innerHTML = `
          <img src="${item.image}" alt="photo">
          <div class="blog-descrip">
              <p>${item.text}</p>
              <a href="#" class="btn">Read</a>
          </div>
        `;
        break;

      case 'sale-discount': 
        element = document.createElement('div');
        element.className = 'sale-box sale-box-mini';
        element.innerHTML = `
          <img src="${item.image}" alt="img" class="sale-box-picture">
          <img src="image/sale_mark.png" alt="discount" class="sale-box-discount">
          <div class="sale-box-info">
              <p class="name">${item.name}</p>
              <div class="price">
                  <p class="new-price">$ ${item.newPrice}</p>
                  <p class="old-price">$ ${item.oldPrice}</p>
              </div>
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
buildSection(database.blogs, 'blogsContainer', 'blog-card');
buildSection(database.hotSale, 'hotSalesContainer', 'sale-discount');
buildSection(database.planters, 'plantersContainer', 'sale-discount');