class MyCustomElement extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
        .body {
            background-color: #F9F8F6;
            font-family: 'Montserrat', Sans-serif;
            margin: 0;
            padding: 0;
          }
          
          /* Style tytułów */
          
          .titleV1 {
            color: #505050;
            font-family: 'Montserrat', Sans-serif;
            font-size: 30px;
            font-weight: 700;
            line-height: 1.5;
          }
          
          .SubtitleV1 {
            color: #505050;
            font-family: 'Montserrat', Sans-serif;
            font-size: 20px;
            font-weight: normal;
            line-height: 1.5;
          }
          
          /* Style wyróżnień */
          
          .HighlightV1 {
            background-color: #13334d;
            color: white;
            font-size: 30px;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 3px;
            padding-bottom: 3px;
            white-space:nowrap;
          }
          
          .UnderlyV1 {
            text-decoration: underline;
            text-underline-offset: 5px; 
            text-decoration-color: #13334d; 
            text-decoration-thickness: 2px;
          }
          
          .LinkV1 {
            text-decoration: none; 
            color: #000; 
            font-weight: normal; 
            font-size: 20px;
          }
          
          /* Style KONTENERÓW */
          
          /* <style> */
          .Container-Image {
            width: 100%;
            text-align: center;
            position: relative;
            background-color: #F9F8F6;
          }
          
          .Image_for_container {
            width: 100%;
            max-height: 350px;
            min-height: 350px;
            object-fit: cover;
            object-position: center;
          }
          /* </style> */
          
          /* <style> */
          .Container-Overlay {
            position:inherit;
            width: 90%;
            max-width: 800px;
            bottom: 70px;
            background-color: white;
            padding: 1em;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-left: auto;
            margin-right: auto;
          }
          
          .overlay_title {
            color: #13334d;
            font-family: montserrat, Sans-serif;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          
          .overlay_subtitle {
            color: #13334d;
            font-family: montserrat, Sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 1;
          }
          /* </style> */
          
          /* <style> */
          .Newsletter_Under-Overlay-Container {
            display: flex; /* Use flexbox to layout children side by side */
            align-items: center; /* Align items vertically */
            padding-bottom: 50px;
            background: #F9F8F6;
            justify-content: center;
          }
          
          .Dokumenty_Under-Overlay-Container {
            display: flex; /* Use flexbox to layout children side by side */
            align-items: center; /* Align items vertically */
            padding-bottom: 50px;
            background: #F9F8F6;
            justify-content: center;
            max-width: 1100px;
            margin-right: auto;
            margin-left: auto;
          }
          
          .Content-Area {
            text-align: center;
            margin-right: 20px;
            margin-left: 15px;
          }
          
          .Content-Box {
            margin-right: 20px;
            margin-left: 15px;
          }
          
          .Right-Side-Image {
            width: 170px; /* Control the image width, make sure it's responsive */
            height: auto; /* Maintain aspect ratio */
            margin-left: 20px;
            margin-right: 15px;
          }
          
          .Link_Right-Side-Image {
            width: 200px; /* Control the image width, make sure it's responsive */
            height: auto; /* Maintain aspect ratio */
            margin-left: 20px;
            margin-right: 15px;
            transition: transform 0.3s ease;
            border: 1px solid #eaeaea; /* Light border for definition */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            border-radius: 5px; /* Rounded corners */
          }
          
          .Link_Right-Side-Image:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow on hover */
            transform: translateY(-2px); /* Gentle lift effect on hover */
          }
          
          .DescriptionV1 {
            font-size: 15px;
            margin-top: 25px;
            color: #525252;
            max-width: 800px; 
            margin-left: auto; 
            margin-right: auto;
            line-height: 1.5;
          }
          
          .LogoV1 {
              width: 66px;
              height: 44px;
              margin-bottom: 5px;
          }
          /* </style> */
          
          /* <style> */
          .Basic-Container {
            text-align: center;
            background: white;
            padding: 20px;
            background-color: #F9F8F6;
          }
          /* </style> */
          
          /* <style> */
          .Basic-Category-Container {
            text-align: center;
            background: #F9F8F6;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            margin: 5px 0;
          }
          
          .special-button {
              padding: 25px 25px;
              padding-right: 10px;
              margin-top: 20px;
              margin-left: auto;
              background-color: #13334d;
              color: white;
              border: none;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(60.94873535156251,87.08787264964896,185.0875,.5); /* Cień pod przyciskiem */
              font-family: 'Montserrat', sans-serif;
              font-size: 16px;
              text-align: center;
              font-weight: 600;
              transition: transform 0.5s ease;
              position: relative;
              display: inline-flex;
              align-items: center; /* Centrowanie elementów w pionie */
              cursor: pointer;
           }
          
          .special-button svg {
              width: 50px; /* Szerokość ikony SVG */
              height: 20px; /* Wysokość ikony SVG */
              margin-left: 5px; /* Odległość między tekstem a ikoną */
              fill: white; /* Kolor wypełnienia SVG */
          }
          
          .special-button:hover {
              transform: scale(1.08); /* Powiększenie o 10% */
          }
          
          .button-link {
              display: inline-block; /* Sprawia, że link zachowuje właściwości blokowe */
              text-decoration: none; /* Usuwa podkreślenie tekstu */
          }
          
          /* <style> */
          .Kafelki-Container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            box-sizing: border-box;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            max-width: 1300px;
          }
          
          .page-card {
            width: 100%;
            max-width: 500px;
            display: flex;
            transition: .5s;
            height: 180px;
            margin: 20px;
            box-sizing: border-box;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }
          
          .page-card:hover {
            transform: scale(1.03); 
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          
          .page-card__img {
            width: 30%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .page-card__content {
            background-color: white;
            width: 70%;
            position: relative;
          }
          
          .page-card__header {
            font-size: 26px;
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 30px;
            font-weight: 600;
            color: #5f5f5f;
            line-height: 1.2;
            text-align: left;
          }
          
          .page-card__btn {
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: #5f5f5f;
            padding: 7px 30px;
            border: 1px solid #5f5f5f;
            text-transform: uppercase;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease; /* Dodajemy animację przejścia */
          }
          
          .page-card__btn:hover {
            transform: translateY(-3px); /* Lekkie podniesienie */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Zwiększony cień przy najechaniu */
          }
          
          /* <style> */
          
          .Header-Container {
            text-align: center;
            background: #13334d;
            padding: 20px;
            border: 1.5px solid black;
            margin: 20px 0px;
          }
          
          .Header {
            color: white;
            font-family: 'Montserrat', Sans-serif;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 1px;
          }
          
          .Arrow-Container {
            text-align: center;
            padding: 5px 0;
          }
          
          .Arrow-Image {
            height: 16px;
          }
          /* KARTY-POCZĄTEK */
          
          .slide-container{
            max-width: 1120px;
            width: 100%;
            margin-top: 20px;
          }
          .slide-content{
            overflow: hidden;
            border-radius: 25px;
          }
          .card{
            border-radius: 25px;
            background-color: #FFF;
          }
          .image-content,
          .card-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 14px;
            background-color: #F9F8F6;
          }
          .image-content{
            position: relative;
            row-gap: 5px;
            padding: 10px 0;
          }
          .overlay{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: #13334D;
            border-radius: 25px 25px 25px 25px;
            z-index: +1;
          }
          
          .Audyty_Overlay {
            background-image: url('images/Miniaturka.jpg');
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #13334D;
            border-radius: 25px 25px 25px 25px;
            z-index: +1;
          }
          
          .card-image{
            position: relative;
            height: 200px;
            width: 150px;
            background: #FFF;
            padding: 1px;
          }
          .card-image .card-img{
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .name {
            font-size: 18px;
            font-weight: 500;
            color: #333;
            max-width: 192px;
            text-align: center;
          }
          .button{
            border: none;
            font-size: 16px;
            color: #FFF;
            padding: 8px 16px;
            background-color: #13334D;
            border-radius: 6px;
            margin: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .button:hover{
            background: #0d263b;
          }
          
          .swiper-navBtn{
            color: #13334dc2;
            transition: color 0.3s ease;
            display: none;
          }
          .swiper-navBtn:hover{
            color: #13334D;
          }
          .swiper-navBtn::before,
          .swiper-navBtn::after{
            font-size: 35px;
          }
          .swiper-button-next{
            right: 0;
          }
          .swiper-button-prev{
            left: 0;
          }
          .swiper-pagination-bullet{
            background-color: #13334dc2;
            opacity: 1;
          }
          .swiper-pagination-bullet-active{
            background-color: #13334D;
          }
          
          @media screen and (max-width: 768px) {
            .slide-content{
              margin: 0 10px;
            }
            .swiper-navBtn{
              display: none;
            }
          }
          
          /* KARTY-KONIEC */
          
          /* BUTTON BACK TO TOP */
          
          .contentDiv{
            width:300px;
            height:1000px;
            background-color:#ff0000;
          }
          
          button.back-to-top {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff;
              height: 0px;
            width: 0px;
            overflow: hidden;
              border-radius: 50px;
              -webkit-border-radius: 50px;
              -moz-border-radius: 50px;
            color: transparent;
              clear: both;
            visibility: hidden;
            position: fixed;
            cursor: pointer;
            display: block;
            border: none;
            right: 50px;
              bottom: 75px;
            font-size: 0px;
            outline: 0 !important;
            z-index: 99;
            -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
          }
          
          button.back-to-top:hover,
          button.back-to-top:active,
          button.back-to-top:focus {
            outline: 0 !important;
          }
          
          button.back-to-top::before,
          button.back-to-top::after {
            content: "";
            display: block;
            vertical-align: middle;
            border-bottom: solid 10px #13324c;
            border-left: solid 10px transparent;
            line-height: 0;
            border-right: solid 10px transparent;
            height: 0;
            margin: 18px auto 0;
            width: 0;
            border-radius:20px;
            visibility: hidden;
          }
          
          button.back-to-top.show::after,
          button.back-to-top.show::before{
            visibility: visible;
          }
          button.back-to-top::after {
            border-bottom-color:#fff;
                position: relative;
            top:-24px;
          }
          button.back-to-top.show {
            display: block;
            background: #fff;
            color: #00ab6c;
            font-size: 25px;
            right: 25px;
            bottom: 50px;
            height: 50px;
            width: 50px;
            visibility: visible;
            box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
            -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
          }
          button.back-to-top.show:active {
            box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
            -webkit-box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
          }
          /**
           * Swiper 8.1.6
           * Most modern mobile touch slider and framework with hardware accelerated transitions
           * https://swiperjs.com
           *
           * Copyright 2014-2022 Vladimir Kharlampidi
           *
           * Released under the MIT License
           *
           * Released on: May 25, 2022
           */
          
           @font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:0px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}          
        </style>

        <!-- Cała struktura HTML twojej strony -->
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Baza Wiedzy</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <!-- Swiper CSS -->
            <link href="https://hicior.github.io/my-styles/swiper-bundle.min.css" rel="stylesheet">
            <!-- CSS -->
            <link href="https://hicior.github.io/my-styles/styles.css" rel="stylesheet"/>
            <link href="https://hicior.github.io/my-styles/stylesV2.css" rel="stylesheet"/>
            <style>
                body {
                    background-color: #F9F8F6;
                    font-family: 'Montserrat', Sans-serif;
                    margin: 0;
                    padding: 0;
                }
            </style>
          </head>
          <body>
            <div class="Container-Image">
                <img src="https://hicior.github.io/my-styles/images/Baza Wiedzy.png" alt="Tło" class="Image_for_container"/>
                <div class="Container-Overlay">
                    <h1 class="overlay_title">W tym miejscu pojawią się opracowania stworzone przez naszych prawników.</h1>
                    <p class="overlay_subtitle">Bądź na bieżąco!</p>
                </div>
            </div>
            <!-- NAWIGACJA -->
            <div class="Kafelki-Container">
                <div class="page-card">
                    <div class="page-card__img" style="background-image: url('https://hicior.github.io/my-styles/images/poradniki podatkowe.png');"></div>
                    <div class="page-card__content">
                        <h2 class="page-card__header">Poradniki Podatkowe</h2>
                        <a class="page-card__btn" href="#poradniki-podatkowe">Przejdź</a>
                    </div>
                </div>
                <div class="page-card">
                    <div class="page-card__img" style="background-image: url('https://hicior.github.io/my-styles/images/poradniki prawne.png');"></div>
                    <div class="page-card__content">
                        <h2 class="page-card__header">Poradniki Prawne</h2>
                        <a class="page-card__btn" href="#poradniki-prawne">Przejdź</a>
                    </div>
                </div>
                <div class="page-card">
                    <div class="page-card__img" style="background-image: url('https://hicior.github.io/my-styles/images/szkolenia.png');"></div>
                    <div class="page-card__content">
                        <h2 class="page-card__header">Szkolenia</h2>
                        <a class="page-card__btn" href="#szkolenia">Przejdź</a>
                    </div>
                </div>
                <div class="page-card">
                    <div class="page-card__img" style="background-image: url('https://hicior.github.io/my-styles/images/newslettery.png');"></div>
                    <div class="page-card__content">
                        <h2 class="page-card__header">Newslettery</h2>
                        <a class="page-card__btn" href="#newslettery">Przejdź</a>
                    </div>
                </div>
            </div>
            <!-- PORADNIKI PODATKOWE -->
            <div class="Header-Container" id="poradniki-podatkowe">
                <h1 class="Header">PORADNIKI PODATKOWE</h1>
            </div>
            <div class="Dokumenty_Under-Overlay-Container">
                <div class="Content-Area">
                    <img src="https://hicior.github.io/my-styles/images/IkonkaLoga.png" class="LogoV1"/>
                    <h1 class="titleV1" style="line-height: 1.7; margin: 5px;">
                        Wiemy że uporczywe może być przeszukiwanie Internetu w poszukiwaniu <span class="HighlightV1">odpowiedzi,</span> więc umieszczamy wszystkie informacje w jednym miejscu.<br>
                    </h1> 
                </div>
                <img src="https://hicior.github.io/my-styles/images/E-mai.png" class="Right-Side-Image" alt="Descriptive text for the image"/>
            </div>
            <!-- KARTY -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Header-Container" id="poradniki-prawne">
                <h1 class="Header">PORADNIKI PRAWNE</h1>
            </div>
            <div class="Dokumenty_Under-Overlay-Container">
                <div class="Content-Area">
                    <img src="https://hicior.github.io/my-styles/images/IkonkaLoga.png" class="LogoV1"/>
                    <h1 class="titleV1" style="line-height: 1.7; margin: 5px;">
                        Wiemy że uporczywe może być przeszukiwanie Internetu w poszukiwaniu <span class="HighlightV1">odpowiedzi,</span> więc umieszczamy wszystkie informacje w jednym miejscu.<br>
                    </h1> 
                </div>
                <img src="https://hicior.github.io/my-styles/images/E-mai.png" class="Right-Side-Image" alt="Descriptive text for the image"/>
            </div>
            <!-- KARTY -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Header-Container" id="szkolenia">
                <h1 class="Header">SZKOLENIA</h1>
            </div>
            <div class="Dokumenty_Under-Overlay-Container">
                <div class="Content-Area">
                    <img src="https://hicior.github.io/my-styles/images/IkonkaLoga.png" class="LogoV1"/>
                    <h1 class="titleV1" style="line-height: 1.7; margin: 5px;">
                        Nasze <span class="HighlightV1">szkolenia</span> kiedy tylko chcesz.
                    </h1> 
                </div>
                <img src="https://hicior.github.io/my-styles/images/zarowka.png" class="Right-Side-Image" alt="Descriptive text for the image"/>
            </div>
            <!-- KARTY -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="https://hicior.github.io/my-styles/images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Header-Container" id="newslettery">
                <h1 class="Header">NEWSLETTERY</h1>
            </div>
            <div class="Dokumenty_Under-Overlay-Container">
                <div class="Content-Area">
                    <img src="https://hicior.github.io/my-styles/images/IkonkaLoga.png" class="LogoV1"/>
                    <h1 class="titleV1">
                        W tym miejscu mogą Państwo <span class="HighlightV1">dostosować</span> mailing Kancelarii pod swoje potrzeby.<br>
                        <h2 class="SubtitleV1">Dobry newsletter jak dobry garnitur - powinien pasować jak ulał.</h2>
                    </h1> 
                </div>
                <img src="https://hicior.github.io/my-styles/images/E-mai.png" class="Right-Side-Image" alt="Descriptive text for the image"/>
            </div>
            <div class="Kafelki-Container">
                <div class="page-card">
                    <div class="page-card__img" style="background-image: url('https://hicior.github.io/my-styles/images/PaperPlane.png');"></div>
                    <div class="page-card__content">
                        <h2 class="page-card__header">Spersonalizuj swój Newsletter!</h2>
                        <a class="page-card__btn" href="https://tutoriale.insert.com.pl/jak-uzyskac-dostep-do-portalu-biura-informacje-dla-klienta/" target="_blank">FORMULARZ</a>
                    </div>
                </div>
            </div>
            <div class="Basic-Container">
                <h1 class="titleV1">Poniżej znajdą Państwo wszystkie nasze newslettery, podzielone na odpowiednie kategorie.</h1>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">Formy&nbsp;<span class="HighlightV1">Opodatkowania</span></h1>
            </div>
            <!-- KARTY1 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper" style="justify-content: center;">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">Spółki</h1>
            </div>
            <!-- KARTY2 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">VAT</h1>
            </div>
            <!-- KARTY3 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">ZUS</h1>
            </div>
            <!-- KARTY4 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">Ulgi</h1>
            </div>
            <!-- KARTY5 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Basic-Category-Container">
                <h1 class="titleV1">Składniki&nbsp;<span class="HighlightV1">Majątkowe</span></h1>
            </div>
            <!-- KARTY6 -->
            <div class="slide-container swiper">
                <div class="Arrow-Container"> <img src="https://hicior.github.io/my-styles/images/Arrows.png" class="Arrow-Image"></div>
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="images/test1.png" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="card-content">
                                <a href="http://example.com" class="button-link button" target="_blank" rel="noopener noreferrer">Zobacz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <button class="back-to-top" type="button"></button>
          </body>
            <!-- KARTY JS -->
            <script src="swiper-bundle.min.js"></script>
            <script src="script.js"></script>   
        </html>
        <!-- Dodatkowe elementy itd. -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://hicior.github.io/my-styles/swiper-bundle.min.js"></script>
        <script src="https://hicior.github.io/my-styles/script.js"></script>
      `;
    }
  }
  
  // Definiowanie niestandardowego elementu
  customElements.define('my-custom-element', MyCustomElement);
