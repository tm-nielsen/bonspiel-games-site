<p className='no-indent'>This section assumes you have seen 'The Readable Version' to avoid repetition and will focus on the use of BCI technology with ***Curl!***. If you want more info on BCI technology itself, [this page][0] or [the Wikipedia article][1] will serve you better.</p>

### Background
***Curl!*** depends largely on an external application to facilitate BCI functionality, providing UI and feedback as endpoints for an API. Currently this external application is the Emotiv Launcher, which only supports Emotiv devices. We hope to expand support to as many manufacturers as we can through open source alternatives over the course of development. In either case, the external program provides a similar set of methods to facilitate the established process of training and then using a machine learning model with the user's brain signals as interpreted by the BCI. This is all handled by a custom Unity plugin built off the official Emotiv support, which will go open source as soon as it has been made user-friendly and properly tested.

### Setup
Before incoming brain signals can be classified and used as an input method, a meaty setup phase must be completed. First, the device must be put on the user and turned on. For most commercial grade BCIs, this step is fairly simple. Different devices will require electrodes to be wetted with saline, or gel applied to the scalp. Some devices are built as a halo that can be worn like a helmet while others require the specific placement of many detached nodes around the scalp. With the headset placed (or during placement), ***Curl!*** establishes a connection to the Emotiv Launcher, asks for available devices, and provides a list in engine with UI to pair to the computer. The user selects a headset to pair, which ***Curl!*** then tells the Emotiv Launcher to pair with and asks for contact quality information that is then displayed visually in the game. Contact quality is measured and displayed by each individual electrode, which is used to adjust the placement or wetness of individual sensors on the scalp until a sufficient overall quality is reached, at which point training can commence.

In order to classify incoming brain signals for use as a one-button input, we must teach the computer what to look for. To accomplish this, we need samples. Samples are eight second snapshots of brain activity readings, labelled as either "idle" or "action". These samples can be gained in any order, but we take them alternating between idle and command. One of the most exciting things about ***Curl!*** is that we get to do this training in context, with engaging feedback for the user. During the lengthy training process, one of the in game characters displays the current target state (idle or action), even providing direct feedback on action when it is available. During "action" training, an alien character is shown sweeping the ice. Once enough training has been completed for the computer to detect action during training, the character speeds up with successful performance of the command. As training continues, the base speed of the character's animation slows to nothing, eventually relying solely on the input of the player to move. This provides the player with contextual association with their action, which helps in game, but eventually peels back to give direct and realistic feedback. Unfortunately, due to the black box nature of a closed source application, I can say very little about the actual process Emotiv uses for classification. However, one specific quirk of their process is that "idle" is used as a baseline rather than a category. This means that while training idle, every incoming signal is immediately classified as idle, so providing live feedback on idle training is not possible. In general terms, the samples gained during training are provided to a cloud based implementation of a machine learning algorithm, which in broad terms allows the computer to recognize general trends in each category, enabling their differentiation.

Now that the computer has been trained, ***Curl!*** needs to know which category of brain activity is being detected at any given moment. To accomplish this, we start a live session with the active headset through the Emotiv Launcher. This tells the application to read and interpret a variety of information on the fly, making it available to us through various data streams. These data streams are what we used to get information about contact quality and provide live feedback during training. With setup complete, their primary purpose is using the mental command data stream as an input method. Each data stream is used through one or more layers of interpretation through the custom Unity plugin, routing streams of incoming data packets to relevant places and/or buffering them into the main engine thread as events. The same is done to asynchronous events and responses from the Emotiv launcher. For control, mental command stream is fed into a headset control proxy that filters the incoming data and converts it into a single boolean or float input value in a code level interface equivalent to those used for a keyboard or gamepad.

### Control Methods
A variety of control paradigms exist that make use of the simple one-button we can now make use of. Each of these can be adapted and combined with each other to create interaction mechanisms best fit for any specific program.

#### Switch Access
<p className='no-indent'>multi-select, simple</p>

