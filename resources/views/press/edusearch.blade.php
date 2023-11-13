<x-layouts.main>
    @slot('title')
    Ilmiy tadqiqot ishlari
    @endslot
<div class="main-page-w">
        <div class="my-container">
            <div class="main-in">
                <h1 class="txt-48 line-left al">
                    Ilmiy tadqiqot ishlari
                </h1>
                <div class="main">
                    <div class="main-left-ochiq ab">
                        <div id="icetab-content">
                            <div class="tabcontent tab-active">
                                <table class="ab">
                                    <thead class="txt-14">
                                    <tr>
                                        <th class="fr">№</th>
                                        <th>FullName</th>
                                        <th>Theme</th>
                                        <th>Leader</th>
                                        <th>Address</th>
                                    </tr>
                                    </thead>
                                    <tbody class="txt-16">
                                    @foreach ($edusearchs as $edusearch)
                                    <tr>
                                        <th class="fr">{{$edusearch->id}}</th>
                                        <td>{{$edusearch->fullname}}</td>
                                        <td>{!! $edusearch->theme !!}</td>
                                        <td>{{$edusearch->leader}}</td>
                                        <td>{{$edusearch->address }}</td>
                                    </tr>
                                    @endforeach

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</x-layouts.main>
