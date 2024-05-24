import {AlignText} from '../../../src/constants.js';

export const props = [

  {
    name: 'Wheel',
    radius: 0.75,
    itemLabelRadius: 0.95,
    itemLabelRadiusMax: 0.75,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ['yellow', 'green'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'arial bold',
    itemLabelFontSizeMax: 30,
    itemBackgroundColors: ['black', 'white' ],
    rotationSpeedMax: 500,
    rotationResistance: -100,
    lineWidth: 10,
    lineColor: 'black',
    image: './img/wheel-center.svg',
    overlayImage: './img/background.svg',
    items: [
      {
        label: '5000',
        weight: 4,
      },
      {
        label: '200',
        weight: 100,
      },
      {
        label: '1000',
        weight: 20,
      },
      {
        label: '400',
        weight: 50,
      },
      {
        label: '2000',
        weight: 10,
      },
      {
        label: '200',
        weight: 100,
      },
      {
        label: '1000',
        weight: 20,
      },
      {
        label: '400',
        weight: 50,
      },
    ],

  },
];