<x-layouts.admin>
    @slot('title')
    Institute News  ma'lumotlarini qo'shish
    @endslot
<div class="content-page">
            <!-- Start content -->
            <div class="content">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12">
                        <div class="page-title-box">
                           <h4 class="page-title">Add Institute News </h4>
                           <ol class="breadcrumb p-0 m-0">
                              {{-- <li>
                                 <a href="#">Post</a>
                              </li> --}}
                              <li>
                                <a href="{{ route('inst.show_news') }}">Manage Institute News</a>
                              </li>
                              <li class="active">
                                 Add Institute News
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

                              <form action="{{ route('inst.store')}}" method="POST" class="row" enctype="multipart/form-data">
                                @csrf
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input type="text" id="editor" class="form-control" id="posttitle" name="title" placeholder="Enter title" required>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Description</b></h4>
                                          <textarea  name="description" id="editors" required></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Feature Image</b></h4>
                                          <input type="file" class="form-control" id="postimage" name="photo"  required>
                                       </div>
                                    </div>
                                 </div>
                                 <button type="submit" name="submit" class="btn btn-custom waves-effect waves-light btn-md">Save</button>
                              </form>
               </div>
            </div>
</x-layouts.admin>
