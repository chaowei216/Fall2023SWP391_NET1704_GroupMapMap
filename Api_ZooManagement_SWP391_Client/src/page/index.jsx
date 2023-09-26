import React from 'react'
import Header from './header'
import SliderHero from './sliderHero';
import SectionGap from './sectionGap';
import SectionDiscover from './sectionDiscover';
import SectionGapType from './sectionGapType';
import SectionGapTwo from './sectionGapTwo';
import SectionGapNoTop from './\bsectionGapNoTop';
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
    <SectionGapTwo/>
    <SectionGapNoTop/>
    <GapNoBottom/>
    <GapNoBottomTwoHeading/>
    <GapBackground/>
    <Footer/>
    </div>
  )
}

export default Index