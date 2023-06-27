<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fontawesome-free-6.2.0-web/css/all.css">
    <link rel="stylesheet"href="/css/sign/jquery.fancybox.min.css" />
    <link rel="stylesheet" href="/css/sign/bootstrap.min.css">
    <link rel="stylesheet" href="/css/sign/animate.min.css">
    <link rel="stylesheet" href="/css/sign/swiper-bundle.min.css">

    <link rel="stylesheet" href="/css/main.css">
    <title>{{ $title ?? 'Bosh sahifa' }}</title>
</head>

<body>



    <!-- //modal-search -->
    <div class="modal-web modal-search">
        <svg class="back" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.46436 15.5354L15.5354 8.46436" stroke="black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M8.46436 8.46436L15.5354 15.5354" stroke="black" stroke-width="1.5" stroke-linecap="round" />
        </svg>

        <h1 class="txt-24">Qidiruv</h1>
        <form action="#">
            <input type="text" placeholder="Kalit so’zini kiriting" class="input txt-18">
            <button class="glavni-btn">Qidirish</button>
        </form>
    </div>


    <div class=" modal-active">
        <h1 class="txt-20">Sayt yangiliklaridan doimiy xabardor bo‘lish uchun telegram kanalimizga azo bo‘ling.</h1>

        <div class="blog-btn">
            <button class="back-btn txt-16 back-modal text-center">Yo'q</button>
            <a href="https://t.me/sharofiddin_komilovich" class="glavni-btn txt-16">A'zo bo'lish <i class="fa-brands fa-telegram"></i></a>
        </div>

    </div>

    <!-- //nsvigation -->

    <div class="navigation-top">
        <div class="my-container">
            <div class="top-in">
                <div class="top-in-left">
                    <svg class="menu-h" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z"
                            fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z"
                            fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z"
                            fill="black" />
                    </svg>

                    <a href="index.html" class="logos">
                        <img src="/img/png/logo.png" alt="logo" class="logo">
                        <p class="txt-12">
                            JISMONIY TARBIYA VA SPORT BO‘YICHA MUTAXASSISLARNI QAYTA TAYYORLASH
                            VA MALAKASINI OSHIRISH INSTITUTI
                        </p>
                    </a>
                    <div class="main-page">
                        <div class="main-page-in at">
                            <div class="left-in">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.24728 15.6059C12.0772 21.768 17.113 26.6671 23.373 29.3218L23.3928 29.3301L24.6022 29.8691C26.1423 30.5553 27.9524 30.068 28.9397 28.7014L30.9575 25.9089C31.0807 25.7384 31.0489 25.5012 30.8852 25.369L27.3627 22.5272C27.1876 22.386 26.93 22.4189 26.796 22.5996L25.4252 24.4495C25.0922 24.8989 24.4909 25.055 23.9815 24.8245C19.3005 22.706 15.539 18.9444 13.4206 14.2635C13.19 13.754 13.3461 13.1527 13.7954 12.8198L15.6453 11.4489C15.8261 11.3149 15.859 11.0574 15.7177 10.8823L12.8756 7.35931C12.7435 7.19556 12.5064 7.16377 12.3358 7.2869L9.52809 9.31382C8.1525 10.3069 7.66808 12.1322 8.37023 13.6767L9.24635 15.6038C9.24667 15.6045 9.24698 15.6052 9.24728 15.6059ZM22.4359 31.5041C15.6339 28.6167 10.1629 23.292 7.08798 16.5948L7.08613 16.5908L6.20817 14.6596C5.03793 12.0855 5.8453 9.04325 8.13795 7.38817L10.9457 5.36125C12.1397 4.49927 13.7994 4.7219 14.724 5.86806L17.5662 9.39106C18.5551 10.6168 18.3247 12.4193 17.0593 13.357L15.9993 14.1426C17.79 17.617 20.6279 20.4549 24.1023 22.2455L24.888 21.1855C25.8256 19.9202 27.6281 19.6899 28.8539 20.6788L32.3763 23.5204C33.5228 24.4454 33.7453 26.1059 32.8825 27.2998L30.8647 30.0924C29.2192 32.37 26.2023 33.1822 23.6357 32.0386L22.4359 31.5041Z" fill="#4776B3"/>
                                    </svg>

                            </div>
                            <div class="right-in">
                                <p class="txt-16">
                                    Biz bilan bo’glanish
                                </p>
                                <p class="txt-16 fw5">+998 94 690 80 20</p>
                            </div>
                        </div>
                        <div class="main-page-in at2">
                            <div class="left-in">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43938 13.2261C3.99583 17.3473 4.0156 22.1005 4.63282 26.205C4.97434 28.4761 6.8279 30.2171 9.11593 30.4161L11.5071 30.6239C16.4932 31.0574 21.5073 31.0574 26.4933 30.6239L28.8845 30.4161C31.1726 30.2171 33.0262 28.4761 33.3677 26.205C33.9849 22.1005 34.0047 17.3476 33.561 13.2263C33.5037 12.7485 33.4393 12.2714 33.3677 11.795C33.0262 9.5239 31.1726 7.78279 28.8845 7.58389L26.4933 7.37603C21.5073 6.94261 16.4932 6.94261 11.5071 7.37603L9.11593 7.58389C6.8279 7.78279 4.97434 9.5239 4.63282 11.795C4.5612 12.2713 4.49673 12.7483 4.43938 13.2261ZM11.7128 9.74212C16.5619 9.32059 21.4385 9.32059 26.2877 9.74212L28.6788 9.94998C29.8731 10.0538 30.8407 10.9627 31.019 12.1482C31.0375 12.2713 31.0555 12.3945 31.0731 12.5177L22.2682 17.4094C20.2358 18.5385 17.7646 18.5385 15.7322 17.4094L6.92737 12.5178C6.94488 12.3945 6.9629 12.2713 6.98141 12.1482C7.15969 10.9627 8.12725 10.0538 9.32161 9.94998L11.7128 9.74212ZM31.3637 15.0732C31.6708 18.6637 31.5559 22.2815 31.019 25.8517C30.8407 27.0373 29.8731 27.9461 28.6788 28.05L26.2877 28.2579C21.4385 28.6794 16.5619 28.6794 11.7128 28.2579L9.32161 28.05C8.12725 27.9461 7.15969 27.0373 6.98141 25.8517C6.44452 22.2815 6.32963 18.6639 6.63675 15.0732L14.5788 19.4854C17.3285 21.013 20.6719 21.013 23.4215 19.4854L31.3637 15.0732Z" fill="#4776B3"/>
                                    </svg>


                            </div>
                            <div class="right-in">
                                <p class="txt-16">
                                    Bizning  elektron pochtamiz
                                </p>
                                <p class="txt-16 fw5">sharofiddin@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown language">
                    <button
                      class="btn dropdown-toggle language-in"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAdVBMVEX///8AzAAzmf//AAAvmv9Jk/UtxAAsl/8mlf8ek/8Ukf/7/f/K4f+cyP/a6v9YqP+t0f89nf9wsv/n8v/P5P+Ivv/2+v8Ajf9FoP/A2/+kzP99uf9nrv/u9v+11f9ssP+Sw/9QpP/p8/96t/9eqv/X6f+Xxv8QXmefAAAE0ElEQVR4nO2c6XLiOhBGNYzvbUngHRtsDMOa93/EsQ14IbEQ1aEGnO/8U7wUnLSkVkuJmAAG4l9/gPcG+lhAHwvoY2Gtj0hJpeQzP8sbYqevFHfcBtk8S5ZW95NPvfZNc2n3ljfARh/paCaEmG7+kGX0qVj3mrNd1x9t3bFE8X19pJN1KW+/0pLu3lzjSF/40mmapEWuJk7bnHuanIGH34u7+tQuLuWJD23pruzpefWAyC8PUFQ3Z1df5/etd9bve2Xu6dPJ+cs+0tuUXz7iq2tTUils2/Rm0lkp0/638dLc0afrSPJsu+0Z8kUsOtGlp3vx0frXs2k6V189+H6Y9amzPW286RMy2C62QeOLokwf553w9Rzywsde+aoY9clV3XMfniYdOZGdqSGUk270ls2J+gH6aFkP+uMY5J+DSZ/26hl0JMPUUzDoo7rrpg8OfD8Lgz5dJ2jbsSwQnsKwPirqkQ9d18SwPplV9jLoMzGsT6eVvhX6rolBfbSr+65t0nKTxzmPNN+YQX3yoXk33PSiVPX7vNz07NIhGUtMD+tz7ddrUifpoi0CSB0KR7eLNr1Ik05TLbLZQo0jFx/Up4JKn9XSPpx7qfDi1cWIDOJYxHFwLVitYk+k3vwSgOR73rS8+zgKf8PRt6mrdFYTL82EmEbNraoKXLdtRtPyRY0tWpb55P6hCtjr8h3RV4+T8aL71t6cU+Xfh1ZX9eax5EP3xj6rr6lObrhut4NkPpPzvB3s/DR0T+2LZBoV6TiCz6Dv8MDM60uSftOio5rozth27F2dLJdE4Uj22obT5nO1yi5Fo8/NL340Qgyrjmp/TSQj/d7fhGHN+8DU+2MxVFz8uveOZIx/EqZ6X11sdhF+BkzV5j+VvinCz4Bxr2Ne+dsg/IYxblQ69ehXfDX5kjkxkcartw+/L0Z9l+7rfP62dLhZ8n/0mrJ/hIr6V6mIxuLvzimD8wmX2zMaJHUWtCWoiVSHeNHeRFIK2W0u9odOwUrqILM+rfXi3DvjcvbXjz86Bm66zjfXhVgY5J7Ig2vBitw8E1nuNgWrIBdeHjQFqyBfp+5m5AWrC6qYVv236FePt/WC5BpQVFTbIpvGR1hlPO0pFqry77QZQWUyov3Pu+f7aDKr51/ZFaiDXkIoCyFObcGKdPlA5wTaotRZdE5YuUIEI9l8tzicq4sqmqYutUbUNN+sO/pmp0S02xmUpIe0s50RiuQ069T71kE+lrMLdmebd8G+qp0my4vAXaT1quNrq+WunU0pIUltrYGindSdzrpcKX3YfcNnfwHsTtaXs2UYbfNNcD1ZT/1cTvZzuZuCVXWpO9TRp0TwbbH/s5gyHVFyHAP+94G/KmIBfSygj4VwAAPxH2AgfgMG0McC+lgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3PCv/xvAewN9LKCPhfgfMBC/AAPoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoY/EXpQQDdSYaatkAAAAASUVORK5CYII=" alt="" class="img">
                      <span class="txt-16"> O'zbekcha </span>
                      <svg
                        class="chervon"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.5303 0.969668C9.8232 1.26256 9.8232 1.73744 9.5303 2.0303L5.5303 6.0303C5.2374 6.3232 4.7626 6.3232 4.4697 6.0303L0.469668 2.0303C0.176777 1.73744 0.176777 1.26256 0.469668 0.969668C0.762558 0.676777 1.23744 0.676777 1.53033 0.969668L5 4.4393L8.4697 0.969668C8.7626 0.676777 9.2374 0.676777 9.5303 0.969668Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <ul class="dropdown-menu language-menu">
                      <li><a class="dropdown-item txt-14" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png" alt="" class="img"><p class="txt-14">Русский</p></a></li>
                      <li><a class="dropdown-item txt-14" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" alt="" class="img"><p class="txt-14">English</p></a></li>
                    </ul>
                  </div>
            </div>
        </div>
    </div>
