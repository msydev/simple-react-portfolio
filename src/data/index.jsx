import Logo from "/public/svg/logo.jsx";

import Behance from "/public/svg/Behance.jsx";
import Instagram from "/public/svg/Instagram.jsx";
import Linkedin from "/public/svg/Linkedin.jsx";
import Twitter from "/public/svg/Twitter.jsx";

import Phone from "/public/svg/Phone";
import Email from "/public/svg/Email";
import Pin from "/public/svg/Pin";

const data = {
  logo: <Logo />,

  // Home  //
  home: {
    name: "Mustafa Salem",
    whatIdo: "I'm a Developer 👨‍💻",
    breif:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio repellat impedit consectetur nesciunt iusto animi.",
    img: "/imgs/personal-image.png",
  },

  //   About   //
  about: {
    aboutMe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsam ea!Accusantium, at. Eligendi, vitae blanditiis laboriosam dolores oditnulla atque magni cumque excepturi molestiae est facere perferendissit optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt, impedit cum omnis quisquam commodi ipsum voluptatem qui provident porro accusantium quo optio deleniti eveniet asperiores autem voluptate sunt facilis.",
    img: "/imgs/personal-image-about.jpg",
    cv: "/cv.pdf",
  },
  //   END About   //

  //   Portfolio (Projects)    //
  portfolio: [
    {
      id: 1,
      title: "darnit",
      category: "development",
      img: "/imgs/darnit.jpg",
      info: {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad?",
        Client: "darnit agency",
        Technologies: "Next js, tailwindcss",
      },
      externalLink: "https://google.com",
    },
    {
      id: 2,
      title: "E commerce",
      category: "development",
      img: "/imgs/e-commerce.jpg",
      info: {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad?",
        Client: "Ruby Clinton",
        Technologies: "html, Scss, Vanilla JS",
      },
      externalLink: "https://google.com",
    },
    {
      id: 3,
      title: "stay fit",
      category: "development",
      img: "/imgs/stayfit.jpg",
      info: {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad?",
        Client: "john carter",
        Technologies: "VueJS, Scss",
      },
      externalLink: "https://google.com",
    },
    {
      id: 4,
      title: "music app",
      category: "UI/UX",
      img: "/imgs/music-app.jpg",
      info: {
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad?",
        Client: "Ruby Clinton",
        Technologies: "Figma",
      },
      externalLink: "https://dribble.com",
    },
    {
      id: 5,
      title: "Explore",
      category: "UI/UX",
      img: "/imgs/explore.jpg",
      info: {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad?",
        Client: "Ruby Clinton",
        Technologies: "Adobe XD",
      },
      externalLink: "https://dribble.com",
    },
    {
      id: 6,
      title: "coffe cup",
      category: "Design",
      img: "/imgs/coffe-cup.jpg",
      info: {
        desc: "Lorem ipsum dolor sit consectetu adipisicing elit. Tempora, ad?",
        Client: "Ruby Clinton",
        Technologies: "PhotoShop",
      },
    },
  ],
  //   End Portfolio    //

  //   Services         //
  services: [
    {
      id: 1,
      name: "web development",
      desc: "lorem ipsum skflj sidjf eih sdf ids um skflj sidjf eih sdf ids um skflj sidjf eih sdf ids um skflj sidjf eih sdf ids",
    },
    {
      id: 2,
      name: "graphic design",
      desc: "lorem ips um skflj sidjf eih sdf ids um skflj sidjf eih sdf ids um skflj sidjf eih sdf ids",
    },
    {
      id: 3,
      name: "UI/UX",
      desc: "lorem ipsum skflj sidjf eih sdf ids um skflj sidjf eih sdf ids",
    },
    {
      id: 4,
      name: "search engine optimization",
      desc: "lorem ipsum skflj sidjf eih sdf ids",
    },
  ],
  //   End Services     //

  //   Contact (Adresses)    //
  contact: [
    {
      id: 1,
      title: "Based in",
      value: "Iraq, Baghdad",
      icon: <Pin />,
    },
    {
      id: 2,
      title: "Phone Number",
      value: "07706357206",
      icon: <Phone />,
    },
    {
      id: 3,
      title: "Email Address",
      value: "mustafasalem2314@gmail.com",
      icon: <Email />,
    },
  ],
  //  END Contact   //

  //  Social Media //
  socialMedia: [
    {
      name: "Behance",
      href: "#",
      icon: <Behance />,
    },
    {
      name: "Instagram",
      href: "https://Instagram.com/msy_dev",
      icon: <Instagram />,
    },
    {
      name: "Linkedin",
      href: "#",
      icon: <Linkedin />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter />,
    },
  ],
  //  END Social Media //
};

export default data;
