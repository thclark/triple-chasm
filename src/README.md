# HI POTENTIAL WINDPIONEERS FRONTEND DEVELOPERS!!

I'm Tom, I run development of the WindQuest webapp. If we end up working together, I'll be responsible for mentoring and training you as well as overseeing your work on WindQuest.

Right now, if you're willing, I'd like you to complete this small case study so I can get a sense of where your skill level is at.

At WindPioneers and our partner company Octue.com, we're keen on helping our employees and candidates improve themselves continually. With that in mind, I've designed this case study so that most developers
can learn things while doing it - put a little time in and you'll come out of the other side a better developer.

I've noticed that a lot of applicants have no public demos, so once you're done, well, it's your code! So you're welcome to turn it into a repo on your github account to show off your work.

## Background

We all use dozens - often hundreds - of web forms each and every day. But, even basic web forms are surprisingly difficult for developers to master.

The devil is in the details: providing sensible placeholders, labels, help text and error messages in subtle and non-invasive ways makes the difference between a really broken, frustrating user experience and a quick and helpful tool.

To make matters worse, form data has to be submitted to a server somewhere, meaning that we have to deal with the asynchronous process of submitting data while the user is waiting.

## The Task

**Make this form work.**

This code sandbox has a form with only one text field and a single submit button... it's as "simple" as forms get but we're looking for you to turn these two basic HTML elements into something that's high quality, user-friendly and production-ready.

Here, I'm testing your ability to use third-party libraries to achieve that.

I've prepared an API endpoint to receive and validate the submitted data.

You'll need to:

- Manage submission of data to the API
- Handle API responses, both `Success 200` and `BadRequest 400`
- Make the form look nice
- Manage form state and workflow. Decide and implement:
  - What should happen while submitting
  - What should happen after failed and successful submissions

### Getting started

Fork this codeSandbox. Log into codeSandbox with GitHub to make sure your work is saved - you can even create a repository on your own account so you have a demo project for your own CV once you're done, if you wish.

**TIP** Code sandbox doesn't auto-save, so make sure you hit `ctrl+s` regularly.

First, look at `package.json` and note the libraries we've pre-installed to help you (see "Resources" below).

Then, look at `index.js`. We've added a couple of basic HTML elements so you get the idea, but you'll want to replace them with more useful handlers and components (either your own or from third party libraries).

Then, test out the API (see below) to be familiar with that.

Then... you're on your own! Well, not quite: check out our "Expectations" and "Resources" below :)

### Expectations

- Do **NOT** do this purely in raw JS, CSS and HTML. _You might be able to... but you'll have missed the point! Modern component, styling, form handling and ajax libraries are mature and capable - so you should use them... we do, in our day jobs at Wind Pioneers! Besides, why waste all that time?!_

- **DO** keep it clean. _If you choose to add your own components, then the rule is one-per-file, which helps keep things understandable. Look for other ways to keep your codebase clean too._

- **DO** Use the docs of the libraries, and StackOverflow. _Smart and quick frontend developers don't reinvent the wheel, they find good examples and tutorials they trust, then copy/paste code to accelerate the only thing that matters: a well functioning, user-friendly and attractive end product._ In fact, we've chosen the libraries we have precisely BECAUSE there are LOADS of examples for you to copy-paste.

> _HINT: Everything we're asking for here can be found in the docs of our libraries and copy-pasted with minimal changes. If you think something's taking way too long, and it should be easier... it probably is! Take a little rest and clear your head :)_

- **DO** Make it look attractive but **DON'T** worry too much about customisation. We know you're not a designer. _We're looking for a pretty standard, fairly clear, modern look - easily achieved right out of the box with any component library. If you want to do more customisation then feel free!_

### The API

There's no auth or permissions to worry about... simply POST json data to the endpoint.

Why not try it yourself right now? Open a terminal and type:

```
curl -X POST https://europe-west1-octue-amy.cloudfunctions.net/frontend-developer-case-study -H "Content-Type:application/json"  -d '{"message":"thisworks"}'
```

This should return the original message back to you, with a `SUCCESS 200` code (a common pattern for OK submissions).

The API can also return errors... You can see the kinds of errors you might get by doing:

```
curl -X POST https://europe-west1-octue-amy.cloudfunctions.net/frontend-developer-case-study -H "Content-Type:application/json"  -d '{"message":"error"}'
```

### Resources Available

Within this codeSandbox, I've installed most of the libraries you should need - although please feel free to install more into `package.json` if they're helpful.

I've chosen these libraries from years of PAINFUL experience with React, and I think they're the best that the ecosystem has to offer (although of course the choice of component library is pretty subjective depending on your taste). They all have excellent documentation with loads of examples, too.

- [react-hook-form](https://react-hook-form.com/get-started/https://react-hook-form.com/get-started/) is really powerful for managing form state, has GREAT docs/website and examples for use with MUI TextFields.

- [axios](https://axios-http.com/) is the simplest way of posting to the API. Again, loads of examples on the net and in the docs about how to use axios to submit data in a react component.

- [Material UI ("MUI")](https://mui.com/) is a component library. Often misunderstood as "looking too much like google sites", MUI is infinitely customisable, has tons of components and provides you with incredibly powerful tools and sensible defaults. Equally, you could choose something else like [tailwind](https://tailwindui.com/) or [chakra](https://chakra-ui.com/). We're not fussy - and tailwind in particular has some really great looking stuff out of the box. So make your choice!

### How to really impress

If you really want to show off your experience, here are some extras that really add a touch of professionalism, and are learning points in themselves. We definitely don't expect all of these, that probably would take too much time!

- Use Functional Components, not Class Components. They're much easier to read, and the lifecycles are easier to understand.

- Demonstrate awareness of code performance with appropriate use of `useCallback` and `useMemo`. ONLY if appropriate though, don't just scatter them in there. I see you.

- Assuming you're using MUI, create a theme and customise it. All the styles are completely parametric and you'll learn about this incredibly powerful system.

- Make it responsive. We don't actually do much on mobile, but being able to succinctly design for responsive grids demonstrates a good appreciation for how components get laid out on a page.

- Demonstrate the desire to ease the load on the backend API by pre-validating the form contents client-side. Take care of those onFocus and onBlur handlers though - it's bad UX to have errors show before user entry or after correction ;)

- Create a hook to manage form submission.

- Use flexbox where you need to lay out components - great use of flexbox is far more powerful than most gridding systems.

- If you make extra components, demonstrate the need to have clear component APIs by using PropTypes.

> Note: It's a totally personal thing but I can't stand TypeScript. So you can use it, but in my view it hurts code comprehension more than it eliminates bugs so no extra praise for that! PropTypes are perfectly sufficient and don't affect readability.
