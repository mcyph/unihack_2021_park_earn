class CirclesLayer {
  constructor(map) {
    map.addLayer({
      'id': 'population',
      'type': 'circle',
      'source': 'ethnicity',
      'source-layer': 'sf2010',
      'paint': {
        // make circles larger as the user zooms from z12 to z22
        'circle-radius': {
          'base': 1.75,
          'stops': [
            [12, 2],
            [22, 180]
          ]
        },
        // color circles by ethnicity, using a match expression
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
        'circle-color': [
          'match',
          ['get', 'ethnicity'],
          'White',
          '#fbb03b',
          'Black',
          '#223b53',
          'Hispanic',
          '#e55e5e',
          'Asian',
          '#3bb2d0',
          /* other */ '#ccc'
        ]
      }
    });
  }
}