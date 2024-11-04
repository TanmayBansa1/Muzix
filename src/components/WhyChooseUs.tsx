import { StickyScroll } from "./ui/sticky-scroll-reveal"
import whyUsData from "../data/whyUs.json"
export default function WhyChooseUs(){

    return <div className="h-[]">
        <StickyScroll content={whyUsData.whyUs}></StickyScroll>
    </div>
}