<x-navbar></x-navbar>
{{ $slot }}
    <!-- //footer -->

    <div class="footer" >
        <div class="my-container">
            <div class="footer-in">
                <div class="footer-in-l ">
                    <a href="index.html" class="logos">
                        <img src="/img/png/gerb.png" alt="logo" class="logo">
                        <p class="txt-20">
                            JISMONIY TARBIYA VA SPORT BO‘YICHA MUTAXASSISLARNI QAYTA TAYYORLASH
                            VA MALAKASINI OSHIRISH INSTITUTI
                        </p>
                    </a>
                    <div class="blog">
                        <p class="card-blog">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 10C7.75 7.37665 9.87665 5.25 12.5 5.25C15.1233 5.25 17.25 7.37665 17.25 10C17.25 12.6234 15.1233 14.75 12.5 14.75C9.87665 14.75 7.75 12.6234 7.75 10ZM12.5 6.75C10.7051 6.75 9.25 8.20507 9.25 10C9.25 11.7949 10.7051 13.25 12.5 13.25C14.2949 13.25 15.75 11.7949 15.75 10C15.75 8.20507 14.2949 6.75 12.5 6.75Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.02244 8.85685C4.37677 4.55824 7.96892 1.25 12.2821 1.25H12.7141C17.0273 1.25 20.6194 4.55824 20.9737 8.85685C21.1641 11.166 20.4508 13.4589 18.9841 15.2526L14.1911 21.1144C13.3161 22.1845 11.6801 22.1845 10.8051 21.1144L6.01204 15.2526C4.54538 13.4589 3.8321 11.166 4.02244 8.85685ZM12.2821 2.75C8.74957 2.75 5.80756 5.45948 5.51737 8.98008C5.35895 10.9019 5.9526 12.8102 7.17326 14.3031L11.9663 20.1649C12.2412 20.501 12.755 20.501 13.0299 20.1649L17.8229 14.3031C19.0436 12.8102 19.6372 10.9019 19.4788 8.98008C19.1886 5.45948 16.2466 2.75 12.7141 2.75H12.2821Z" fill="white"/>
                                </svg>

                            <span class="txt-16">
                                Farg’ona viloyati, Qo'shtepa tumani, Behizor 127
                            </span>
                        </p>
                        <p class="card-blog">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49933 3.25C7.91354 3.25 8.24933 3.58579 8.24933 4V5.66763C11.077 5.4158 13.9216 5.4158 16.7493 5.66763V4C16.7493 3.58579 17.0851 3.25 17.4993 3.25C17.9135 3.25 18.2493 3.58579 18.2493 4V5.81644C19.7423 6.02754 20.9219 7.20847 21.1215 8.71484L21.2081 9.36779C21.5721 12.1141 21.5407 14.8984 21.1147 17.6359C20.9037 18.9919 19.8021 20.0335 18.4363 20.1681L17.2433 20.2858C14.0883 20.5969 10.9103 20.5969 7.75526 20.2858L6.56225 20.1681C5.19651 20.0335 4.09485 18.9919 3.88384 17.6359C3.45788 14.8984 3.42644 12.1141 3.79048 9.36779L3.87703 8.71484C4.07671 7.20845 5.25626 6.02751 6.74933 5.81643V4C6.74933 3.58579 7.08512 3.25 7.49933 3.25ZM7.94449 7.2028C10.9737 6.90408 14.0249 6.90408 17.0541 7.2028L17.9595 7.2921C18.8263 7.37757 19.5201 8.04854 19.6345 8.91194L19.7211 9.56489C19.7513 9.793 19.7787 10.0214 19.8032 10.25H5.19539C5.21988 10.0214 5.24723 9.79301 5.27747 9.5649L5.36402 8.91194C5.47847 8.04854 6.17229 7.37757 7.03904 7.2921L7.94449 7.2028ZM5.07616 11.75C4.97798 13.6381 5.07471 15.5332 5.366 17.4052C5.47184 18.0854 6.02442 18.6078 6.70946 18.6754L7.90247 18.793C10.9596 19.0945 14.039 19.0945 17.0961 18.793L18.2891 18.6754C18.9741 18.6078 19.5267 18.0854 19.6326 17.4052C19.9239 15.5332 20.0206 13.6381 19.9224 11.75H5.07616Z" fill="white"/>
                                </svg>
                            <span class="txt-16">
                                Dushanba - Juma: 9:00 - 18:00 <br>
                                Shanba - Yakshanba: Dam olish kunlari
                            </span>
                        </p>
                        <p class="card-blog">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34193 9.85617C8.12925 13.748 11.3098 16.8422 15.2635 18.5188L15.276 18.5241L16.0398 18.8645C17.0125 19.2979 18.1557 18.9901 18.7793 18.127L20.0537 16.3633C20.1315 16.2556 20.1114 16.1058 20.008 16.0223L17.7833 14.2275C17.6727 14.1383 17.51 14.1591 17.4254 14.2732L16.5596 15.4416C16.3493 15.7254 15.9695 15.824 15.6478 15.6784C12.6914 14.3404 10.3156 11.9647 8.97769 9.00833C8.83207 8.68656 8.93067 8.30681 9.21442 8.09653L10.3828 7.23067C10.497 7.14606 10.5178 6.98344 10.4285 6.87284L8.63348 4.6478C8.55005 4.54438 8.40031 4.5243 8.29258 4.60207L6.51928 5.88223C5.65049 6.50942 5.34454 7.66226 5.788 8.63771L6.34134 9.85487C6.34154 9.85531 6.34174 9.85574 6.34193 9.85617ZM14.6716 19.8971C10.3756 18.0735 6.9202 14.7105 4.97816 10.4807L4.97699 10.4782L4.42249 9.2585C3.68339 7.63275 4.19331 5.71134 5.6413 4.66603L7.41459 3.38587C8.16871 2.84146 9.21694 2.98207 9.80093 3.70596L11.596 5.93101C12.2206 6.70518 12.0751 7.84357 11.2759 8.43581L10.6064 8.93197C11.7374 11.1263 13.5297 12.9187 15.7241 14.0496L16.2203 13.3801C16.8125 12.581 17.9509 12.4355 18.7251 13.0601L20.9498 14.8548C21.6739 15.439 21.8144 16.4877 21.2695 17.2418L19.9951 19.0055C18.9558 20.444 17.0504 20.957 15.4294 20.2347L14.6716 19.8971Z" fill="white"/>
                                </svg>
                            <span class="txt-16">
                                +998 94 690 80 20
                            </span>
                        </p>
                        <p class="card-blog">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30207 8.35318C3.02193 10.9561 3.03442 13.9581 3.42424 16.5504C3.63994 17.9848 4.81061 19.0844 6.25568 19.2101L7.76591 19.3413C10.915 19.6151 14.0818 19.6151 17.2309 19.3413L18.7411 19.2101C20.1862 19.0844 21.3569 17.9848 21.5726 16.5504C21.9624 13.9581 21.9749 10.9563 21.6947 8.35333C21.6585 8.05157 21.6178 7.75022 21.5726 7.44937C21.3569 6.01498 20.1862 4.91533 18.7411 4.78971L17.2309 4.65843C14.0818 4.38469 10.915 4.38469 7.76591 4.65843L6.25568 4.78971C4.81061 4.91533 3.63994 6.01498 3.42424 7.44937C3.37901 7.75016 3.33829 8.05147 3.30207 8.35318ZM7.89581 6.1528C10.9584 5.88657 14.0384 5.88657 17.101 6.1528L18.6112 6.28408C19.3655 6.34965 19.9766 6.92367 20.0892 7.67242C20.1009 7.75018 20.1123 7.82797 20.1234 7.9058L14.5624 10.9953C13.2788 11.7084 11.718 11.7084 10.4344 10.9953L4.87343 7.90584C4.88449 7.828 4.89587 7.75019 4.90756 7.67242C5.02016 6.92367 5.63125 6.34965 6.38558 6.28408L7.89581 6.1528ZM20.3069 9.51977C20.5009 11.7875 20.4283 14.0724 20.0892 16.3273C19.9766 17.0761 19.3655 17.6501 18.6112 17.7157L17.101 17.847C14.0384 18.1132 10.9584 18.1132 7.89581 17.847L6.38558 17.7157C5.63125 17.6501 5.02016 17.0761 4.90756 16.3273C4.56847 14.0724 4.49591 11.7876 4.68988 9.5198L9.7059 12.3065C11.4426 13.2713 13.5542 13.2713 15.2908 12.3065L20.3069 9.51977Z" fill="white"/>
                                </svg>


                            <span class="txt-16">
                                sharofiddin@gmail.com
                            </span>
                        </p>

                    </div>
                    <div class="bottom-r">
                        <p class="txt-16">Ijtimoiy tarmoqlar</p>
                        <div class="images">
                            <a href="https://t.me/minsport_institut">
                                <img src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082__340.png" alt="">
                            </a>
                            <a href="https://www.instagram.com/minsport_institut/">
                                <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg" alt="">
                            </a>
                            <a href="https://www.facebook.com/minsport.institut">
                                <img src="data:image/png;base64,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" alt="">
                            </a>
                            <a href="https://www.youtube.com/channel/UCr3-u2OeBvZBI6b4mU1nWjg">
                                <img src="data:image/png;base64,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" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-in-r ab2">
                    <iframe class="top"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.507248418174!2d71.81353947497949!3d40.37544905815237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85447f954cd3%3A0xb00f115150906905!2sJismoniy%20tarbiya%20va%20sport%20bo&#39;yicha%20mutaxassislarni%20qayta%20tayyorlash%20va%20malakasini%20oshirish%20instituti%20Farg&#39;ona%20filiali!5e0!3m2!1sru!2s!4v1686771971055!5m2!1sru!2s"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="footer-in-form ab3">
                    <h1 class="txt-20">
                        Biz bilan bog’laning
                    </h1>
                    <form class="form-footer" action="{{ route('contacts.store')}}" method="POST">
                        @csrf
                        <label for="in1" class="label txt-16">
                            Ismingiz
                        </label>
                        <input type="text" name="name"  id="in1" class="input txt-16">
                        <label for="in2" class="label txt-16">
                            Emailingiz
                        </label>
                        <input type="email" name="email"  id="in2" class="input txt-16">
                        <label for="in1" class="label txt-16">
                            Telefon raqamingiz
                        </label>
                        <input type="text" name="phone"  id="in1" class="input txt-16">
                        <label for="in3" class="label txt-16">
                            Sizning fikringiz
                        </label>
                        <textarea id="in2" class="input txt-16" name="comment"  cols="30" rows="3"></textarea>
                        <button class="glavni-btn txt-18">
                            Yuborish
                        </button>
                    </form>
                </div>
            </div>
            <div class="bottom">


                <p class="bottom-l txt-14 ">
                    Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.
                </p>
                <p class="txt-14 bottom-r ">
                    Lorem ipsum dolor sit amet consectetur. © 2020-2021.
                </p>
            </div>
        </div>
    </div>
    <script src="/js/jquery.min.js"></script>
    <script src="/voise/js/jquery.min.js"></script>
    <script src="/js/jquery.fancybox.min.js"></script>

    <script src="/voise/js/bootstrap.bundle.js"></script>
    <script src="/voise/js/libs.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/scrollreveal.js"></script>
    <script src="/js/gsap.min.js"></script>
    <script src="/js/ScrollTrigger.min.js"></script>
    <script src="/js/swiper-bundle.min.js"></script>
    <script src="/js/jsPlumb.min.js"></script>
    <script src="/js/index.js"></script>

</body>

</html>
