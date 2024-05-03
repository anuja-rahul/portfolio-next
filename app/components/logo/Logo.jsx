import "./index.scss";
import LogoImg from "./../res/images/_Anuja__.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

function Logo() {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useGSAP(() => {
    // gsap.registerPlugin(DrawSVGPlugin);
    const tl = gsap.timeline();
    const loop = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
      .fromTo(
        outlineLogoRef.current,
        {
          y: -300,
          opacity: 0,
          duration: 2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "bounce.out",
        },
      )
      .fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 0.8,
          duration: 1,
        },
      );
    // .to(solidLogoRef.current, { delay: 2 }, 2);

    loop.fromTo(
      ".hover-container",
      {
        y: 0,
      },
      {
        y: -30,
        duration: 1.5,
        ease: "bounce.in",
        delay: 4,
        // stagger: 0.1,
      },
      [],
    );
  }, []);

  // hidden md:block

  return (
    <div
      className="logo-container right-2 inline-block h-[21.5rem] w-[40rem] 
      sm:right-[0%] sm:align-middle md:right-0 md:h-[27.5rem] md:w-[50rem] lg:right-[15%] "
      ref={bgRef}
    >
      <div className="hover-container">
        <Image
          className="solid-logo"
          src={LogoImg}
          alt="<Anuja/>"
          ref={solidLogoRef}
        />

        <svg
          width="491.7200073242187px"
          height="254.2399963378906px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="4.139996337890636 -52.1199981689453 491.7200073242187 254.2399963378906"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <filter
              id="editing-extrusion"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feFlood result="color1"></feFlood>
              <feConvolveMatrix
                order="8,8"
                divisor="1"
                kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1"
                in="SourceAlpha"
                result="extrude"
              ></feConvolveMatrix>
              <feComposite
                in="color1"
                in2="extrude"
                result="comp-extrude"
                operator="in"
              ></feComposite>
              <feOffset
                dx="4"
                dy="4"
                in="comp-extrude"
                result="offset-extrude"
              ></feOffset>
              <feMerge>
                <feMergeNode in="offset-extrude"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g
            className="svg-container"
            transform="translate(76.85502317547798, 137.48500633239746)"
            fill="none"
          >
            <path
              ref={outlineLogoRef}
              d="M0.45-20.62L0.45-20.62L0.45-20.62Q0.45-21.62 1.27-22.34L1.27-22.34L1.27-22.34Q2.09-23.07 2.91-23.61L2.91-23.61L2.91-23.61Q3.81-24.16 5.77-25.34L5.77-25.34L5.77-25.34Q7.72-26.52 10.13-28.02L10.13-28.02L10.13-28.02Q12.53-29.52 15.26-31.20L15.26-31.20L15.26-31.20Q17.98-32.88 20.39-34.38L20.39-34.38L20.39-34.38Q22.80-35.87 24.75-37.05L24.75-37.05L24.75-37.05Q26.70-38.24 27.61-38.87L27.61-38.87L27.61-38.87Q28.70-39.60 29.52-40.14L29.52-40.14L29.52-40.14Q30.33-40.69 31.15-41.01L31.15-41.01L31.15-41.01Q31.97-41.32 32.92-41.50L32.92-41.50L32.92-41.50Q33.88-41.69 35.33-41.69L35.33-41.69L35.33-41.69Q35.33-39.42 34.15-38.05L34.15-38.05L34.15-38.05Q32.97-36.69 31.15-35.33L31.15-35.33L31.15-35.33Q30.06-34.60 27.20-32.74L27.20-32.74L27.20-32.74Q24.34-30.88 21.16-28.84L21.16-28.84L21.16-28.84Q17.98-26.79 15.17-24.93L15.17-24.93L15.17-24.93Q12.35-23.07 11.17-22.43L11.17-22.43L11.17-22.43Q9.90-21.71 9.90-20.53L9.90-20.53L9.90-20.25L9.90-20.25Q9.90-20.16 9.99-20.07L9.99-20.07L32.33-16.53L32.33-16.53Q32.33-16.35 32.42-16.17L32.42-16.17L32.42-16.17Q32.42-15.98 32.47-15.85L32.47-15.85L32.47-15.85Q32.51-15.71 32.51-15.62L32.51-15.62L32.51-15.62Q32.51-13.08 29.97-11.81L29.97-11.81L29.97-11.81Q29.70-11.81 28.84-11.81L28.84-11.81L28.84-11.81Q27.97-11.81 27.02-11.76L27.02-11.76L27.02-11.76Q26.07-11.72 25.25-11.72L25.25-11.72L25.25-11.72Q24.43-11.72 24.07-11.72L24.07-11.72L24.07-11.72Q22.89-11.72 20.66-11.85L20.66-11.85L20.66-11.85Q18.44-11.99 15.80-12.40L15.80-12.40L15.80-12.40Q13.17-12.81 10.44-13.44L10.44-13.44L10.44-13.44Q7.72-14.08 5.49-15.08L5.49-15.08L5.49-15.08Q3.27-16.08 1.86-17.44L1.86-17.44L1.86-17.44Q0.45-18.80 0.45-20.62ZM97.63-4.09L97.63-4.09L97.63-4.09Q97.63-6.36 97.95-8.63L97.95-8.63L97.95-8.63Q98.27-10.90 98.68-13.12L98.68-13.12L98.68-13.12Q99.08-15.35 99.40-17.66L99.40-17.66L99.40-17.66Q99.72-19.98 99.72-22.34L99.72-22.34L99.72-22.34Q96.72-22.34 94.54-22.07L94.54-22.07L94.54-22.07Q92.36-21.80 90.28-21.52L90.28-21.52L90.28-21.52Q88.19-21.25 85.83-21.12L85.83-21.12L85.83-21.12Q83.46-20.98 80.10-21.16L80.10-21.16L80.10-21.16Q77.65-18.44 74.52-15.35L74.52-15.35L74.52-15.35Q71.38-12.26 67.84-9.63L67.84-9.63L67.84-9.63Q64.30-6.99 60.40-5.22L60.40-5.22L60.40-5.22Q56.49-3.45 52.49-3.45L52.49-3.45L52.49-3.45Q49.77-3.45 47.27-4.36L47.27-4.36L47.27-4.36Q44.77-5.27 42.87-6.90L42.87-6.90L42.87-6.90Q40.96-8.54 39.87-10.85L39.87-10.85L39.87-10.85Q38.78-13.17 38.78-15.98L38.78-15.98L38.78-15.98Q38.78-17.44 39.28-18.21L39.28-18.21L39.28-18.21Q39.78-18.98 41.41-18.98L41.41-18.98L41.41-18.98Q42.23-18.98 42.87-17.48L42.87-17.48L42.87-17.48Q43.50-15.98 44.55-14.12L44.55-14.12L44.55-14.12Q45.59-12.26 47.23-10.76L47.23-10.76L47.23-10.76Q48.86-9.26 51.68-9.26L51.68-9.26L51.68-9.26Q55.13-9.26 58.44-10.58L58.44-10.58L58.44-10.58Q61.76-11.90 64.80-13.94L64.80-13.94L64.80-13.94Q67.84-15.98 70.52-18.53L70.52-18.53L70.52-18.53Q73.20-21.07 75.38-23.52L75.38-23.52L75.38-23.52Q75.11-25.79 73.75-26.88L73.75-26.88L73.75-26.88Q72.38-27.97 70.89-29.06L70.89-29.06L70.89-29.06Q69.39-30.15 68.21-31.97L68.21-31.97L68.21-31.97Q67.03-33.79 67.03-37.69L67.03-37.69L67.03-37.69Q67.03-43.23 70.39-46.36L70.39-46.36L70.39-46.36Q73.75-49.50 79.56-49.50L79.56-49.50L79.56-49.50Q81.28-49.50 82.96-49.13L82.96-49.13L82.96-49.13Q84.64-48.77 86.37-48.27L86.37-48.27L86.37-48.27Q88.10-47.77 89.78-47.41L89.78-47.41L89.78-47.41Q91.46-47.04 93.18-47.04L93.18-47.04L93.18-47.04Q94.27-47.04 94.95-47.32L94.95-47.32L94.95-47.32Q95.63-47.59 96.18-48.13L96.18-48.13L96.18-48.13Q96.72-48.68 97.36-49.59L97.36-49.59L97.36-49.59Q98.00-50.50 98.99-51.77L98.99-51.77L98.99-51.77Q99.54-52.49 100.67-54.08L100.67-54.08L100.67-54.08Q101.81-55.67 103.17-57.63L103.17-57.63L103.17-57.63Q104.53-59.58 106.08-61.76L106.08-61.76L106.08-61.76Q107.62-63.94 108.98-65.94L108.98-65.94L108.98-65.94Q110.35-67.93 111.44-69.48L111.44-69.48L111.44-69.48Q112.53-71.02 112.98-71.84L112.98-71.84L112.98-71.84Q113.98-72.66 114.80-72.88L114.80-72.88L114.80-72.88Q115.61-73.11 116.70-73.11L116.70-73.11L116.70-73.11Q117.79-73.11 118.34-72.34L118.34-72.34L118.34-72.34Q118.88-71.57 119.02-70.48L119.02-70.48L119.02-70.48Q119.16-69.39 119.11-68.25L119.11-68.25L119.11-68.25Q119.07-67.12 119.07-66.48L119.07-66.48L119.07-66.48Q119.07-66.21 119.07-65.62L119.07-65.62L119.07-65.62Q119.07-65.03 119.02-64.39L119.02-64.39L119.02-64.39Q118.97-63.76 118.97-63.17L118.97-63.17L118.97-63.17Q118.97-62.58 118.97-62.39L118.97-62.39L118.97-62.39Q118.70-61.49 118.11-59.67L118.11-59.67L118.11-59.67Q117.52-57.85 116.79-55.54L116.79-55.54L116.79-55.54Q116.07-53.22 115.30-50.68L115.30-50.68L115.30-50.68Q114.52-48.13 113.84-45.77L113.84-45.77L113.84-45.77Q113.16-43.41 112.62-41.60L112.62-41.60L112.62-41.60Q112.07-39.78 111.89-38.87L111.89-38.87L111.89-38.87Q111.80-38.42 111.62-37.42L111.62-37.42L111.62-37.42Q111.44-36.42 111.25-35.28L111.25-35.28L111.25-35.28Q111.07-34.15 110.89-33.15L110.89-33.15L110.89-33.15Q110.71-32.15 110.71-31.79L110.71-31.79L110.71-31.79Q111.53-31.61 112.34-31.24L112.34-31.24L112.34-31.24Q113.16-30.88 113.16-30.06L113.16-30.06L113.16-30.06Q113.16-29.15 112.48-28.61L112.48-28.61L112.48-28.61Q111.80-28.06 110.89-27.61L110.89-27.61L110.89-27.61Q109.98-27.16 109.21-26.52L109.21-26.52L109.21-26.52Q108.44-25.88 108.35-24.70L108.35-24.70L108.35-24.70Q108.17-23.61 107.71-20.75L107.71-20.75L107.71-20.75Q107.26-17.89 106.67-14.67L106.67-14.67L106.67-14.67Q106.08-11.44 105.58-8.63L105.58-8.63L105.58-8.63Q105.08-5.81 104.81-4.72L104.81-4.72L104.81-4.72Q104.72-4.45 104.44-3.72L104.44-3.72L104.44-3.72Q104.17-3.00 103.81-2.27L103.81-2.27L103.81-2.27Q103.44-1.54 103.08-0.91L103.08-0.91L103.08-0.91Q102.72-0.27 102.54 0L102.54 0L102.54 0Q100.36-0.45 98.99-1.14L98.99-1.14L98.99-1.14Q97.63-1.82 97.63-4.09ZM96.09-38.96L96.09-38.96L96.09-38.96Q95.00-38.96 93.05-37.42L93.05-37.42L93.05-37.42Q91.09-35.87 89.19-33.83L89.19-33.83L89.19-33.83Q87.28-31.79 85.83-29.74L85.83-29.74L85.83-29.74Q84.37-27.70 84.37-26.70L84.37-26.70L84.37-26.70Q84.92-26.70 86.51-26.75L86.51-26.75L86.51-26.75Q88.10-26.79 89.87-26.84L89.87-26.84L89.87-26.84Q91.64-26.88 93.23-26.97L93.23-26.97L93.23-26.97Q94.82-27.06 95.45-27.06L95.45-27.06L95.45-27.06Q95.82-27.06 96.59-27.25L96.59-27.25L96.59-27.25Q97.36-27.43 98.09-27.61L98.09-27.61L98.09-27.61Q98.81-27.79 99.40-27.97L99.40-27.97L99.40-27.97Q99.99-28.15 100.08-28.25L100.08-28.25L100.08-28.25Q100.17-28.25 100.17-28.84L100.17-28.84L100.17-28.84Q100.17-29.43 100.17-29.79L100.17-29.79L100.17-29.79Q100.17-30.52 99.95-32.06L99.95-32.06L99.95-32.06Q99.72-33.60 99.22-35.15L99.22-35.15L99.22-35.15Q98.72-36.69 97.95-37.83L97.95-37.83L97.95-37.83Q97.18-38.96 96.09-38.96ZM70.57-38.87L70.57-38.87L70.57-38.87Q70.57-37.60 71.48-35.96L71.48-35.96L71.48-35.96Q72.38-34.33 73.75-32.88L73.75-32.88L73.75-32.88Q75.11-31.42 76.65-30.42L76.65-30.42L76.65-30.42Q78.20-29.43 79.56-29.43L79.56-29.43L79.56-29.43Q80.83-29.43 82.56-30.97L82.56-30.97L82.56-30.97Q84.28-32.51 85.87-34.56L85.87-34.56L85.87-34.56Q87.46-36.60 88.55-38.51L88.55-38.51L88.55-38.51Q89.64-40.42 89.64-41.14L89.64-41.14L89.64-41.14Q89.64-42.69 88.60-43.46L88.60-43.46L88.60-43.46Q87.55-44.23 86.14-44.55L86.14-44.55L86.14-44.55Q84.74-44.87 83.19-44.87L83.19-44.87L83.19-44.87Q81.65-44.87 80.65-44.87L80.65-44.87L80.65-44.87Q79.38-44.87 77.61-44.64L77.61-44.64L77.61-44.64Q75.83-44.41 74.29-43.78L74.29-43.78L74.29-43.78Q72.75-43.14 71.66-41.96L71.66-41.96L71.66-41.96Q70.57-40.78 70.57-38.87ZM112.89-61.94L97.81-43.50L97.81-43.50Q99.81-41.14 101.54-38.42L101.54-38.42L101.54-38.42Q103.26-35.69 104.81-32.88L104.81-32.88L112.89-61.94ZM119.70-4.09L119.70-4.09L119.70-4.09Q119.70-4.90 119.70-5.36L119.70-5.36L119.70-5.36Q119.70-5.81 119.84-6.22L119.84-6.22L119.84-6.22Q119.97-6.63 120.25-7.08L120.25-7.08L120.25-7.08Q120.52-7.54 120.97-8.26L120.97-8.26L120.97-8.26Q121.70-9.54 123.70-12.71L123.70-12.71L123.70-12.71Q125.70-15.89 127.97-19.44L127.97-19.44L127.97-19.44Q130.24-22.98 132.28-26.16L132.28-26.16L132.28-26.16Q134.32-29.33 135.14-30.61L135.14-30.61L135.14-30.61Q135.23-30.70 135.64-30.70L135.64-30.70L135.64-30.70Q136.05-30.70 136.23-30.70L136.23-30.70L136.23-30.70Q136.41-30.70 136.87-30.70L136.87-30.70L136.87-30.70Q137.32-30.70 137.41-30.61L137.41-30.61L137.41-30.61Q137.50-30.52 137.82-30.15L137.82-30.15L137.82-30.15Q138.14-29.79 138.55-29.38L138.55-29.38L138.55-29.38Q138.96-28.97 139.27-28.61L139.27-28.61L139.27-28.61Q139.59-28.25 139.77-28.25L139.77-28.25L139.77-28.25Q140.59-28.25 141.50-28.79L141.50-28.79L141.50-28.79Q142.41-29.33 143.36-30.02L143.36-30.02L143.36-30.02Q144.31-30.70 145.31-31.24L145.31-31.24L145.31-31.24Q146.31-31.79 147.40-31.79L147.40-31.79L147.40-31.79Q148.58-31.79 149.58-31.24L149.58-31.24L149.58-31.24Q150.58-30.70 151.31-29.88L151.31-29.88L151.31-29.88Q152.03-29.06 152.44-28.06L152.44-28.06L152.44-28.06Q152.85-27.06 152.85-26.07L152.85-26.07L152.85-26.07Q152.85-23.98 152.26-22.07L152.26-22.07L152.26-22.07Q151.67-20.16 150.94-18.30L150.94-18.30L150.94-18.30Q150.22-16.44 149.63-14.58L149.63-14.58L149.63-14.58Q149.04-12.71 149.04-10.72L149.04-10.72L149.04-10.72Q149.04-8.72 149.49-7.86L149.49-7.86L149.49-7.86Q149.94-6.99 152.03-6.99L152.03-6.99L152.03-6.99Q154.49-6.99 156.71-7.72L156.71-7.72L156.71-7.72Q158.94-8.45 161.30-8.45L161.30-8.45L161.30-8.45Q161.30-6.27 159.98-4.81L159.98-4.81L159.98-4.81Q158.66-3.36 156.71-2.50L156.71-2.50L156.71-2.50Q154.76-1.63 152.53-1.32L152.53-1.32L152.53-1.32Q150.31-1.00 148.49-1.00L148.49-1.00L148.49-1.00Q145.04-1.00 143.45-2.95L143.45-2.95L143.45-2.95Q141.86-4.90 141.86-8.17L141.86-8.17L141.86-8.17Q141.86-10.35 142.63-12.26L142.63-12.26L142.63-12.26Q143.41-14.17 144.36-15.98L144.36-15.98L144.36-15.98Q145.31-17.80 146.13-19.62L146.13-19.62L146.13-19.62Q146.95-21.43 146.95-23.52L146.95-23.52L146.95-23.52Q146.95-24.07 146.77-24.98L146.77-24.98L146.77-24.98Q146.58-25.88 145.58-25.88L145.58-25.88L145.58-25.88Q142.59-25.88 140.18-23.98L140.18-23.98L140.18-23.98Q137.77-22.07 135.82-19.16L135.82-19.16L135.82-19.16Q133.87-16.26 132.28-12.90L132.28-12.90L132.28-12.90Q130.69-9.54 129.28-6.63L129.28-6.63L129.28-6.63Q127.88-3.72 126.60-1.82L126.60-1.82L126.60-1.82Q125.33 0.09 123.97 0.09L123.97 0.09L123.97 0.09Q122.06 0.09 120.88-1.09L120.88-1.09L120.88-1.09Q119.70-2.27 119.70-4.09ZM159.48-4.54L159.48-4.54L159.48-4.54Q159.48-5.90 160.30-8.40L160.30-8.40L160.30-8.40Q161.12-10.90 162.43-13.80L162.43-13.80L162.43-13.80Q163.75-16.71 165.43-19.71L165.43-19.71L165.43-19.71Q167.11-22.71 168.83-25.16L168.83-25.16L168.83-25.16Q170.56-27.61 172.10-29.15L172.10-29.15L172.10-29.15Q173.65-30.70 174.83-30.70L174.83-30.70L174.83-30.70Q177.37-30.70 177.37-28.25L177.37-28.25L177.37-28.25Q177.37-27.16 176.96-26.43L176.96-26.43L176.96-26.43Q176.55-25.70 176.01-25.07L176.01-25.07L176.01-25.07Q175.46-24.43 174.83-23.84L174.83-23.84L174.83-23.84Q174.19-23.25 173.74-22.43L173.74-22.43L173.74-22.43Q172.92-21.07 171.74-18.71L171.74-18.71L171.74-18.71Q170.56-16.35 169.43-14.12L169.43-14.12L169.43-14.12Q168.29-11.90 167.47-10.17L167.47-10.17L167.47-10.17Q166.66-8.45 166.66-8.26L166.66-8.26L166.66-7.08L166.66-7.08Q170.20-7.72 173.47-10.13L173.47-10.13L173.47-10.13Q176.74-12.53 179.69-15.80L179.69-15.80L179.69-15.80Q182.64-19.07 185.32-22.66L185.32-22.66L185.32-22.66Q188.00-26.25 190.36-29.29L190.36-29.29L190.36-29.29Q192.72-32.33 194.81-34.33L194.81-34.33L194.81-34.33Q196.90-36.33 198.71-36.33L198.71-36.33L198.71-36.33Q198.71-32.97 197.35-30.24L197.35-30.24L197.35-30.24Q195.99-27.52 194.40-24.88L194.40-24.88L194.40-24.88Q192.81-22.25 191.45-19.48L191.45-19.48L191.45-19.48Q190.09-16.71 190.09-13.26L190.09-13.26L190.09-13.26Q190.09-11.81 191.86-10.67L191.86-10.67L191.86-10.67Q193.63-9.54 195.94-8.76L195.94-8.76L195.94-8.76Q198.26-7.99 200.44-7.54L200.44-7.54L200.44-7.54Q202.62-7.08 203.44-6.99L203.44-6.99L203.44-4.63L203.44-4.63Q201.35-4.54 198.26-4.59L198.26-4.59L198.26-4.59Q195.17-4.63 192.08-5.27L192.08-5.27L192.08-5.27Q189.00-5.90 186.50-7.40L186.50-7.40L186.50-7.40Q184.00-8.90 183.18-11.81L183.18-11.81L183.18-11.81Q180.82-10.26 178.64-8.17L178.64-8.17L178.64-8.17Q176.46-6.08 174.15-4.27L174.15-4.27L174.15-4.27Q171.83-2.45 169.29-1.18L169.29-1.18L169.29-1.18Q166.75 0.09 163.75 0.09L163.75 0.09L163.75 0.09Q161.93 0.09 160.71-1.45L160.71-1.45L160.71-1.45Q159.48-3.00 159.48-4.54ZM169.56 41.32L169.56 41.32L169.56 41.32Q169.56 37.51 170.83 34.06L170.83 34.06L170.83 34.06Q172.10 30.61 174.10 27.52L174.10 27.52L174.10 27.52Q176.10 24.43 178.64 21.66L178.64 21.66L178.64 21.66Q181.19 18.89 183.73 16.44L183.73 16.44L183.73 16.44Q184.64 15.53 186.64 13.76L186.64 13.76L186.64 13.76Q188.63 11.99 191.18 9.76L191.18 9.76L191.18 9.76Q193.72 7.54 196.54 5.13L196.54 5.13L196.54 5.13Q199.35 2.72 201.94 0.54L201.94 0.54L201.94 0.54Q204.53-1.63 206.57-3.36L206.57-3.36L206.57-3.36Q208.61-5.09 209.61-5.90L209.61-5.90L209.61-5.90Q209.89-6.81 210.61-8.63L210.61-8.63L210.61-8.63Q211.34-10.44 212.29-12.81L212.29-12.81L212.29-12.81Q213.25-15.17 214.25-17.71L214.25-17.71L214.25-17.71Q215.24-20.25 216.20-22.57L216.20-22.57L216.20-22.57Q217.15-24.88 217.92-26.70L217.92-26.70L217.92-26.70Q218.70-28.52 219.06-29.43L219.06-29.43L219.06-29.43Q219.51-30.52 220.19-31.74L220.19-31.74L220.19-31.74Q220.88-32.97 221.74-34.06L221.74-34.06L221.74-34.06Q222.60-35.15 223.74-35.87L223.74-35.87L223.74-35.87Q224.87-36.60 226.23-36.60L226.23-36.60L226.23-36.60Q226.23-33.69 225.28-30.15L225.28-30.15L225.28-30.15Q224.33-26.61 222.96-23.16L222.96-23.16L222.96-23.16Q221.60-19.71 220.19-16.71L220.19-16.71L220.19-16.71Q218.79-13.71 217.88-11.81L217.88-11.81L217.88-11.81Q218.06-11.81 218.47-11.76L218.47-11.76L218.47-11.76Q218.88-11.72 219.06-11.72L219.06-11.72L219.06-11.72Q221.42-11.72 223.55-12.35L223.55-12.35L223.55-12.35Q225.69-12.99 228.05-12.99L228.05-12.99L228.05-12.99Q228.78-12.99 229.64-12.90L229.64-12.90L229.64-12.90Q230.50-12.81 230.77-11.81L230.77-11.81L230.77-11.81Q229.78-9.81 227.69-8.99L227.69-8.99L227.69-8.99Q225.60-8.17 223.19-7.63L223.19-7.63L223.19-7.63Q220.78-7.08 218.65-6.27L218.65-6.27L218.65-6.27Q216.52-5.45 215.61-3.54L215.61-3.54L215.61-3.54Q215.06-2.45 213.93-0.14L213.93-0.14L213.93-0.14Q212.79 2.18 211.38 5.04L211.38 5.04L211.38 5.04Q209.98 7.90 208.39 11.13L208.39 11.13L208.39 11.13Q206.80 14.35 205.44 17.26L205.44 17.26L205.44 17.26Q204.07 20.16 202.98 22.52L202.98 22.52L202.98 22.52Q201.89 24.88 201.44 25.97L201.44 25.97L201.44 25.97Q199.90 29.24 198.12 33.69L198.12 33.69L198.12 33.69Q196.35 38.14 193.86 42.19L193.86 42.19L193.86 42.19Q191.36 46.23 187.91 49.04L187.91 49.04L187.91 49.04Q184.46 51.86 179.64 51.86L179.64 51.86L179.64 51.86Q177.37 51.86 175.51 51.00L175.51 51.00L175.51 51.00Q173.65 50.13 172.33 48.68L172.33 48.68L172.33 48.68Q171.01 47.23 170.29 45.32L170.29 45.32L170.29 45.32Q169.56 43.41 169.56 41.32ZM174.19 39.87L174.19 39.87L174.19 39.87Q174.19 41.23 174.33 42.50L174.33 42.50L174.33 42.50Q174.47 43.78 174.97 44.82L174.97 44.82L174.97 44.82Q175.46 45.86 176.42 46.50L176.42 46.50L176.42 46.50Q177.37 47.14 179.10 47.14L179.10 47.14L179.10 47.14Q182.46 47.14 185.46 44.73L185.46 44.73L185.46 44.73Q188.45 42.32 190.86 39.01L190.86 39.01L190.86 39.01Q193.27 35.69 195.08 32.06L195.08 32.06L195.08 32.06Q196.90 28.43 197.90 25.97L197.90 25.97L197.90 25.97Q198.53 24.43 199.35 22.30L199.35 22.30L199.35 22.30Q200.17 20.16 201.08 17.80L201.08 17.80L201.08 17.80Q201.98 15.44 202.89 13.12L202.89 13.12L202.89 13.12Q203.80 10.81 204.48 8.99L204.48 8.99L204.48 8.99Q205.16 7.17 205.62 5.99L205.62 5.99L205.62 5.99Q206.07 4.81 206.07 4.72L206.07 4.72L206.07 2.36L206.07 2.36Q205.89 2.54 205.34 2.86L205.34 2.86L205.34 2.86Q204.80 3.18 204.25 3.54L204.25 3.54L204.25 3.54Q203.71 3.91 203.21 4.22L203.21 4.22L203.21 4.22Q202.71 4.54 202.53 4.72L202.53 4.72L202.53 4.72Q201.80 5.36 200.21 6.86L200.21 6.86L200.21 6.86Q198.62 8.36 196.67 10.17L196.67 10.17L196.67 10.17Q194.72 11.99 192.54 14.03L192.54 14.03L192.54 14.03Q190.36 16.08 188.41 17.94L188.41 17.94L188.41 17.94Q186.45 19.80 184.86 21.30L184.86 21.30L184.86 21.30Q183.28 22.80 182.55 23.52L182.55 23.52L182.55 23.52Q181.28 25.61 179.82 27.43L179.82 27.43L179.82 27.43Q178.37 29.24 177.15 31.15L177.15 31.15L177.15 31.15Q175.92 33.06 175.06 35.15L175.06 35.15L175.06 35.15Q174.19 37.24 174.19 39.87ZM233.14-70.11L233.14-70.11L233.14-70.11Q233.14-70.75 233.59-71.25L233.59-71.25L233.59-71.25Q234.04-71.75 234.73-72.16L234.73-72.16L234.73-72.16Q235.41-72.57 236.13-72.79L236.13-72.79L236.13-72.79Q236.86-73.02 237.31-73.02L237.31-73.02L237.31-73.02Q238.68-73.02 238.95-71.98L238.95-71.98L238.95-71.98Q239.22-70.93 239.22-69.93L239.22-69.93L239.22-69.93Q239.22-68.21 238.27-66.98L238.27-66.98L238.27-66.98Q237.31-65.75 235.50-65.75L235.50-65.75L235.50-65.75Q234.68-65.75 234.18-66.16L234.18-66.16L234.18-66.16Q233.68-66.57 233.45-67.25L233.45-67.25L233.45-67.25Q233.23-67.93 233.18-68.66L233.18-68.66L233.18-68.66Q233.14-69.39 233.14-70.11ZM228.05-5.90L228.05-5.90L228.05-5.90Q228.87-11.08 231.14-15.44L231.14-15.44L231.14-15.44Q233.41-19.80 236.36-23.02L236.36-23.02L236.36-23.02Q239.31-26.25 242.76-28.34L242.76-28.34L242.76-28.34Q246.21-30.42 249.48-31.02L249.48-31.02L249.48-31.02Q252.75-31.61 255.52-30.70L255.52-30.70L255.52-30.70Q258.29-29.79 260.02-27.06L260.02-27.06L260.02-27.06Q260.02-24.98 259.06-23.07L259.06-23.07L259.06-23.07Q258.11-21.16 256.98-19.25L256.98-19.25L256.98-19.25Q255.84-17.35 254.89-15.35L254.89-15.35L254.89-15.35Q253.93-13.35 253.93-11.08L253.93-11.08L253.93-11.08Q253.93-8.72 254.98-7.31L254.98-7.31L254.98-7.31Q256.02-5.90 258.66-5.90L258.66-5.90L258.66-5.90Q260.84-5.90 262.88-6.54L262.88-6.54L262.88-6.54Q264.92-7.17 267.01-7.17L267.01-7.17L267.01-7.17Q267.38-7.17 268.24-7.13L268.24-7.13L268.24-7.13Q269.10-7.08 269.37-7.08L269.37-7.08L269.37-7.08Q268.28-5.54 266.56-4.45L266.56-4.45L266.56-4.45Q264.83-3.36 262.92-2.59L262.92-2.59L262.92-2.59Q261.02-1.82 258.97-1.45L258.97-1.45L258.97-1.45Q256.93-1.09 255.21-1.09L255.21-1.09L255.21-1.09Q253.57-1.09 252.30-1.82L252.30-1.82L252.30-1.82Q251.03-2.54 250.12-3.72L250.12-3.72L250.12-3.72Q249.21-4.90 248.71-6.40L248.71-6.40L248.71-6.40Q248.21-7.90 248.21-9.35L248.21-9.35L248.21-9.35Q246.85-7.81 245.26-6.13L245.26-6.13L245.26-6.13Q243.67-4.45 241.90-3.09L241.90-3.09L241.90-3.09Q240.13-1.73 238.09-0.82L238.09-0.82L238.09-0.82Q236.04 0.09 233.86 0.09L233.86 0.09L233.86 0.09Q231.50 0.09 229.78-1.68L229.78-1.68L229.78-1.68Q228.05-3.45 228.05-5.90ZM234.04-8.72L234.04-8.72L234.04-8.72Q234.04-7.99 234.09-7.08L234.09-7.08L234.09-7.08Q234.13-6.18 235.22-5.90L235.22-5.90L235.22-5.90Q237.50-6.45 240.40-8.31L240.40-8.31L240.40-8.31Q243.31-10.17 245.85-12.67L245.85-12.67L245.85-12.67Q248.39-15.17 250.12-18.03L250.12-18.03L250.12-18.03Q251.84-20.89 251.84-23.52L251.84-23.52L251.84-23.52Q251.84-23.70 251.80-24.11L251.80-24.11L251.80-24.11Q251.75-24.52 251.75-24.70L251.75-24.70L251.75-24.70Q248.67-24.70 245.49-23.43L245.49-23.43L245.49-23.43Q242.31-22.16 239.77-19.94L239.77-19.94L239.77-19.94Q237.22-17.71 235.63-14.80L235.63-14.80L235.63-14.80Q234.04-11.90 234.04-8.72ZM267.28-3.09L267.28-3.09L267.28-3.09Q267.28-4.45 267.60-5.40L267.60-5.40L267.60-5.40Q267.92-6.36 269.74-7.08L269.74-7.08L269.74-7.08Q270.46-8.36 272.01-11.03L272.01-11.03L272.01-11.03Q273.55-13.71 275.50-17.07L275.50-17.07L275.50-17.07Q277.46-20.43 279.64-24.16L279.64-24.16L279.64-24.16Q281.82-27.88 283.81-31.24L283.81-31.24L283.81-31.24Q285.81-34.60 287.40-37.28L287.40-37.28L287.40-37.28Q288.99-39.96 289.81-41.23L289.81-41.23L289.81-41.23Q290.72-42.78 292.35-45.18L292.35-45.18L292.35-45.18Q293.99-47.59 295.89-50.09L295.89-50.09L295.89-50.09Q297.80-52.58 299.89-54.95L299.89-54.95L299.89-54.95Q301.98-57.31 303.88-58.85L303.88-58.85L303.88-58.85Q304.07-58.94 304.61-59.08L304.61-59.08L304.61-59.08Q305.16-59.21 305.34-59.21L305.34-59.21L305.34-59.21Q305.34-57.85 304.11-55.22L304.11-55.22L304.11-55.22Q302.89-52.58 300.98-49.36L300.98-49.36L300.98-49.36Q299.07-46.14 296.71-42.59L296.71-42.59L296.71-42.59Q294.35-39.05 292.08-35.69L292.08-35.69L292.08-35.69Q289.81-32.33 287.95-29.43L287.95-29.43L287.95-29.43Q286.08-26.52 285.08-24.70L285.08-24.70L285.08-24.70Q284.00-22.80 282.41-19.57L282.41-19.57L282.41-19.57Q280.82-16.35 278.91-12.94L278.91-12.94L278.91-12.94Q277.00-9.54 274.96-6.31L274.96-6.31L274.96-6.31Q272.92-3.09 270.92-1.18L270.92-1.18L270.92-1.18Q270.64-0.91 269.74-0.45L269.74-0.45L269.74-0.45Q268.83 0 268.65 0L268.65 0L268.65 0Q268.10 0 267.78-0.41L267.78-0.41L267.78-0.41Q267.47-0.82 267.38-1.32L267.38-1.32L267.38-1.32Q267.28-1.82 267.28-2.32L267.28-2.32L267.28-2.32Q267.28-2.82 267.28-3.09ZM309.24-8.26L309.24-8.26L309.24-8.26Q309.88-9.99 311.56-11.53L311.56-11.53L311.56-11.53Q313.24-13.08 315.56-14.44L315.56-14.44L315.56-14.44Q317.87-15.80 320.60-16.89L320.60-16.89L320.60-16.89Q323.32-17.98 325.95-18.85L325.95-18.85L325.95-18.85Q328.59-19.71 330.99-20.30L330.99-20.30L330.99-20.30Q333.40-20.89 335.04-21.16L335.04-21.16L335.04-21.16Q335.04-21.25 335.08-21.48L335.08-21.48L335.08-21.48Q335.13-21.71 335.13-21.80L335.13-21.80L335.13-21.80Q335.13-22.98 333.76-23.70L333.76-23.70L333.76-23.70Q332.40-24.43 331.58-24.70L331.58-24.70L331.58-24.70Q330.40-25.16 327.41-26.16L327.41-26.16L327.41-26.16Q324.41-27.16 321.00-28.29L321.00-28.29L321.00-28.29Q317.60-29.43 314.60-30.42L314.60-30.42L314.60-30.42Q311.60-31.42 310.42-31.79L310.42-31.79L310.42-31.79Q308.97-33.60 309.11-34.92L309.11-34.92L309.11-34.92Q309.24-36.24 310.33-36.96L310.33-36.96L310.33-36.96Q311.42-37.69 313.10-37.87L313.10-37.87L313.10-37.87Q314.78-38.05 316.46-37.74L316.46-37.74L316.46-37.74Q318.14-37.42 319.42-36.51L319.42-36.51L319.42-36.51Q320.69-35.60 321.05-34.15L321.05-34.15L342.12-25.97L342.12-25.97Q345.84-24.43 345.84-21.25L345.84-21.25L345.84-21.25Q345.84-19.80 344.89-19.07L344.89-19.07L344.89-19.07Q343.94-18.35 342.57-18.07L342.57-18.07L342.57-18.07Q341.21-17.80 339.80-17.76L339.80-17.76L339.80-17.76Q338.40-17.71 337.49-17.71L337.49-17.71L312.79-7.08L312.79-7.08Q312.60-7.08 312.47-7.04L312.47-7.04L312.47-7.04Q312.33-6.99 312.15-6.99L312.15-6.99L312.15-6.99Q311.33-6.99 310.65-7.31L310.65-7.31L310.65-7.31Q309.97-7.63 309.24-8.26Z"
              fill="#005b41"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Logo;
