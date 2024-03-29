<x-layouts.admin>
    @slot('title')
        About Institute qo'shish
    @endslot
<div class="content-page">
            <!-- Start content -->
            <div class="content">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12">
                        <div class="page-title-box">
                           <h4 class="page-title">Add About Institute </h4>
                           <ol class="breadcrumb p-0 m-0">
                              {{-- <li>
                                 <a href="#">Post</a>
                              </li> --}}
                              <li>
                                 <a href="{{ route('abouts.index')}}">Manage About Institute </a>
                              </li>
                              <li class="active">
                                 Add About Institute
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

                              <form action="{{ route('abouts.store')}}" method="POST" class="row">
                                @csrf
                                 <div class="form-group col-md-11">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input type="text" class="form-control"  id="posttitle" name="title" placeholder="Enter title" required>
                                 </div>
                                 {{-- <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Title</b></h4>
                                          <textarea  name="title" id="editor" required></textarea>
                                       </div>
                                    </div>
                                 </div> --}}
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Description</b></h4>
                                          <textarea  name="description"  required></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <button type="submit" class="btn btn-custom waves-effect waves-light btn-md">Save</button>
                              </form>
               </div>
            </div>
</x-layouts.admin>
