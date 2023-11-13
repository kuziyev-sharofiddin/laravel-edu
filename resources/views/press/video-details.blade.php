<x-layouts.main>
    @slot('title')
        {!! $video->title !!}
    @endslot
<div class="main-page-w">
    <div class="my-container">
        <div class="main-in">
            <div class="main">
                <div class="main-left ab" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                    <p class="sana">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49933 3.25C7.91354 3.25 8.24933 3.58579 8.24933 4V5.66763C11.077 5.4158 13.9216 5.4158 16.7493 5.66763V4C16.7493 3.58579 17.0851 3.25 17.4993 3.25C17.9135 3.25 18.2493 3.58579 18.2493 4V5.81644C19.7423 6.02754 20.9219 7.20847 21.1215 8.71484L21.2081 9.36779C21.5721 12.1141 21.5407 14.8984 21.1147 17.6359C20.9037 18.9919 19.8021 20.0335 18.4363 20.1681L17.2433 20.2858C14.0883 20.5969 10.9103 20.5969 7.75526 20.2858L6.56225 20.1681C5.19651 20.0335 4.09485 18.9919 3.88384 17.6359C3.45788 14.8984 3.42644 12.1141 3.79048 9.36779L3.87703 8.71484C4.07671 7.20845 5.25626 6.02751 6.74933 5.81643V4C6.74933 3.58579 7.08512 3.25 7.49933 3.25ZM7.94449 7.2028C10.9737 6.90408 14.0249 6.90408 17.0541 7.2028L17.9595 7.2921C18.8263 7.37757 19.5201 8.04854 19.6345 8.91194L19.7211 9.56489C19.7513 9.793 19.7787 10.0214 19.8032 10.25H5.19539C5.21988 10.0214 5.24723 9.79301 5.27747 9.5649L5.36402 8.91194C5.47847 8.04854 6.17229 7.37757 7.03904 7.2921L7.94449 7.2028ZM5.07616 11.75C4.97798 13.6381 5.07471 15.5332 5.366 17.4052C5.47184 18.0854 6.02442 18.6078 6.70946 18.6754L7.90247 18.793C10.9596 19.0945 14.039 19.0945 17.0961 18.793L18.2891 18.6754C18.9741 18.6078 19.5267 18.0854 19.6326 17.4052C19.9239 15.5332 20.0206 13.6381 19.9224 11.75H5.07616Z" fill="white"></path>
                        </svg>
                        <span class="txt-16">
                            {{ $video->created_at }}
                            </span>
                    </p>
                    <h1 class="txt-38">{!! $video->title !!}</h1>
                    <div class="video-sec ab" data-sr-id="2" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.3s ease 0s, opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                        <img class="top" src="{{ asset('storage/'.$video->photo) }}" alt="">
                        <a data-fancybox="video-gallery" href="{{ $video->youtube }}" class="play">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.505 21.4007C32.0755 20.1855 32.0755 17.8146 30.505 16.5994C25.759 12.927 20.4593 10.0324 14.8043 8.024L13.7712 7.65708C11.7948 6.95512 9.70716 8.29234 9.4396 10.3325C8.69201 16.0329 8.69201 21.9672 9.4396 27.6675C9.70716 29.7078 11.7948 31.0449 13.7712 30.343L14.8043 29.976C20.4593 27.9677 25.759 25.0731 30.505 21.4007Z" fill="white"></path>
                            </svg>

                        </a>
                    </div>
                    <p class="section-text txt-18"></p>
                    <div id="image-news">
                        <p class="section-text txt-18">
                            </p><p><span style="color:rgb(0, 0, 0)">{!! $video->description !!}</span></p>
                        <p></p>
                    </div>
                </div>
                <div class="main-right">
                    <p class="top txt-24 al" data-sr-id="8" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;">So'nggi yangiliklar</p>
                    <div class="cards ">
                            @foreach ($recent_videos as $recent_video)
                            <a href="{{ route('press.videodetails', ['video'=> $recent_video->id]) }}" class="s-card ab" data-sr-id="4" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.2s ease 0s, opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                                <img class="top" src="{{ asset('storage/'.$recent_video->photo) }}" alt="">
                                <div class="right">
                                    <p class="main-text txt-16">{!! $recent_video->title !!}</p>
                                    <p class="txt-14 main-text-bot">{!! $recent_video->description !!}</p>
                                    <p class="sana ">
                                        <span class="txt-14">Videolavhalar |</span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00006 0.25C4.41427 0.25 4.75006 0.58579 4.75006 1V2.66763C7.57776 2.4158 10.4224 2.4158 13.2501 2.66763V1C13.2501 0.58579 13.5859 0.25 14.0001 0.25C14.4143 0.25 14.7501 0.58579 14.7501 1V2.81644C16.2431 3.02754 17.4227 4.20847 17.6223 5.71484L17.7089 6.36779C18.0729 9.1141 18.0415 11.8984 17.6155 14.6359C17.4045 15.9919 16.3029 17.0335 14.9371 17.1681L13.7441 17.2858C10.5891 17.5969 7.41106 17.5969 4.25599 17.2858L3.06298 17.1681C1.69724 17.0335 0.595583 15.9919 0.384573 14.6359C-0.0413869 11.8984 -0.0728268 9.1141 0.291213 6.36779L0.377763 5.71484C0.577443 4.20845 1.75699 3.02751 3.25006 2.81643V1C3.25006 0.58579 3.58585 0.25 4.00006 0.25ZM4.44522 4.2028C7.47446 3.90408 10.5257 3.90408 13.5549 4.2028L14.4603 4.2921C15.3271 4.37757 16.0209 5.04854 16.1353 5.91194L16.2219 6.56489C16.2521 6.793 16.2795 7.0214 16.304 7.25H1.69612C1.72061 7.0214 1.74796 6.79301 1.7782 6.5649L1.86475 5.91194C1.9792 5.04854 2.67302 4.37757 3.53977 4.2921L4.44522 4.2028ZM1.57689 8.75C1.47871 10.6381 1.57544 12.5332 1.86673 14.4052C1.97257 15.0854 2.52515 15.6078 3.21019 15.6754L4.4032 15.793C7.46036 16.0945 10.5398 16.0945 13.5969 15.793L14.7899 15.6754C15.4749 15.6078 16.0275 15.0854 16.1334 14.4052C16.4247 12.5332 16.5214 10.6381 16.4232 8.75H1.57689Z" fill="#BCBCBC"></path>
                                        </svg>
                                        <span class="txt-14">
                                            {{$recent_video->created_at->format('d.m.Y')}}                                       </span>
                                    </p>
                                </div>
                            </a>
                            @endforeach
                            </div>

                    <div class="main-right-sidebar ab" data-sr-id="5" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                        <div class="counter-in">
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="15">15</h1>
                                <p class="txt-20">Kelib tushgan murojaat</p>
                            </div>
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="13">13</h1>
                                <p class="txt-20">Ko'rib chiqildi</p>
                            </div>
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="2">2</h1>
                                <p class="txt-20">Jarayonda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</x-layouts.main>
