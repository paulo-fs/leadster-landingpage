# About the test

## Decisions

When starting the test, the first thing I did was analyze the requirements and the provided material. The material included the project design, and before starting, I examined the entire design to understand its structure, its components, and to extract the colors.

- Tailwind
  Despite the test requesting the use of Styled Components, I decided to use Tailwind due to its greater compatibility with recent versions of Next, its performance, and its practicality.

- Storybook
  I added Storybook to document the components and also included a plugin to test the accessibility of the components. With this test, we have insights into possible improvements to make the project more accessible to people with disabilities.

- Cypress
  Since it is a landing page, there wasn't much to test, so I used Cypress to test some functionalities of the page. I wrote tests with Cypress to test the Videos section.

- Video data
  I created an endpoint to serve the application data, simulating that this data would come from an external source, an API.

## Code organization

I aimed to use clean code concepts to facilitate code readability and maintenance.

I used the 'src' folder to put everything related to the project itself. I used various subfolders to better separate the code according to its function, in addition to the ones that are already standard in Next, for example:

- helpers: Small functions that can be reused in different parts of the code.

- components: Where the components are located. The application was divided into small components to compose the interface. Within more complex components, the code containing logic was saved in another file called 'controller', aiming to separate the visual part of the component from its logical part.

- services: This directory houses integrations with external services and the corresponding requests.

- store: Store and manage data in the application, as well as some important states.

- dataTypes: Save the data types used in the application.

# Deploy

<ul>
  <li>
    <a href="https://leadster-landingpage.vercel.app/">Move</a>
  </li>
</ul>

# Instructions

This project is using Yarn as package manager.

```bash
git clone https://github.com/paulo-fs/leadster-landingpage.git
cd leadster-landingpage
yarn
```

Wait the instalation complete, then:

- First, run the server:

```bash
yarn build
yarn start
```

- To run storybook:

```bash
yarn storybook
```

- To run Cypress:

```bash
yarn cypress open
```

# Technologies and Libraries

<ul>
  <li>Next</li>
  <li>React</li>
  <li>Tailwind</li>
  <li>StoryBook</li>
  <li>Cypress</li>
  <li>Axios</li>
</ul>

# Requirements

<ul>
  <li>Git</li>
  <li>Node</li>
</ul>

# Note

<ul>
  <li>Remember to change variables in a '.env.local'</li>
</ul>

Open in the browser on http://localhost:3000
