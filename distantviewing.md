# Introduction

Images consist of pixels, which is data that you can use to quantify relations between pictures. You can also let a computer interpret the content of an image, using some computer vision algorithm. As these algorithms are generally trained in a machine learning context (almost always some kind of deep learning network), they are always biased with respect to the training they received. Take this bias into account when using machine learning (AI).

An accessible introduction is the book [Distant Viewing -
Computational Exploration of Digital Images](https://mitpress.mit.edu/9780262546133/distant-viewing/) which only recently came out and can be freely accessed a MIT Press. In [chapter 2](https://direct.mit.edu/books/oa-monograph/chapter-pdf/2163341/c001100_9780262375160.pdf), the authors explain that before analysing images you first need to extract information, a process they call *annotation* which I rather replace with *computational annotation* as we obviously can also annotate with humans (crowdsourcing could solve a scaling problem and it would still be possible to do 'distant' viewing, i.e. compare a relatively large body of pictures).

# Colab notebooks
We will use python notebooks via [google colab](https://colab.research.google.com). They seem the most versatile tool to share data analysis although the downside is obviously that we rely on big tech. If this choice meets objection we have to find some alternative like [Jupyter](https://jupyter.org) but this will cost considerably more time and effort, and this is only a short course.

Some extra advantages of google colab is that computation happens in the cloud (i.e. you do not need a powerful computer) and many AI (including generative stuff like Stable Diffusion) applications can be run. You probably need to upgrade your account if you want to do heavy computation: a colab pro account is 11 euro's and works quite good (but first check if you really need it), a colab pro+ account is 51 euro's and then you'll have the advantage that you can run them in the background (while closing your browser): not really necessary for this course I think!

## Movieposter colors

![](/images/moviepostergrid.jpg)

The first case study discussed in [Distant Viewing -
Computational Exploration of Digital Images](https://mitpress.mit.edu/9780262546133/distant-viewing/) concerns the design of movie posters, and in particular their usage of colours. Let's try to loosely replicate their analysis.

In this [colab notebook](https://colab.research.google.com/drive/1drDMUUZ6gK2udRu9Frza_XjcNZBmttXD?usp=sharing) I analyse movies posters that I found on [Kaggle](https://www.kaggle.com/datasets/raman77768/movie-classifier/data). Imagedatasets come in all kinds of formats, this one is csv file with image names and their movie genre, and a subfolder with all the images. It looks like this:

![](/images/kagglePandasFile.jpg)

From the images we can collect all kinds of color information, for example the mean color channels. Depending on the color space you are woking it, that could be red, green and blue or hue, saturation and value for RGB and HSV spaces, respectively. To get an intuition whether these computations make sense, and allign with what we see with our own eyes, we can use the mean poster colors as coordinates to plot thumbnail posters, here you see saturation in the x-axis and value on the y-axis:
![](/images/saturation_value.jpg)

It looks pretty cool, and also like we are on to something because ... there is a clear pattern! But alas, the pattern is by construction: we wanted to plot from low saturated on the left (colourless) to high saturation on the right (colourful), and from dark to light in the vertical direction. Nevertheless, there is something interesting about the image, aside its prettiness, which is that apparently our color extraction works, so it is a sanity check that we did not make any mistakes.

Let's do two other color channels (feel free to try out other combinations in the colab notebook), red vs blue:

![](/images/red_blue.jpg)

Here, there is a perhaps not entirely trivial pattern: red and blue seem to be correlated. You can find an explanation yourself.

## Average image calculation
An interesting way of finding patterns in image collections is taking the average. Per pixel you literally compute the average value, and you thus need to have images of exactly similar dimensions. Don't worry, the [colab notebook](https://colab.research.google.com/drive/1XdmI7N2V3raNM1o2JFG-VEMJD0MM16vA?usp=sharing) does this for you but be aware that everything gets scaled to a small square image.

For some reason I have a set of BMW photos that I used on other examples. Here I used it to create an average image:

![](/images/bmw_small_average.png)

It does not show much except the intuition that photos of BMWs (or cars in general) have varying vantage points, something we also found a later analysis where we let a neural network map the most salient differences (where vantage point seemed to play an important role). Note that vantage point variation is not necessarily trivial, some things you only photograph from certain angles, such as a face: you hardly see portraits of backsides of human heads.

# Where to find all these images?

## Curating your own picture set
It can unfortunately be quite a hassle to create a nice set of images for your research, despite the many worldwide efforts to make create open access to (cultural) images, such as [Europeana](https://www.europeana.eu/). If you start with a large collection such as Europeana, or smaller (but still large) images from the [Rijksmuseum](https://www.rijksmuseum.nl/) or the [Metropolitan](https://www.metmuseum.org), you probably want to make it smaller and focus on a certain subset:
1. download metadata
2. create a selection (e.g. all stereo pictures taken between 1920 and 1940)
3. download the images

Alternatively, you can also create datasets 'manually'. Everyone always wants to automate everything, but in some cases (obviously there are some scaling limits) you can actually select images manually.

## Finding preprocessed picture sets

There are places where to you can find preprocessed picture sets on websites that cater to machine learning, such as [Kaggle](https://www.kaggle.com) or [Papers with Code](https://paperswithcode.com/datasets?mod=images). Mind you that these picture sets are not a priori interesting, which is intentional as these sets often need to represent some real world aspect robustly and unbiased. Off course, they rarely do, which is were interesting stuff happens. And even if there is actually nothing interesting, it might still be a good exercise in the first part of the course.

## Investigate latent images

Generative networks were trained on images and can produce images themselves. The production relies on training which is somewhat comparable to human produced pictures (which also represent certain times and places in history). Therefore, you can also choose to study a network with a 'latent' image set: you can generate the dataset yourself and start your study.




<!--
Maybe something about latent images, i.e. information about a training set that is latently present in networks.
-->
