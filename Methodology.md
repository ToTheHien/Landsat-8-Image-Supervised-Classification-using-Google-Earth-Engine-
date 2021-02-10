![diagram](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/diagram.png)

Define geographic and temporal domain: choosing the area of interest and it temporal data. 
Filter data: get the length of date of the data. We choose from March to August which in dry season to avoid cloudy.
Median data: take median all the input Landsat image.
Collect samples: collect training data to teach the classifier, collect representative samples of reflectance spectra of each land cover class of interest; assign collected data to each class that represent for its characteristic.
Merge samples: merge those class into a single collection, called a FeatureCollection.
Training data: apply the classifier algorithm to train the data.
