<x-layouts.admin>
    @slot('title')
        Edu qo'shish
    @endslot
<div class="content-page">
            <!-- Start content -->
            <div class="content">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12">
                        <div class="page-title-box">
                           <h4 class="page-title">Add Edu </h4>
                           <ol class="breadcrumb p-0 m-0">
                              {{-- <li>
                                 <a href="#">Post</a>
                              </li> --}}
                              <li>
                                <a href="{{ route('edus.index') }}">Manage Edu</a>
                             </li>
                              <li class="active">
                                 Add Edu
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

                              <form action="{{ route('edus.store')}}" method="POST" class="row">
                                @csrf
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1">Fullname</label>
                                    <input type="text" class="form-control" id="posttitle" name="fullname" placeholder="Enter Fullname" required>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Theme</b></h4>
                                          <textarea  name="theme" required></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Leader</b></h4>
                                          <textarea  name="leader" required></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <div class="card-box">
                                          <h4 class="m-b-30 m-t-0 header-title"><b>Address</b></h4>
                                          <textarea  name="address" required></textarea>
                                       </div>
                                    </div>
                                 </div>
                                 <button type="submit" name="submit" class="btn btn-custom waves-effect waves-light btn-md">Save</button>
                              </form>
               </div>
            </div>
</x-layouts.admin>
