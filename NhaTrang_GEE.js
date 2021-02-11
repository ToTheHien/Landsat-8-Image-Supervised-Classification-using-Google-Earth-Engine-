//Note that the year info can be modified from 2013 to 2015, 2017, etc
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(roi) #roi is the geographical coordinate
    .filterDate('2013-03-01', '2013-08-01')
    .median());
var NT = ee.FeatureCollection("users/manhattanphysik/NhaTrang") //The FeatureCollection was import as a shape file of Nha trang area  
var clip = image.clip(NT);
Map.addLayer(NT)
Map.addLayer(clip, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');

//urban, forest, fallow, water were selected manually on the map
var classNames = urban.merge(forest).merge(fallow).merge(water);

print(classNames)

var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var training = clip.select(bands).sampleRegions({
  collection: classNames,
  properties: ['landcover'],
  scale: 30
});
print(training);

var classifier = ee.Classifier.gmoMaxEnt().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

//Run the classification
var classified = clip.select(bands).classify(classifier);

//Display classification
Map.centerObject(classNames, 11);
Map.addLayer(classified,
{min: 0, max: 3, palette: ['#ff4b4b', '#2c801d', '#e0bd3e', '#00cece']},'classification');
                         
