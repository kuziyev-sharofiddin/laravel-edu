<x-layouts.main>
    @slot('title')
        Institut yangiliklari
    @endslot
<div class="main-page-w">
    <div class="my-container">
        <h1 class="txt-48 line-left al" data-sr-id="4" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;">
            Fotolavhalar        </h1>
        <div class="elonlar-page ab" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.3s;">
            <div class="mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                <div class="swiper-wrapper" id="swiper-wrapper-c3db8377a5cbedc1" aria-live="polite">
                    <div class=" blog">
                    @foreach ($fotos as $foto)
                    <div class="s-card-video">
                            <div class="bg-i">
                                <a style="width:100%; height: 100%;" data-caption="Farg'ona filialida  institutning logotipi tushurilgan maxsus nishonlarni topshirish marosimi bo‘lib o‘tdi" data-fancybox="images" href="/uploads/images/images/55/preview-64509a1898f04.jpg" class="play">
                                    <img class="top" src="{{ asset('storage/'.$foto->photo) }}" alt="">
                                </a>
                            </div>
                    </div>
                    @endforeach
                </div>

                </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
    </div>
</div>
</x-layouts.main>
