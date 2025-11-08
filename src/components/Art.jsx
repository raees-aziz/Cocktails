import React from "react";
import { goodLists, featureLists } from "../utils.js";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,

        // markers:true
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "500%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20 pt">
        <h2 className="will-fade">The Brand</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{features}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              className="abs-center masked-img size-full object-cover"
              src="/images/under-img2.jpg"
              alt="cocktail"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* masked container  */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Where Every Sip Feels Like Home</h3>
            <p>Because great tea is more than a drink — it’s a moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