Options are presented one after another, with a single option highlighted at any given time. The user performs their mental command as an input when the desired option is selected. Options can be presented in a grid, scrolled through or swapped out. The important thing is that the highlighted option is clearly distinguished from the others by use of bright colours, size, motion, etc. It is extremely helpful to provide a clear visual indicator of when options will switch, allowing users to prep or relax in preparation for a new option. In a slight variation, a switch select approach can be used to select an option along a smooth continuum as a cursor moves across it. This is used in Curl to select the target curve of the stone in two steps. This is the most simple method from a design standpoint, but suffers greatly from a large number of options.

#### Fill Bar
<p className='no-indent'>two options, simple</p>

Two options are presented. The primary is a positive selection, for which input must be performed. The other is the default. A bar starts filled partway between the two options. Hold down to fill up, otherwise the bar will slowly empty towards the default option. A selection is made once the bar reaches either end. Only two options can be selected, and the paradigm is best suited to options that fit naturally into the active and default roles, such as "play again" or "return to menu".

#### Multiple Press
<p className='no-indent'>one option, simple</p>

A variation on the fill bar. A single option is presented for which input must be performed a set number of times to proceed. Used as a gate to check ability to perform input.

#### Gnomon Clocks
<p className='no-indent'>multi-select, scalable</p>

[Paper for nerds][2]

Gnomon clocks are a sort of variation on the switch select paradigm. Multiple objects are presented, each with a clock. The clock has a moving timer hand and a hand set at 12 o'clock. The goal of the user is to perform input when their desired clock aligns both hands. If a match between input and clock is determined, a selection is made. However, if the match is not os sufficient quality, an indicator of potential matches is provided and selection must be done again. Each potential match can be treated as a partial match. If enough partial matches are made on an option, it can be selected.

#### P 300
<p className='no-indent'>multi-select, scalable</p>

The p300 refers to a neurological phenomenon that an external stimulus will create a spike in brain activity consistently 300 milliseconds later. Additionally, looking at a selection of flashing options, the user's brain will react much more significantly to items holding their attention. the p300 control paradigm combines these options into an extremely scalable selection mechanism. A set of selections are presented on screen and flashed on random intervals for a period. Following the period, the computer compares each set of flashes to the recorded brain activity, checking if any set matches with a set of spikes in activity, delayed by 300 milliseconds. If a sufficient match is found, the selection is made.

### Menus / UI Design
Though the same considerations of any UI/UX design generally apply to a BCI enabled application, it is extra important to focus heavily on clarity and simplicity. Large, readable text with high contrast and a limited number of elements are preferred. A user taking time to figure out what is happening on screen is innately undesirable in UX, but with BCI also provides an ample period of unpredictable activity that could easily lead to a panicked chain of false positive selections. To additionally assuage this problem, confirmation stages with more reliable selection methods (fill bar) and other ways to redo mistaken selections are very valuable.

### Considerations of Practical Use
Input with a BCI can be quite intuitive for many users when paired with sufficiently intuitive UX design. However, the variability of the method introduces a plethora of practical issues that will appear for different users. Performing the input itself can take a large amount of focus to maintain for a period of time. This applies to both a span of a few seconds and over the course of an entire play session. The focus needed to maintain reliable input is draining. Additionally for new users, there is significant variation in reliability as they become more familiar with the input mechanism. As they train the computer to recognize their mental command, they are also learning to perform it. This changes the mental action they were attempting to perform in big or small ways. For some, this means early training samples, struggling to perform their action, are entirely unlike late samples where they are able to picture their action with greater clarity. This can make for an extremely unreliable input mechanism. The most effective method of subverting these issues is quality instruction of someone familiar with the process.

In addition to the practical concerns for BCI users, it is worth consideration that an accessibility first design puts players using conventional methods second. Menu progression and gameplay in ***Curl!*** has been heavily modified beyond convention for use with BCI. This alienates the intuition of experienced gamer using a keyboard or gamepad. An ideal approach would provide both groups with a simultaneous individualized experience with a high degree of customizability. This would include options to navigate switch select menus with a token, or using two different buttons to confirm a selection, along with options to modify this behaviour. Unfortunately, this functionality is a long ways down the pipeline for the ***Curl!*** project.

[0]: https://cumming.ucalgary.ca/research/pediatric-bci/bci-program/what-bci
[1]: https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface
[2]: https://eudl.eu/doi/10.4108/icst.intetain.2015.259620