<x-layouts.admin>
    @slot('title')
        Edularni boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Edu </h4>
               <ol class="breadcrumb p-0 m-0">
                <li>
                    <a href="{{ route('edus.create') }}">Add Edu</a>
                 </li>
                  <li class="active">
                     Manage Edu
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
                  <table>
                     <thead>
                        <tr>
                            <th>Id</th>
                           <th>Fullname</th>
                           <th>Theme</th>
                           <th>Leader</th>
                           <th>Address</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($edus as $edu)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>
                            {{ $edu->id }}
                           </td>
                           <td>{{ $edu->fullname }}</td>
                           <td>{!! $edu->theme !!}</td>
                           <td>{{ $edu->leader }}</td>
                           <td>{{ $edu->address }}</td>
                           {{-- @canany(['update-post', 'delete-post' ], $post) --}}
                           <td><div><a  class="btn btn-primary btn-sm" href="{{ route('edus.edit', ['edu'=>$edu->id]) }}"><i class="fa fa-pencil"></i></a>
                            <form action="{{ route('edus.destroy', ['edu'=>$edu->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
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
