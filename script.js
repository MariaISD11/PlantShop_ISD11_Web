const positions = [
  {
    title: 'Bonsai',
    image: 'image/bonsai.png',
    alt: 'bonsai photo',
  },
  {
    title: 'Cactus',
    image: 'image/cactus.png',
    alt: 'cactus photo',
  },
  {
    title: 'Creepers',
    image: 'image/creepers.png',
    alt: 'creepers photo',
  },
  {
    title: 'Succulent',
    image: 'image/succulents.png',
    alt: 'succulents photo',
  },
  {
    title: 'Seeds',
    image: 'image/seeds.png',
    alt: 'seeds photo',
  },
  {
    title: 'Gifting',
    image: 'image/gift.png',
    alt: 'gift photo',
  },
];

const container = document.getElementById('positionsMain');

positions.forEach((position) => {
  const figure = document.createElement('figure');

  figure.innerHTML = `
    <a href="#">
      <img src="${position.image}" alt="${position.alt}">
      <figcaption>${position.title}</figcaption>
    </a>
  `;

  container.appendChild(figure);
});