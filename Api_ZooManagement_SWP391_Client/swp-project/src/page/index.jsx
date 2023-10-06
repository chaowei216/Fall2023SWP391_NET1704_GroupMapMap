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
function Index() {
  return (
    <div>
         <Header/>
    <SliderHero/>
    <SectionGap/>
    <SectionDiscover/>
    <SectionGapType/>
    <SectionNoTop/>
    {/* <GapNoBottom/> */}
    <GapNoBottomTwoHeading/>
    {/* <GapBackground/> */}
    <Footer/>
    </div>
  )
}

export default Index