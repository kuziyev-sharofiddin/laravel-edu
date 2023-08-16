<x-layouts.admin>
    @slot('title')
    About Institute boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage About Institute </h4>
               <ol class="breadcrumb p-0 m-0">
                  <li>
                     <a href="#">Admin</a>
                  </li>
                  <li>
                     <a href="{{ route('abouts.create')}}">Add About Institute</a>
                  </li>
                  <li class="active">
                     Manage About Institute
                  </li>
               </ol>
               <div class="clearfix"></div>
            </div>
         </div>
      </div>
      <!-- end row -->
      <div class="row">
         <div class="col-sm-12">
            <div class="card-box">
               <div class="table-responsive">
                  <table class="table table-bordered" id="example">
                     <thead>
                        <tr>
                            <th>Id</th>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($abouts as $about)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>{{ $about->id }}</td>
                           <td>{{ $about->title }}</td>
                           <td>{{ $about->description }}</td>
                           {{-- @canany(['update-post', 'delete-post' ], $post) --}}
                           <td>
                            <div><a  class="btn btn-primary btn-sm" href="{{ route('abouts.edit', ['about'=>$about->id]) }}"><i class="fa fa-pencil"></i></a>
                            {{-- <a class="btn btn-danger btn-sm" href="{{ route('abouts.destroy', ['about'=>$about->id]) }}" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')"><i class="fa fa-trash-o"></i></a> --}}
                            <form action="{{ route('abouts.destroy', ['about'=>$about->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
                                @csrf
                                @method('DELETE')
                            <button class="btn btn-danger btn-sm" type="submit" style="text-align:left;">Delete</button>
                            </form>
                        </div>
                           </td>
                           {{-- @endcan --}}
                        </tr>
                        @endforeach
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- container -->
</div>
</x-layouts.admin>
