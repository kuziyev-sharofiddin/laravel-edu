<x-layouts.admin>
    @slot('title')
        Edularni tahrirlash
    @endslot
    <div class="content-page">
                <!-- Start content -->
                <div class="content">
                   <div class="container">
                      <div class="row">
                         <div class="col-xs-12">
                            <div class="page-title-box">
                               <h4 class="page-title">Edit Edu </h4>
                               <ol class="breadcrumb p-0 m-0">
                                <li>
                                    <a href="{{ route('edus.create') }}">Add Edu</a>
                                 </li>
                                  <li>
                                     <a href="{{ route('edus.index') }}">Manage Edu</a>
                                  </li>
                                  <li class="active">
                                     Edit Edu
                                  </li>
                               </ol>
                               <div class="clearfix"></div>
                            </div>
                         </div>
                      </div>
                      <!-- end row -->
                      {{-- <div class="row">
                         <div class="col-sm-6">
                            <!---Success Message--->

                            <div class="alert alert-success" role="alert">
                               <strong>Well done!</strong>
                            </div>


                            <div class="alert alert-danger" role="alert">
                               <strong>Oh snap!</strong>
                            </div>

                         </div>
                      </div> --}}

                                  <form action="{{ route('edus.update', ['edu'=>$edu->id])}}" method="POST" class="row">
                                    @method('PUT')
                                    @csrf
                                     <div class="form-group col-md-6">
                                        <label for="exampleInputEmail1">Fullname</label>
                                        <input type="text" class="form-control" value="{{ $edu->fullname }}" id="posttitle" name="fullname" placeholder="Enter title" required>
                                     </div>
                                     <div class="row">
                                        <div class="col-sm-12">
                                           <div class="card-box">
                                              <h4 class="m-b-30 m-t-0 header-title"><b>Theme</b></h4>
                                              <textarea  name="theme" id="editor" required>{!! $edu->theme !!}</textarea>
                                           </div>
                                        </div>
                                     </div>
                                     <div class="row">
                                        <div class="col-sm-12">
                                           <div class="card-box">
                                              <h4 class="m-b-30 m-t-0 header-title"><b>Leader</b></h4>
                                              <textarea  name="leader" required>{{$edu->leader}}</textarea>
                                           </div>
                                        </div>
                                     </div><div class="row">
                                        <div class="col-sm-12">
                                           <div class="card-box">
                                              <h4 class="m-b-30 m-t-0 header-title"><b>Address</b></h4>
                                              <textarea  name="address" id="editor" required>{{ $edu->address }}</textarea>
                                           </div>
                                        </div>
                                     </div>
                                     <button type="submit" name="submit" class="btn btn-custom waves-effect waves-light btn-md">Save</button>
                                  </form>
                   </div>
                </div>
</x-layouts.admin>
