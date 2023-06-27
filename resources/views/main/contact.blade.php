<x-layouts.main>
    @slot('title')
        Biz bilan aloqa
    @endslot
<div class="main-page-w">
    <div class="my-container">
        <div class="main-in">
            <div class="main contact-page">
                <iframe class="con-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.507248418174!2d71.81353947497949!3d40.37544905815237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85447f954cd3%3A0xb00f115150906905!2sJismoniy%20tarbiya%20va%20sport%20bo&#39;yicha%20mutaxassislarni%20qayta%20tayyorlash%20va%20malakasini%20oshirish%20instituti%20Farg&#39;ona%20filiali!5e0!3m2!1sru!2s!4v1686771971055!5m2!1sru!2s"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="footer-in-form ">
                    <h1 class="txt-20">
                        Xabar yozish
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
        </div>
    </div>
</div>
</x-layouts.main>
