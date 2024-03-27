# Experimental paradigms

Below you will find a set of experiments that are often used in visual perception. When we use it for education, we use a server for the data import and export. If you want temporary access you could contact me, otherwise you can adapt the code to download the data to your local computer.

<!--Download your results here:

[https://visualparadigms.io.tudelft.nl/](https://visualparadigms.io.tudelft.nl/)
-->

A complete list of p5.js paradigms can be found [on our p5.js account](https://editor.p5js.org/vcd.paradigms/collections/fL6StoJcy), below you will find more information and tutorials.

### Common issues…

- **My image is way too big/small?**
If you change the image size before uploading (for example using Photoshop) it will also be a different size in the sketch, or you could try changing the display size yourself in the code.
- **Visualizers only download one image?**
This probably means your browser doesn’t allow you to download multiple files at the same time, change it in your browser settings or try using another browser.
- **The images don’t load
This may be due to the wrong path being called for. To fix this navigate to the preload() function and check if the loadimages() function calls for the correct folder. The two options are:**

```jsx
 **images[i] = loadImage("img/" + filenames[i]);

 //or

 images[i] = loadImage("images/" + filenames[i]);**
```


:-------------------------|:-------------------------|:-------------------------
:-------------------------|:-------------------------|:-------------------------
![importannots-experiment.gif](Experimental%20paradigms/importannots-experiment.gif)<br>
**[ImportAnnots](#ImportAnnots)**|![importannots-experiment.gif](Experimental%20paradigms/importannots-experiment.gif)<br>
**[ImportAnnots](#ImportAnnots)**|![importannots-experiment.gif](Experimental%20paradigms/importannots-experiment.gif)<br>
**[ImportAnnots](#ImportAnnots)**
:-------------------------|:-------------------------|:-------------------------


![zoommaps-experiment.gif](Experimental%20paradigms/zoommaps-experiment.gif)

**[ZoomMaps](Experimental%20paradigms.md)**

![bubbleview-experiment.gif](Experimental%20paradigms/bubbleview-experiment.gif)

**[BubbleView](Experimental%20paradigms.md)**

![codecharts-experiment.gif](Experimental%20paradigms/codecharts-experiment.gif)

**[CodeCharts](Experimental%20paradigms.md)**

![visualsearch-experiment.gif](Experimental%20paradigms/visualsearch-experiment.gif)

**[Visual Search](Experimental%20paradigms.md)**

![changeblindness-experiment.gif](Experimental%20paradigms/changeblindness-experiment.gif)

**[Change Blindness](Experimental%20paradigms.md)**

![conspicuity-experiment.gif](Experimental%20paradigms/conspicuity-experiment.gif)

**[Conspicuity](Experimental%20paradigms.md)**

![attributerating-experiment.gif](Experimental%20paradigms/attributerating-experiment.gif)

**[Attribute rating](Experimental%20paradigms.md)**

![similarity-experiment.gif](Experimental%20paradigms/similarity-experiment.gif)

**[Similarity](Experimental%20paradigms.md)**

no gif yet :(

**[Classification](Experimental%20paradigms.md)**

## Visual Search

- **What**: search for a predefined target in a scene
- **Independent variables**: Target, scene
- **Dependent variables**: reaction time, accuracy
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/K8SgeoPqB)**

[https://youtu.be/LWUi4E5s3vg](https://youtu.be/LWUi4E5s3vg)

## Change blindness

- **What**: search for something changing in a scene
- **Independent variables**: Target, scene
- **Dependent variables**: reaction time, accuracy
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/1hIL859G2)**

[https://youtu.be/TvMfQ_rvvw0](https://youtu.be/TvMfQ_rvvw0)

## Conspicuity

- **What**: introspectively judge visibility of a peripheral target
- **Independent variables**: Target, scene
- **Dependent variables**: distance
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/L5RWlpWjx)**
- **[P5 code (visualizer)](https://editor.p5js.org/vcd.paradigms/sketches/t9wLJJe1u)**
- Note: Safari might cause some issues with downloading the results from the visualizer, use Chrome for best results.

[https://youtu.be/afljLkofeWc](https://youtu.be/afljLkofeWc)

## BubbleView

- **What**: One of the four attention experiments from [TurkEyes](https://turkeyes.mit.edu/) that approximate eye movements, [also](http://bubbleview.namwkim.org/)
- **Independent variables**: Scene
- **Dependent variables**: Attention positions, order.
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/Oyu0Heqaj)**
- **[P5 code (visualizer)](https://editor.p5js.org/vcd.paradigms/sketches/yPcZIRjMK)**
- Note: Safari might cause some issues with downloading the results from the visualizer, use Chrome for best results.

[https://youtu.be/YtoIYI1scAk](https://youtu.be/YtoIYI1scAk)

## Attribute rating

- **What**: Rating a certain attribute on a scale.
- **Independent variables**: Attributes (do the same experiment with different adjectives), any stimulus variation
- **Dependent variables**: Rating value
- **Data analysis**: If you measure a bunch of attributes, you can perform [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis). But simple correlations are also interesting.
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/2Rc1zHsQP)**

[https://youtu.be/NGXfh_7Vm9Y](https://youtu.be/NGXfh_7Vm9Y)

## Similarity

- **What**: Rating two stimuli with regard to their similarity
- **Independent variables**:
- **Dependent variables**: Similarity rating
- **Data analysis**: the similarity data can be used for [MDS](https://en.wikipedia.org/wiki/Multidimensional_scaling)
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/hHwkG56pY)**

[https://youtu.be/MR9vSRWY2Ww](https://youtu.be/MR9vSRWY2Ww)

## CodeCharts

- **What**: One of the four attention experiments from [TurkEyes](https://turkeyes.mit.edu/) that approximate eye tracking.
- **Independent variables**: Scene
- **Dependent variables**: Attention positions, order.
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/H2fIFFFxx)**
- **[P5 code (visualizer)](https://editor.p5js.org/vcd.paradigms/sketches/mDeyA_gXh)**
- Note: Safari might cause some issues with downloading the results from the visualizer, use Chrome for best results.

[https://youtu.be/1WMdKtrd1fw](https://youtu.be/1WMdKtrd1fw)

## ZoomMaps

- **What**: One of the four attention experiments from [TurkEyes](https://turkeyes.mit.edu/) that approximate eye tracking.
- **Independent variables**: Scene
- **Dependent variables**: Attention positions, order.

- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/BgDNLmWDi)**
- **[P5 code (visualizer)](https://editor.p5js.org/vcd.paradigms/sketches/EvRL_lBP-)**
- Note: Safari might cause some issues with downloading the results from the visualizer, use Chrome for best results.

[https://youtu.be/P_H632iqYKU](https://youtu.be/P_H632iqYKU)

## ImportAnnots

- **What**: One of the four attention experiments from [TurkEyes](https://turkeyes.mit.edu/) that approximate eye tracking.
- **Independent variables**: Scene
- **Dependent variables**: Attention positions, order.
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/CimPXAc2s)**
- **[P5 code (visualizer)](https://editor.p5js.org/vcd.paradigms/sketches/p87h1CGRC)**
- Note: Safari might cause some issues with downloading the results from the visualizer, use Chrome for best results.

[https://youtu.be/h7VIIOlfp-0](https://youtu.be/h7VIIOlfp-0)

## Image Classification (with icons)

- **What**: Multiple choice question using images (in this example the PreMo tool to measure emotion)
- **Independent variables**: Scene
- **Dependent variables**: Whatever categorical variable you like.
- **[P5 code](https://editor.p5js.org/vcd.paradigms/sketches/JN0QdcM8c)**

[https://youtu.be/8FYzksvxaPw](https://youtu.be/8FYzksvxaPw)
