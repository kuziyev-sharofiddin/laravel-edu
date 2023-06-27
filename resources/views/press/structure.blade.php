<x-layouts.main>
    @slot('title')
        Institut strukturasi haqida
    @endslot
   <div class="main-page-w">
    <div class="my-container">
        <div class="main-in">
            <h1 class="txt-48 line-left al">
                Institut strukturasi haqida
            </h1>
            <div class="main">
                @foreach ($structures as $structure)
                <div class="main-left ab">
                    <h4 style="text-align:center">{{$structure->title}}</h4>
                    <p class="section-text txt-18">{{$structure->description}}</p>
                </div>
                @endforeach
                <div class="main-right">
                    <div class="main-right-sidebar ab">
                        <p class="txt-24 ab">
                            Intreaktiv xizmatlar
                        </p>
                        <div class="main-content">
                            <a href="http://lib.sportedu.uz/" class="card-c">
                                <div class="img">
                                    <img src="img/png/Book.png" alt="" class="top">
                                </div>
                                <h1 class="txt-20">Elektron kutubxona</h1>
                            </a>
                            <a href="https://sertifikat.sportedu.uz/" class="card-c">
                                <div class="img">
                                    <img src="https://sportedu.uz/uploads/images/links/2/preview-642ffecc59fdd.png" alt="" class="top">
                                </div>
                                <h1 class="txt-20">Sertifikat</h1>
                            </a>
                            <a href="https://test.sportedu.uz/" class="card-c">
                                <div class="img">
                                    <img src="https://sportedu.uz/uploads/images/links/3/preview-63b5123722ec7.png" alt="" class="top">
                                </div>
                                <h1 class="txt-20">Online test</h1>
                            </a>
                            <a href="http://mt.sportedu.uz/" class="card-c">
                                <div class="img">
                                    <img src="img/png/Subtract.png" alt="" class="top">
                                </div>
                                <h1 class="txt-20">Masofaviy ta’lim</h1>
                            </a>
                            <a href="https://qabulsporteduuz.netlify.app/" class="card-c">
                                <div class="img">
                                    <img src="https://sportedu.uz/uploads/images/links/5/preview-63b513852665a.png" alt="" class="top">
                                </div>
                                <h1 class="txt-20">Online qabul</h1>
                            </a>
                        </div>

                    </div>
                    <div class="main-right-sidebar ab">
                        <div class="counter-in">
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="58"></h1>
                                <p class="txt-20">Jami murojatlar</p>
                            </div>
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="58"></h1>
                                <p class="txt-20">Ko‘rib chiqilgan</p>
                            </div>
                            <div class="card-c" id="counter-box">
                                <h1 class="txt-30 counter" data-number="58"></h1>
                                <p class="txt-20">Ko‘rib chiqilmoqda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</x-layouts.main>
