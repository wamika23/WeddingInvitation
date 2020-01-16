import React from "react";
import ImgGallery from "./ImgGallery";
import Invite from "./Invite";
import Video from "./Video";
import Directions from "./Directions";
import $ from 'jquery';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Accordion1() {
    

    return(    
        <div>
            <div className="accordion-container">
                <Accordion allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Invitation
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Invite />
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Gallery
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ImgGallery />
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Video
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Video />
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Directions
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Directions />
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>                                                        
        </div>
    );
}

export default Accordion1;