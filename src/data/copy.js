import React from 'react';

export default {
  homePage: {
    greeting: 'Hello 👋',
    blurbs: [
      [
        {
          type: 'text',
          content: "I'm Keshav, a 👨‍💻 "
        },
        {
          type: 'link',
          content: 'Computing and Financial Management',
          link: 'https://uwaterloo.ca/computing-financial-management/'
        },
        {
          type: 'text',
          content: ' student at the University of Waterloo.'
        }
      ],
      [
        {
          type: 'text',
          content: 'I am working at '
        },
        {
          type: 'link',
          content: 'Wattpad',
          link: 'https://www.wattpad.com/'
        },
        {
          type: 'text',
          content: ' for the spring 2022 term! '
        }
      ],
      [
        {
          type: 'text',
          content: 'I previously worked at '
        },
        {
          type: 'link',
          content: 'Axonify',
          link: 'https://axonify.com/'
        },
        {
          type: 'text',
          content: ' as a 💻 JavaScript Developer (Fall 2021 Co-op) and '
        },
        {
          type: 'link',
          content: 'Jam3',
          link: 'https://jam3.com/'
        },
        {
          type: 'text',
          content: ' as a 🖥 Developer Intern (Winter 2021 Co-op).'
        }
      ],
      [
        {
          type: 'text',
          content: 'Before all of that, I was an Online Learning Assistant with the '
        },
        {
          type: 'link',
          content: 'University of Waterloo Faculty of Mathematics',
          link: 'https://uwaterloo.ca/math/'
        },
        {
          type: 'text',
          content: '.'
        }
      ],
      [
        {
          type: 'text',
          content: 'I have also worked with numerous organizations including '
        },
        {
          type: 'link',
          content: 'DECA Ontario',
          link: 'https://deca.ca/'
        },
        {
          type: 'text',
          content: ' and '
        },
        {
          type: 'link',
          content: 'Project 5K',
          link: 'https://www.project5k.ca/'
        },
        {
          type: 'text',
          content: '.'
        }
      ],
      [
        {
          type: 'text',
          content: "I'm a previous member of 📊 "
        },
        {
          type: 'link',
          content: 'The Student Investment Fund',
          link: 'https://uwaterloo.ca/school-of-accounting-and-finance/student-investment-fund'
        },
        {
          type: 'text',
          content: ' as a Junior Analyst (Spring 2021) and 💵 '
        },
        {
          type: 'link',
          content: 'The Mathematics Endowment Fund',
          link: 'https://uwaterloo.ca/math-endowment-fund/'
        },
        {
          type: 'text',
          content: ' - Funding Council (Fall 2019 & Spring 2020).'
        }
      ]
    ]
  },
  projects: {
    projectList: [
      {
        image: 'latex_2_mobius.jpg',
        imageAlt: 'Screenshot of the LaTeX2Mobius Web Application',
        title: 'LaTeX2Mobius Web Application',
        techStack: 'PHP, LaTeX, HTML, CSS, Bash',
        description: [
          'As classes moved online due to the COVID-19 pandemic, lecture content from various courses had to be transitioned to a virtual/online platform. While working with the University, our team was tasked to create an application to convert LaTeX documents into HTML/MathML syntax (which then can be used to develop content in Möbius). I was primarily tasked with creating the web application, which entailed handling uploading/downloading documents, .zip files, running the conversion script, file deletion, error handling, and the user interface. Read more about the project and the user documentation here:'
        ],
        linkCta: 'https://latex2mobius.uwaterloo.ca/includes/L2M_Documentation.pdf'
      },
      {
        image: 'smart_mirror.gif',
        imageAlt: 'A short animation showing the loading of the Magic Mirror I created',
        title: 'A Step by Step Guide to Build your own Smart Mirror',
        techStack: 'PubNub Functions, Google Assistant SDK (Voice), MagicMirror², Python, and RSS Feeds',
        description: [
          'In July of 2017, I stumbled across photos and videos online of people making mirrors that could present a dashboard of widgets ranging from daily weather to any traffic delays.',
          'I set out to build my own in the process using tutorials online and based on the MagicMirror² platform run on Electron. Everything is powered through a Raspberry Pi 3 and hooked up to a 32 inch TV behind a two-way mirror.',
          "In the process, I was able to work with PubNub's Functions, Integrating Google's Assistant Voice in the mirror, MagicMirror²'s software, and Canadian news RSS feeds.",
          'I am continuously improving this project and adding/modifying features to my mirror. Just recently, I was able to use the RPiPlay repository to add Airplay functionality to the mirror. In addition to the default view, the mirror is able to mirror my phone screen or "cast" a movie from my phone to watch on the mirror.',
          'Read more on the project and how to create your own here:'
        ],
        linkCta: 'https://medium.com/@keshavchawla/a-step-by-step-guide-to-build-your-own-smart-mirror-543cebbf135f'
      },
      {
        title: 'HackTheFridge - DoTheDew - Hackathon Project Winner',
        image: 'hack-the-fridge.jpg',
        imageAlt:
          'A photo of the HackTheFridge iOS App in front of the makeshift Arduino fridge created for the hackathon',
        techStack: "Objective-C, XCode, Arduino, PHP, and Indico's Image Recognition API",
        description: [
          'As part of the HackThe6ix hackathon, I worked with a team to create a marketing tool for Pepsi.',
          'Inspired by:',
          <a class="project-link" href="https://www.youtube.com/watch?v=CfpatqyujM0">
            {' '}
            "I am Canadian" - Molson Canada Fridge Commercial
          </a>,
          ' we converted the concept over for Pepsi/Mountain Dew into an app that gives users a list of tasks (scavenger hunt items) that need to be completed.',
          'Once the tasks have been completed, a fridge is unlocked to receive free Mountain Dew!'
        ],
        linkCta: 'https://devpost.com/software/dothedew-hackthefridge'
      },
      {
        title: 'Straights - C++ Card Game',
        imageAlt: 'A stock photo of scrambled cards all face up with the Jack of Spades front and center',
        image: 'cards_background.jpeg',
        techStack: 'C++',
        description: [
          'The Straights game was created as the final project for CS246 Object-Oriented Software Development. The game is made using C++, uses object-oriented programming principles, and made careful considerations of design patterns. The game also employs proper use of memory management and error handling.',
          'As part of the final project, I also created a UML diagram to describe the relationship between classes, a demo to walk through the different features, and a design document to describe the various design decisions.'
        ],
        linkCta: ''
      },
      {
        title: 'DECA Ontario Website',
        imageAlt: "A screenshot of the DECA Ontario Website Provincial Executive Officer's page",
        image: 'deca.jpg',
        techStack: 'WordPress, HTML, CSS, JavaScript, Web Hosting, Sketch, Adobe Illustrator, and PHP',
        description: [
          "As part of DECA Ontario's Provincial Officer team, I completely overhauled the deca.ca website. The process involved creating a system that would allow the website to showcase the strength of the organization while also making it easy to maintain and edit the long term.",
          'I experimented with numerous content management systems and design mockups before considering a medium that would scale. Through the process, I worked through the design process, managing web hosting, ensuring security, search engine optimization, spam management, testing, rapid deployment, bug patching, and technical support.',
          'Note that the current version of the site is a newer version and does not reflect my work/development. The year which I primarly worked on the site was 2018.'
        ],
        linkCta: 'http://deca.ca/'
      },
      {
        title: 'InsureMotion Hackathon Project',
        image: 'InsureMotion.jpg',
        imageAlt: 'A screenshot of the iOS app for the InsureMotion Hackathon Project',
        techStack: 'Microsoft Azure Face Emotion Recognition API, Expo, React Native, and Sketch',
        description: [
          'InsureMotion is a mobile app that tracks your driving to determine whether or not you have a road rage problem. Stay calm and collected while driving? The app will help you reduce your insurance premiums. The app will film you while driving and look for facial expressions to detect emotion. The emotion data is used to see how calm and collected you can stay while on the road.',
          'During the project, I had the opportunity to work with Microsoft Azure Face Emotion Recognition API and Expo for making an iOS app. While other team members worked on creating a Python Flask REST API, which would communicate with the Expo add to calculate insurance premiums.'
        ],
        linkCta: 'https://devpost.com/software/insuremotion'
      }
    ]
  },
  contacts: {
    email: 'hello@keshavchawla.com',
    links: [
      {
        platform: 'Instagram',
        link: 'https://instagram.com/keshav.chawla_/'
      },
      {
        platform: 'Github',
        link: 'https://github.com/KeshavChawla'
      },
      {
        platform: 'Twitter',
        link: 'https://twitter.com/KeshavChawla_'
      },
      {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/keshav-chawla/'
      },
      {
        platform: 'Dribbble',
        link: 'https://dribbble.com/keshavc'
      }
    ],
    sendOff: 'Made with love in ❤️ in 🇨🇦'
  }
};
