# Distant viewing

Digital images consist of pixels, which is data that you can computationally analyse to find _patterns_ within and between pictures. In the first part we will discuss patterns between pictures, which is in the context of visual studies is called "distant viewing".


An accessible introduction is the book [Distant Viewing -
Computational Exploration of Digital Images](https://mitpress.mit.edu/9780262546133/distant-viewing/). In [chapter 2](https://direct.mit.edu/books/oa-monograph/chapter-pdf/2163341/c001100_9780262375160.pdf), the authors explain that before analysing images you first need to extract information, a process they call *annotation* which I rather replace with *computational annotation* as we obviously can also annotate with humans (crowdsourcing could solve a scaling problem and it would still be possible to do 'distant' viewing, i.e. compare a relatively large body of pictures).

In [this](https://library.imaging.org/jpi/articles/7/0/000501) pictorial research paper, which focused on _human_ annotations, a clarifying scheme is shown:

![](/contents/closedistant.png)

In sum: you can do either close or distant viewing either with human or machine eyes, with the marked difference that for the human eye we can dissociate between objective and subjective annotations. The numbers in the figure denoted all the possible combinations of which the paper discussed the bold lined ones.  

We will use python notebooks via [google colab](https://colab.research.google.com). Some advantages of google colab is that computation happens in the cloud (i.e. you do not need a powerful computer), you can easily access image folders from your google drive and I can share code (and datasets) with you. I made three very basic python notebooks that explain computational distant viewing, and that can be used for your own image sets.

## Example datasets
I created some example datasets on google drive. They generally contain small images (but not all so check before you run code) and in most cases the _lack_ metadata. The reason for that is to keep it simple (and I did not yet have time to create something easily accessible)

- [Getty paintings](https://drive.google.com/drive/folders/1b95b7TwcgzuCwrqsMlGfoDHnhZLRVdS4?usp=sharing) which are about 400 painting images, quite small so easy to load. They obviously originate from [the Getty](https://www.getty.edu).
 - [BMW cars](https://drive.google.com/drive/folders/1aZP-E8jAYxaa7Ac_kJWkcMCy63IWYbxh?usp=sharing) a small subset of a BMW pictures set I found at [Kaggle](https://www.kaggle.com/datasets/occultainsights/bmw-cars-over-11k-labeled-images)
- [Depicted faces](https://drive.google.com/drive/folders/1GU8aLHMRl2hepsDPV0AdvjkaK7rEqwo0?usp=sharing) taken from the [4tu data repository](https://doi.org/10.4121/uuid:3beee8ef-1b7e-451f-966f-13230cb2bbe7) and related to a [paper](https://library.imaging.org/ei/articles/32/11/art00014) where we analysed posture and colour of depicted faces.
- [Flora](https://drive.google.com/drive/folders/1_W3BtNHjOvQTFTCc2n2e0qPBGnLPiHkS?usp=sharing) from the [Materials in Paintings](https://materialsinpaintings.tudelft.nl) dataset.
- [Movie posters](https://drive.google.com/drive/folders/1TUQqo50wke6PSnM-EQdbpMF2QbD61I7z?usp=sharing) originally from this [Kaggle repository](https://www.kaggle.com/datasets/raman77768/movie-classifier).


## Example 1: Average image calculation
- [colab notebook](https://colab.research.google.com/drive/1XdmI7N2V3raNM1o2JFG-VEMJD0MM16vA?usp=sharing)

An interesting way of finding patterns in image collections is taking the average. Per pixel you literally compute the average value, and you thus need to have images of exactly similar dimensions. Don't worry, image resizing is automatically done in the notebook.

I think it is always interesting to take an average image, but you will notice that it does not always give satisfying insights: it really depends on your dataset! For faces it obviously works well, for movie posters much less, you can probably imagine why.

The first time as saw an average picture was in a paper by [Aude Oliva and Antonio Torralba](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8c59f2938877c7900573098f01def10f8dee508c), and one of the authors made [gallery](https://people.csail.mit.edu/torralba/gallery/#) and the artist [Jason Salavon](http://salavon.com) has made various average images since the 90's. Besides aesthetic appeal, they certainly let you 'distant view' an image set, for example [this](https://journals.ub.uni-heidelberg.de/index.php/dah/article/view/21640/15413) paper visualised differences across time in portrait painting.

Here I used the code to create an average image of the bmw image set:

![](/contents/bmw_small_average_booosted_2024_12_08_11_16_52.png)

It does not show much except the intuition that photos of BMWs (or cars in general) have varying vantage points, something we also found in a later analysis where we let a neural network map the most salient differences (where vantage point seemed to play an important role). Note that vantage point variation is not necessarily trivial, some things you only photograph from certain angles, such as a face: you hardly see portraits of backsides of human heads (yes, [i know](https://en.wikipedia.org/wiki/Not_to_Be_Reproduced) what you were thinking).

## Example 2: Mean color variations
- [colab notebook](https://colab.research.google.com/drive/1HLLqQ140Hha2IijyUMzuFwKYFoG9dx7l?usp=sharing)

The first case study discussed in [Distant Viewing -
Computational Exploration of Digital Images](https://mitpress.mit.edu/9780262546133/distant-viewing/) concerns the design of movie posters, and in particular their usage of colours. Let's try to loosely replicate their analysis.

From the images we can collect all kinds of color data, for example the mean color channels. Depending on the color space you are woking in, that could be red, green and blue or hue, saturation and value for RGB and HSV spaces, respectively. To get an intuition whether these computations make sense, and align with what we see with our own eyes, _we use the thumbnail posters as coordinate markers_. Here is a plot of the mean red against green:

![](/contents/Imagesred-green_2024_12_08_11_55_05.jpg)

It looks pretty cool, and also like we are on to something because ... there is a clear pattern! This is called a correlation: red and green are correlated, when a poster has much red, it also has much green. Now an important 'dimensional reduction' procedure can be of help: [Principle Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis). In this case we start with three dimensions (red, green and blue) and we end up with three dimensions that are _decorrelated_. Without going in too much detail let's just check out the result:

![](/contents/Imagespca_2024_12_08_11_55_05.jpg)

What are the axes now? Indeed, on the x-axis we see brightness. On the y axis there seems to be a gradient from blue to red/yellow. So what would happen if we plot the second and third PCA dimension in one plot? Something with colour opponency?!

![](/contents/Imagespca_2024_12_08_14_04_47.jpg)


## Example 3: VGG19 and tSNE
- [colab notebook](https://colab.research.google.com/drive/14UiXzk_4yemvDwGUM1fBwGrASH-sX1eB?usp=sharing)

In the previous example, the mean colours are the 'annotations' of the image which consists of three values (RGB in our case). We used PCA to decorrelate these values, but also to _reduce_ the number of 'dimensions' of the annotation. PCA is just one of many dimensional reduction techniques that exist n data science. The nice thing about the PCA is that you can try to interpret the axes: they can be meaningful. In the previous example it looked a little bit that the PCA dimensions related to opponent colours, and we certainly found that the first axis (which is always the most important PCA dimension) was grayscale (brightness).

In this example we will use annotations that are much more complex, and a dimensional reduction technique that does not result in meaningful dimensions. This does not sound very appealing but before we will explain the details, have a look at what it does to a collection of the [Getty](https://www.getty.edu), which comprises of 403 paintings. Please click on it to enlarge and inpsect the relations between the pictures before continuing reading.

[![Foo](/contents/tSNE_Getty_small_2024_12_08_13_00_28.png)](/contents/tSNE_Getty_small_2024_12_08_13_00_28.png)

As you probably noticed, the x and y axis do not seem to bear meaning. Yet, there are all kinds of interesting clusters. On top you find the portraits and moving down you see more group portrait, more nudity. Moving right you may see some interiors of similar structure and moving down right you end up at landscapes. Going up, you may also find some still-lifes.

The clusters (rather than the dimensions) are meaningful, and they are based on a neural network that was trained to classify objects: VGG19. The cool thing about these types of networks is that instead of reading out the last layer, which is basically the answer to the classification question, you can read out the layer before that, aka the 'fully connected layer'. In case of VGG19, that consists of 4096 values. So that's a whole lot more than the 3 colours! And what this marvellous tSNE does, is reducing these 4096 values to 2. An unimaginable endeavour, but as you saw: it works very well! Back in 2016, it was quite a hit when some people from Google Arts launched their [t-SNE Map](https://experiments.withgoogle.com/t-sne-map).



<!--
# Close Viewing



# Where to find all these images?

## Curating your own picture set
It can unfortunately be quite a hassle to create a nice set of images for your research, despite the many worldwide efforts to make create open access to (cultural) images, such as [Europeana](https://www.europeana.eu/). If you start with a large collection such as Europeana, or smaller (but still large) images from the [Rijksmuseum](https://www.rijksmuseum.nl/) or the [Metropolitan](https://www.metmuseum.org), you probably want to make it smaller and focus on a certain subset:
1. download metadata
2. create a selection (e.g. all stereo pictures taken between 1920 and 1940)
3. download the images

Alternatively, you can also create datasets 'manually'. Everyone always wants to automate everything, but in some cases (obviously there are some scaling limits) you can actually select images manually.

## Finding preprocessed picture sets

There are places where to you can find preprocessed picture sets on websites that cater to machine learning, such as [Kaggle](https://www.kaggle.com) or [Papers with Code](https://paperswithcode.com/datasets?mod=images). Mind you that these picture sets are not a priori interesting, which is intentional as these sets often need to represent some real world aspect robustly and unbiased. Off course, they rarely do, which is were interesting stuff happens. And even if there is actually nothing interesting, it might still be a good exercise in the first part of the course.



Maybe something about latent images, i.e. information about a training set that is latently present in networks.
-->
