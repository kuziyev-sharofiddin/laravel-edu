<x-layouts.admin>
    @slot('title')
        Kategoriyalarni boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Category </h4>
               <ol class="breadcrumb p-0 m-0">
                  <li>
                     <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="{{ route('categories.create')}}">Add Category </a>
                 </li>
                  <li class="active">
                     Manage Category
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
                           <th>Name</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($categories as $category)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>{{ $category->id }}</td>
                           <td>{!! $category->name !!}</td>
                           {{-- @canany(['update-post', 'delete-post' ], $post) --}}
                           <td><div><a  class="btn btn-primary btn-sm" href="{{ route('categories.edit', ['category'=>$category->id]) }}"><i class="fa fa-pencil"></i></a>
                            <form action="{{ route('categories.destroy', ['category'=>$category->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
                                @csrf
                                @method('DELETE')
                            <button class="btn btn-danger btn-sm" type="submit">Delete</button>
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
