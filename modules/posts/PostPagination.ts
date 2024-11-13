export type PostPagination = {
  message: string;
  data?: MainArticle[];
  currentPage?: number;
  totalPages?: number;
};

export type MainArticle = {
  articleId?: number;
  name: string;
  type: "standard" | "video" | "audio" | "gallery" | "quote" | "link";
  description: string;
  imageUrl?: string[];
  mediaUrl?: string;
  imageName: string;
  quote?: string;
  articleCategories: ArticleCategory[];
};

type ArticleCategory = {
  title: string;
  link: string;
};

import imageProp1 from "@/common/images/thumbs/shutterbug.jpg";
import imageProp2 from "@/common/images/thumbs/usaf-rocket.jpg";
import imageProp3 from "@/common/images/thumbs/diagonal-pattern.jpg";
import imageProp4 from "@/common/images/thumbs/lighthouse.jpg";
import imageProp5 from "@/common/images/thumbs/liberty.jpg";

export let fakeArticle: MainArticle[] = [
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
];

export let posts: PostPagination = {
    message: "Articles",
    data: fakeArticle,
    currentPage: 0,
    totalPages: 10,
  };