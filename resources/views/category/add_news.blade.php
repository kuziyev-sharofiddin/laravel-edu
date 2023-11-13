<x-layouts.admin>
    @slot('title')
        Kategoriya qo'shish
    @endslot
<div class="content-page">
            <!-- Start content -->
            <div class="content">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12">
                        <div class="page-title-box">
                           <h4 class="page-title">Add Category </h4>
                           <ol class="breadcrumb p-0 m-0">
                              {{-- <li>
                                 <a href="#">Post</a>
                              </li> --}}
                              <li>
                                 <a href="{{ route('categories.store')}}">Manage Category </a>
                              </li>
                              <li class="active">
                                 Add Category
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
                              <form action="{{ route('categories.store')}}" method="POST" class="row">
                                @csrf
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input type="text" id="editor" class="form-control" id="posttitle" name="name" placeholder="Enter title" required>
                                 </div>
                                 <button type="submit" name="submit" class="btn btn-custom waves-effect waves-light btn-md">Save</button>
                                 {{-- <button type="button" class="btn btn-danger waves-effect waves-light">Discard</button> --}}
                              </form>
               </div>
            </div>
</x-layouts.admin>
