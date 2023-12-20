import user from "../src/assets/icons/user.png";
import wishlist from "../src/assets/icons/wishlist.png";
import cart from "../src/assets/icons/cart.png";
import search from "../src/assets/icons/search.png";
import syltherine from "../src/assets/images/Syltherine.png";
import grifo from "../src/assets/images/grifo.png";
import leviosa from "../src/assets/images/leviosa.png";
import lolito from "../src/assets/images/lolito.png";
import muggo from "../src/assets/images/muggo.png";
import pinky from "../src/assets/images/Syltherine.png";
import potty from "../src/assets/images/potty.png";
import respira from "../src/assets/images/respira.png";
import trophy from "../src/assets/icons/trophy.png";
import warranty from "../src/assets/icons/warranty.png";
import shipping from "../src/assets/icons/shipping.png";
import customer from "../src/assets/icons/customer.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "shop",
    title: "Shop",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

export const navMenu = [
  {
    id: "user",
    title: "user",
    icon: user,
  },
  {
    id: "search",
    title: "search",
    icon: search,
  },
  {
    id: "wishlist",
    title: "wishlist",
    icon: wishlist,
  },
  {
    id: "cart",
    title: "cart",
    icon: cart,
  },
];

export const products = [
  {
    id: "1",
    name: "Syltherine",
    img: syltherine,
    disc: "30",
    price: 3500000,
    new: false,
    desc: "Stylish cafe chair",
  },
  {
    id: "2",
    name: "Leviosa",
    img: leviosa,
    disc: null,
    price: 2500000,
    new: false,
    desc: "Stylish cafe chair",
  },
  {
    id: "3",
    name: "Lolito",
    img: lolito,
    disc: "50",
    price: 14000000,
    new: false,
    desc: "Luxury big sofa",
  },
  {
    id: "4",
    name: "Respira",
    img: respira,
    disc: null,
    price: 500000,
    new: true,
    desc: "Outdoor bar table and stool",
  },
  {
    id: "5",
    name: "Grifo",
    img: grifo,
    disc: null,
    price: 1500000,
    new: false,
    desc: "Night Lamp",
  },
  {
    id: "6",
    name: "Muggo",
    img: muggo,
    disc: null,
    price: 150000,
    new: true,
    desc: "Small mug",
  },
  {
    id: "7",
    name: "Pinky",
    img: pinky,
    disc: "50",
    price: 14000000,
    new: false,
    desc: "Cute bed set",
  },
  {
    id: "8",
    name: "Potty",
    img: potty,
    disc: null,
    price: 500000,
    new: true,
    desc: "Minimalist small pot",
  },
  //   {
  //     id: "1",
  //     name: "Syltherine",
  //     img: "",
  //     disc: "30",
  //     price: 3500000,
  //     desc: "Stylish cafe chair",
  //   },
  //   {
  //     id: "1",
  //     name: "Syltherine",
  //     img: "",
  //     disc: "30",
  //     price: 3500000,
  //     desc: "Stylish cafe chair",
  //   },
];

export const offer = [
  { name: "High Quality", desc: "Crafted from top materials", icon: trophy },
  { name: "Warranty Protection", desc: "Over 2 years", icon: warranty },
  { name: "Free Shipping", desc: "Order over $150", icon: shipping },
  { name: "24/7 Support", desc: "Dedicated support", icon: customer },
];
