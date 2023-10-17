import React,{useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {PiButterflyLight} from "react-icons/pi"
import {GiLion,GiMonkey,GiElephant} from "react-icons/gi"
import {FaHippo} from "react-icons/fa"




function SectionDiscover() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const animalData = [
    {
      name: 'Butterfly',
      image: '../../src/assets/img/buomEdit.jpg',
      category: 'Dessert',
      items: [
        {
          name: 'Four Cheese Garlic Bread',
          description: 'Toasted French bread topped with romano',
          price: '$9.00',
        },
        {
          name: 'Rastrami Roll',
          description: 'Spreadable cream cheese, blue cheese',
          price: '$16.00',
        },
        {
          name: 'Caprese Salad Kabobs',
          description: 'Cherry-size fresh mozzarella cheese balls',
          price: '$34.00',
        },
        {
          name: 'Peachy Jalepeno Guacomole',
          description: 'Ground cumin, avocados, peeled and cubed',
          price: '$40.00',
        },
      ],
    },
    {
      name: 'Lion',
      image: '../../src/assets/img/sutuEdit.jpg',
      category: 'Steak',
      items: [
        {
          name: 'Four Cheese Garlic Bread',
          description: 'Toasted French bread topped with romano',
          price: '$9.00',
        },
        {
          name: 'Rastrami Roll',
          description: 'Spreadable cream cheese, blue cheese',
          price: '$16.00',
        },
        {
          name: 'Caprese Salad Kabobs',
          description: 'Cherry-size fresh mozzarella cheese balls',
          price: '$34.00',
        },
        {
          name: 'Peachy Jalepeno Guacomole',
          description: 'Ground cumin, avocados, peeled and cubed',
          price: '$40.00',
        },
      ],
    },
    {
      name: 'Monkey',
      image: '../../src/assets/img/khiEdit.jpg',
      category: 'Coffee Menu',
      items: [
        {
          name: 'Espresso Macchiato',
          description: 'Chicken / Apple / Tomatoes',
          price: '$9.00',
        },
        {
          name: 'Mocha Whipped Cream',
          description: 'Bacon / Shrimp / Garlic',
          price: '$16.00',
        },
        {
          name: 'Cold Coffee',
          description: 'Pork / Tomatoes / Veggies',
          price: '$34.00',
        },
        {
          name: 'Caramel Macchiato',
          description: 'Prawn / Sausage / Potatoes',
          price: '$40.00',
        },
      ],
    },
    {
      name: 'Hippo',
      image: '../../src/assets/img/hamaEdit.jpg',
      category: 'Pizza',
      items: [
        {
          name: 'Four Cheese Garlic Bread',
          description: 'Toasted French bread topped with romano',
          price: '$9.00',
        },
        {
          name: 'Rastrami Roll',
          description: 'Spreadable cream cheese, blue cheese',
          price: '$16.00',
        },
        {
          name: 'Caprese Salad Kabobs',
          description: 'Cherry-size fresh mozzarella cheese balls',
          price: '$34.00',
        },
        {
          name: 'Peachy Jalepeno Guacomole',
          description: 'Ground cumin, avocados, peeled and cubed',
          price: '$40.00',
        },
      ],
    },
    {
      name: 'Elephant',
      image: '../../src/assets/img/voi.jpg',
      category: 'Burger',
      items: [
        {
          name: 'Four Cheese Garlic Bread',
          description: 'Toasted French bread topped with romano',
          price: '$9.00',
        },
        {
          name: 'Rastrami Roll',
          description: 'Spreadable cream cheese, blue cheese',
          price: '$16.00',
        },
        {
          name: 'Caprese Salad Kabobs',
          description: 'Cherry-size fresh mozzarella cheese balls',
          price: '$34.00',
        },
        {
          name: 'Peachy Jalepeno Guacomole',
          description: 'Ground cumin, avocados, peeled and cubed',
          price: '$40.00',
        },
      ],
    },
  ];

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <div>
      <section className="section-discover-menu">
        <div className="container">
          <div className="heading-two">
            <h2>Discover Species</h2>
            <div className="line"></div>
          </div>
          <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {animalData.map((animal, index) => (
              <button
                key={index}
                className={`nav-link ${selectedAnimal === animal.name ? 'active' : ''}`}
                onClick={() => handleAnimalClick(animal.name)}
                id={`v-pills-${animal.name.toLowerCase()}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#v-pills-${animal.name.toLowerCase()}`}
                type="button"
                role="tab"
                aria-controls={`v-pills-${animal.name.toLowerCase()}`}
                aria-selected={selectedAnimal === animal.name ? 'true' : 'false'}
              >
                {animal.name === 'Butterfly' ? <PiButterflyLight /> : null}
                {animal.name === 'Lion' ? <GiLion /> : null}
                {animal.name === 'Monkey' ? <GiMonkey /> : null}
                {animal.name === 'Hippo' ? <FaHippo /> : null}
                {animal.name === 'Elephant' ? <GiElephant /> : null}
                {animal.name}
              </button>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            {animalData.map((animal, index) => (
              <div
                key={index}
                className={`tab-pane fade show ${selectedAnimal === animal.name ? 'active' : ''}`}
                id={`v-pills-${animal.name.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`v-pills-${animal.name.toLowerCase()}-tab`}
              >
                <div className="row align-items-center discover-menu">
                  <div className="col-xl-6">
                    <div className="discover-img">
                      <img alt={animal.name} src={animal.image} />
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="discover">
                      <h4>{animal.category}</h4>
                      <ul>
                        {animal.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <div>
                              <h6>{item.name}</h6>
                              <p>{item.description}</p>
                            </div>
                            <span>{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionDiscover;
