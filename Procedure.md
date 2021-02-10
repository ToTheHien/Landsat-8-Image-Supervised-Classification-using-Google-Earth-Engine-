First, we sample the region of interesst by points.

![1](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/1.png)

![2](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/2.png)

![7](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/7.PNG)

*Nha Trang City - 2016*

The result contain many false classifications. Especially, the mix region between urban and agriculture. There are a few option to improve this classification:

- Change the training sample size: use polygons instead of points for more training pixels.
- Change the sampling strategy: some land cover class cover much more area than others. We could experiment with a stratified sampling approach instead.
- Change the algorithm: try different algorithm to approach the classification.

Thus, in the next step we combine points and polygon sampling.

![3](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/3.png)

![4](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/4.png)

![7](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/7.PNG)

*Nha Trang City - 2016*

This result still contain the mixing-false region of urban and agriculture, also on the island areas. Let try to use only polygon sampling.

![5](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/5.png)

![6](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/6.png)

![7](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/7.PNG)

*Nha Trang City - 2016*

Now the classification get more accurate. Next we use different algorithm to decide which one is suitable for our work.

![NT](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/NT.PNG)

![7](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/7.PNG)

*Nha Trang City - 2015*

![perceptron](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/perceptron.PNG)

*perceptron()*

![svm](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/svm.PNG)

*svm()*

![naiveBayes](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/naiveBayes.PNG)

*naiveBayes()*

![minimunDistance](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/minimunDistance.PNG)

*minimunDistance()*

![cart](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/cart.PNG)

*cart()*

![gmoMaxEnt](https://github.com/ToTheHien/Landsat-8-Image-Supervised-Classification/blob/main/images/2015.PNG)

*gmoMaxEnt()*

Those result are list in evaluated order from left to right/ top to bottom. From the real image we clarify that the *gmoMaxEnt()* algorithm is the most pertinent algorithm for our classification

