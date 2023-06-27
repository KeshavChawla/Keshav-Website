import React from 'react';

export default {
  homePage: {
    greeting: 'Hello 👋',
    blurbs: [
      [
        {
          type: 'text',
          content: "I'm Keshav, a  "
        },
        {
          type: 'link',
          content: 'Computing and Financial Management',
          link: 'https://uwaterloo.ca/computing-financial-management/'
        },
        {
          type: 'text',
          content: ' 👨‍💻 student (4B) at the University of Waterloo.'
        }
      ],
      [
        {
          type: 'text',
          content: 'I am currently a software engineering intern at '
        },
        {
          type: 'link',
          content: 'Bloomberg',
          link: 'https://www.bloomberg.com/company/'
        },
        {
          type: 'text',
          content: '.'
        }
      ],
      [
        {
          type: 'text',
          content: 'I have previously interned at '
        },
        {
          type: 'link',
          content: 'Wattpad',
          link: 'https://www.wattpad.com/'
        },
        {
          type: 'text',
          content: ' 📖 (S22 software engineering), '
        },
        {
          type: 'link',
          content: 'Axonify',
          link: 'https://axonify.com/'
        },
        {
          type: 'text',
          content: ' 📱 (F21 JavaScript software developer), and '
        },
        {
          type: 'link',
          content: 'Jam3',
          link: 'https://jam3.com/'
        },
        {
          type: 'text',
          content: ' 🖥 (W21 software developer).'
        }
      ],
      [
        {
          type: 'text',
          content: 'I have also worked with numerous organizations, including '
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
          content: "I've also been a part of the "
        },
        {
          type: 'link',
          content: 'Student Investment Fund',
          link: 'https://uwaterloo.ca/school-of-accounting-and-finance/student-investment-fund'
        },
        {
          type: 'text',
          content: ' 📊 (W23 junior portfolio manager, F23 senior analyst, and S21 junior analyst) and '
        },
        {
          type: 'link',
          content: 'the Mathematics Endowment Fund',
          link: 'https://uwaterloo.ca/math-endowment-fund/'
        },
        {
          type: 'text',
          content: ' 💵 Funding Council (F19 & S20).'
        }
      ]
    ]
  },
  projects: {
    projectList: [
      {
        image: 'DigitalVinylCover.jpg',
        imageAlt: 'A showcase of the Digital Vinyl Project',
        title: 'Making a Digital Vinyl Player',
        techStack: 'C++, Node.js, React, Spotify API, Raspberry Pi',
        description: [
          'I wanted a way to enjoy my music both digitally and physically, and so I found the inspiration to make a digital vinyl player.',
          'The premise is that I create mini-vinyl albums which have an embedded NFC tag within them so when I place the album atop my Raspberry Pi they play the associated album/song.',
          'See the linked blog posts for full details and a walkthrough video!'
        ],
        linkCta: 'https://www.keshavchawla.com/blog/digital-vinyl-project/'
      },
      {
        image: 'wild_cities.jpg',
        imageAlt: 'Wild Cities Splash Page',
        title: 'Wild Cities App & Splash Page',
        techStack: 'React, NextJS',
        forceLargeImage: true,
        description: [
          '"Wild Cities is an interactive AR story that inspires and educates the next generation about our symbiotic relationship with nature."',
          '"Climate change, deforestation, and urbanization are affecting the world in ways that impact us all, but the loss of natural habitats and wildlife is often invisible to many. Wild Cities is an interactive AR story that inspires and educates the next generation about our symbiotic relationship with nature."'
        ],
        linkCta: 'https://web.archive.org/web/20220921164600/https://wildcities.app/en/',
        pressLinks: [
          {
            link: 'https://thefwa.com/cases/wild-cities',
            title: 'FWA of The Day - June 7th, 2022'
          },
          {
            link:
              'https://winners.webbyawards.com/2022/apps-and-software/mobile-ott-app-features/best-use-of-augmented-reality/218254/wild-cities',
            title: 'Webby Awards Nominee for Best Use of Augmented Reality 2022'
          },
          {
            link: 'https://theadcc.ca/archive/wild-cities_2022_bronze_augmented-reality-virtual-reality',
            title: 'The ADCC Bronze / 2022'
          },
          {
            link: 'https://www.a-bahn.com/projects/wild-cities',
            title: 'a_BAHN'
          },
          {
            link: 'https://wild-cities.hello-jury.com/',
            title: 'Jury Site'
          },
          {
            link:
              'https://www.campaignlive.com/article/jam3-canada-media-fund-using-ar-educate-kids-climate-change/1732403',
            title: 'Campaign US'
          },
          {
            link: 'https://marketingnewscanada.com/news/jam3-helps-tackle-climate-change-with-an-ar-app-for-kids',
            title: 'Marketing News Canada'
          },
          {
            link: 'https://apps.apple.com/ca/app/wild-cities-ar/id1535651296',
            title: 'App Store'
          },
          {
            link: 'https://play.google.com/store/apps/details?id=com.jam3.WildCities',
            title: 'Google Play Store'
          }
        ]
      },
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
        linkCta: 'https://www.keshavchawla.com/blog/magic-mirror-guide/'
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
    email: 'keshav@keshavchawla.com',
    links: [
      {
        platform: 'Instagram',
        link: 'https://instagram.com/keshavchawla_/'
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
