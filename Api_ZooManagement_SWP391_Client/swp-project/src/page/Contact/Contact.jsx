import React from 'react'
import Footer from '../footer';
import Header from '../header'
import Banner from './Banner'
import Info from './Info'
const menuItems = [
    {
      text: 'Home',
      link:"/",
      // subMenuItems: [
      //   { text: 'Home 1', link: 'index.html' },
      //   { text: 'Home 2', link: 'index-2.html' },
      //   { text: 'Home 3', link: 'index-3.html' },
      // ],
    },
    {
      text: 'News',
      link:"/new",
      // subMenuItems: [
      //   { text: 'Our Blog', link: 'our-blog.html' },
      //   { text: 'Blog Details', link: 'blog-details.html' },
      // ],
    },
    {
      text: 'Pages',
      subMenuItems: [
        // { text: 'Ticket',id:"1"  },
        // { text: 'Info Animails', id:"2" },
        // { text: 'Zoo Trainer',id:"3"},
      
      ],
    },
    { text: 'Contact', link: '/contact' },
  ];
function Contact() {
  return (
    <div>
      <Header menuItems={menuItems}/>
      <Banner/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default Contact