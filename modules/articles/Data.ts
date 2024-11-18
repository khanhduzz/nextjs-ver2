import { MainArticle } from "./ArticlesModule";

import imageProp1 from "@/common/images/thumbs/shutterbug.jpg";
import imageProp2 from "@/common/images/thumbs/usaf-rocket.jpg";
import imageProp3 from "@/common/images/thumbs/diagonal-pattern.jpg";
import imageProp4 from "@/common/images/thumbs/lighthouse.jpg";
import imageProp5 from "@/common/images/thumbs/liberty.jpg";
import audioImage1 from "@/common/images/thumbs/concert.jpg";
import video1 from "@/common/images/thumbs/ottawa-bokeh.jpg";
import imageGallery1 from "@/common/images/thumbs/gallery/work1.jpg";
import imageGallery2 from "@/common/images/thumbs/gallery/work2.jpg";
import imageGallery3 from "@/common/images/thumbs/gallery/work3.jpg";
import imagesStandard1 from '@/common/images/thumbs/diagonal-building.jpg'
import imagesStandard2 from '@/common/images/thumbs/ferris-wheel.jpg'

export let articleData: MainArticle[] = [
  {
    articleId: 1,
    name: "Photography Skills Can Improve Your Graphic Design",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageProp1.src],
    mediaUrl: "",
    imageName: "Shutterbug",
    quote: "",
    articleCategories: [
      { title: "Photography", link: "#" },
      { title: "html", link: "#" },
    ],
  },
  {
    articleId: 2,
    name: "The 10 Golden Rules of Clean Simple Design.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageProp2.src],
    imageName: "USAF rocket",
    articleCategories: [
      { title: "Branding", link: "#" },
      { title: "Mockup", link: "#" },
    ],
  },
  {
    articleId: 3,
    name: "You Can See Patterns Everywhere.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageProp3.src],
    imageName: "Pattern",
    articleCategories: [
      { title: "Design", link: "#" },
      { title: "UI", link: "#" },
    ],
  },
  {
    articleId: 4,
    name: "Breathtaking Photos of Lighthouses.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageProp4.src],
    imageName: "Lighthouse",
    articleCategories: [
      { title: "Photography", link: "#" },
      { title: "Design", link: "#" },
    ],
  },
  {
    articleId: 5,
    name: "Designing With Black and White.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageProp5.src],
    imageName: "Liberty",
    articleCategories: [
      { title: "Branding", link: "#" },
      { title: "html", link: "#" },
    ],
  },
  {
    articleId: 6,
    name: "This Is a Audio Format Post.",
    type: "audio",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [audioImage1.src],
    mediaUrl: "/media/AirReview-Landmarks-02-ChasingCorporate.mp3",
    imageName: "Concert",
    articleCategories: [
      { title: "Design", link: "#" },
      { title: "Music", link: "#" },
    ],
  },
  {
    articleId: 7,
    name: "Looking for affordable & reliable web hosting? We recommend Dreamhost.",
    type: "link",
    description: "http://www.dreamhost.com",
    mediaUrl: "http://www.dreamhost.com/r.cgi?287326",
  },
  {
    articleId: 8,
    name: "This Is a Video Post Format.",
    type: "video",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [video1.src],
    mediaUrl:
      "http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39",
    imageName: "bokeh",
    articleCategories: [
      { title: "Design", link: "#" },
      { title: "Branding", link: "#" },
    ],
  },
  {
    articleId: 9,
    name: "Workspace Design Trends and Ideas.",
    type: "gallery",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imageGallery1.src, imageGallery2.src, imageGallery3.src],
    mediaUrl:
      "http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39",
    articleCategories: [
      { title: "Branding", link: "#" },
      { title: "Wordpress", link: "#" },
    ],
  },
  {
    articleId: 10,
    name: "Dieter Rams",
    type: "quote",
    description:
      "Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.",
  },
  {
    articleId: 11,
    name: "Just a Standard Format Post.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imagesStandard1.src],
    imageName: "Building",
    articleCategories: [
      { title: "Design", link: "#" },
      { title: "Photography", link: "#" },
    ],
  },
  {
    articleId: 12,
    name: "This Is Another Standard Format Post.",
    type: "standard",
    description:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
    imageUrl: [imagesStandard2.src],
    imageName: "Ferris wheel",
    articleCategories: [
      { title: "Design", link: "#" },
      { title: "UI", link: "#" },
    ],
  },
];