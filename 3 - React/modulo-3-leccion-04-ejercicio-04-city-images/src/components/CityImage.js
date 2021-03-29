import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
      let cityImages = {
      BuenosAires:
        'https://turismo.buenosaires.gob.ar/sites/turismo/files/styles/img_destacados/public/ciudad_panoramica_guemes_1500x610_0.jpg?itok=w70sWfjT',
      Sydney: 'https://www.todaaustralia.com/wp-content/uploads/2018/07/sidney-sydney-australia-1170x658.jpg',
      Praga: 'https://i0.wp.com/www.pragueando.com/wp-content/uploads/2018/07/c700x420-e1537389220336.jpg',
      Boston: 'https://www.langan.com/wp-content/uploads/2019/02/Boston-996x554.jpg',
      Tokyo: 'https://elhype.com/wp-content/uploads/2020/01/tokyo-lifestyle-arquitectura-elhype-c-690x450.jpg',
    };
    return {
      <img src="https://elhype.com/wp-content/uploads/2020/01/tokyo-lifestyle-arquitectura-elhype-c-690x450.jpg" />
    };
  }
}

export default CityImage;
