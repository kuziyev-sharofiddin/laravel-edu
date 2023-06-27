<x-layouts.main>
    @slot('title')
        Bosh sahifa
    @endslot
 <!-- //glavni -->

 <div class="glavni">
    <div class="glavni-in">
        <div class="swiper-container my-swiper-glavni">
            <div class="swiper-wrapper">
                <div class="swiper-slide card-glavni slide-1">
                    <img src="https://backend.minsport.uz/media/news/IMG_20221205_185118_753_5lPq7pG.jpeg" alt="" class="img-glavni">
                    <div class="slider-container my-container-my">
                        <div class="animated-area">
                            <h1 class="slider-title txt-60">JISMONIY TARBIYA VA SPORT BO'YICHA MUTAXASISLARNI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h1>
                            {{-- <a href="#" class="slider-buttton glavni-btn2 txt-16">Batafsil</a> --}}
                        </div>
                    </div>
                </div>
                <div class="swiper-slide card-glavni slide-2">
                    <img src="https://backend.minsport.uz/media/news/photo_2022-12-05_16-19-51_2_6DQp860.jpeg" alt="" class="img-glavni">
                    <div class="slider-container my-container-my">
                        <div class="animated-area">
                            <h1 class="slider-title txt-60">JISMONIY TARBIYA VA SPORT BO'YICHA MUTAXASISLARNI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h1>
                            {{-- <a href="#" class="slider-buttton glavni-btn2 txt-16">Batafsil

                            </a> --}}
                        </div>
                    </div>
                </div>
                <div class="swiper-slide card-glavni slide-3">
                    <img src="https://backend.minsport.uz/media/news/photo_2022-12-05_16-11-42_oVmGHY6.jpeg" alt="" class="img-glavni">
                    <div class="slider-container my-container-my">
                        <div class="animated-area animated">
                            <h1 class="slider-title txt-60">JISMONIY TARBIYA VA SPORT BO'YICHA MUTAXASISLARNI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h1>
                            {{-- <a href="#" class="slider-buttton glavni-btn2 txt-16">Batafsil</a> --}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</div>

<!-- //xujjatlar     -->

<div class="work">
    <div class="my-container">
        <div class="work-in">
            <div class="main-content">
                <a href="http://lib.sportedu.uz/" class="card-c ab">
                    <div class="img">
                        <img src="img/png/Book.png" alt="" class="top">
                    </div>
                    <h1 class="txt-20">Elektron kutubxona</h1>
                </a>
                <a href="https://sertifikat.sportedu.uz/" class="card-c ab2">
                    <div class="img">
                        <img src="https://sportedu.uz/uploads/images/links/2/preview-642ffecc59fdd.png" alt="" class="top">
                    </div>
                    <h1 class="txt-20">Sertifikat</h1>
                </a>
                <a href="https://test.sportedu.uz/" class="card-c ab3">
                    <div class="img">
                        <img src="https://sportedu.uz/uploads/images/links/3/preview-63b5123722ec7.png" alt="" class="top">
                    </div>
                    <h1 class="txt-20">Online test</h1>
                </a>
                <a href="http://mt.sportedu.uz/" class="card-c ab4">
                    <div class="img">
                        <img src="img/png/Subtract.png" alt="" class="top">
                    </div>
                    <h1 class="txt-20">Masofaviy ta’lim</h1>
                </a>
                <a href="https://qabulsporteduuz.netlify.app/" class="card-c ab5">
                    <div class="img">
                        <img src="https://sportedu.uz/uploads/images/links/5/preview-63b513852665a.png" alt="" class="top">
                    </div>
                    <h1 class="txt-20">Online qabul</h1>
                </a>
            </div>
        </div>
    </div>
</div>

  <!-- //yangiliklar     -->

  <div class="news">
    <div class="my-container">
        <div class="news-in">
            <div class="top">
                <h1 class="txt-48 line-left al">
                    Yangiliklar
                </h1>
                <a href="news.html" class="back-btn txt-16 ar">
                    Batafsil
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.4697 1.53033C8.1768 1.23744 8.1768 0.762558 8.4697 0.469668C8.7626 0.176777 9.2374 0.176777 9.5303 0.469668L13.5303 4.4697C13.8232 4.7626 13.8232 5.2374 13.5303 5.5303L9.5303 9.5303C9.2374 9.8232 8.7626 9.8232 8.4697 9.5303C8.1768 9.2374 8.1768 8.7626 8.4697 8.4697L11.1893 5.75H1.5C1.08579 5.75 0.75 5.4142 0.75 5C0.75 4.5858 1.08579 4.25 1.5 4.25H11.1893L8.4697 1.53033Z"
                            fill="#000" />
                    </svg>
                </a>
            </div>
            <div class="main-content ab">
                <div class="swiper-gallery swiper my-swww">
                    <div class="swiper-wrapper">
                        @foreach ($posts as $post)
                        <a href="{{ route('press.news_details', ['post'=> $post->id]) }}" class="s-card swiper-slide">
                            <div class="bg-i">
                                <img class="top" src="{{ asset('storage/'.$post->photo) }}" alt="">
                            </div>
                            <div class="bottom-card">
                                <div class="top-eye">
                                    <p class="sana ">
                                        <span class="txt-16">
                                            Yangiliklar |
                                         </span>
                                        <svg class="mx-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.00006 0.25C4.41427 0.25 4.75006 0.58579 4.75006 1V2.66763C7.57776 2.4158 10.4224 2.4158 13.2501 2.66763V1C13.2501 0.58579 13.5859 0.25 14.0001 0.25C14.4143 0.25 14.7501 0.58579 14.7501 1V2.81644C16.2431 3.02754 17.4227 4.20847 17.6223 5.71484L17.7089 6.36779C18.0729 9.1141 18.0415 11.8984 17.6155 14.6359C17.4045 15.9919 16.3029 17.0335 14.9371 17.1681L13.7441 17.2858C10.5891 17.5969 7.41106 17.5969 4.25599 17.2858L3.06298 17.1681C1.69724 17.0335 0.595583 15.9919 0.384573 14.6359C-0.0413869 11.8984 -0.0728268 9.1141 0.291213 6.36779L0.377763 5.71484C0.577443 4.20845 1.75699 3.02751 3.25006 2.81643V1C3.25006 0.58579 3.58585 0.25 4.00006 0.25ZM4.44522 4.2028C7.47446 3.90408 10.5257 3.90408 13.5549 4.2028L14.4603 4.2921C15.3271 4.37757 16.0209 5.04854 16.1353 5.91194L16.2219 6.56489C16.2521 6.793 16.2795 7.0214 16.304 7.25H1.69612C1.72061 7.0214 1.74796 6.79301 1.7782 6.5649L1.86475 5.91194C1.9792 5.04854 2.67302 4.37757 3.53977 4.2921L4.44522 4.2028ZM1.57689 8.75C1.47871 10.6381 1.57544 12.5332 1.86673 14.4052C1.97257 15.0854 2.52515 15.6078 3.21019 15.6754L4.4032 15.793C7.46036 16.0945 10.5398 16.0945 13.5969 15.793L14.7899 15.6754C15.4749 15.6078 16.0275 15.0854 16.1334 14.4052C16.4247 12.5332 16.5214 10.6381 16.4232 8.75H1.57689Z"
                                                fill="#BCBCBC" />
                                        </svg>
                                        <span class="txt-16">
                                            {{ $post->created_at }}
                                        </span>
                                    </p>
                                    {{-- <p class="sana ">
                                        <span class="txt-16">
                                            <i class="fa-regular fa-eye mx-1"></i>
                                            108
                                        </span>
                                    </p> --}}
                                </div>
                                <p class="txt-24">{{ $post->title }}</p>
                                <p class="txt-16">
                                    {{ $post->description }}
                                </p>
                            </div>
                        </a>
                        @endforeach
                    </div>
                </div>
                <button class="glavni-btn btn-prev1 btn-prev11 ab2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6405 5.34684C16.1198 5.8093 16.1198 6.55912 15.6405 7.02158L9.96297 12.5L15.6405 17.9785C16.1198 18.441 16.1198 19.1907 15.6405 19.6531C15.1612 20.1156 14.3843 20.1156 13.905 19.6531L7.35946 13.3373C6.88018 12.8749 6.88018 12.1252 7.35946 11.6627L13.905 5.34684C14.3843 4.88439 15.1612 4.88439 15.6405 5.34684Z" fill="white"/>
                        </svg>
                </button>
                <button class="glavni-btn btn-next1 btn-next11 ab2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35947 5.34684C7.88018 5.8093 7.88018 6.55912 8.35947 7.02158L14.037 12.5L8.35947 17.9785C7.88018 18.441 7.88018 19.1907 8.35947 19.6531C8.83876 20.1156 9.61571 20.1156 10.095 19.6531L16.6405 13.3373C17.1198 12.8749 17.1198 12.1252 16.6405 11.6627L10.095 5.34684C9.61571 4.88439 8.83876 4.88439 8.35947 5.34684Z" fill="white"/>
                        </svg>

                </button>

            </div>
        </div>
    </div>
</div>

<!-- //glavni-bottom -->

<div class="counterr">
    <div class="my-container">
        <h1 class="txt-48 line-left al">Asosiy ko’rsangichlar</h1>
        <div class="counter-in">
            <div class="card-c ab" id="counter-box">
                <div class="img-bg">

                    <img src="img/png/co1.png" alt="" class="top">
                </div>
                <h1 class="txt-24 counter" data-number="1568"></h1>
                <p class="txt-16">Maktab</p>
            </div>
            <div class="card-c ab2" id="counter-box">
                <div class="img-bg">
                    <img src="img/png/co2.png" alt="" class="top">

                </div>
                <h1 class="txt-24 counter" data-number="1568"></h1>
                <p class="txt-16">O’quvchi</p>
            </div>
            <div class="card-c ab3" id="counter-box">
                <div class="img-bg">
                    <img src="img/png/co3.png" alt="" class="top">

                </div>
                <h1 class="txt-24 counter" data-number="1568"></h1>
                <p class="txt-16">O’qituvchi</p>
            </div>
            <div class="card-c ab4" id="counter-box">
                <div class="img-bg">
                    <img src="img/png/co4.png" alt="" class="top">

                </div>
                <h1 class="txt-24 counter" data-number="1568"></h1>
                <p class="txt-16">Ta’lim tillari</p>
            </div>
        </div>
    </div>
</div>

 <!-- //elonlar     -->

 <div class="news">
    <div class="my-container">
        <div class="news-in">
            <div class="top">
                <h1 class="txt-48 line-left al">
                    E’lonlar
                </h1>
                <a href="batafsil-news.html" class="back-btn txt-16 ar">
                    Batafsil
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.4697 1.53033C8.1768 1.23744 8.1768 0.762558 8.4697 0.469668C8.7626 0.176777 9.2374 0.176777 9.5303 0.469668L13.5303 4.4697C13.8232 4.7626 13.8232 5.2374 13.5303 5.5303L9.5303 9.5303C9.2374 9.8232 8.7626 9.8232 8.4697 9.5303C8.1768 9.2374 8.1768 8.7626 8.4697 8.4697L11.1893 5.75H1.5C1.08579 5.75 0.75 5.4142 0.75 5C0.75 4.5858 1.08579 4.25 1.5 4.25H11.1893L8.4697 1.53033Z"
                            fill="#000" />
                    </svg>
                </a>
            </div>
            <div class="main-content ab">
                <div class="swiper-gallery swiper my-swww2">
                    <div class="swiper-wrapper">
                    @foreach ($announcements as $announcement)
                    <a href="{{ route('press.announcement_details', ['announcement'=> $announcement->id]) }}" class="s-card swiper-slide">
                            <div class="bg-i">
                                <img class="top" src="{{ asset('storage/'.$announcement->photo) }}" alt="">
                            </div>
                            <div class="bottom-card">
                                <div class="top-eye">
                                    <p class="sana ">
                                        <span class="txt-16">
                                            Yangiliklar |
                                         </span>
                                        <svg class="mx-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.00006 0.25C4.41427 0.25 4.75006 0.58579 4.75006 1V2.66763C7.57776 2.4158 10.4224 2.4158 13.2501 2.66763V1C13.2501 0.58579 13.5859 0.25 14.0001 0.25C14.4143 0.25 14.7501 0.58579 14.7501 1V2.81644C16.2431 3.02754 17.4227 4.20847 17.6223 5.71484L17.7089 6.36779C18.0729 9.1141 18.0415 11.8984 17.6155 14.6359C17.4045 15.9919 16.3029 17.0335 14.9371 17.1681L13.7441 17.2858C10.5891 17.5969 7.41106 17.5969 4.25599 17.2858L3.06298 17.1681C1.69724 17.0335 0.595583 15.9919 0.384573 14.6359C-0.0413869 11.8984 -0.0728268 9.1141 0.291213 6.36779L0.377763 5.71484C0.577443 4.20845 1.75699 3.02751 3.25006 2.81643V1C3.25006 0.58579 3.58585 0.25 4.00006 0.25ZM4.44522 4.2028C7.47446 3.90408 10.5257 3.90408 13.5549 4.2028L14.4603 4.2921C15.3271 4.37757 16.0209 5.04854 16.1353 5.91194L16.2219 6.56489C16.2521 6.793 16.2795 7.0214 16.304 7.25H1.69612C1.72061 7.0214 1.74796 6.79301 1.7782 6.5649L1.86475 5.91194C1.9792 5.04854 2.67302 4.37757 3.53977 4.2921L4.44522 4.2028ZM1.57689 8.75C1.47871 10.6381 1.57544 12.5332 1.86673 14.4052C1.97257 15.0854 2.52515 15.6078 3.21019 15.6754L4.4032 15.793C7.46036 16.0945 10.5398 16.0945 13.5969 15.793L14.7899 15.6754C15.4749 15.6078 16.0275 15.0854 16.1334 14.4052C16.4247 12.5332 16.5214 10.6381 16.4232 8.75H1.57689Z"
                                                fill="#BCBCBC" />
                                        </svg>
                                        <span class="txt-16">
                                            {{$announcement->created_at}}
                                        </span>
                                    </p>
                                </div>
                                <p class="txt-16">{{$announcement->title}}</p>
                            </div>
                        </a>
                        @endforeach
                        </div>
                </div>
                <button class="glavni-btn btn-prev1 ab2 btn-prev22">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6405 5.34684C16.1198 5.8093 16.1198 6.55912 15.6405 7.02158L9.96297 12.5L15.6405 17.9785C16.1198 18.441 16.1198 19.1907 15.6405 19.6531C15.1612 20.1156 14.3843 20.1156 13.905 19.6531L7.35946 13.3373C6.88018 12.8749 6.88018 12.1252 7.35946 11.6627L13.905 5.34684C14.3843 4.88439 15.1612 4.88439 15.6405 5.34684Z" fill="white"/>
                        </svg>
                </button>
                <button class="glavni-btn btn-next1 ab2  btn-next22">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35947 5.34684C7.88018 5.8093 7.88018 6.55912 8.35947 7.02158L14.037 12.5L8.35947 17.9785C7.88018 18.441 7.88018 19.1907 8.35947 19.6531C8.83876 20.1156 9.61571 20.1156 10.095 19.6531L16.6405 13.3373C17.1198 12.8749 17.1198 12.1252 16.6405 11.6627L10.095 5.34684C9.61571 4.88439 8.83876 4.88439 8.35947 5.34684Z" fill="white"/>
                        </svg>

                </button>

            </div>
        </div>
    </div>
</div>


 <!-- //videolavha     -->
<div class="news">
    <div class="my-container">
        <div class="news-in">
            <div class="top">
                <h1 class="txt-48 line-left al" data-sr-id="35" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;">
                    Videolar                </h1>

            </div>
            <div class="main-content ab" data-sr-id="8" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                <div class="swiper-gallery swiper my-swww3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-ba73b95246e537c6" aria-live="off" style="height: 267px; transform: translate3d(-1542px, 0px, 0px); transition-duration: 0ms;"><div class="s-card-video swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="6 / 6" style="width: 237px; margin-right: 20px;" data-swiper-slide-index="5">
                                <div class="bg-i">
                                    <img class="top" src="/uploads/video/images/2/preview-64315a2c4ae31.png" alt="">
                                    <a data-fancybox="video-gallery" href="https://youtu.be/25rQVCnbZ8I" class="play">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.505 21.4007C32.0755 20.1855 32.0755 17.8146 30.505 16.5994C25.759 12.927 20.4593 10.0324 14.8043 8.024L13.7712 7.65708C11.7948 6.95512 9.70716 8.29234 9.4396 10.3325C8.69201 16.0329 8.69201 21.9672 9.4396 27.6675C9.70716 29.7078 11.7948 31.0449 13.7712 30.343L14.8043 29.976C20.4593 27.9677 25.759 25.0731 30.505 21.4007Z" fill="white"></path>
                                        </svg>

                                    </a>
                                </div>

                    </div>
                    @foreach ($videos as $video)
                    <div class="s-card-video swiper-slide swiper-slide-duplicate-next" role="group" aria-label="1 / 6" style="width: 237px; margin-right: 20px;" data-swiper-slide-index="0">
                                <div class="bg-i">
                                    <img class="top" src="{{ asset('storage/'.$video->photo) }}" alt="">
                                    <a data-fancybox="video-gallery" href="{{$video->youtube}}" class="play">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.505 21.4007C32.0755 20.1855 32.0755 17.8146 30.505 16.5994C25.759 12.927 20.4593 10.0324 14.8043 8.024L13.7712 7.65708C11.7948 6.95512 9.70716 8.29234 9.4396 10.3325C8.69201 16.0329 8.69201 21.9672 9.4396 27.6675C9.70716 29.7078 11.7948 31.0449 13.7712 30.343L14.8043 29.976C20.4593 27.9677 25.759 25.0731 30.505 21.4007Z" fill="white"></path>
                                        </svg>

                                    </a>
                                </div>
                    </div>
                    @endforeach
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <button class="glavni-btn btn-prev1 ab2 btn-prev33" data-sr-id="18" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-ba73b95246e537c6" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.3s ease 0s, opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.6s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.6s;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6405 5.34684C16.1198 5.8093 16.1198 6.55912 15.6405 7.02158L9.96297 12.5L15.6405 17.9785C16.1198 18.441 16.1198 19.1907 15.6405 19.6531C15.1612 20.1156 14.3843 20.1156 13.905 19.6531L7.35946 13.3373C6.88018 12.8749 6.88018 12.1252 7.35946 11.6627L13.905 5.34684C14.3843 4.88439 15.1612 4.88439 15.6405 5.34684Z" fill="white"></path>
                    </svg>
                </button>
                <button class="glavni-btn btn-next1 ab2 btn-next33" data-sr-id="19" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-ba73b95246e537c6" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.3s ease 0s, opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.6s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.6s;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35947 5.34684C7.88018 5.8093 7.88018 6.55912 8.35947 7.02158L14.037 12.5L8.35947 17.9785C7.88018 18.441 7.88018 19.1907 8.35947 19.6531C8.83876 20.1156 9.61571 20.1156 10.095 19.6531L16.6405 13.3373C17.1198 12.8749 17.1198 12.1252 16.6405 11.6627L10.095 5.34684C9.61571 4.88439 8.83876 4.88439 8.35947 5.34684Z" fill="white"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
<!-- //fotolavhalar     -->

<div class="news">
<div class="my-container">
    <div class="news-in">
        <div class="top">
            <h1 class="txt-48 line-left al">
                Fotolavhalar
            </h1>

        </div>
        <div class="main-content ab">
            <div class="swiper-gallery swiper my-swww8">
                <div class="swiper-wrapper">
                    @foreach ($images as $image)
                    <div class="s-card-video swiper-slide">

                        <div class="bg-i">
                            <a style="width:100%; height: 100%;" data-caption="Hello, World!" data-fancybox="images" href="{{ asset('storage/'.$image->photo) }}" class="play">
                                <img class="top" src="{{ asset('storage/'.$image->photo) }}" alt="">
                            </a>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            <button class="glavni-btn btn-prev1 ab2 btn-prev88">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6405 5.34684C16.1198 5.8093 16.1198 6.55912 15.6405 7.02158L9.96297 12.5L15.6405 17.9785C16.1198 18.441 16.1198 19.1907 15.6405 19.6531C15.1612 20.1156 14.3843 20.1156 13.905 19.6531L7.35946 13.3373C6.88018 12.8749 6.88018 12.1252 7.35946 11.6627L13.905 5.34684C14.3843 4.88439 15.1612 4.88439 15.6405 5.34684Z" fill="white"/>
                    </svg>
            </button>
            <button class="glavni-btn btn-next1 ab2 btn-next88">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35947 5.34684C7.88018 5.8093 7.88018 6.55912 8.35947 7.02158L14.037 12.5L8.35947 17.9785C7.88018 18.441 7.88018 19.1907 8.35947 19.6531C8.83876 20.1156 9.61571 20.1156 10.095 19.6531L16.6405 13.3373C17.1198 12.8749 17.1198 12.1252 16.6405 11.6627L10.095 5.34684C9.61571 4.88439 8.83876 4.88439 8.35947 5.34684Z" fill="white"/>
                    </svg>

            </button>

        </div>
    </div>
</div>
</div>
</x-layouts.main>
