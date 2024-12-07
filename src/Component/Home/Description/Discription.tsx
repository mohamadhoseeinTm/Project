/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import "./Discription.scss";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Smooth scrolling factor
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize SplitType and GSAP
    const sections = containerRef.current?.querySelectorAll(".reveal-type");
    if (sections) {
      sections.forEach((section) => {
        const bgColor = section.getAttribute("data-bg-color") || "#000000"; // Default to black
        const fgColor = section.getAttribute("data-fg-color") || "#FFFFFF"; // Default to white

        const text = new SplitType(section as HTMLElement, { types: "chars" });

        gsap.fromTo(
          text.chars,
          { color: bgColor },
          {
            color: fgColor,
            duration: 3,
            stagger: 0.03, // Small adjustment for smoother stagger effect
            scrollTrigger: {
              trigger: section,
              start: "top 100%",
              end: "top -30%",
              scrub: true,
              markers: false,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    }

    return () => {
      // Cleanup GSAP and Lenis instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="discription" ref={containerRef} >
      <section>
        <h1 className="reveal-type" data-bg-color="#ffffff" data-fg-color="black">
          About Us
        </h1>
        <p className="reveal-type About" data-bg-color="#ffffff" data-fg-color="black">
          Nanjing Hundred Horse Plastic Machine Co. Ltd., is a proud provider of Plastic Compounding Machines. Our internationally serving company invests in modern ways to deeply satisfy buyers on grounds of fast performance. We meet requirements of Industrial Plastic Granules Making Machine, Twin Screw Plastic Compounding Machine, Water Strand Cutting Line and Plastic Flakes Recycling Machine, etc. Our range is superior in operation because modernized techniques are applied in its manufacturing. We, at our company commenced our business in 2018 as a manufacturer and exporter. In the present times, our plastic compounding machines providing company with continuous quality improvement plans meet latest needs of buyers. With every passing year, our manufacturing business entity gets bigger with establishing partnerships by carefully learning advanced market trends and meeting demands of top-class plastic compounding machines.
        </p>
      </section>

      <section>
        <h1 className="reveal-type" data-bg-color="#ffffff" data-fg-color="black">
          Innovation, Our Winning Trait
        </h1>
        <p className="reveal-type About" data-bg-color="#ffffff" data-fg-color="black">
          We at our internationally reputed company, affirm to innovation being a deserving component, whose adoption enhances growth of a manufacturing business. Being an innovative business entity, we are growing in the industry by constantly upgrading our techniques as well as technologies of designing, manufacturing and others. Our team keeps innovative attitude to work and ensures increasing quality level of every work. We work immensely hard to serve innovative solutions in the form of Plastic Flakes Recycling Machine, Twin Screw Plastic Compounding Machine, etc., to customers. Our innovative solutions help us gain success in the largely competitive domain.
        </p>
      </section>

      <section>
        <h1 className="reveal-type" data-bg-color="#ffffff" data-fg-color="black">
          Why Trust Our Company?
        </h1>
        <p className="reveal-type About" data-bg-color="#ffffff" data-fg-color="black">
          Nanjing Hundred Horse Plastic Machine Co. Ltd., is a trusted choice of several buyers due to following:
        </p>
        <ul className="reveal-type About" data-bg-color="#ffffff" data-fg-color="black">
          <li>Production takes place incorporating a quality based approach using the latest techniques</li>
          <li>Affordable price structure of plastic compounding machines to fit budget of countless buyers</li>
          <li>Urgent delivery making capability enables us to win trust of several customers</li>
          <li>Commitment to maintain best quality standards in the offered product line</li>
          <li>Giving huge attention to increasing knowledge of our team concerning technological enhancements</li>
        </ul>
      </section>


      <section>
        <h1 className="reveal-type" data-bg-color="#ffffff" data-fg-color="black">
        Our Major Support
        </h1>
        <p className="reveal-type About" data-bg-color="#ffffff" data-fg-color="black">
        We, at our internationally trusted plastic compounding machines supplying business entity utilize fast running machines to well manufacture our modern quality product line. Our company is delighted about accomplishing large-scale requirements with advanced manufacturing assistance.
        </p>
      </section>
    </div>
  );
};

export default App;
