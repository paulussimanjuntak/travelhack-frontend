import css from "styled-jsx/css";

const style = css`
        .LandingPageMapAnimation__aspectRatio {
            width: 100%;
            padding-top: 43%
        }

        .LandingPageMapAnimation__container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
        }

        .LandingPageMapAnimation__item0 {
            position: absolute;
            width: 34%;
            z-index: 6;
            left: 26%;
            opacity: 0;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-in;
            transition: transform .6s ease-in,opacity .4s ease-out;
            transition: transform .6s ease-in,opacity .4s ease-out,-webkit-transform .6s ease-in;
            top: 11%
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__item0 {
            -webkit-transform: translateY(-16%);
            transform: translateY(-16%);
            opacity: 1
        }

        .LandingPageMapAnimation__item1 {
            position: absolute;
            width: 34%;
            z-index: 7;
            left: 20%;
            opacity: 0;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-in;
            transition: transform .6s ease-in,opacity .4s ease-out;
            transition: transform .6s ease-in,opacity .4s ease-out,-webkit-transform .6s ease-in;
            top: 25%
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__item1 {
            -webkit-transform: translateY(-16%);
            transform: translateY(-16%);
            opacity: 1
        }

        .LandingPageMapAnimation__item2 {
            position: absolute;
            width: 34%;
            z-index: 8;
            left: 14%;
            opacity: 0;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-in;
            transition: transform .6s ease-in,opacity .4s ease-out;
            transition: transform .6s ease-in,opacity .4s ease-out,-webkit-transform .6s ease-in;
            top: 39%
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__item2 {
            -webkit-transform: translateY(-16%);
            transform: translateY(-16%);
            opacity: 1
        }

        .LandingPageMapAnimation__item3 {
            position: absolute;
            width: 34%;
            z-index: 9;
            left: 8%;
            opacity: 0;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-in;
            transition: transform .6s ease-in,opacity .4s ease-out;
            transition: transform .6s ease-in,opacity .4s ease-out,-webkit-transform .6s ease-in;
            top: 53%
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__item3 {
            -webkit-transform: translateY(-16%);
            transform: translateY(-16%);
            opacity: 1
        }

        .LandingPageMapAnimation__item4 {
            position: absolute;
            width: 34%;
            z-index: 10;
            left: 2%;
            opacity: 0;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-in;
            transition: transform .6s ease-in,opacity .4s ease-out;
            transition: transform .6s ease-in,opacity .4s ease-out,-webkit-transform .6s ease-in;
            top: 67%
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__item4 {
            -webkit-transform: translateY(-16%);
            transform: translateY(-16%);
            opacity: 1
        }

        .LandingPageMapAnimation__marker0 {
            position: absolute;
            width: 6%;
            left: 58%;
            -webkit-transform: translateY(73%);
            transform: translateY(73%);
            z-index: 11;
            transition: opacity .1s ease-in 1.1s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker0 {
            opacity: 1
        }

        .LandingPageMapAnimation__marker1 {
            position: absolute;
            width: 6%;
            left: 59%;
            -webkit-transform: translateY(133%);
            transform: translateY(133%);
            z-index: 11;
            transition: opacity .1s ease-in 1s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker1 {
            opacity: 1
        }

        .LandingPageMapAnimation__marker2 {
            position: absolute;
            width: 6%;
            left: 63%;
            -webkit-transform: translateY(106%);
            transform: translateY(106%);
            z-index: 11;
            transition: opacity .1s ease-in .9s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker2 {
            opacity: 1
        }

        .LandingPageMapAnimation__marker3 {
            position: absolute;
            width: 6%;
            left: 66%;
            -webkit-transform: translateY(117%);
            transform: translateY(117%);
            z-index: 11;
            transition: opacity .1s ease-in .8s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker3 {
            opacity: 1
        }

        .LandingPageMapAnimation__marker4 {
            position: absolute;
            width: 6%;
            left: 76%;
            -webkit-transform: translateY(40%);
            transform: translateY(40%);
            z-index: 11;
            transition: opacity .1s ease-in .7s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker4 {
            opacity: 1
        }

        .LandingPageMapAnimation__marker5 {
            position: absolute;
            width: 6%;
            left: 78%;
            -webkit-transform: translateY(40%);
            transform: translateY(40%);
            z-index: 11;
            transition: opacity .1s ease-in .6s;
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__marker5 {
            opacity: 1
        }

        .LandingPageMapAnimation__map {
            position: absolute;
            width: 60%;
            z-index: 4;
            left: 40%;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-out;
            transition: transform .6s ease-out,opacity .4s ease-out;
            transition: transform .6s ease-out,opacity .4s ease-out,-webkit-transform .6s ease-out;
            -webkit-transform: translateY(9.8%);
            transform: translateY(9.8%);
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__map {
            -webkit-transform: translateY(3.8%);
            transform: translateY(3.8%);
            opacity: 1
        }

        .LandingPageMapAnimation__base {
            position: absolute;
            width: 86%;
            z-index: 1;
            left: 10%;
            transition: opacity .4s ease-out,-webkit-transform .6s ease-out;
            transition: transform .6s ease-out,opacity .4s ease-out;
            transition: transform .6s ease-out,opacity .4s ease-out,-webkit-transform .6s ease-out;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 0
        }

        .LandingPageMapAnimation__animate .LandingPageMapAnimation__base {
            -webkit-transform: translateY(6%);
            transform: translateY(6%);
            opacity: 1
        }

        :global(.LandingPageInner__guideBackground) {
          bottom: 0;
          width: 100%;
          height: 460px;
          position: absolute;
          background: rgb(234,248,253);
          background: linear-gradient(0deg, rgba(234,248,253,1) 0%, rgba(255,255,255,1) 100%);
        }
`

export default style
