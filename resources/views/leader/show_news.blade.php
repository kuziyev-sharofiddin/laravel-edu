<x-layouts.admin>
    @slot('title')
    Leader ma'lumotlarini boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Leader</h4>
               <ol class="breadcrumb p-0 m-0">
                  <li>
                     <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="{{ route('leaders.create') }}">Add Leader</a>
                 </li>
                  <li class="active">
                     Manage Leader
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
                            <th>Category Name</th>
                           <th>Position</th>
                           <th>Fullname</th>
                           <th>Phone</th>
                           <th>Photo</th>
                           <th>Day</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($leaders as $leader)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>{{ $leader->id }}</td>
                           <td>{{ $leader->category->name }}</td>
                           <td>{{ $leader->position }}</td>
                           <td>{{ $leader->fullname }}</td>
                           <td>{{ $leader->phone }}</td>
                           <td><div>
                            <img style="width: 150px; height:150px;" class="top" src="{{ asset('storage/'.$leader->photo) }}" alt="">
                        </div></td>
                           <td>{{ $leader->day }}</td>
                           <td><div><a  class="btn btn-primary btn-sm" href="{{ route('leaders.edit', ['leader'=>$leader->id]) }}"><i class="fa fa-pencil"></i></a>
                            <form action="{{ route('leaders.destroy', ['leader'=>$leader->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
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
