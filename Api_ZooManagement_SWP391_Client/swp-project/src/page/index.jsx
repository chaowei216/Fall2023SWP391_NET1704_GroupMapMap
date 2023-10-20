import React from 'react'
import Header from './header'
import SliderHero from './sliderHero';
import SectionGap from './sectionGap';
import SectionDiscover from './sectionDiscover';
import SectionGapType from './sectionGapType';
import SectionNoTop from './sectionNoTop';
import GapNoBottom from './gapNoBottom';
import GapNoBottomTwoHeading from './gapNoBottom-twoHeading';
import GapBackground from './gapBackground';
import Footer from './footer';

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
      { text: 'Ticket',id:"1"  },
      { text: 'Info Animails', id:"2" },
      { text: 'Zoo Trainer',id:"3"},
    
    ],
  },
  { text: 'Contact', link: '/contact' },
];
function Index() {
  return (
    <div>
         <Header menuItems={menuItems}/>
    <SliderHero/>
    <SectionGapType/>
    <SectionGap/>
    <SectionDiscover/>
    <SectionNoTop/>
    {/* <GapNoBottom/> */}
    <GapNoBottomTwoHeading/>
    {/* <GapBackground/> */}
    <Footer/>
    </div>
  )
}

export default Index