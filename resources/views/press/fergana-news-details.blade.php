<x-layouts.main>
    @slot('title')
        Farg'ona filiali yangiliklari
    @endslot
    <div class="main-page-w">
        <div class="my-container">
            <div class="main-in">
                <div class="main">
                    <div class="main-left ab" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                        <div class="top-eye">
                            <p class="sana ">
                                    <span class="txt-16">
                                          Yangiliklar |
                                     </span>
                                <svg class="mx-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00006 0.25C4.41427 0.25 4.75006 0.58579 4.75006 1V2.66763C7.57776 2.4158 10.4224 2.4158 13.2501 2.66763V1C13.2501 0.58579 13.5859 0.25 14.0001 0.25C14.4143 0.25 14.7501 0.58579 14.7501 1V2.81644C16.2431 3.02754 17.4227 4.20847 17.6223 5.71484L17.7089 6.36779C18.0729 9.1141 18.0415 11.8984 17.6155 14.6359C17.4045 15.9919 16.3029 17.0335 14.9371 17.1681L13.7441 17.2858C10.5891 17.5969 7.41106 17.5969 4.25599 17.2858L3.06298 17.1681C1.69724 17.0335 0.595583 15.9919 0.384573 14.6359C-0.0413869 11.8984 -0.0728268 9.1141 0.291213 6.36779L0.377763 5.71484C0.577443 4.20845 1.75699 3.02751 3.25006 2.81643V1C3.25006 0.58579 3.58585 0.25 4.00006 0.25ZM4.44522 4.2028C7.47446 3.90408 10.5257 3.90408 13.5549 4.2028L14.4603 4.2921C15.3271 4.37757 16.0209 5.04854 16.1353 5.91194L16.2219 6.56489C16.2521 6.793 16.2795 7.0214 16.304 7.25H1.69612C1.72061 7.0214 1.74796 6.79301 1.7782 6.5649L1.86475 5.91194C1.9792 5.04854 2.67302 4.37757 3.53977 4.2921L4.44522 4.2028ZM1.57689 8.75C1.47871 10.6381 1.57544 12.5332 1.86673 14.4052C1.97257 15.0854 2.52515 15.6078 3.21019 15.6754L4.4032 15.793C7.46036 16.0945 10.5398 16.0945 13.5969 15.793L14.7899 15.6754C15.4749 15.6078 16.0275 15.0854 16.1334 14.4052C16.4247 12.5332 16.5214 10.6381 16.4232 8.75H1.57689Z" fill="#BCBCBC"></path>
                                </svg>
                                <span class="txt-16">
                                    {{ $fergana->created_at }}                                </span>
                            </p>
                            {{-- <p class="sana ">
                                    <span class="txt-16">
                                        <i class="fa-regular fa-eye mx-1"></i>
                                       21                                </span>
                            </p> --}}
                        </div>
                        <h1 class="txt-38">{!! $fergana->title !!}</h1>
                        <img src="{{ asset('storage/'.$fergana->photo) }}" alt="" class="img-sec">
                        <p class="section-text txt-18"></p>
                        <div id="image-news">
    <br>
    <p>{!! $fergana->description !!}&nbsp;</p>
                        </div>
                    </div>
                    <div class="main-right">
                        <p class="top txt-24 al" data-sr-id="11" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;">So'nggi yangiliklar</p>
                        <div class="cards ">
                            @foreach ($recent_ferganes as $recent_fergana)
                                <a href="{{ route('press.fergana_news_details', ['fergana'=> $recent_fergana->id]) }}" class="s-card ab" data-sr-id="3" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.2s ease 0s, opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
                                    <img class="top" src="{{ asset('storage/'.$recent_fergana->photo) }}" alt="">
                                    <div class="right">

                                        <p class="main-text txt-16">
                                            {!! $recent_fergana->title !!}            </p>
                                        {{-- <p class="txt-14 main-text-bot">
                                                                                </p> --}}
                                        <p class="sana ">
                                            <span class="txt-14">Yangiliklar |</span>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00006 0.25C4.41427 0.25 4.75006 0.58579 4.75006 1V2.66763C7.57776 2.4158 10.4224 2.4158 13.2501 2.66763V1C13.2501 0.58579 13.5859 0.25 14.0001 0.25C14.4143 0.25 14.7501 0.58579 14.7501 1V2.81644C16.2431 3.02754 17.4227 4.20847 17.6223 5.71484L17.7089 6.36779C18.0729 9.1141 18.0415 11.8984 17.6155 14.6359C17.4045 15.9919 16.3029 17.0335 14.9371 17.1681L13.7441 17.2858C10.5891 17.5969 7.41106 17.5969 4.25599 17.2858L3.06298 17.1681C1.69724 17.0335 0.595583 15.9919 0.384573 14.6359C-0.0413869 11.8984 -0.0728268 9.1141 0.291213 6.36779L0.377763 5.71484C0.577443 4.20845 1.75699 3.02751 3.25006 2.81643V1C3.25006 0.58579 3.58585 0.25 4.00006 0.25ZM4.44522 4.2028C7.47446 3.90408 10.5257 3.90408 13.5549 4.2028L14.4603 4.2921C15.3271 4.37757 16.0209 5.04854 16.1353 5.91194L16.2219 6.56489C16.2521 6.793 16.2795 7.0214 16.304 7.25H1.69612C1.72061 7.0214 1.74796 6.79301 1.7782 6.5649L1.86475 5.91194C1.9792 5.04854 2.67302 4.37757 3.53977 4.2921L4.44522 4.2028ZM1.57689 8.75C1.47871 10.6381 1.57544 12.5332 1.86673 14.4052C1.97257 15.0854 2.52515 15.6078 3.21019 15.6754L4.4032 15.793C7.46036 16.0945 10.5398 16.0945 13.5969 15.793L14.7899 15.6754C15.4749 15.6078 16.0275 15.0854 16.1334 14.4052C16.4247 12.5332 16.5214 10.6381 16.4232 8.75H1.57689Z" fill="#BCBCBC"></path>
                                            </svg>
                                            <span class="txt-14">
                                                {{$recent_fergana->created_at->format('d.m.Y')}}                                         </span>
                                        </p>
                                    </div>
                                </a>
                                @endforeach
                                                </div>

                        <div class="main-right-sidebar ab" data-sr-id="8" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
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
