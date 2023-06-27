<x-layouts.admin>
    @slot('title')
    Samarkand News ma'lumotlarini boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Samarkand News </h4>
               <ol class="breadcrumb p-0 m-0">
                  <li>
                     <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="{{ route('samarkands.create') }}">Add Samarkand News</a>
                 </li>
                  <li class="active">
                     Manage Samarkand News
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
                           <th>Photo</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($samarkands as $samarkand)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>{{ $samarkand->id }}</td>
                           <td>{{ $samarkand->title }}</td>
                           <td><div>
                            <img style="width: 150px; height:150px;" class="top" src="{{ asset('storage/'.$samarkand->photo) }}" alt="">
                        </div></td>
                           <td>{{ $samarkand->description }}</td>
                           <td><div><a  class="btn btn-primary btn-sm" href="{{ route('samarkands.edit', ['samarkand'=>$samarkand->id]) }}"><i class="fa fa-pencil"></i></a>
                            <form action="{{ route('samarkands.destroy', ['samarkand'=>$samarkand->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
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
